"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8542],{63776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(74848),s=n(28453);const r={sidebar_position:58,tags:["Easy","Linux","\u5f31\u5bc6\u7801","\u6587\u4ef6\u4e0a\u4f20","SUDO"],title:"Dav",description:"Dav",sidebar_label:"Dav",slug:"/tryhackme/58"},i="Dav",o={id:"box/TryHackMe/58",title:"Dav",description:"Dav",source:"@site/docs/box/TryHackMe/58.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/58",permalink:"/docs/tryhackme/58",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u5f31\u5bc6\u7801",permalink:"/docs/tags/\u5f31\u5bc6\u7801"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58,tags:["Easy","Linux","\u5f31\u5bc6\u7801","\u6587\u4ef6\u4e0a\u4f20","SUDO"],title:"Dav",description:"Dav",sidebar_label:"Dav",slug:"/tryhackme/58"},sidebar:"boxSidebar",previous:{title:"Library",permalink:"/docs/tryhackme/57"},next:{title:"Cat Pictures",permalink:"/docs/tryhackme/59"}},d={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data --&gt; root",id:"www-data----root",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dav",children:"Dav"}),"\n",(0,a.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-24-143:~# nmap -sT -p- --min-rate 1000 10.10.60.181\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-03 12:12 BST\nNmap scan report for ip-10-10-60-181.eu-west-1.compute.internal (10.10.60.181)\nHost is up (0.00026s latency).\nNot shown: 65534 closed ports\nPORT   STATE SERVICE\n80/tcp open  http\nMAC Address: 02:B3:EA:E8:0A:0B (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 2.37 seconds\n"})}),"\n",(0,a.jsx)(t.h2,{id:"80",children:"80"}),"\n",(0,a.jsx)(t.p,{children:"\u8fdb\u884c\u76ee\u5f55\u626b\u63cf\u6211\u53d1\u73b0"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-24-143:~/bsidesgtda# gobuster dir -u http://10.10.60.181/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.60.181/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt\n[+] Timeout:        10s\n===============================================================\n2023/09/03 12:18:25 Starting gobuster\n===============================================================\n/webdav (Status: 401)\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u8bbf\u95ee\u8be5\u9875\u9762\u663e\u793a\u9700\u8981\u5bc6\u7801\u767b\u9646, \u4f46\u662f\u6211\u5e76\u4e0d\u77e5\u9053, \u4ece\u540d\u5b57\u53ef\u4ee5\u63a8\u65ad\u8fd9\u662f\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240702220157.png",alt:"20240702220157"})}),"\n",(0,a.jsxs)(t.p,{children:["\u7ecf\u8fc7\u67e5\u627e, \u6211\u53d1\u73b0\u4e86\u5176\u9ed8\u8ba4\u51ed\u8bc1\u4ee5\u53ca\u4e00\u4e2a\u5229\u7528\u65b9\u5f0f, \u7b80\u5355\u6765\u8bf4\u5c31\u662f\u4e0a\u4f20\u4e00\u4e2a php \u6587\u4ef6 ",(0,a.jsx)(t.a,{href:"https://xforeveryman.blogspot.com/2012/01/helper-webdav-xampp-173-default.html",children:"helper: webdav xampp \u2264 1.7.3 default credentials"})]}),"\n",(0,a.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,a.jsx)(t.h3,{id:"www-data",children:"www-data"}),"\n",(0,a.jsx)(t.p,{children:"\u8bbf\u95ee\u4e0a\u4f20\u7684 reverse shell \u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u4e00\u4e2a\u4f1a\u8bdd"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240702222354.png",alt:"20240702222354"})}),"\n",(0,a.jsx)(t.h3,{id:"www-data----root",children:"www-data --\x3e root"}),"\n",(0,a.jsx)(t.p,{children:"\u68c0\u67e5\u53d1\u73b0, \u7528\u6237 www-data \u5177\u6709 sudo \u7279\u6743, \u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u5229\u7528"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240702222409.png",alt:"20240702222409"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);