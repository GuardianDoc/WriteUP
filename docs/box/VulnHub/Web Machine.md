---
sidebar_position: 4
tags: [Easy, CSRF]
title: "Web Machine: (N7)"
sidebar_label: "Web Machine: (N7)"
description: 做的很垃圾, 云里雾里的
---
# Web Machine: (N7)
## 端口扫描
```bash
jtz@attacker:~/CTF/VulhHub$ nmap -sTCV -p- --min-rate 1000 192.168.1.8
Starting Nmap 7.93 ( https://nmap.org ) at 2023-12-17 15:10 CST
Nmap scan report for morpheus (192.168.1.8)
Host is up (0.023s latency).
Not shown: 65534 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.46 ((Debian))
|_http-title: Site doesn't have a title (text/html).
|_http-server-header: Apache/2.4.46 (Debian)

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.91 seconds
```
## 80
```bash
jtz@attacker:~/CTF/VulhHub$ gobuster dir -u http://192.168.1.8/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.1.8/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Extensions:              php,txt,html
[+] Timeout:                 10s
===============================================================
2023/12/17 15:13:01 Starting gobuster in directory enumeration mode
===============================================================
/.html                (Status: 403) [Size: 276]
/.php                 (Status: 403) [Size: 276]
/index.html           (Status: 200) [Size: 1620]
/profile.php          (Status: 200) [Size: 1473]
/javascript           (Status: 301) [Size: 315] [--> http://192.168.1.8/javascript/]
/exploit.html         (Status: 200) [Size: 279]
/.html                (Status: 403) [Size: 276]
/.php                 (Status: 403) [Size: 276]
/server-status        (Status: 403) [Size: 276]
Progress: 881785 / 882244 (99.95%)
===============================================================
2023/12/17 15:20:20 Finished
===============================================================
```
从扫描结果中, 可以发现并没有发现什么内容, 之后我开始浏览发现的内容, 发现对于 `exploit.html` 页面, 其提供了一个上传文件的位置
![20240524134150](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524134150.png)
:::tip
1. 从 ① 我们可以看到这是一个上传的功能
2. 从 ② ③ 我们可以看到这是表明存在 CSRF 漏洞
:::
之后我照旧上传文件并修改请求的 URL 地址等内容, 但是只是获取了一半的 Flag 并且文件没有上传
![20240524134227](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524134227.png)
之后就没有思路了, 查看 WP 后发现有人扫描到了一个 `enter_network` 的目录, 对此进行扫描, 仅仅发现了两个页面

- `index.php` : 登陆窗口
- `admin.php` : 需要 admin 用户才可以访问

```bash
jtz@attacker:~/CTF/VulhHub$ gobuster dir -u http://192.168.1.8/enter_network/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.1.8/enter_network/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Extensions:              txt,html,php
[+] Timeout:                 10s
===============================================================
2023/12/17 15:32:42 Starting gobuster in directory enumeration mode
===============================================================
/index.php            (Status: 200) [Size: 324]
/admin.php            (Status: 200) [Size: 126]
```
之后我尝试登陆, 随便输入一些内容后查看服务端返回的内容
![20240524134256](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524134256.png)
注意这两处标记的内容, 二者都可以进行解密, 第一个解密成功后, 可以看到是一些类似于 PHP 反序列化的内容, 但是没有用, 第二个解密之后是一个 MD5 加密最终解密的值为 admin , 然后魔幻的来了, 我们只需要请求 admin.php 并修改 Cookie 内容就可以获取到另一半 Flag
![20240524134309](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524134309.png)