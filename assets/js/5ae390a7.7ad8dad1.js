"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[90502],{28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var c=s(96540);const t={},i=c.createContext(t);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(i.Provider,{value:n},e.children)}},92141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>r});const c=JSON.parse('{"id":"api/functions/decodeSyncdSnapshot","title":"Function: decodeSyncdSnapshot()","description":"decodeSyncdSnapshot(name, snapshot, getAppStateSyncKey, minimumVersionNumber, validateMacs): Promise\\\\","source":"@site/docs/api/functions/decodeSyncdSnapshot.md","sourceDirName":"api/functions","slug":"/api/functions/decodeSyncdSnapshot","permalink":"/docs/api/functions/decodeSyncdSnapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/api/functions/decodeSyncdSnapshot.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Function: decodeSyncdPatch()","permalink":"/docs/api/functions/decodeSyncdPatch"},"next":{"title":"Function: decompressingIfRequired()","permalink":"/docs/api/functions/decompressingIfRequired"}}');var t=s(74848),i=s(28453);const d={},a="Function: decodeSyncdSnapshot()",o={},r=[{value:"Parameters",id:"parameters",level:2},{value:"name",id:"name",level:3},{value:"snapshot",id:"snapshot",level:3},{value:"getAppStateSyncKey",id:"getappstatesynckey",level:3},{value:"minimumVersionNumber",id:"minimumversionnumber",level:3},{value:"validateMacs",id:"validatemacs",level:3},{value:"Returns",id:"returns",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"function-decodesyncdsnapshot",children:"Function: decodeSyncdSnapshot()"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"decodeSyncdSnapshot"}),"(",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"snapshot"}),", ",(0,t.jsx)(n.code,{children:"getAppStateSyncKey"}),", ",(0,t.jsx)(n.code,{children:"minimumVersionNumber"}),", ",(0,t.jsx)(n.code,{children:"validateMacs"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<{ ",(0,t.jsx)(n.code,{children:"mutationMap"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/type-aliases/ChatMutationMap",children:(0,t.jsx)(n.code,{children:"ChatMutationMap"})}),"; ",(0,t.jsx)(n.code,{children:"state"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/type-aliases/LTHashState",children:(0,t.jsx)(n.code,{children:"LTHashState"})}),"; }>"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/d5dc75887493f25877028d43b81101e050a3695b/src/Utils/chat-utils.ts#L357",children:"src/Utils/chat-utils.ts:357"})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"critical_block"'})," | ",(0,t.jsx)(n.code,{children:'"critical_unblock_low"'})," | ",(0,t.jsx)(n.code,{children:'"regular_high"'})," | ",(0,t.jsx)(n.code,{children:'"regular_low"'})," | ",(0,t.jsx)(n.code,{children:'"regular"'})]}),"\n",(0,t.jsx)(n.h3,{id:"snapshot",children:"snapshot"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,t.jsx)(n.code,{children:"ISyncdSnapshot"})})}),"\n",(0,t.jsx)(n.h3,{id:"getappstatesynckey",children:"getAppStateSyncKey"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"FetchAppStateSyncKey"})}),"\n",(0,t.jsx)(n.h3,{id:"minimumversionnumber",children:"minimumVersionNumber"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsx)(n.h3,{id:"validatemacs",children:"validateMacs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"boolean"})," = ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<{ ",(0,t.jsx)(n.code,{children:"mutationMap"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/type-aliases/ChatMutationMap",children:(0,t.jsx)(n.code,{children:"ChatMutationMap"})}),"; ",(0,t.jsx)(n.code,{children:"state"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/type-aliases/LTHashState",children:(0,t.jsx)(n.code,{children:"LTHashState"})}),"; }>"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);