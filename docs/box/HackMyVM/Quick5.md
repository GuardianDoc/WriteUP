---
sidebar_position: 12
tags: [Easy, Linux, 钓鱼, 密码提取-浏览器]
title: Quick5
description: Quick5
---
# Quick5
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.102  
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-13 05:28 EDT
Nmap scan report for 192.168.0.102 (192.168.0.102)
Host is up (0.0013s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 84:e8:9c:b0:23:44:41:29:ae:7d:0b:0f:fe:88:08:c0 (ECDSA)
|_  256 44:82:b7:78:47:02:7e:b4:40:c7:6b:fd:70:68:c1:42 (ED25519)
80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))
|_http-title: Quick Automative - Home
|_http-server-header: Apache/2.4.52 (Ubuntu)
MAC Address: 08:00:27:02:60:6D (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 15.52 seconds
```
## HTTP - 80
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240413182710.png)
访问后在下面发现一个域 `quick.hmv` 随后将其加载 hosts 文件中, 之后我展开了目录扫描, 但是什么也没有扫到, 随后开始进行子域扫描可以发现两个子域, 当然在主页面也是直接列出了两个子域的
```bash
┌──(root㉿kali)-[~]
└─# ffuf -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-spanish.txt -u http://FUZZ.quick.hmv/ 

        /'___\  /'___\           /'___\     
       /\ \__/ /\ \__/  __  __  /\ \__/     
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\    
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/    
         \ \_\   \ \_\  \ \____/  \ \_\     
          \/_/    \/_/   \/___/    \/_/     

       v2.1.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://FUZZ.quick.hmv/
 :: Wordlist         : FUZZ: /usr/share/wordlists/seclists/Discovery/DNS/subdomains-spanish.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
________________________________________________

careers                 [Status: 200, Size: 13819, Words: 3681, Lines: 245, Duration: 1ms]
customer                [Status: 200, Size: 2258, Words: 292, Lines: 41, Duration: 0ms]
:: Progress: [5370/5370] :: Job [1/1] :: 12 req/sec :: Duration: [0:04:42] :: Errors: 5368 ::
```
:::tip
- customer : 显示一个警告信息, 目录扫描也扫描不到任何内容
- careers : 应该是一个招聘页面, 里面有三个岗位在招聘, 同时允许上传简历文件, 但是限制只能是 pdf 和 odf
::: 
随后就没有了什么新的思路, 看了 WP 提示后发现是文件钓鱼, 随后开始制作对应的文件 🧅​((20240413223505-pybdmhb 'malicious macro'))
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240413225011.png)
等待一段时间就可以看到一个会话被接收到了
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240413225159.png)
## 后渗透
### andrew --> root
在用户 andrew 家目录搜索中发现一个 firefox 文件, 感觉是提取浏览器中的密码
```bash
(remote) andrew@quick5:/home/andrew$ find / -type f -name logins.json 2> /dev/null
/home/andrew/snap/firefox/common/.mozilla/firefox/ii990jpt.default/logins.json
(remote) andrew@quick5:/home/andrew/snap/firefox/common/.mozilla$ zip -r firefox.zip firefox/
```
随后下载到本地解压并使用工具进行提取
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM/firefox_decrypt]
└─# python firefox_decrypt.py ../firefox

Website:   http://employee.quick.hmv
Username: 'andrew.speed@quick.hmv'
Password: 'SuperSecretPassword'
```
随后尝试这个密码作为 andrew 发现并不能使用, 但是可以用在 root 用户的密码