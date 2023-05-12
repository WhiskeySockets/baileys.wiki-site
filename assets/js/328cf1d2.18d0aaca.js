"use strict";(self.webpackChunkwhiskeysockets_github_io=self.webpackChunkwhiskeysockets_github_io||[]).push([[4403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||s;return r?a.createElement(m,i(i({ref:t},l),{},{components:r})):a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:12},i="Disappearing Messages",o={unversionedId:"tutorial-basics/disappearing-messages",id:"tutorial-basics/disappearing-messages",title:"Disappearing Messages",description:"",source:"@site/docs/tutorial-basics/disappearing-messages.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/disappearing-messages",permalink:"/docs/tutorial-basics/disappearing-messages",draft:!1,editUrl:"https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/docs/tutorial-basics/disappearing-messages.md",tags:[],version:"current",lastUpdatedAt:1683852282,formattedLastUpdatedAt:"May 12, 2023",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Modifying Chats",permalink:"/docs/tutorial-basics/modifying-chats"},next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"disappearing-messages"},"Disappearing Messages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'const jid = "1234@s.whatsapp.net"; // can also be a group\n// turn on disappearing messages\nawait sock.sendMessage(\n  jid,\n  // this is 1 week in seconds -- how long you want messages to appear for\n  { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }\n);\n// will send as a disappearing message\nawait sock.sendMessage(\n  jid,\n  { text: "hello" },\n  { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }\n);\n// turn off disappearing messages\nawait sock.sendMessage(jid, { disappearingMessagesInChat: false });\n')))}d.isMDXComponent=!0}}]);