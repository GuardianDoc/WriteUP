"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[2147],{91278:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(74848),o=n(28453);const i={sidebar_position:67,tags:["Easy","Linux","\u5bc6\u7801\u5b66","\u4fe1\u606f\u6cc4\u9732","SUDO"],title:"b3dr0ck",description:"b3dr0ck",sidebar_label:"b3dr0ck",slug:"/tryhackme/67"},s="b3dr0ck",a={id:"box/TryHackMe/67",title:"b3dr0ck",description:"b3dr0ck",source:"@site/docs/box/TryHackMe/67.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/67",permalink:"/docs/tryhackme/67",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u5bc6\u7801\u5b66",permalink:"/docs/tags/\u5bc6\u7801\u5b66"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:67,frontMatter:{sidebar_position:67,tags:["Easy","Linux","\u5bc6\u7801\u5b66","\u4fe1\u606f\u6cc4\u9732","SUDO"],title:"b3dr0ck",description:"b3dr0ck",sidebar_label:"b3dr0ck",slug:"/tryhackme/67"},sidebar:"boxSidebar",previous:{title:"JPGChat",permalink:"/docs/tryhackme/66"},next:{title:"Surfer",permalink:"/docs/tryhackme/68"}},c={},d=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"4040",id:"4040",level:2},{value:"9009",id:"9009",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"barney",id:"barney",level:3},{value:"barney \u2014&gt; fred",id:"barney--fred",level:3},{value:"fred \u2014&gt; root",id:"fred--root",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"b3dr0ck",children:"b3dr0ck"}),"\n",(0,t.jsx)(r.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"root@ip-10-10-8-200:~/b3dr0ck# nmap -sTCV -p 22,80,4040,9009,54321 --min-rate 1000 10.10.128.67\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-04 12:44 BST\nNmap scan report for ip-10-10-128-67.eu-west-1.compute.internal (10.10.128.67)\nHost is up (0.00025s latency).\n\nPORT      STATE SERVICE      VERSION\n22/tcp    open  ssh          OpenSSH 8.2p1 Ubuntu 4ubuntu0.4 (Ubuntu Linux; protocol 2.0)\n80/tcp    open  http         nginx 1.18.0 (Ubuntu)\n|_http-server-header: nginx/1.18.0 (Ubuntu)\n|_http-title: Did not follow redirect to https://ip-10-10-128-67.eu-west-1.compute.internal:4040/\n4040/tcp  open  ssl/yo-main?\n| fingerprint-strings: \n|   GetRequest, HTTPOptions: \n|     HTTP/1.1 200 OK\n|     Content-type: text/html\n|     Date: Mon, 04 Sep 2023 11:44:36 GMT\n|     Connection: close\n|     <!DOCTYPE html>\n|     <html>\n|     <head>\n|     <title>ABC</title>\n|     <style>\n|     body {\n|     width: 35em;\n|     margin: 0 auto;\n|     font-family: Tahoma, Verdana, Arial, sans-serif;\n|     </style>\n|     </head>\n|     <body>\n|     <h1>Welcome to ABC!</h1>\n|     <p>Abbadabba Broadcasting Compandy</p>\n|     <p>We're in the process of building a website! Can you believe this technology exists in bedrock?!?</p>\n|     <p>Barney is helping to setup the server, and he said this info was important...</p>\n|     <pre>\n|     Hey, it's Barney. I only figured out nginx so far, what the h3ll is a database?!?\n|     Bamm Bamm tried to setup a sql database, but I don't see it running.\n|     Looks like it started something else, but I'm not sure how to turn it off...\n|     said it was from the toilet and OVER 9000!\n|_    Need to try and secure\n| ssl-cert: Subject: commonName=localhost\n| Not valid before: 2023-09-04T09:04:07\n|_Not valid after:  2024-09-03T09:04:07\n|_ssl-date: TLS randomness does not represent time\n9009/tcp  open  domain       ISC BIND What are you looking\n54321/tcp open  ssl/unknown\n| fingerprint-strings: \n|   DNSStatusRequest, DNSVersionBindReq, FourOhFourRequest, GenericLines, GetRequest, HTTPOptions, Help, Kerberos, LANDesk-RC, LDAPBindReq, LDAPSearchReq, LPDString, NCP, NULL, NotesRPC, RPCCheck, RTSPRequest, SIPOptions, SMBProgNeg, SSLSessionReq, TLSSessionReq, TerminalServer, X11Probe: \n|_    Error: 'undefined' is not authorized for access.\n| ssl-cert: Subject: commonName=localhost\n| Not valid before: 2023-09-04T09:04:07\n|_Not valid after:  2024-09-03T09:04:07\n|_ssl-date: TLS randomness does not represent time\n2 services unrecognized despite returning data. If you know the service/version, please submit the following fingerprints at https://nmap.org/cgi-bin/submit.cgi?new-service :\n"})}),"\n",(0,t.jsx)(r.h2,{id:"4040",children:"4040"}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u7b80\u7b80\u5355\u5355\u7684\u7f51\u9875\u4ec0\u4e48\u4e5f\u6ca1\u6709, \u4f46\u662f\u544a\u8bc9\u6211\u4e00\u4e2a\u7aef\u53e3, \u5176\u7aef\u53e3\u53f7\u5927\u4e8e 9000"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703184935.png",alt:"20240703184935"})}),"\n",(0,t.jsx)(r.h2,{id:"9009",children:"9009"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703184946.png",alt:"20240703184946"})}),"\n",(0,t.jsx)(r.p,{children:"\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u5f97\u5230\u4e24\u4e2a\u5185\u5bb9: certificate \u548c private key, \u5f97\u5230\u4e24\u4e2a\u6587\u4ef6\u540e, \u8f93\u5165 help \u6211\u53d1\u73b0\u4e86\u5229\u7528\u7684\u65b9\u5f0f"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703184957.png",alt:"20240703184957"})}),"\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528\u4e0a\u9762\u7684\u547d\u4ee4\u8fdb\u884c\u8fde\u63a5\u6211\u5f97\u5230\u4e86\u4e00\u4e2a\u7528\u6237\u7684\u5bc6\u7801"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185006.png",alt:"20240703185006"})}),"\n",(0,t.jsx)(r.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsx)(r.h3,{id:"barney",children:"barney"}),"\n",(0,t.jsx)(r.p,{children:"\u672c\u6765\u5f97\u5230\u5bc6\u7801\u540e, \u60f3\u7684\u662f\u5bc6\u6587\u89e3\u5bc6\u4e00\u4e0b, \u4f46\u662f\u662f\u6211\u60f3\u591a\u4e86"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185028.png",alt:"20240703185028"})}),"\n",(0,t.jsx)(r.h3,{id:"barney--fred",children:"barney \u2014> fred"}),"\n",(0,t.jsx)(r.p,{children:"\u6211\u6267\u884c sudo, \u53d1\u73b0\u7528\u6237\u5177\u6709 SUDO \u7279\u6743"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185046.png",alt:"20240703185046"})}),"\n",(0,t.jsx)(r.p,{children:"\u7ed3\u5408\u4e4b\u524d\u83b7\u5f97\u7684 barney \u7684\u5bc6\u7801\u6211\u611f\u89c9\u53e6\u4e00\u4e2a\u7528\u6237\u7684\u5bc6\u7801\u4e5f\u662f\u8fd9\u6837\u83b7\u53d6"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"root@b3dr0ck:/usr/share/abc/certs# sudo /usr/bin/certutil ls\n\nCurrent Cert List: (/usr/share/abc/certs)\n------------------\ntotal 72\ndrwxrwxr-x 2 root root 4096 Sep  4 10:54 .\ndrwxrwxr-x 8 root root 4096 Apr 29  2022 ..\n-rw-r----- 1 root root  972 Sep  4 09:04 barney.certificate.pem\n-rw-r----- 1 root root 1678 Sep  4 09:04 barney.clientKey.pem\n-rw-r----- 1 root root  894 Sep  4 09:04 barney.csr.pem\n-rw-r----- 1 root root 1678 Sep  4 09:04 barney.serviceKey.pem\n-rw-r----- 1 root root  976 Sep  4 10:50 fred.certificate.pem\n-rw-r----- 1 root root 1678 Sep  4 10:50 fred.clientKey.pem\n-rw-r----- 1 root root  898 Sep  4 10:50 fred.csr.pem\n-rw-r----- 1 root root 1678 Sep  4 10:50 fred.serviceKey.pem\n\nbarney@b3dr0ck:/usr/share/abc/certs$ ls -al\ntotal 56\ndrwxrwxr-x 2 root root 4096 Apr 30  2022 .\ndrwxrwxr-x 8 root root 4096 Apr 29  2022 ..\n-rw-r----- 1 root root  972 Sep  9 04:59 barney.certificate.pem\n-rw-r----- 1 root root 1674 Sep  9 04:59 barney.clientKey.pem\n-rw-r----- 1 root root  894 Sep  9 04:59 barney.csr.pem\n-rw-r----- 1 root root 1678 Sep  9 04:59 barney.serviceKey.pem\n-rw-r----- 1 root root  976 Sep  9 04:59 fred.certificate.pem\n-rw-r----- 1 root root 1678 Sep  9 04:59 fred.clientKey.pem\n-rw-r----- 1 root root  898 Sep  9 04:59 fred.csr.pem\n-rw-r----- 1 root root 1678 Sep  9 04:59 fred.serviceKey.pem\n-rw-r----- 1 root root  992 Sep  9 04:59 server.certificate.pem\n-rw-r----- 1 root root 1678 Sep  9 04:59 server.clientKey.pem\n-rw-r----- 1 root root  890 Sep  9 04:59 server.csr.pem\n-rw-r----- 1 root root 1678 Sep  9 04:59 server.serviceKey.pem\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5229\u7528 certutil \u6765\u68c0\u7d22\xa0",(0,t.jsx)(r.code,{children:"fred.csr.pem"}),"\xa0 \u7684\u79c1\u94a5\u548c\u8bc1\u4e66"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185102.png",alt:"20240703185102"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185108.png",alt:"20240703185108"})}),"\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528\u5f97\u5230\u7684\u5bc6\u7801\u8fdb\u884c\u767b\u9646\u5373\u53ef"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185118.png",alt:"20240703185118"})}),"\n",(0,t.jsx)(r.h3,{id:"fred--root",children:"fred \u2014> root"}),"\n",(0,t.jsx)(r.p,{children:"\u6211\u53d1\u73b0\u7528\u6237\u5177\u6709 SUDO \u7279\u6743,"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185135.png",alt:"20240703185135"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5e76\u53d1\u73b0\u4e00\u4e2a\u5bc6\u7801, \u6000\u7591\u662f Root \u7528\u6237\u5bc6\u7801 ",(0,t.jsx)(r.a,{href:"https://gchq.github.io/CyberChef/#input=TEZLRUM1MlpLUkNYU1dLWElaVlU0M0tKR05NWFVSSlNMRldWUzUyT1BKQVhVVExOSkpWVTJSQ1dOQkdYVVJUTEpaS0ZTU1lL",children:"CyberChef"}),", \u89e3\u5bc6\u5185\u5bb9\u4e3a MD5 \u5bc6\u6587\u518d\u6b21\u8fdb\u884c\u89e3\u5bc6, \u83b7\u53d6\u5230 root \u7528\u6237\u7684\u5bc6\u7801"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185156.png",alt:"20240703185156"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703185242.png",alt:"20240703185242"})})]})}function l(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(96540);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);