"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[35951],{28453:(e,c,s)=>{s.d(c,{R:()=>a,x:()=>r});var n=s(96540);const o={},d=n.createContext(o);function a(e){const c=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(d.Provider,{value:c},e.children)}},64479:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>t,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"api/functions/extractSyncdPatches","title":"Function: extractSyncdPatches()","description":"extractSyncdPatches(result, options): Promise\\\\","source":"@site/docs/api/functions/extractSyncdPatches.md","sourceDirName":"api/functions","slug":"/api/functions/extractSyncdPatches","permalink":"/docs/api/functions/extractSyncdPatches","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki/tree/main/docs/docs/api/functions/extractSyncdPatches.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Function: extractMessageContent()","permalink":"/docs/api/functions/extractMessageContent"},"next":{"title":"Function: extractUrlFromText()","permalink":"/docs/api/functions/extractUrlFromText"}}');var o=s(74848),d=s(28453);const a={},r="Function: extractSyncdPatches()",t={},i=[{value:"Parameters",id:"parameters",level:2},{value:"result",id:"result",level:3},{value:"options",id:"options",level:3},{value:"Returns",id:"returns",level:2}];function h(e){const c={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.header,{children:(0,o.jsx)(c.h1,{id:"function-extractsyncdpatches",children:"Function: extractSyncdPatches()"})}),"\n",(0,o.jsxs)(c.blockquote,{children:["\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.strong,{children:"extractSyncdPatches"}),"(",(0,o.jsx)(c.code,{children:"result"}),", ",(0,o.jsx)(c.code,{children:"options"}),"): ",(0,o.jsx)(c.code,{children:"Promise"}),"<{ ",(0,o.jsx)(c.code,{children:"critical_block"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"critical_unblock_low"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"regular"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"regular_high"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"regular_low"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; }>"]}),"\n"]}),"\n",(0,o.jsxs)(c.p,{children:["Defined in: ",(0,o.jsx)(c.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/c96be39829df6408e360a16f8bc55a7f8dc966a0/src/Utils/chat-utils.ts#L277",children:"src/Utils/chat-utils.ts:277"})]}),"\n",(0,o.jsx)(c.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(c.h3,{id:"result",children:"result"}),"\n",(0,o.jsx)(c.p,{children:(0,o.jsx)(c.a,{href:"/docs/api/type-aliases/BinaryNode",children:(0,o.jsx)(c.code,{children:"BinaryNode"})})}),"\n",(0,o.jsx)(c.h3,{id:"options",children:"options"}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"AxiosRequestConfig"}),"<{}>"]}),"\n",(0,o.jsx)(c.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.code,{children:"Promise"}),"<{ ",(0,o.jsx)(c.code,{children:"critical_block"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"critical_unblock_low"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"regular"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"regular_high"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,o.jsx)(c.code,{children:"regular_low"}),": { ",(0,o.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,o.jsx)(c.code,{children:"boolean"}),"; ",(0,o.jsx)(c.code,{children:"patches"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,o.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,o.jsx)(c.code,{children:"snapshot"}),": ",(0,o.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,o.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; }>"]})]})}function l(e={}){const{wrapper:c}={...(0,d.R)(),...e.components};return c?(0,o.jsx)(c,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);