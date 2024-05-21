---
sidebar_position: 2
tags: []
title: SaveSanta
---
# SaveSanta
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.102
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-17 07:31 EDT
Nmap scan report for quick.hmv (192.168.0.102)
Host is up (0.020s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 9.0p1 Ubuntu 1ubuntu8.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 76:06:46:f1:83:85:a4:22:8c:2b:12:d4:2d:58:27:49 (ECDSA)
|_  256 76:54:26:9d:e8:4a:72:5e:6e:7f:68:58:20:6e:bb:d4 (ED25519)
80/tcp open  http    Apache httpd
|_http-title: The Naughty Elves
| http-robots.txt: 3 disallowed entries 
|_/ /administration/ /santa
|_http-server-header: Apache
MAC Address: 08:00:27:99:CD:C7 (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.38 seconds
```
