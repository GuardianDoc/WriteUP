"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[6831],{74403:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const a={sidebar_position:24,tags:["Easy","Windows","\u4fe1\u606f\u6cc4\u9732","RDP","\u4e0d\u6b63\u786e\u7684\u6743\u9650"],title:"Anthem",description:"Anthem",sidebar_label:"Anthem",slug:"/tryhackme/24"},r="Anthem",o={id:"box/TryHackMe/24",title:"Anthem",description:"Anthem",source:"@site/docs/box/TryHackMe/24.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/24",permalink:"/docs/tryhackme/24",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Windows",permalink:"/docs/tags/windows"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"RDP",permalink:"/docs/tags/rdp"},{label:"\u4e0d\u6b63\u786e\u7684\u6743\u9650",permalink:"/docs/tags/\u4e0d\u6b63\u786e\u7684\u6743\u9650"}],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,tags:["Easy","Windows","\u4fe1\u606f\u6cc4\u9732","RDP","\u4e0d\u6b63\u786e\u7684\u6743\u9650"],title:"Anthem",description:"Anthem",sidebar_label:"Anthem",slug:"/tryhackme/24"},sidebar:"boxSidebar",previous:{title:"GamingServer",permalink:"/docs/tryhackme/23"},next:{title:"Cyborg",permalink:"/docs/tryhackme/25"}},c={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80 - HTTP",id:"80---http",level:2},{value:"3389",id:"3389",level:2},{value:"SG",id:"sg",level:3},{value:"SG --&gt; Administrator",id:"sg----administrator",level:3}];function m(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"anthem",children:"Anthem"}),"\n",(0,s.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-9-229:~# nmap -sT -p- --min-rate 1000 10.10.197.113\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-20 15:45 BST\nNmap scan report for ip-10-10-197-113.eu-west-1.compute.internal (10.10.197.113)\nHost is up (0.00063s latency).\nNot shown: 65532 filtered ports\nPORT     STATE SERVICE\n80/tcp   open  http\n3389/tcp open  ms-wbt-server\n5985/tcp open  wsman\nMAC Address: 02:8E:A3:05:A4:5B (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 100.74 seconds\n"})}),"\n",(0,s.jsx)(e.h2,{id:"80---http",children:"80 - HTTP"}),"\n",(0,s.jsxs)(e.p,{children:["\u8bbf\u95ee robots.txt \u6587\u4ef6\u53d1\u73b0\u5176\u4e2d\u5185\u5bb9,\n",(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233522.png",alt:"20240531233522"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4e2d\u544a\u8bc9\u6211\u4eec\u51e0\u4e2a\u76ee\u5f55, \u6211\u4eec\u8fdb\u884c\u8bbf\u95ee\u53d1\u73b0\u5728  umbraco \u6307\u5411\u4e86\u4e00\u5904\u767b\u9646\u5730\u5740, \u73b0\u5728\u6211\u4eec\u7684\u601d\u8def\u5e94\u8be5\u4e3a:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6536\u96c6\u8d26\u53f7\u5bc6\u7801 (\u6211\u4eec\u5728 robots.txt \u4e2d\u53d1\u73b0\u4e00\u6bb5\u5355\u8bcd, \u8fd9\u4e2a\u53ef\u80fd\u662f\u5bc6\u7801)"}),"\n",(0,s.jsx)(e.li,{children:"SQL \u6ce8\u5165"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233538.png",alt:"20240531233538"})}),"\n",(0,s.jsx)(e.p,{children:"\u73b0\u5728\u6211\u4eec\u8bbf\u95ee\u7ad9\u70b9, \u6211\u4eec\u53d1\u73b0\u4e00\u7bc7\u6587\u7ae0\u7684\u4f5c\u8005\u6cc4\u9732\u4e86\u4ed6\u7684\u8d26\u53f7"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233548.png",alt:"20240531233548"})}),"\n",(0,s.jsx)(e.p,{children:"\u63a5\u7740\u6211\u4eec\u53d1\u73b0\u5728\u5176\u4e2d\u4e00\u7bc7\u6587\u7ae0\u4e2d\u63d0\u5230\u4e86\u8fd9\u6837\u4e00\u4e9b\u5185\u5bb9, \u8fd9\u5176\u4e2d\u8bf4\u7ed9\u7ba1\u7406\u5458\u4e00\u9996\u8bd7,"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233559.png",alt:"20240531233559"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u8c37\u6b4c\u8fd9\u9996\u8bd7\u7684\u5bf9\u8c61, \u53d1\u73b0\u5176\u662f  Solomon Grundy , \u6240\u4ee5\u63a8\u51fa\u7ba1\u7406\u5458\u7684\u8d26\u53f7\u662f :  ",(0,s.jsx)(e.a,{href:"mailto:SG@anthem.com",children:"SG@anthem.com"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233612.png",alt:"20240531233612"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["admin : \u8d26\u53f7 ",(0,s.jsx)(e.a,{href:"mailto:SG@anthem.com",children:"SG@anthem.com"})]}),"\n",(0,s.jsxs)(e.li,{children:["anthem \u7684\u4f5c\u8005 : ",(0,s.jsx)(e.a,{href:"mailto:JD@anthem.com",children:"JD@anthem.com"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u5bc6\u7801 : UmbracoIsTheBest!\n\u6211\u4eec\u4f7f\u7528\u8d26\u53f7\u8fdb\u884c\u767b\u9646, \u6700\u7ec8\u53d1\u73b0 : ",(0,s.jsx)(e.a,{href:"mailto:SG@anthem.com",children:"SG@anthem.com"}),":UmbracoIsTheBest","! \u53ef\u4ee5\u767b\u9646, \u867d\u7136\u5176\u4e2d\u544a\u8bc9\u4e86\u6211\u4eec\u5bf9\u5e94\u7684 CMS  \u7248\u672c, \u4f46\u662f\u6ca1\u6709\u53ef\u4ee5\u5229\u7528\u7684\u5730\u65b9, \u6240\u4ee5\u6211\u4eec\u5c1d\u8bd5\u8fdb\u884c\u5bc6\u7801\u91cd\u7528\u767b\u9646"]}),"\n"]})}),"\n",(0,s.jsx)(e.h2,{id:"3389",children:"3389"}),"\n",(0,s.jsx)(e.h3,{id:"sg",children:"SG"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-9-229:~# xfreerdp -v  10.10.197.113 -u SG -p UmbracoIsTheBest!\n"})}),"\n",(0,s.jsx)(e.h3,{id:"sg----administrator",children:"SG --\x3e Administrator"}),"\n",(0,s.jsx)(e.p,{children:"\u767b\u9646\u4e4b\u540e, \u6253\u5f00 CMD \u6211\u4eec\u53d1\u73b0\u5728 C \u76d8\u5b58\u5728\u4e00\u4e2a\u9690\u85cf\u76ee\u5f55"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233704.png",alt:"20240531233704"})}),"\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u540d\u79f0\u8fd9\u91cc\u5e94\u8be5\u662f\u5b58\u653e\u4e86\u5bc6\u7801\u4e4b\u7c7b\u7684, \u4f46\u662f\u6211\u4eec\u6ca1\u6709\u6743\u9650\u8bbf\u95ee, \u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u6587\u4ef6\u5c5e\u6027\u7684\u65b9\u5f0f\u6765\u67e5\u770b\u6587\u4ef6, \u5728\u6b64\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u7ba1\u7406\u5458\u5bc6\u7801\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u767b\u9646"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240531233714.png",alt:"20240531233714"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);