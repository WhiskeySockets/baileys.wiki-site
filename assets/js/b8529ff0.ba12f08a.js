"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[22095],{28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var d=n(96540);const i={},s=d.createContext(i);function c(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(s.Provider,{value:r},e.children)}},89160:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"api/functions/makeNoiseHandler","title":"Function: makeNoiseHandler()","description":"makeNoiseHandler(namedParameters): object","source":"@site/docs/api/functions/makeNoiseHandler.md","sourceDirName":"api/functions","slug":"/api/functions/makeNoiseHandler","permalink":"/docs/api/functions/makeNoiseHandler","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/api/functions/makeNoiseHandler.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Function: makeEventBuffer()","permalink":"/docs/api/functions/makeEventBuffer"},"next":{"title":"Function: makeWASocket()","permalink":"/docs/api/functions/makeWASocket"}}');var i=n(74848),s=n(28453);const c={},a="Function: makeNoiseHandler()",l={},t=[{value:"Parameters",id:"parameters",level:2},{value:"__namedParameters",id:"__namedparameters",level:3},{value:"keyPair",id:"keypair",level:4},{value:"logger",id:"logger",level:4},{value:"NOISE_HEADER",id:"noise_header",level:4},{value:"routingInfo?",id:"routinginfo",level:4},{value:"Returns",id:"returns",level:2},{value:"authenticate()",id:"authenticate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"data",id:"data",level:5},{value:"Returns",id:"returns-1",level:4},{value:"decodeFrame()",id:"decodeframe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"newData",id:"newdata",level:5},{value:"onFrame",id:"onframe",level:5},{value:"Returns",id:"returns-2",level:4},{value:"decrypt()",id:"decrypt",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"ciphertext",id:"ciphertext",level:5},{value:"Returns",id:"returns-3",level:4},{value:"encodeFrame()",id:"encodeframe",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"data",id:"data-1",level:5},{value:"Returns",id:"returns-4",level:4},{value:"encrypt()",id:"encrypt",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"plaintext",id:"plaintext",level:5},{value:"Returns",id:"returns-5",level:4},{value:"finishInit()",id:"finishinit",level:3},{value:"Returns",id:"returns-6",level:4},{value:"mixIntoKey()",id:"mixintokey",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"data",id:"data-2",level:5},{value:"Returns",id:"returns-7",level:4},{value:"processHandshake()",id:"processhandshake",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"__namedParameters",id:"__namedparameters-1",level:5},{value:"noiseKey",id:"noisekey",level:5},{value:"Returns",id:"returns-8",level:4}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"function-makenoisehandler",children:"Function: makeNoiseHandler()"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"makeNoiseHandler"}),"(",(0,i.jsx)(r.code,{children:"__namedParameters"}),"): ",(0,i.jsx)(r.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Defined in: ",(0,i.jsx)(r.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/d5dc75887493f25877028d43b81101e050a3695b/src/Utils/noise-handler.ts#L16",children:"src/Utils/noise-handler.ts:16"})]}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(r.h3,{id:"__namedparameters",children:"__namedParameters"}),"\n",(0,i.jsx)(r.h4,{id:"keypair",children:"keyPair"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/api/type-aliases/KeyPair",children:(0,i.jsx)(r.code,{children:"KeyPair"})})}),"\n",(0,i.jsx)(r.h4,{id:"logger",children:"logger"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"ILogger"})}),"\n",(0,i.jsx)(r.h4,{id:"noise_header",children:"NOISE_HEADER"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Uint8Array"})}),"\n",(0,i.jsx)(r.h4,{id:"routinginfo",children:"routingInfo?"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBufferLike"}),">"]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"object"})}),"\n",(0,i.jsx)(r.h3,{id:"authenticate",children:"authenticate()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"authenticate"}),": (",(0,i.jsx)(r.code,{children:"data"}),") => ",(0,i.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"data",children:"data"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Uint8Array"})}),"\n",(0,i.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"void"})}),"\n",(0,i.jsx)(r.h3,{id:"decodeframe",children:"decodeFrame()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"decodeFrame"}),": (",(0,i.jsx)(r.code,{children:"newData"}),", ",(0,i.jsx)(r.code,{children:"onFrame"}),") => ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"newdata",children:"newData"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Uint8Array"}),"<",(0,i.jsx)(r.code,{children:"ArrayBufferLike"}),"> | ",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBufferLike"}),">"]}),"\n",(0,i.jsx)(r.h5,{id:"onframe",children:"onFrame"}),"\n",(0,i.jsxs)(r.p,{children:["(",(0,i.jsx)(r.code,{children:"buff"}),") => ",(0,i.jsx)(r.code,{children:"void"})]}),"\n",(0,i.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(r.h3,{id:"decrypt",children:"decrypt()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"decrypt"}),": (",(0,i.jsx)(r.code,{children:"ciphertext"}),") => ",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"ciphertext",children:"ciphertext"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Uint8Array"})}),"\n",(0,i.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">"]}),"\n",(0,i.jsx)(r.h3,{id:"encodeframe",children:"encodeFrame()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"encodeFrame"}),": (",(0,i.jsx)(r.code,{children:"data"}),") => ",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"data-1",children:"data"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Uint8Array"}),"<",(0,i.jsx)(r.code,{children:"ArrayBufferLike"}),"> | ",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBufferLike"}),">"]}),"\n",(0,i.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">"]}),"\n",(0,i.jsx)(r.h3,{id:"encrypt",children:"encrypt()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"encrypt"}),": (",(0,i.jsx)(r.code,{children:"plaintext"}),") => ",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"plaintext",children:"plaintext"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Uint8Array"})}),"\n",(0,i.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">"]}),"\n",(0,i.jsx)(r.h3,{id:"finishinit",children:"finishInit()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"finishInit"}),": () => ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(r.h3,{id:"mixintokey",children:"mixIntoKey()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"mixIntoKey"}),": (",(0,i.jsx)(r.code,{children:"data"}),") => ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"data-2",children:"data"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Uint8Array"})}),"\n",(0,i.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(r.h3,{id:"processhandshake",children:"processHandshake()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"processHandshake"}),": (",(0,i.jsx)(r.code,{children:"__namedParameters"}),", ",(0,i.jsx)(r.code,{children:"noiseKey"}),") => ",(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">>"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsx)(r.h5,{id:"__namedparameters-1",children:"__namedParameters"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/api/namespaces/proto/classes/HandshakeMessage",children:(0,i.jsx)(r.code,{children:"HandshakeMessage"})})}),"\n",(0,i.jsx)(r.h5,{id:"noisekey",children:"noiseKey"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/api/type-aliases/KeyPair",children:(0,i.jsx)(r.code,{children:"KeyPair"})})}),"\n",(0,i.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Promise"}),"<",(0,i.jsx)(r.code,{children:"Buffer"}),"<",(0,i.jsx)(r.code,{children:"ArrayBuffer"}),">>"]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);