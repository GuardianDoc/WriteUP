"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[7826],{34425:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453);const a={sidebar_position:109,tags:["Easy","Linux","SUDO"],title:"CMSpit",description:"CMSpit",sidebar_label:"CMSpit",slug:"/tryhackme/109"},i="CMSpit",o={id:"box/TryHackMe/109",title:"CMSpit",description:"CMSpit",source:"@site/docs/box/TryHackMe/109.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/109",permalink:"/docs/tryhackme/109",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:109,frontMatter:{sidebar_position:109,tags:["Easy","Linux","SUDO"],title:"CMSpit",description:"CMSpit",sidebar_label:"CMSpit",slug:"/tryhackme/109"},sidebar:"boxSidebar",previous:{title:"Ollie",permalink:"/docs/tryhackme/108"},next:{title:"Zeno",permalink:"/docs/tryhackme/110"}},u={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; stux",id:"www-data--stux",level:3},{value:"stux \u2014&gt; root",id:"stux--root",level:3}];function d(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"cmspit",children:"CMSpit"}),"\n",(0,s.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-2-75:~/cmspit# nmap -sCVT -p 22,80 --min-rate 1000 10.10.206.14\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-22 11:22 BST\nNmap scan report for ip-10-10-206-14.eu-west-1.compute.internal (10.10.206.14)\nHost is up (0.00015s latency).\n\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 7f:25:f9:40:23:25:cd:29:8b:28:a9:d9:82:f5:49:e4 (RSA)\n|   256 0a:f4:29:ed:55:43:19:e7:73:a7:09:79:30:a8:49:1b (ECDSA)\n|_  256 2f:43:ad:a3:d1:5b:64:86:33:07:5d:94:f9:dc:a4:01 (EdDSA)\n80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n| http-title: Authenticate Please!\n|_Requested resource was /auth/login?to=/\nMAC Address: 02:6C:40:94:A4:09 (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 8.66 seconds\n"})}),"\n",(0,s.jsx)(e.h2,{id:"80",children:"80"}),"\n",(0,s.jsxs)(e.p,{children:["\u8bbf\u95ee\u7ad9\u70b9\u5176\u4e3b\u9875\u9762\u76f4\u63a5\u5c31\u663e\u793a\u4e86\u5176\u662f\u4e00\u4e2a cockpit CMS, \u6240\u4ee5\u6211\u76f4\u63a5\u67e5\u627e\u76f8\u5173\u7684\u6f0f\u6d1e (\u867d\u7136\u4e0d\u77e5\u9053\u7248\u672c\u4f46\u662f\u627e\u51fa\u6765\u6328\u4e2a\u8bd5)\u6211\u53d1\u73b0\u4e86\u4e0b\u9762\u8fd9\u4e2a\u811a\u672c\u53ef\u4ee5\u5229\u7528",(0,s.jsx)(e.a,{href:"https://github.com/0z09e/CVE-2020-35846/tree/main",children:"GitHub - 0z09e/CVE-2020-35846: Cockpit CMS 0.11.1 NoSQL Injection to Remote Code Execution"})]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u8bb0\u5f97\u4fee\u6539\u6e90\u4ee3\u7801, \u91cc\u9762\u7684\u4ee3\u7801\u4f1a\u8d70\u4ee3\u7406"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132729.png",alt:"Untitled"})}),"\n",(0,s.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(e.h3,{id:"www-data",children:"www-data"}),"\n",(0,s.jsx)(e.p,{children:"\u5229\u7528\u4e0a\u9762\u4e0a\u4f20\u7684\u6587\u4ef6\u83b7\u53d6 Shell"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132729-1.png",alt:"Untitled"})}),"\n",(0,s.jsx)(e.h3,{id:"www-data--stux",children:"www-data \u2014> stux"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u6709\u6743\u9650\u8bbf\u95ee stux \u7528\u6237\u7684\u5bb6\u76ee\u5f55\u5728\u5176\u4e2d\u6211\u53d1\u73b0\u4e00\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6\u540d\u79f0, \u6211\u67e5\u770b\u8fd9\u4e2a\u6587\u4ef6\u4ece\u4e2d\u83b7\u53d6\u4e86 stux \u7528\u6237\u7684\u5bc6\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'(remote) www-data@ubuntu:/home/stux$ ls -al\ntotal 44\ndrwxr-xr-x 4 stux stux 4096 May 22  2021 .\ndrwxr-xr-x 3 root root 4096 May 21  2021 ..\n-rw-r--r-- 1 root root   74 May 22  2021 .bash_history\n-rw-r--r-- 1 stux stux  220 May 21  2021 .bash_logout\n-rw-r--r-- 1 stux stux 3771 May 21  2021 .bashrc\ndrwx------ 2 stux stux 4096 May 21  2021 .cache\n-rw-r--r-- 1 root root  429 May 21  2021 **.dbshell**\n-rwxrwxrwx 1 root root    0 May 21  2021 .mongorc.js\ndrwxrwxr-x 2 stux stux 4096 May 21  2021 .nano\n-rw-r--r-- 1 stux stux  655 May 21  2021 .profile\n-rw-r--r-- 1 stux stux    0 May 21  2021 .sudo_as_admin_successful\n-rw-r--r-- 1 root root  312 May 21  2021 .wget-hsts\n-rw------- 1 stux stux   46 May 22  2021 user.txt\n(remote) www-data@ubuntu:/home/stux$ cat .dbshell\nshow\nshow dbs\nuse admin\nuse sudousersbak\nshow dbs\ndb.user.insert({name: "stux", name: "p4ssw0rdhack3d!123"})\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132729-2.png",alt:"Untitled"})}),"\n",(0,s.jsx)(e.h3,{id:"stux--root",children:"stux \u2014> root"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u53d1\u73b0\u7528\u6237 stux \u5177\u6709 SUDO \u7279\u6743, \u6211\u4eec\u53ef\u4ee5\u5229\u7528\u6b64\u6765\u8fdb\u884c\u6587\u4ef6\u7684\u79fb\u52a8 ",(0,s.jsx)(e.a,{href:"https://gtfobins.github.io/gtfobins/exiftool/#file-read",children:"exiftool#file-read"})," ",(0,s.jsx)(e.strong,{children:"(\u6ce8\u610f\u662f\u79fb\u52a8\u4e0d\u662f\u590d\u5236)"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132729-3.png",alt:"Untitled"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u627e CVE \u6f0f\u6d1e\u6765\u83b7\u53d6 Shell"})]})}function l(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);