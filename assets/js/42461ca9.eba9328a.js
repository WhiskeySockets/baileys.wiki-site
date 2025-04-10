"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[14225],{28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var r=n(96540);const i={},d=r.createContext(i);function t(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}},34927:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/functions/decryptMessageNode","title":"Function: decryptMessageNode()","description":"decryptMessageNode(stanza, meId, meLid, repository, logger): object","source":"@site/docs/api/functions/decryptMessageNode.md","sourceDirName":"api/functions","slug":"/api/functions/decryptMessageNode","permalink":"/docs/api/functions/decryptMessageNode","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/api/functions/decryptMessageNode.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Function: decryptMediaRetryData()","permalink":"/docs/api/functions/decryptMediaRetryData"},"next":{"title":"Function: decryptPollVote()","permalink":"/docs/api/functions/decryptPollVote"}}');var i=n(74848),d=n(28453);const t={},c="Function: decryptMessageNode()",o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"stanza",id:"stanza",level:3},{value:"meId",id:"meid",level:3},{value:"meLid",id:"melid",level:3},{value:"repository",id:"repository",level:3},{value:"logger",id:"logger",level:3},{value:"Returns",id:"returns",level:2},{value:"author",id:"author",level:3},{value:"category",id:"category",level:3},{value:"fullMessage",id:"fullmessage",level:3},{value:"decrypt()",id:"decrypt",level:3},{value:"Returns",id:"returns-1",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"function-decryptmessagenode",children:"Function: decryptMessageNode()"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"decryptMessageNode"}),"(",(0,i.jsx)(s.code,{children:"stanza"}),", ",(0,i.jsx)(s.code,{children:"meId"}),", ",(0,i.jsx)(s.code,{children:"meLid"}),", ",(0,i.jsx)(s.code,{children:"repository"}),", ",(0,i.jsx)(s.code,{children:"logger"}),"): ",(0,i.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/c037f68c2d6215f4470ed4a5af1ec6c3b8d19fda/src/Utils/decode-wa-message.ts#L134",children:"src/Utils/decode-wa-message.ts:134"})]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.h3,{id:"stanza",children:"stanza"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/api/type-aliases/BinaryNode",children:(0,i.jsx)(s.code,{children:"BinaryNode"})})}),"\n",(0,i.jsx)(s.h3,{id:"meid",children:"meId"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"string"})}),"\n",(0,i.jsx)(s.h3,{id:"melid",children:"meLid"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"string"})}),"\n",(0,i.jsx)(s.h3,{id:"repository",children:"repository"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/api/type-aliases/SignalRepository",children:(0,i.jsx)(s.code,{children:"SignalRepository"})})}),"\n",(0,i.jsx)(s.h3,{id:"logger",children:"logger"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"ILogger"})}),"\n",(0,i.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"object"})}),"\n",(0,i.jsx)(s.h3,{id:"author",children:"author"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"author"}),": ",(0,i.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"category",children:"category"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"category"}),": ",(0,i.jsx)(s.code,{children:"string"})," = ",(0,i.jsx)(s.code,{children:"stanza.attrs.category"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"fullmessage",children:"fullMessage"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"fullMessage"}),": ",(0,i.jsx)(s.a,{href:"/docs/api/namespaces/proto/interfaces/IWebMessageInfo",children:(0,i.jsx)(s.code,{children:"IWebMessageInfo"})})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"decrypt",children:"decrypt()"}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);