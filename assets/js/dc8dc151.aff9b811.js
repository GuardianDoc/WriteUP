"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8922],{26549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453);const a={sidebar_position:40,tags:["Easy","Linux","SQL\u6ce8\u5165","\u6587\u4ef6\u4e0a\u4f20","\u4fe1\u606f\u6cc4\u9732","SUDO"],title:"Gallery",description:"Gallery",sidebar_label:"Gallery",slug:"/tryhackme/40"},i="Gallery",l={id:"box/TryHackMe/40",title:"Gallery",description:"Gallery",source:"@site/docs/box/TryHackMe/40.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/40",permalink:"/docs/tryhackme/40",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SQL\u6ce8\u5165",permalink:"/docs/tags/sql\u6ce8\u5165"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,tags:["Easy","Linux","SQL\u6ce8\u5165","\u6587\u4ef6\u4e0a\u4f20","\u4fe1\u606f\u6cc4\u9732","SUDO"],title:"Gallery",description:"Gallery",sidebar_label:"Gallery",slug:"/tryhackme/40"},sidebar:"boxSidebar",previous:{title:"Team",permalink:"/docs/tryhackme/39"},next:{title:"Blueprint",permalink:"/docs/tryhackme/41"}},o={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data --&gt; mike",id:"www-data----mike",level:3},{value:"mike --&gt; root",id:"mike----root",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"gallery",children:"Gallery"}),"\n",(0,r.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-15-42:~/gallery666# nmap -sT -p- --min-rate 1000 10.10.11.19\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-29 03:18 BST\nNmap scan report for ip-10-10-11-19.eu-west-1.compute.internal (10.10.11.19)\nHost is up (0.025s latency).\nNot shown: 65533 closed ports\nPORT     STATE SERVICE\n80/tcp   open  http\n8080/tcp open  http-proxy\nMAC Address: 02:B8:07:F1:A9:6D (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 7.47 seconds\nroot@ip-10-10-15-42:~/gallery666# nmap -sTCV -p 80,8080 --min-rate 1000 10.10.11.19\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-29 03:18 BST\nNmap scan report for ip-10-10-11-19.eu-west-1.compute.internal (10.10.11.19)\nHost is up (0.00013s latency).\n\nPORT     STATE SERVICE VERSION\n80/tcp   open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\n8080/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n| http-cookie-flags: \n|   /: \n|     PHPSESSID: \n|_      httponly flag not set\n|_http-open-proxy: Proxy might be redirecting requests\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Simple Image Gallery System\nMAC Address: 02:B8:07:F1:A9:6D (Unknown)\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\n"})}),"\n",(0,r.jsx)(t.h2,{id:"80",children:"80"}),"\n",(0,r.jsx)(t.p,{children:"\u8fdb\u884c\u76ee\u5f55\u626b\u63cf\u6211\u53d1\u73b0"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-15-42:~/gallery666# gobuster dir -u http://10.10.11.19/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.11.19/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/08/29 03:19:48 Starting gobuster\n===============================================================\n/gallery (Status: 301)\n/index.html (Status: 200)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8bbf\u95ee ",(0,r.jsx)(t.code,{children:"/gallery"})," \u76ee\u5f55, \u6211\u53d1\u73b0\u8fd9\u662f\u4e00\u4e2a\u767b\u9646\u7a97\u53e3"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627205957.png",alt:"20240627205957"})}),"\n",(0,r.jsx)(t.p,{children:"\u67e5\u770b\u7684\u767b\u9646\u8bf7\u6c42\u6211\u53d1\u73b0\u4ed6\u7684\u54cd\u5e94\u4e2d\u5e26\u6709 SQL \u8bed\u53e5, \u53ef\u4ee5\u770b\u51fa\u8fd9\u662f\u4e00\u4e2a SQL \u6ce8\u5165"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210008.png",alt:"20240627210008"})}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u4e07\u80fd\u5bc6\u7801\u767b\u9646\u5373\u53ef, \u767b\u9646\u4e4b\u540e\u6211\u53d1\u73b0\u5728\u7528\u6237\u7684\u8d26\u6237\u9875\u9762\u53ef\u4ee5\u4e0a\u4f20\u6587\u4ef6, \u5176\u4ed6\u5730\u65b9\u4e5f\u53ef\u4ee5\u4e0a\u4f20\u4f46\u662f\u5e76\u4e0d\u80fd\u8bbf\u95ee, \u53ea\u6709\u4fee\u6539\u7528\u6237\u5934\u50cf\u7684\u7167\u7247\u53ef\u4ee5\u89c2\u770b, \u4e0a\u4f20\u4e00\u4e2a php reverse shell \u5373\u53ef"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210022.png",alt:"20240627210022"})}),"\n",(0,r.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(t.h3,{id:"www-data",children:"www-data"}),"\n",(0,r.jsx)(t.p,{children:"\u8bbf\u95ee\u4e0a\u4f20\u7684\u9875\u9762, \u83b7\u53d6\u5230\u4e00\u4e2a Shell"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210042.png",alt:"20240627210042"})}),"\n",(0,r.jsx)(t.h3,{id:"www-data----mike",children:"www-data --\x3e mike"}),"\n",(0,r.jsxs)(t.p,{children:["\u7ecf\u8fc7\u641c\u67e5\u540e\u6211\u53d1\u73b0\u5728 ",(0,r.jsx)(t.code,{children:"/var/backups"})," \u76ee\u5f55\u4e2d\u6709\u5173\u4e8e\u7528\u4e8e mike \u7684\u5907\u4efd\u6587\u4ef6, \u67e5\u770b\u8be5\u6587\u4ef6"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210104.png",alt:"20240627210104"})}),"\n",(0,r.jsxs)(t.p,{children:["\u67e5\u770b ",(0,r.jsx)(t.code,{children:".bash_history"})," \u6211\u53d1\u73b0\u5176\u4e2d\u5b58\u5728\u5bc6\u7801\u6cc4\u9732"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210123.png",alt:"20240627210123"})}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u4e0a\u9762\u7684\u5bc6\u7801\u8fdb\u884c\u767b\u9646"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210135.png",alt:"20240627210135"})}),"\n",(0,r.jsx)(t.h3,{id:"mike----root",children:"mike --\x3e root"}),"\n",(0,r.jsx)(t.p,{children:"\u63a5\u7740\u6211\u53d1\u73b0\u7528\u6237 mike \u5177\u6709 sudo \u7279\u6743"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210152.png",alt:"20240627210152"})}),"\n",(0,r.jsxs)(t.p,{children:["\u67e5\u770b\u8fd9\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6, \u6211\u53d1\u73b0\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.a,{href:"https://gtfobins.github.io/gtfobins/nano/#sudo",children:"nano"})," \u8fdb\u884c\u63d0\u6743"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210204.png",alt:"20240627210204"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627210221.png",alt:"20240627210221"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);