(()=>{"use strict";var e,f,a,b,d,c={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={exports:{}};return c[e].call(a.exports,a,a.exports,r),a.exports}r.m=c,e=[],r.O=(f,a,b,d)=>{if(!a){var c=1/0;for(i=0;i<e.length;i++){a=e[i][0],b=e[i][1],d=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&d||c>=d)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,d<c&&(c=d));if(t){e.splice(i--,1);var n=b();void 0!==n&&(f=n)}}return f}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[a,b,d]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var c={};f=f||[null,a({}),a([]),a(a)];for(var t=2&b&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((f=>c[f]=()=>e[f]));return c.default=()=>e,r.d(d,c),d},r.d=(e,f)=>{for(var a in f)r.o(f,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,a)=>(r.f[a](e,f),f)),[])),r.u=e=>"assets/js/"+({61:"40fb9d8e",106:"ffda1090",114:"4c92f445",122:"3bf032be",137:"a37b52b2",366:"4418458c",685:"ea351942",686:"aa5b31a1",773:"1ff34301",785:"aa29860a",1019:"86f9ced1",1059:"b6bc1afe",1105:"f4e304ec",1156:"1019725b",1235:"a7456010",1236:"8d84c5e4",1275:"5c195210",1336:"1d4976a1",1486:"b9b58f61",1527:"f09e086b",1548:"9aeb8116",1558:"fb956364",1633:"e4863918",1646:"10aab13f",1704:"5bfee675",1719:"4eaede02",1791:"0362bd81",1883:"8598ba5f",2009:"139b2166",2019:"6cfe205c",2028:"d6900b8d",2095:"885e2ce4",2116:"f3d4e7bd",2228:"70839d73",2300:"bd7d4549",2330:"7f150655",2364:"700449cf",2662:"eddd26aa",2683:"5f077469",2713:"f1d4e7de",2714:"241c75be",2738:"7cff6162",2767:"725089f7",2871:"52ef1313",2892:"5061209b",2961:"b61965a4",3039:"8f0f2a32",3104:"f8d20638",3111:"31082d5a",3125:"83867f4d",3142:"a648dbf4",3145:"e1c8f685",3146:"97b8a093",3251:"2e158962",3331:"4ac59e32",3332:"70058630",3400:"361f5f8d",3415:"d69d583c",3474:"edd9102b",3499:"229bb13c",3588:"f8349201",3627:"1d666126",3638:"060c0f99",3641:"1718ffd1",3691:"33c37d1b",3750:"8c4d8666",3808:"4cccbfdf",3837:"83bdcead",3855:"8ef5bf68",3882:"f6340545",3906:"b34d3ee7",3976:"0e384e19",4053:"29644f34",4059:"e9b8ccaa",4097:"84ef11d1",4134:"393be207",4149:"37fc8254",4173:"35163811",4208:"e9085477",4250:"930e7c11",4279:"df203c0f",4570:"ec17a1ed",4579:"64dba296",4583:"1df93b7f",4661:"391f0869",4669:"ad33f3db",4693:"c300d642",4733:"bb51faf1",4787:"3720c009",4813:"21028b9b",4862:"2e0f5b1b",5245:"6273feba",5305:"11d848a3",5456:"44b5f73d",5560:"99a45a6f",5731:"b983091b",5742:"aba21aa0",5772:"8bde1b52",5835:"2bfcdbb1",5861:"b5e5b434",5941:"591b7574",5990:"5fc5a8f9",6032:"25c6e5e6",6045:"376d0bc1",6061:"1f391b9e",6186:"13a1e14a",6192:"8d712cf8",6194:"6ec3994f",6206:"8a642ce8",6278:"4c56dfd9",6382:"15964e4c",6524:"281c265b",6532:"636e6ba2",6535:"153539ae",6579:"983d4aba",6582:"500a13b1",6684:"47740351",6738:"573b52f1",6753:"bec0527d",6809:"7cbad191",6823:"7e35419f",6831:"11d3c0dd",6850:"f8599f8d",6874:"17581827",6877:"7c110bd0",6888:"bfb12fc1",6969:"14eb3368",7040:"34c2be91",7094:"fe057356",7098:"a7bd4aaa",7142:"dfdb978a",7344:"9e9dbd00",7481:"69205ce4",7516:"b0cfc80c",7519:"53a8c0a9",7635:"42c6daf6",7661:"e65a236b",7685:"6cf9fcc8",7752:"74b5312c",7838:"90336994",7929:"45565b32",7948:"c75ca279",8044:"1147cf4e",8116:"2129363e",8258:"c4805384",8401:"17896441",8538:"c35082b4",8550:"f04bcb28",8631:"26362ce9",8645:"8deb4b52",8680:"3ba14f3a",8790:"51b1dc83",8834:"289b4b93",8890:"8d74877f",8895:"e528d8e3",8922:"dc8dc151",8935:"ee41d407",8970:"fbaa064a",9048:"a94703ab",9080:"e51b1a15",9119:"0edb3b93",9293:"a8591d8d",9299:"742f5785",9324:"91d50592",9372:"3e67bae6",9378:"0c5a1d83",9647:"5e95c892",9726:"d6059a93",9840:"79fcf0fb",9848:"0033a5a8",9851:"2096ddcf",9880:"10b5a7d7",9918:"0f24831a"}[e]||e)+"."+{61:"4fdd580e",106:"e1725dea",114:"db7736f6",122:"3fc94edf",137:"b637f549",366:"c21d222f",685:"2bf90ca1",686:"61ad548f",773:"86c7848c",785:"886faed6",1019:"92bcdacb",1059:"06a1ed94",1105:"a5d52165",1156:"4e80eba1",1235:"d0fae047",1236:"9d2be044",1275:"63f6a795",1336:"36d06a63",1365:"9e1b6ff6",1486:"e17d293f",1527:"18d79c32",1548:"88fc77c9",1558:"462d79b7",1633:"54bfbfac",1646:"64871af1",1704:"1aa08dd1",1719:"443e3460",1791:"3b89f52e",1883:"c2417037",2009:"c9bf7ca9",2019:"f553bf96",2028:"7735a59e",2095:"a668f577",2116:"51efefd0",2228:"58dcc2b5",2237:"4cd7f690",2300:"b661f1fd",2330:"73d0dc8f",2364:"125e97ea",2662:"27fb30b5",2683:"273b0f1d",2713:"3b9a5abd",2714:"a6db0002",2738:"933ecfa3",2767:"02dfbee3",2871:"6444e226",2892:"39a06343",2961:"891c2a96",3039:"f2991d60",3104:"a2f3aa7e",3111:"57f8cbf1",3125:"b09015e9",3142:"f49d9190",3145:"12d3038f",3146:"f6379f1c",3251:"b3d751af",3331:"32101c57",3332:"49e74868",3400:"7b69273e",3415:"d5c87fc2",3474:"58988609",3499:"a31d8b1b",3588:"f24b0572",3627:"dbcb6d33",3638:"da6af103",3641:"214e3019",3691:"9a0c4129",3750:"9231e4c0",3808:"422905eb",3837:"d4d989d4",3855:"ed23dee4",3882:"a2571c2b",3906:"26cb3f3c",3976:"3f3c2cdd",4053:"1e165837",4059:"accedb96",4097:"6711e6fe",4134:"ae27b7ba",4149:"9ff6c1b0",4173:"07d83490",4208:"c05aab49",4250:"453a20b5",4279:"8ac4dfb3",4570:"9c978620",4579:"852d3ad0",4583:"d8c54d64",4661:"3ad836d7",4669:"d7a915d1",4693:"0add76d4",4733:"23278f7b",4787:"4831d529",4813:"9abe7895",4862:"bc98800c",5238:"387e1b1b",5245:"fb1248c6",5305:"b539b685",5313:"aab9c00c",5456:"1ff9374a",5560:"ff643b28",5692:"0b6eb3f1",5731:"14e3b565",5742:"dd99eb03",5772:"b6b35eba",5835:"b608cf5c",5861:"c38e1d4e",5941:"f0f1e7ba",5990:"ce79954f",6032:"b6abef39",6045:"579f6c05",6061:"903a3116",6186:"af64acab",6192:"61189ed4",6194:"8e737fe0",6206:"108ba5cc",6278:"f4cfb025",6382:"54f5ace4",6524:"670caee4",6532:"8a149d73",6535:"16ec0f1d",6579:"8813fbd6",6582:"1c9d91ec",6684:"ee0b83b8",6738:"9d814fb2",6753:"b1f5393a",6809:"e7b2eb75",6823:"125140b8",6831:"26f451cf",6850:"8bf9b1e2",6874:"acb3c019",6877:"82359fe6",6888:"5413770a",6969:"f7a82770",7040:"68613845",7094:"8ced1192",7098:"3c12e8a9",7142:"ba7a68cc",7344:"58558813",7481:"4534bc20",7516:"6340d71c",7519:"ffe7e7c3",7635:"a20ac610",7661:"fc24f276",7685:"ac5c1500",7752:"b6092368",7838:"18b778e0",7929:"f92ffdf1",7948:"6fb5faaf",8044:"e5b3bb86",8116:"6f5c18d2",8258:"5fc71f8e",8401:"c1d4ba27",8538:"ac021ba9",8550:"e8a1858b",8631:"bad96ddb",8645:"76437f8f",8680:"791161fd",8790:"9d43ab4d",8834:"9b81fb79",8890:"47e0b8a7",8895:"1ba55e49",8922:"5ab68530",8935:"3cc652a2",8970:"aa258084",9048:"4385a1e2",9080:"e6c810ed",9119:"7c90b66f",9293:"9c1fabad",9299:"41dc03ab",9324:"017f1de8",9372:"c7d3be42",9378:"87459bbf",9647:"56c9d3cf",9726:"8474f6b0",9840:"4cb98592",9848:"9533dc83",9851:"d6cf43b7",9880:"91bb5f6f",9918:"c9f70284"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),b={},d="guardian-jtz-github-io:",r.l=(e,f,a,c)=>{if(b[e])b[e].push(f);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+a){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+a),t.src=e),b[e]=[f];var l=(f,a)=>{t.onerror=t.onload=null,clearTimeout(s);var d=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(a))),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17581827:"6874",17896441:"8401",35163811:"4173",47740351:"6684",70058630:"3332",90336994:"7838","40fb9d8e":"61",ffda1090:"106","4c92f445":"114","3bf032be":"122",a37b52b2:"137","4418458c":"366",ea351942:"685",aa5b31a1:"686","1ff34301":"773",aa29860a:"785","86f9ced1":"1019",b6bc1afe:"1059",f4e304ec:"1105","1019725b":"1156",a7456010:"1235","8d84c5e4":"1236","5c195210":"1275","1d4976a1":"1336",b9b58f61:"1486",f09e086b:"1527","9aeb8116":"1548",fb956364:"1558",e4863918:"1633","10aab13f":"1646","5bfee675":"1704","4eaede02":"1719","0362bd81":"1791","8598ba5f":"1883","139b2166":"2009","6cfe205c":"2019",d6900b8d:"2028","885e2ce4":"2095",f3d4e7bd:"2116","70839d73":"2228",bd7d4549:"2300","7f150655":"2330","700449cf":"2364",eddd26aa:"2662","5f077469":"2683",f1d4e7de:"2713","241c75be":"2714","7cff6162":"2738","725089f7":"2767","52ef1313":"2871","5061209b":"2892",b61965a4:"2961","8f0f2a32":"3039",f8d20638:"3104","31082d5a":"3111","83867f4d":"3125",a648dbf4:"3142",e1c8f685:"3145","97b8a093":"3146","2e158962":"3251","4ac59e32":"3331","361f5f8d":"3400",d69d583c:"3415",edd9102b:"3474","229bb13c":"3499",f8349201:"3588","1d666126":"3627","060c0f99":"3638","1718ffd1":"3641","33c37d1b":"3691","8c4d8666":"3750","4cccbfdf":"3808","83bdcead":"3837","8ef5bf68":"3855",f6340545:"3882",b34d3ee7:"3906","0e384e19":"3976","29644f34":"4053",e9b8ccaa:"4059","84ef11d1":"4097","393be207":"4134","37fc8254":"4149",e9085477:"4208","930e7c11":"4250",df203c0f:"4279",ec17a1ed:"4570","64dba296":"4579","1df93b7f":"4583","391f0869":"4661",ad33f3db:"4669",c300d642:"4693",bb51faf1:"4733","3720c009":"4787","21028b9b":"4813","2e0f5b1b":"4862","6273feba":"5245","11d848a3":"5305","44b5f73d":"5456","99a45a6f":"5560",b983091b:"5731",aba21aa0:"5742","8bde1b52":"5772","2bfcdbb1":"5835",b5e5b434:"5861","591b7574":"5941","5fc5a8f9":"5990","25c6e5e6":"6032","376d0bc1":"6045","1f391b9e":"6061","13a1e14a":"6186","8d712cf8":"6192","6ec3994f":"6194","8a642ce8":"6206","4c56dfd9":"6278","15964e4c":"6382","281c265b":"6524","636e6ba2":"6532","153539ae":"6535","983d4aba":"6579","500a13b1":"6582","573b52f1":"6738",bec0527d:"6753","7cbad191":"6809","7e35419f":"6823","11d3c0dd":"6831",f8599f8d:"6850","7c110bd0":"6877",bfb12fc1:"6888","14eb3368":"6969","34c2be91":"7040",fe057356:"7094",a7bd4aaa:"7098",dfdb978a:"7142","9e9dbd00":"7344","69205ce4":"7481",b0cfc80c:"7516","53a8c0a9":"7519","42c6daf6":"7635",e65a236b:"7661","6cf9fcc8":"7685","74b5312c":"7752","45565b32":"7929",c75ca279:"7948","1147cf4e":"8044","2129363e":"8116",c4805384:"8258",c35082b4:"8538",f04bcb28:"8550","26362ce9":"8631","8deb4b52":"8645","3ba14f3a":"8680","51b1dc83":"8790","289b4b93":"8834","8d74877f":"8890",e528d8e3:"8895",dc8dc151:"8922",ee41d407:"8935",fbaa064a:"8970",a94703ab:"9048",e51b1a15:"9080","0edb3b93":"9119",a8591d8d:"9293","742f5785":"9299","91d50592":"9324","3e67bae6":"9372","0c5a1d83":"9378","5e95c892":"9647",d6059a93:"9726","79fcf0fb":"9840","0033a5a8":"9848","2096ddcf":"9851","10b5a7d7":"9880","0f24831a":"9918"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(f,a)=>{var b=r.o(e,f)?e[f]:void 0;if(0!==b)if(b)a.push(b[2]);else if(/^(1869|5354)$/.test(f))e[f]=0;else{var d=new Promise(((a,d)=>b=e[f]=[a,d]));a.push(b[2]=d);var c=r.p+r.u(f),t=new Error;r.l(c,(a=>{if(r.o(e,f)&&(0!==(b=e[f])&&(e[f]=void 0),b)){var d=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+d+": "+c+")",t.name="ChunkLoadError",t.type=d,t.request=c,b[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,a)=>{var b,d,c=a[0],t=a[1],o=a[2],n=0;if(c.some((f=>0!==e[f]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(f&&f(a);n<c.length;n++)d=c[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},a=self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();