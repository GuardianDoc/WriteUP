"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9765],{66972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),a=t(28453);const s={sidebar_position:151,tags:["Easy","Linux","\u547d\u4ee4\u6ce8\u5165","SUID"],title:"ContainMe",description:"ContainMe",sidebar_label:"ContainMe",slug:"/tryhackme/151"},r="ContainMe",o={id:"box/TryHackMe/151",title:"ContainMe",description:"ContainMe",source:"@site/docs/box/TryHackMe/151.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/151",permalink:"/docs/tryhackme/151",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u547d\u4ee4\u6ce8\u5165",permalink:"/docs/tags/\u547d\u4ee4\u6ce8\u5165"},{label:"SUID",permalink:"/docs/tags/suid"}],version:"current",sidebarPosition:151,frontMatter:{sidebar_position:151,tags:["Easy","Linux","\u547d\u4ee4\u6ce8\u5165","SUID"],title:"ContainMe",description:"ContainMe",sidebar_label:"ContainMe",slug:"/tryhackme/151"},sidebar:"boxSidebar",previous:{title:"Hamlet",permalink:"/docs/tryhackme/150"},next:{title:"The Blob Blog",permalink:"/docs/tryhackme/152"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data (172.16.20.2)",id:"www-data-17216202",level:3},{value:"www-data (172.16.20.2) \u2014&gt; root  (172.16.20.2)",id:"www-data-17216202--root--17216202",level:3},{value:"root  (172.16.20.2) \u2014&gt; mike (172.16.20.6)",id:"root--17216202--mike-17216206",level:3},{value:"mike (172.16.20.6) \u2014&gt; root(172.16.20.6)",id:"mike-17216206--root17216206",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"containme",children:"ContainMe"}),"\n",(0,i.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-142-31:~/containme1# nmap -sTCV -p- --min-rate 1000 10.10.191.24\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-10-06 09:10 BST\nNmap scan report for ip-10-10-191-24.eu-west-1.compute.internal (10.10.191.24)\nHost is up (0.00055s latency).\nNot shown: 65531 closed ports\nPORT     STATE SERVICE       VERSION\n22/tcp   open  ssh           OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 a6:3e:80:d9:b0:98:fd:7e:09:6d:34:12:f9:15:8a:18 (RSA)\n|   256 ec:5f:8a:1d:59:b3:59:2f:49:ef:fb:f4:4a:d0:1d:7a (ECDSA)\n|_  256 b1:4a:22:dc:7f:60:e4:fc:08:0c:55:4f:e4:15:e0:fa (EdDSA)\n80/tcp   open  http          Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\n2222/tcp open  EtherNetIP-1?\n8022/tcp open  ssh           OpenSSH 7.7p1 Ubuntu 4ppa1+obfuscated (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 dc:ae:ea:27:3f:ab:10:ae:8c:2e:b3:0c:5b:d5:42:bc (RSA)\n|   256 67:29:75:04:74:1b:83:d3:c8:de:6d:65:fe:e6:07:35 (ECDSA)\n|_  256 7f:7e:89:c4:e0:a0:da:92:6e:a6:70:45:fc:43:23:84 (EdDSA)\nMAC Address: 02:70:87:2E:2F:1D (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n"})}),"\n",(0,i.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-142-31:~/containme1# gobuster dir -u http://10.10.191.24/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.191.24/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/10/06 09:14:07 Starting gobuster\n===============================================================\n/index.php (Status: 200)\n/index.html (Status: 200)\n/info.php (Status: 200)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8bbf\u95ee\u6211\u4eec\u7684\u9875\u9762:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"info.php : phpinfo \u754c\u9762, \u4ec0\u4e48\u4e5f\u6ca1\u6709"}),"\n",(0,i.jsx)(n.li,{children:"index.html \u770b\u8d77\u6765\u662f\u9ed8\u8ba4\u9875\u9762"}),"\n",(0,i.jsx)(n.li,{children:"index.php \u8f93\u51fa\u6709\u4e9b\u5947\u602a\u4ece\u8fd9\u91cc\u6765\u770b\u662f\u7f51\u7ad9\u7684\u76ee\u5f55\u6587\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u7f51\u9875\u4fe1\u606f\u4f60\u53ef\u4ee5\u53d1\u73b0\u8fd9\u662f\u7f51\u7ad9\u7684\u76ee\u5f55\u6587\u4ef6, \u5e76\u4e14\u7f51\u9875\u6e90\u4ee3\u7801\u4e2d\u63d0\u793a path\u53c2\u6570"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-184216.png",alt:"image-20240709184215291"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ecf\u8fc7\u6d4b\u8bd5\u6211\u53d1\u73b0\u8fd9\u662f\u547d\u4ee4\u6ce8\u5165\u6f0f\u6d1e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-184226.png",alt:"image-20240709184224982"})}),"\n",(0,i.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,i.jsx)(n.h3,{id:"www-data-17216202",children:"www-data (172.16.20.2)"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8e\u4e0a\u9762\u7684\u547d\u4ee4\u6ce8\u5165\u6765\u83b7\u53d6\u4e00\u4e2a Shell"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-184242.png",alt:"image-20240709184240478"})}),"\n",(0,i.jsx)(n.h3,{id:"www-data-17216202--root--17216202",children:"www-data (172.16.20.2) \u2014> root  (172.16.20.2)"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u679a\u4e3e\u8fc7\u7a0b\u4e2d\u4f60\u4f1a\u53d1\u73b0\u4e00\u4e2a\u7279\u6b8a\u7684 SUID \u7a0b\u5e8f, \u6211\u5728\u6b64\u5c1d\u8bd5\u9006\u5411\u4f46\u662f\u6ca1\u6709\u7ed3\u679c, \u770b\u4e86\u522b\u4eba\u7684\u4ecb\u7ecd\u90fd\u662f\u8bb2\u7684\u76f4\u63a5\u8f93\u5165 mike \u5c31\u53ef\u4ee5\u83b7\u53d6\u5230 root \u6743\u9650,\u7b49\u56de\u5934\u81ea\u5df1\u4fee\u8865\u4e00\u4e0b\u5427"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-184252.png",alt:"image-20240709184251110"})}),"\n",(0,i.jsx)(n.h3,{id:"root--17216202--mike-17216206",children:"root  (172.16.20.2) \u2014> mike (172.16.20.6)"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u65f6\u4f60\u4f1a\u53d1\u73b0 root \u76ee\u5f55\u4e0b\u5e76\u6ca1\u6709\u6211\u4eec\u7684 flag \u8f93\u5165 ifconfig \u4f60\u4f1a\u53d1\u73b0\u6709\u4e00\u4e2a\u5b50\u7f51, \u6240\u4ee5\u8fdb\u884c\u626b\u63cf\u540e\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a\u65b0\u7684\u4e3b\u673a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-184302.png",alt:"image-20240709184300906"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7528\u6237 mike \u5bb6\u76ee\u5f55\u53d1\u73b0\u4e00\u4e2a ssh \u79c1\u94a5, \u6240\u4ee5\u5c1d\u8bd5\u7528\u6b21\u8fdb\u884c\u8fde\u63a5\u53d1\u73b0\u53ef\u4ee5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-184309.png",alt:"image-20240709184307747"})}),"\n",(0,i.jsx)(n.h3,{id:"mike-17216206--root17216206",children:"mike (172.16.20.6) \u2014> root(172.16.20.6)"}),"\n",(0,i.jsxs)(n.p,{children:["\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d1\u73b0\u8fd8\u5360\u7528\u4e86 3306 \u7aef\u53e3, \u6240\u4ee5\u8fdb\u884c\u4e00\u6ce2 mysql \u5c1d\u8bd5\u6700\u7ec8\u53d1\u73b0\u8fde\u63a5\u5bc6\u7801\u4e3a mike",":password",", \u5728\u6570\u636e\u5e93\u4e2d\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u7528\u6237\u5bc6\u7801"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql> SELECT * FROM users;\n+-------+---------------------+\n| login | password            |\n+-------+---------------------+\n| root  | bjsig4868fgjjeog    |\n| mike  | WhatAreYouDoingHere |\n+-------+---------------------+\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);