"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[1918],{87042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),l=t(19365);const i={sidebar_position:1,title:"\u914d\u7f6e\u6587\u6863",description:"Docusurus \u7684\u914d\u7f6e\u6587\u6863"},o="\u914d\u7f6e\u6587\u6863",u={id:"help/Docusaurus/\u914d\u7f6e\u6587\u6863",title:"\u914d\u7f6e\u6587\u6863",description:"Docusurus \u7684\u914d\u7f6e\u6587\u6863",source:"@site/docs/help/Docusaurus/\u914d\u7f6e\u6587\u6863.md",sourceDirName:"help/Docusaurus",slug:"/help/Docusaurus/\u914d\u7f6e\u6587\u6863",permalink:"/docs/help/Docusaurus/\u914d\u7f6e\u6587\u6863",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u914d\u7f6e\u6587\u6863",description:"Docusurus \u7684\u914d\u7f6e\u6587\u6863"},sidebar:"helpSidebar",previous:{title:"Docusaurus",permalink:"/docs/category/docusaurus"},next:{title:"\u4f7f\u7528\u6587\u6863",permalink:"/docs/help/Docusaurus/\u4f7f\u7528\u6587\u6863"}},c={},d=[{value:"plugin-image-zoom",id:"plugin-image-zoom",level:2},{value:"\u4fee\u6539\u9996\u9875\u65b9\u6846\u5185\u5bb9",id:"\u4fee\u6539\u9996\u9875\u65b9\u6846\u5185\u5bb9",level:2},{value:"\u9876\u680f\u4e0b\u62c9\u6846",id:"\u9876\u680f\u4e0b\u62c9\u6846",level:2},{value:"\u4fee\u6539 / \u9875\u9762\u7684\u56fe\u7247",id:"\u4fee\u6539--\u9875\u9762\u7684\u56fe\u7247",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u914d\u7f6e\u6587\u6863",children:"\u914d\u7f6e\u6587\u6863"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u672c\u7ad9\u70b9\u7684\u914d\u7f6e\u4e3b\u8981\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://imroc.cc/note/",children:"\u6280\u672f\u7b14\u8bb0"})," \u8fdb\u884c\u8bbe\u7f6e, \u6839\u636e\u4e2a\u4eba\u9700\u8981\u8fdb\u884c\u7075\u6d3b\u914d\u7f6e"]}),"\n",(0,r.jsx)(n.h2,{id:"plugin-image-zoom",children:"plugin-image-zoom"}),"\n",(0,r.jsxs)(n.p,{children:["\u5355\u51fb\u56fe\u7247\u653e\u5927\u63d2\u4ef6\uff0c\u6548\u679c\uff1a\n",(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/flexanalytics/plugin-image-zoom/master/img/zoom_example.gif",alt:""})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"bash",label:"\u5b89\u88c5\u547d\u4ee4",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save flexanalytics/plugin-image-zoom\n"})})}),(0,r.jsx)(l.A,{value:"js",label:"\u914d\u7f6e",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:" plugins: [\n  'plugin-image-zoom',\n],\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4fee\u6539\u9996\u9875\u65b9\u6846\u5185\u5bb9",children:"\u4fee\u6539\u9996\u9875\u65b9\u6846\u5185\u5bb9"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240519001713.png",alt:"20240519001713"}),"\n\u4fee\u6539\u4e0a\u8ff0\u56fe\u7247\u4e2d\u4f7f\u7528\u7ea2\u6846\u6807\u8bc6\u7684\u90e8\u5206, \u524d\u5f80 ",(0,r.jsx)(n.code,{children:"src/pages/index.tsx"})," \u4e2d\u8fdb\u884c\u4fee\u6539"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'function HomepageHeader() {\n  const {siteConfig} = useDocusaurusContext();\n  return (\n    <header className={clsx(\'hero hero--primary\', styles.heroBanner)}>\n      <div className="container">\n        <Heading as="h1" className="hero__title">\n          {siteConfig.title}\n        </Heading>\n        <p className="hero__subtitle">{siteConfig.tagline}</p>\n        <div className={styles.buttons}>\n          <Link\n            className="button button--secondary button--lg"\n            to="/docs/intro">\n            // highlight-next-line\n            Docusaurus Tutorial - 5min \u23f1\ufe0f \n          </Link>\n        </div>\n      </div>\n    </header>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u9876\u680f\u4e0b\u62c9\u6846",children:"\u9876\u680f\u4e0b\u62c9\u6846"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u9700\u8981\u5728\u9876\u90e8\u680f\u4e2d\u6dfb\u52a0\u4e0b\u62c9\u6846\u8fdb\u884c\u793a\u4f8b, \u6240\u4ee5\u9700\u8981\u5bf9 ",(0,r.jsx)(n.code,{children:"docusaurus.config.ts"})," \u6587\u4ef6\u8fdb\u884c\u4e00\u4e9b\u4fee\u6539"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const config: Config = {\n  themeConfig: {\n    label: 'Docs',\n    position: 'left',\n    items: [\n      {\n        label: 'Tutorial',\n        to: 'docs/intro',\n      },\n      {\n        label: 'API',\n        to: 'docs/api',\n      },\n      {\n        label: 'Guides',\n        to: 'docs/guides',\n      },\n    ],\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4fee\u6539--\u9875\u9762\u7684\u56fe\u7247",children:"\u4fee\u6539 / \u9875\u9762\u7684\u56fe\u7247"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240522160101.png",alt:"20240522160101"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",metastring:'title="src/pages/index.module.css"',children:".heroBanner {\n  padding: 4rem 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  color: white; \n    background-image:\n        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n        url(./img/test.png);\n    background-size: cover;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(34164),s=t(23104),l=t(56347),i=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=u??g;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);