"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[35951],{28453:(e,c,s)=>{s.d(c,{R:()=>a,x:()=>r});var n=s(96540);const d={},o=n.createContext(d);function a(e){const c=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function r(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(o.Provider,{value:c},e.children)}},64479:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>t,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"api/functions/extractSyncdPatches","title":"Function: extractSyncdPatches()","description":"extractSyncdPatches(result, options): Promise\\\\","source":"@site/docs/api/functions/extractSyncdPatches.md","sourceDirName":"api/functions","slug":"/api/functions/extractSyncdPatches","permalink":"/docs/api/functions/extractSyncdPatches","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/api/functions/extractSyncdPatches.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Function: extractMessageContent()","permalink":"/docs/api/functions/extractMessageContent"},"next":{"title":"Function: extractUrlFromText()","permalink":"/docs/api/functions/extractUrlFromText"}}');var d=s(74848),o=s(28453);const a={},r="Function: extractSyncdPatches()",t={},i=[{value:"Parameters",id:"parameters",level:2},{value:"result",id:"result",level:3},{value:"options",id:"options",level:3},{value:"Returns",id:"returns",level:2}];function h(e){const c={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.header,{children:(0,d.jsx)(c.h1,{id:"function-extractsyncdpatches",children:"Function: extractSyncdPatches()"})}),"\n",(0,d.jsxs)(c.blockquote,{children:["\n",(0,d.jsxs)(c.p,{children:[(0,d.jsx)(c.strong,{children:"extractSyncdPatches"}),"(",(0,d.jsx)(c.code,{children:"result"}),", ",(0,d.jsx)(c.code,{children:"options"}),"): ",(0,d.jsx)(c.code,{children:"Promise"}),"<{ ",(0,d.jsx)(c.code,{children:"critical_block"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"critical_unblock_low"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"regular"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"regular_high"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"regular_low"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; }>"]}),"\n"]}),"\n",(0,d.jsxs)(c.p,{children:["Defined in: ",(0,d.jsx)(c.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/a4aad45343d1d35a3f706d46fab9c043acbf00dc/src/Utils/chat-utils.ts#L277",children:"src/Utils/chat-utils.ts:277"})]}),"\n",(0,d.jsx)(c.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(c.h3,{id:"result",children:"result"}),"\n",(0,d.jsx)(c.p,{children:(0,d.jsx)(c.a,{href:"/docs/api/type-aliases/BinaryNode",children:(0,d.jsx)(c.code,{children:"BinaryNode"})})}),"\n",(0,d.jsx)(c.h3,{id:"options",children:"options"}),"\n",(0,d.jsxs)(c.p,{children:[(0,d.jsx)(c.code,{children:"AxiosRequestConfig"}),"<{}>"]}),"\n",(0,d.jsx)(c.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(c.p,{children:[(0,d.jsx)(c.code,{children:"Promise"}),"<{ ",(0,d.jsx)(c.code,{children:"critical_block"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"critical_unblock_low"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"regular"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"regular_high"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; ",(0,d.jsx)(c.code,{children:"regular_low"}),": { ",(0,d.jsx)(c.code,{children:"hasMorePatches"}),": ",(0,d.jsx)(c.code,{children:"boolean"}),"; ",(0,d.jsx)(c.code,{children:"patches"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdPatch",children:(0,d.jsx)(c.code,{children:"ISyncdPatch"})}),"[]; ",(0,d.jsx)(c.code,{children:"snapshot"}),": ",(0,d.jsx)(c.a,{href:"/docs/api/namespaces/proto/interfaces/ISyncdSnapshot",children:(0,d.jsx)(c.code,{children:"ISyncdSnapshot"})}),"; }; }>"]})]})}function l(e={}){const{wrapper:c}={...(0,o.R)(),...e.components};return c?(0,d.jsx)(c,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}}}]);