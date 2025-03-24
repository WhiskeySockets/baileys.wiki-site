"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[50150],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var c=i(96540);const s={},t=c.createContext(s);function o(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(t.Provider,{value:n},e.children)}},63901:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"api/type-aliases/ConnectionState","title":"Type Alias: ConnectionState","description":"ConnectionState: object","source":"@site/docs/api/type-aliases/ConnectionState.md","sourceDirName":"api/type-aliases","slug":"/api/type-aliases/ConnectionState","permalink":"/docs/api/type-aliases/ConnectionState","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/api/type-aliases/ConnectionState.md","tags":[],"version":"current","frontMatter":{},"sidebar":"refSidebar","previous":{"title":"Type Alias: ChatUpdate","permalink":"/docs/api/type-aliases/ChatUpdate"},"next":{"title":"Type Alias: CurveKeyPair","permalink":"/docs/api/type-aliases/CurveKeyPair"}}');var s=i(74848),t=i(28453);const o={},l="Type Alias: ConnectionState",r={},d=[{value:"Type declaration",id:"type-declaration",level:2},{value:"connection",id:"connection",level:3},{value:"isNewLogin?",id:"isnewlogin",level:3},{value:"isOnline?",id:"isonline",level:3},{value:"lastDisconnect?",id:"lastdisconnect",level:3},{value:"lastDisconnect.date",id:"lastdisconnectdate",level:4},{value:"lastDisconnect.error",id:"lastdisconnecterror",level:4},{value:"legacy?",id:"legacy",level:3},{value:"legacy.phoneConnected",id:"legacyphoneconnected",level:4},{value:"legacy.user?",id:"legacyuser",level:4},{value:"qr?",id:"qr",level:3},{value:"receivedPendingNotifications?",id:"receivedpendingnotifications",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"type-alias-connectionstate",children:"Type Alias: ConnectionState"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ConnectionState"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/WhiskeySockets/Baileys/blob/f19ffa7cca270d3b17bb04a019f68678ce1faca5/src/Types/State.ts#L5",children:"src/Types/State.ts:5"})]}),"\n",(0,s.jsx)(n.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,s.jsx)(n.h3,{id:"connection",children:"connection"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"connection"}),": ",(0,s.jsx)(n.a,{href:"/docs/api/type-aliases/WAConnectionState",children:(0,s.jsx)(n.code,{children:"WAConnectionState"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"connection is now open, connecting or closed"}),"\n",(0,s.jsx)(n.h3,{id:"isnewlogin",children:"isNewLogin?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"isNewLogin"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"is this a new login"}),"\n",(0,s.jsx)(n.h3,{id:"isonline",children:"isOnline?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"isOnline"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"if the client is shown as an active, online client.\nIf this is false, the primary phone and other devices will receive notifs"}),"\n",(0,s.jsx)(n.h3,{id:"lastdisconnect",children:"lastDisconnect?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"lastDisconnect"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"the error that caused the connection to close"}),"\n",(0,s.jsx)(n.h4,{id:"lastdisconnectdate",children:"lastDisconnect.date"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"date"}),": ",(0,s.jsx)(n.code,{children:"Date"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"lastdisconnecterror",children:"lastDisconnect.error"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"error"}),": ",(0,s.jsx)(n.code,{children:"Error"})," | ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legacy",children:"legacy?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"legacy"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"legacy connection options"}),"\n",(0,s.jsx)(n.h4,{id:"legacyphoneconnected",children:"legacy.phoneConnected"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"phoneConnected"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"legacyuser",children:"legacy.user?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"user"}),": ",(0,s.jsx)(n.a,{href:"/docs/api/interfaces/Contact",children:(0,s.jsx)(n.code,{children:"Contact"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"qr",children:"qr?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"qr"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"the current QR code"}),"\n",(0,s.jsx)(n.h3,{id:"receivedpendingnotifications",children:"receivedPendingNotifications?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"receivedPendingNotifications"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"has the device received all pending notifications while it was offline"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);