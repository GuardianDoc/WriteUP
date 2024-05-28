"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[8401],{71243:(e,n,t)=>{t.d(n,{A:()=>v});t(96540);var o=t(34164),i=t(17559),s=t(84142),a=t(99169),l=t(28774),r=t(21312),c=t(86025),d=t(74848);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:n,href:t,isLast:o}=e;const i="breadcrumbs__link";return o?(0,d.jsx)("span",{className:i,itemProp:"name",children:n}):t?(0,d.jsx)(l.A,{className:i,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:i,children:n})}function x(e){let{children:n,active:t,index:i,addMicrodata:s}=e;return(0,d.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,o.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function v(){const e=(0,s.OF)(),n=(0,a.Dt)();return e?(0,d.jsx)("nav",{className:(0,o.A)(i.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const o=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(x,{active:o,index:t,addMicrodata:!!i,children:(0,d.jsx)(b,{href:i,isLast:o,children:n.label})},t)}))]})}):null}},73641:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var o=t(96540),i=t(1003),s=t(89532),a=t(74848);const l=o.createContext(null);function r(e){let{children:n,content:t}=e;const i=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,a.jsx)(l.Provider,{value:i,children:n})}function c(){const e=(0,o.useContext)(l);if(null===e)throw new s.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,a.jsx)(i.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var m=t(34164),u=t(24581),h=t(86929);function p(){const{metadata:e}=c();return(0,a.jsx)(h.A,{previous:e.previous,next:e.next})}var b=t(51878),x=t(4267),v=t(17559),f=t(21312),j=t(56133);const g={tags:"tags_jXut",tag:"tag_QGVx"};function C(e){let{tags:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(f.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,m.A)(g.tags,"padding--none","margin-left--sm"),children:n.map((e=>{let{label:n,permalink:t}=e;return(0,a.jsx)("li",{className:g.tag,children:(0,a.jsx)(j.A,{label:n,permalink:t})},t)}))})]})}var A=t(12153);function N(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:o,tags:i}=e,s=i.length>0,l=!!(n||t||o);return s||l?(0,a.jsxs)("footer",{className:(0,m.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[s&&(0,a.jsx)("div",{className:(0,m.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(C,{tags:i})})}),l&&(0,a.jsx)(A.A,{className:(0,m.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:o})]}):null}var _=t(41422),T=t(65195);const k={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function L(e){let{collapsed:n,...t}=e;return(0,a.jsx)("button",{type:"button",...t,className:(0,m.A)("clean-btn",k.tocCollapsibleButton,!n&&k.tocCollapsibleButtonExpanded,t.className),children:(0,a.jsx)(f.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const w={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function y(e){let{toc:n,className:t,minHeadingLevel:o,maxHeadingLevel:i}=e;const{collapsed:s,toggleCollapsed:l}=(0,_.u)({initialState:!0});return(0,a.jsxs)("div",{className:(0,m.A)(w.tocCollapsible,!s&&w.tocCollapsibleExpanded,t),children:[(0,a.jsx)(L,{collapsed:s,onClick:l}),(0,a.jsx)(_.N,{lazy:!0,className:w.tocCollapsibleContent,collapsed:s,children:(0,a.jsx)(T.A,{toc:n,minHeadingLevel:o,maxHeadingLevel:i})})]})}const M={tocMobile:"tocMobile_ITEo"};function I(){const{toc:e,frontMatter:n}=c();return(0,a.jsx)(y,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,m.A)(v.G.docs.docTocMobile,M.tocMobile)})}var H=t(67763);function B(){const{toc:e,frontMatter:n}=c();return(0,a.jsx)(H.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var z=t(51107),V=t(77910);function E(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,a.jsxs)("div",{className:(0,m.A)(v.G.docs.docMarkdown,"markdown"),children:[t&&(0,a.jsx)("header",{children:(0,a.jsx)(z.A,{as:"h1",children:t})}),(0,a.jsx)(V.A,{children:n})]})}var P=t(71243),G=t(50996);const R={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function F(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,u.l)(),o=e.hide_table_of_contents,i=!o&&n.length>0;return{hidden:o,mobile:i?(0,a.jsx)(I,{}):void 0,desktop:!i||"desktop"!==t&&"ssr"!==t?void 0:(0,a.jsx)(B,{})}}(),{metadata:{unlisted:o}}=c();return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:(0,m.A)("col",!t.hidden&&R.docItemCol),children:[o&&(0,a.jsx)(G.A,{}),(0,a.jsx)(b.A,{}),(0,a.jsxs)("div",{className:R.docItemContainer,children:[(0,a.jsxs)("article",{children:[(0,a.jsx)(P.A,{}),(0,a.jsx)(x.A,{}),t.mobile,(0,a.jsx)(E,{children:n}),(0,a.jsx)(N,{})]}),(0,a.jsx)(p,{})]})]}),t.desktop&&(0,a.jsx)("div",{className:"col col--3",children:t.desktop})]})}function S(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,a.jsx)(r,{content:e.content,children:(0,a.jsxs)(i.e3,{className:n,children:[(0,a.jsx)(d,{}),(0,a.jsx)(F,{children:(0,a.jsx)(t,{})})]})})}},86929:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(21312),i=t(34164),s=t(28774),a=t(74848);function l(e){const{permalink:n,title:t,subLabel:o,isNext:l}=e;return(0,a.jsxs)(s.A,{className:(0,i.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[o&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,a.jsx)("div",{className:"pagination-nav__label",children:t})]})}function r(e){const{previous:n,next:t}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,a.jsx)(l,{...n,subLabel:(0,a.jsx)(o.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,a.jsx)(l,{...t,subLabel:(0,a.jsx)(o.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(34164),i=t(21312),s=t(17559),a=t(32252),l=t(74848);function r(e){let{className:n}=e;const t=(0,a.r)();return t.badge?(0,l.jsx)("span",{className:(0,o.A)(n,s.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},51878:(e,n,t)=>{t.d(n,{A:()=>x});t(96540);var o=t(34164),i=t(44586),s=t(28774),a=t(21312),l=t(44070),r=t(17559),c=t(55597),d=t(32252),m=t(74848);const u={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,m.jsx)(a.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,m.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,m.jsx)(a.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,m.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=u[e.versionMetadata.banner];return(0,m.jsx)(n,{...e})}function p(e){let{versionLabel:n,to:t,onClick:o}=e;return(0,m.jsx)(a.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(s.A,{to:t,onClick:o,children:(0,m.jsx)(a.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,i.A)(),{pluginId:a}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(a),{latestDocSuggestion:u,latestVersionSuggestion:b}=(0,l.HW)(a),x=u??(v=b).docs.find((e=>e.id===v.mainDocId));var v;return(0,m.jsxs)("div",{className:(0,o.A)(n,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:s,versionMetadata:t})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(p,{versionLabel:b.label,to:x.path,onClick:()=>d(b.name)})})]})}function x(e){let{className:n}=e;const t=(0,d.r)();return t.banner?(0,m.jsx)(b,{className:n,versionMetadata:t}):null}},56133:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var o=t(34164),i=t(28774);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var a=t(74848);function l(e){let{permalink:n,label:t,count:l}=e;return(0,a.jsxs)(i.A,{href:n,className:(0,o.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[t,l&&(0,a.jsx)("span",{children:l})]})}},10137:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(96540),i=t(34164),s=t(21312);const a={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg",question:"question_KxHM",note:"note_Kz9_",podcast:"podcast_KPon",newsletter:"newsletter_Zo1f",book:"book_sNPf"};var l=t(17559),r=t(65238),c=t(59879),d=t(71735),m=t(16512),u=t(56973),h=t(61351),p=t(74848);const b={note:{infimaClassName:"secondary",iconComponent:function(){return(0,p.jsx)("svg",{viewBox:"0 0 14 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,p.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,p.jsx)("svg",{viewBox:"0 0 12 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,p.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,p.jsx)("svg",{viewBox:"0 0 12 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,p.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,p.jsx)("svg",{viewBox:"0 0 14 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,p.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,p.jsx)("svg",{viewBox:"0 0 16 16",children:(0,p.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,p.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},question:{infimaClassName:"question",iconComponent:function(){return(0,p.jsx)(r.prl,{title:"Question Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Question admonition (:::question)",children:"question"})},podcast:{infimaClassName:"podcast",iconComponent:function(){return(0,p.jsx)(c.rBl,{title:"Podcast Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Podcast admonition (:::podcast)",children:"podcast"})},newsletter:{infimaClassName:"newsletter",iconComponent:function(){return(0,p.jsx)(d.nQ3,{title:"Newsletter Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Newsletter admonition (:::newsletter)",children:"newsletter"})},company:{infimaClassName:"company",iconComponent:function(){return(0,p.jsx)(m.kUS,{title:"Company Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Company admonition (:::company)",children:"company"})},contribute:{infimaClassName:"contribute",iconComponent:function(){return(0,p.jsx)(d.xko,{title:"Contribute Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Contribute admonition (:::contribute)",children:"contribute"})},book:{infimaClassName:"book",iconComponent:function(){return(0,p.jsx)(u.xnF,{title:"Book Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Book admonition (:::book)",children:"book"})},expert:{infimaClassName:"expert",iconComponent:function(){return(0,p.jsx)(h.SNd,{title:"Expert Icon",style:""})},label:(0,p.jsx)(s.A,{description:"The default label used for the Expert admonition (:::expert)",children:"expert"})}},x={secondary:"note",important:"info",success:"tip",warning:"danger"};function v(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=(0,p.jsx)(p.Fragment,{children:n.filter((e=>e!==t))});return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}function f(e){const{children:n,type:t,title:o,icon:s}=v(e),r=function(e){const n=x[e]??e,t=b[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),b.info)}(t),c=o??r.label,{iconComponent:d}=r,m=s??(0,p.jsx)(d,{}),u="question"===t,h="note"===t,f="podcast"===t,j="newsletter"===t,g="company"===t,C="contribute"===t,A="book"===t,N="expert"===t,_=(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,a.admonition,{[a.question]:u,[a.note]:h,[a.podcast]:f,[a.newsletter]:j,[a.company]:g,[a.contribute]:C,[a.book]:A,[a.expert]:N});return(0,p.jsxs)("div",{className:_,children:[(0,p.jsxs)("div",{className:a.admonitionHeading,children:[(0,p.jsx)("span",{className:a.admonitionIcon,children:m}),c]}),(0,p.jsx)("div",{className:a.admonitionContent,children:n})]})}},18506:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);const o={...t(7172).A}}}]);