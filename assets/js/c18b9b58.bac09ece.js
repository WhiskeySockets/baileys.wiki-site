"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[53443],{28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>a});var t=n(96540);const o={},i=t.createContext(o);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:s},e.children)}},61920:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"socket/history-sync","title":"History Sync","description":"After connecting successfully, the socket will try to download and process old chats, contacts and messages.","source":"@site/docs/socket/history-sync.md","sourceDirName":"socket","slug":"/socket/history-sync","permalink":"/docs/socket/history-sync","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/socket/history-sync.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Connecting","permalink":"/docs/socket/connecting"},"next":{"title":"Receiving Updates","permalink":"/docs/socket/receiving-updates"}}');var o=n(74848),i=n(28453);const c={sidebar_position:3},a="History Sync",r={},d=[{value:"Disabling History Sync",id:"disabling-history-sync",level:2},{value:"On-Demand History Sync",id:"on-demand-history-sync",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"history-sync",children:"History Sync"})}),"\n",(0,o.jsx)(s.p,{children:"After connecting successfully, the socket will try to download and process old chats, contacts and messages."}),"\n",(0,o.jsxs)(s.p,{children:["This data is delivered to you via the ",(0,o.jsx)(s.code,{children:"messaging-history.set"})," event.\nHere's an example on how to handle this data:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"sock.ev.on('messaging-history.set', ({\n\tchats: newChats,\n\tcontacts: newContacts,\n\tmessages: newMessages,\n\tsyncType\n}) => {\n  // handle the chats, contacts and messages\n})\n"})}),"\n",(0,o.jsxs)(s.p,{children:["You should store this data in your database and use it however you want.\nHowever, you should keep a record of messages so you can provide those messages to the ",(0,o.jsx)(s.a,{href:"./configuration#getmessage",children:(0,o.jsx)(s.code,{children:"getMessage"})})," function in the socket config."]}),"\n",(0,o.jsx)(s.h2,{id:"disabling-history-sync",children:"Disabling History Sync"}),"\n",(0,o.jsxs)(s.p,{children:["You can choose to disable or receive no history sync messages by setting the ",(0,o.jsx)(s.a,{href:"../api/type-aliases/SocketConfig#shouldsynchistorymessage",children:(0,o.jsx)(s.code,{children:"shouldSyncHistoryMessage"})})," option to ",(0,o.jsx)(s.code,{children:"() => false"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"on-demand-history-sync",children:"On-Demand History Sync"}),"\n",(0,o.jsxs)(s.p,{children:["It is possible ask the main device for history data beyond the initial sync.\nThis is done using the ",(0,o.jsx)(s.a,{href:"../api/functions/makeWASocket#fetchmessagehistory",children:(0,o.jsx)(s.code,{children:"sock.fetchMessageHistory"})})," function."]})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);