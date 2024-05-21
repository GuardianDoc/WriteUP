---
sidebar_position: 2
tags: [流量分析]
title: NewStarCTF 公开赛赛道 WebShell
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# [NewStarCTF 公开赛赛道]WebShell!
打开文件之后, 我使用统计功能进行了一些简单的了解
<Tabs>
  <TabItem value="part1" label="请求状态图" default>
    ![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411170818.png)
  </TabItem>
  <TabItem value="part2" label="HTTP 请求">
    ![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411170842.png)
  </TabItem>
</Tabs>

这些信息告诉我, 攻击者使用了目录枚举的手段, 同时真正受到威胁的请求地址是 `/`, 基于此我编写了一个过滤规则

```txt
http.request.uri == "/"
```
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411171035.png)
从这些信息中就可以确定其对应的工具是蚁剑, 之后查看后门的密码, 从前几个连接中就可以直接看出对应的信息
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411172848.png)
随后解密相关流量获取其密码信息, 蚁剑的流量看最长的那串base64的解码就行，并且一般是该参数两位之后的才是正确的命令的Base64编码
![](https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411175726.png)
```bash
┌──(root㉿JTZ)-[~]
└─# php -r "var_dump(base64_decode('Y2QgIi92YXIvd3d3L2h0bWwiO2NhdCAvc2VjcmV0O2VjaG8gZDBmNGE2OGE7cHdkO2VjaG8gMjVlNzA='));"
string(59) "cd "/var/www/html";cat /secret;echo d0f4a68a;pwd;echo 25e70"
```
随后不断解密我们就可以发现其中有一个 `whoami` 方法, 以及查看秘密文件的命令, 最后可以构造出对应的 flag
