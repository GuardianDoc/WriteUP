---
sidebar_position: 5
tags: [Easy, Linux, Reverse, 命令执行, LFI, 隧道代理, 条件竞争, 待完成]
title: Universe
description: Universe
---
# Universe
## 端口执行
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.105
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-14 09:33 EDT
Nmap scan report for liceo.com (192.168.0.105)
Host is up (0.0012s latency).
Not shown: 65532 closed tcp ports (conn-refused)
PORT     STATE SERVICE VERSION
21/tcp   open  ftp     vsftpd 3.0.3
22/tcp   open  ssh     OpenSSH 9.2p1 Debian 2+deb12u2 (protocol 2.0)
| ssh-hostkey: 
|   256 95:d6:5d:68:a3:38:f7:74:87:b3:99:20:f8:be:45:4d (ECDSA)
|_  256 11:77:31:ae:36:4e:22:45:9c:89:8f:5e:e6:01:83:0d (ED25519)
1212/tcp open  lupa?
| fingerprint-strings: 
|   GetRequest: 
|     HTTP/1.1 302 FOUND
|     Server: Werkzeug/2.2.2 Python/3.11.2
|     Date: Sun, 14 Apr 2024 13:33:22 GMT
|     Content-Type: text/html; charset=utf-8
|     Content-Length: 207
|     Location: /?user=903
|     Connection: close
|     <!doctype html>
|     <html lang=en>
|     <title>Redirecting...</title>
|     <h1>Redirecting...</h1>
|     <p>You should be redirected automatically to the target URL: <a href="/?user=903">/?user=903</a>. If not, click the link.
|   HTTPOptions: 
|     HTTP/1.1 200 OK
|     Server: Werkzeug/2.2.2 Python/3.11.2
|     Date: Sun, 14 Apr 2024 13:33:22 GMT
|     Content-Type: text/html; charset=utf-8
|     Allow: HEAD, OPTIONS, GET
|     Content-Length: 0
|     Connection: close
|   Help: 
|     <!DOCTYPE HTML>
|     <html lang="en">
|     <head>
|     <meta charset="utf-8">
|     <title>Error response</title>
|     </head>
|     <body>
|     <h1>Error response</h1>
|     <p>Error code: 400</p>
|     <p>Message: Bad request syntax ('HELP').</p>
|     <p>Error code explanation: 400 - Bad request syntax or unsupported method.</p>
|     </body>
|     </html>
|   RTSPRequest: 
|     <!DOCTYPE HTML>
|     <html lang="en">
|     <head>
|     <meta charset="utf-8">
|     <title>Error response</title>
|     </head>
|     <body>
|     <h1>Error response</h1>
|     <p>Error code: 400</p>
|     <p>Message: Bad request version ('RTSP/1.0').</p>
|     <p>Error code explanation: 400 - Bad request syntax or unsupported method.</p>
|     </body>
|_    </html>
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port1212-TCP:V=7.94SVN%I=7%D=4/14%Time=661BDB25%P=x86_64-pc-linux-gnu%r
SF:(GetRequest,196,"HTTP/1\.1\x20302\x20FOUND\r\nServer:\x20Werkzeug/2\.2\
SF:.2\x20Python/3\.11\.2\r\nDate:\x20Sun,\x2014\x20Apr\x202024\x2013:33:22
SF:\x20GMT\r\nContent-Type:\x20text/html;\x20charset=utf-8\r\nContent-Leng
SF:th:\x20207\r\nLocation:\x20/\?user=903\r\nConnection:\x20close\r\n\r\n<
SF:!doctype\x20html>\n<html\x20lang=en>\n<title>Redirecting\.\.\.</title>\
SF:n<h1>Redirecting\.\.\.</h1>\n<p>You\x20should\x20be\x20redirected\x20au
SF:tomatically\x20to\x20the\x20target\x20URL:\x20<a\x20href=\"/\?user=903\
SF:">/\?user=903</a>\.\x20If\x20not,\x20click\x20the\x20link\.\n")%r(HTTPO
SF:ptions,C7,"HTTP/1\.1\x20200\x20OK\r\nServer:\x20Werkzeug/2\.2\.2\x20Pyt
SF:hon/3\.11\.2\r\nDate:\x20Sun,\x2014\x20Apr\x202024\x2013:33:22\x20GMT\r
SF:\nContent-Type:\x20text/html;\x20charset=utf-8\r\nAllow:\x20HEAD,\x20OP
SF:TIONS,\x20GET\r\nContent-Length:\x200\r\nConnection:\x20close\r\n\r\n")
SF:%r(RTSPRequest,16C,"<!DOCTYPE\x20HTML>\n<html\x20lang=\"en\">\n\x20\x20
SF:\x20\x20<head>\n\x20\x20\x20\x20\x20\x20\x20\x20<meta\x20charset=\"utf-
SF:8\">\n\x20\x20\x20\x20\x20\x20\x20\x20<title>Error\x20response</title>\
SF:n\x20\x20\x20\x20</head>\n\x20\x20\x20\x20<body>\n\x20\x20\x20\x20\x20\
SF:x20\x20\x20<h1>Error\x20response</h1>\n\x20\x20\x20\x20\x20\x20\x20\x20
SF:<p>Error\x20code:\x20400</p>\n\x20\x20\x20\x20\x20\x20\x20\x20<p>Messag
SF:e:\x20Bad\x20request\x20version\x20\('RTSP/1\.0'\)\.</p>\n\x20\x20\x20\
SF:x20\x20\x20\x20\x20<p>Error\x20code\x20explanation:\x20400\x20-\x20Bad\
SF:x20request\x20syntax\x20or\x20unsupported\x20method\.</p>\n\x20\x20\x20
SF:\x20</body>\n</html>\n")%r(Help,167,"<!DOCTYPE\x20HTML>\n<html\x20lang=
SF:\"en\">\n\x20\x20\x20\x20<head>\n\x20\x20\x20\x20\x20\x20\x20\x20<meta\
SF:x20charset=\"utf-8\">\n\x20\x20\x20\x20\x20\x20\x20\x20<title>Error\x20
SF:response</title>\n\x20\x20\x20\x20</head>\n\x20\x20\x20\x20<body>\n\x20
SF:\x20\x20\x20\x20\x20\x20\x20<h1>Error\x20response</h1>\n\x20\x20\x20\x2
SF:0\x20\x20\x20\x20<p>Error\x20code:\x20400</p>\n\x20\x20\x20\x20\x20\x20
SF:\x20\x20<p>Message:\x20Bad\x20request\x20syntax\x20\('HELP'\)\.</p>\n\x
SF:20\x20\x20\x20\x20\x20\x20\x20<p>Error\x20code\x20explanation:\x20400\x
SF:20-\x20Bad\x20request\x20syntax\x20or\x20unsupported\x20method\.</p>\n\
SF:x20\x20\x20\x20</body>\n</html>\n");
MAC Address: 08:00:27:2E:4B:64 (Oracle VirtualBox virtual NIC)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 98.63 seconds
```
## HTTP - 1212
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414213946.png)
访问之后发现有一个参数, 我直接就是一手爆破, 最终发现一个 userid
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414214028.png)
随后访问给了我一些提示信息, 告诉我 cookie 中缺少 `exec`
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414214045.png)
我想的是代码执行, 但是输入数据后发现改为提示我 cookie 的值无效, 上爆破遍历一下字符看看有什么变化
> PS : 其实是我设置 `cookie: exec='` 发现返回值有些不同

![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414214711.png)
好吧没什么用, 对应的 Cookie 的值需要使用 base64 编码, 我还以为直接传就可以了
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414215059.png)
随后编写一个执行反向 Shell 命令即可
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414220211.png)
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240414220224.png)
## 后渗透
### miwa --> void
```bash
(remote) miwa@universe:/home/miwa$ netstat -tuln
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN   
tcp        0      0 0.0.0.0:1212            0.0.0.0:*               LISTEN   
tcp        0      0 127.0.0.1:8080          0.0.0.0:*               LISTEN   
tcp6       0      0 :::21                   :::*                    LISTEN   
tcp6       0      0 :::22                   :::*                    LISTEN   
udp        0      0 0.0.0.0:68              0.0.0.0:*                        
(remote) miwa@universe:/home/miwa$ ps -ef | grep 8080
void         488     477  0 08:52 ?        00:00:00 php -S 127.0.0.1:8080 index.php
miwa         654     618  0 08:57 pts/0    00:00:00 grep 8080
```
查看进程和端口开放可以发现有一个只有本地可以访问的 Web 服务, 使用端口转发将其转发出来, 在这里我使用 SSH 本地端口转发
```bash
(remote) miwa@universe:/home/miwa$ ssh -R 1234:localhost:8080 root@192.168.0.104
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240415230559.png)
随后访问其功能在对应的功能 URL 中可以明显的发现其中的不同之处 (LFI)
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240415230645.png)
直接上传一个 WebShell. 之后利用文件包含来获取 void 的 Shell
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240415231521.png)
### void --> root
```bash
(remote) void@universe:/scripts$ ls -al
total 28
drwxr-xr-x  2 root root  4096 Jan 30 11:03 .
drwxr-xr-x 19 root root  4096 Jan 30 11:00 ..
-rwx---r--  1 root root   222 Jan 21 11:45 print.sh
-rwx---r--  1 root root 14512 Jan 30 11:02 Quasar
```
在主目录下发现两个特别的文件, 首先查看 Shell 脚本文件, 从其内容可以看出可以利用时间差来完成操作
```bash
(remote) void@universe:/scripts$ cat print.sh 
#!/usr/bin/env bash
tmp_file=$(/usr/bin/mktemp -u /tmp/read-XXXXX)
( 
    umask 110
    /usr/bin/touch "$tmp_file";
)
/usr/bin/echo "test" > "$tmp_file"
data=$(/usr/bin/cat "$tmp_file")
eval "$data"
/usr/bin/rm "$tmp_file"
```
之后识别 Quasar 的字符串, 在其中发现内容首先需要一个密码当密码正确的时候就会执行脚本
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# strings Quasar 
Uso: ./Quasar <password>
/scripts/print.sh
Error!
;*3$"
```
二进制有点麻烦分析不了就先到这吧, 对应的二进制文件可以前往 [共享资料 /Resources/Quasar.zip](https://pan.baidu.com/s/1PNvMPQsc-F70Lyk7ZNsRrA?pwd=f228) 下载