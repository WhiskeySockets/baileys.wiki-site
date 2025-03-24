"use strict";(self.webpackChunkbaileys_wiki=self.webpackChunkbaileys_wiki||[]).push([[24411],{21627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"socket/connecting","title":"Connecting","description":"After configuring the socket, comes connecting to WhatsApp servers.","source":"@site/docs/socket/connecting.md","sourceDirName":"socket","slug":"/socket/connecting","permalink":"/docs/socket/connecting","draft":false,"unlisted":false,"editUrl":"https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/docs/docs/socket/connecting.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Configuration","permalink":"/docs/socket/configuration"},"next":{"title":"History Sync","permalink":"/docs/socket/history-sync"}}');var o=t(74848),i=t(28453);const c={sidebar_position:2},a="Connecting",r={},d=[{value:"Auth state",id:"auth-state",level:4},{value:"Pairing Code login",id:"pairing-code-login",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"connecting",children:"Connecting"})}),"\n",(0,o.jsx)(n.p,{children:"After configuring the socket, comes connecting to WhatsApp servers."}),"\n",(0,o.jsxs)(n.p,{children:["There are 2 methods to pair your device, the ",(0,o.jsx)(n.a,{href:"https://faq.whatsapp.com/1317564962315842",children:"QR code"})," pairing method and the ",(0,o.jsx)(n.a,{href:"https://faq.whatsapp.com/1324084875126592",children:"phone number/pairing code"})," method."]}),"\n",(0,o.jsx)(n.p,{children:"After creating the socket, it will automatically connect and then start sending events."}),"\n",(0,o.jsxs)(n.p,{children:["The main event we should be concerned of at the moment is the ",(0,o.jsx)(n.code,{children:"connection.update"})," event.\nWhen listening onto this event, you receive various connection states and a QR string."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, utilising the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/qrcode",children:"qrcode"})," package:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// you can use this package to export a base64 image or a canvas element.\nimport QRCode from 'qrcode'\n\nsock.ev.on('connection.update', async (update) => {\n  const {connection, lastDisconnect, qr } = update\n  // on a qr event, the connection and lastDisconnect fields will be empty\n\n  // In prod, send this string to your frontend then generate the QR there\n  if (qr) {\n    // as an example, this prints the qr code to the terminal\n    console.log(await QRCode.toString(qr, {type:'terminal'})\n  }\n})\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After scanning the code, WhatsApp will ",(0,o.jsx)(n.strong,{children:"forcibly disconnect you"}),", forcing a reconnect such that we can present the authentication credentials.\n",(0,o.jsx)("u",{children:"Don't worry, this is not an error."}),"\nYou must handle this as well in the ",(0,o.jsx)(n.code,{children:"connnection.update"})," event:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import {DisconnectReason} from 'baileys'\nsock.ev.on('connection.update', (update) => {\n  const {connection, lastDisconnect} = update\n  if (connection === 'close' && (lastDisconnect?.error as Boom)?.output?.statusCode === DisconnectReason.restartRequired) {\n    // create a new socket, this socket is now useless\n  }\n})\n"})}),"\n",(0,o.jsx)(n.h4,{id:"auth-state",children:"Auth state"}),"\n",(0,o.jsx)(n.p,{children:"In order to reconnect successfully, we must pass a way for Baileys to persist credentials and encryption keys."}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["DONT EVER USE THE ",(0,o.jsx)(n.code,{children:"useMultiFileAuthState"})," IN PROD. YOU HAVE BEEN WARNED.\nThis function consumes a lot of IO. Only use its ",(0,o.jsx)(n.a,{href:"https://github.com/WhiskeySockets/Baileys/tree/master/src/Utils/use-multi-file-auth-state.ts",children:"implementation"})," as a guide.\nAs I said earlier ",(0,o.jsx)(n.a,{href:"./configuration#auth",children:"here"})]})}),"\n",(0,o.jsxs)(n.p,{children:["After obtaining the relevant creds from WhatsApp, Baileys will drop the ",(0,o.jsx)(n.code,{children:"creds.update"})," event to make sure you save them. This event triggers every time creds are updated."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'// DO NOT USE IN PROD!!!!\nconst { state, saveCreds } = await useMultiFileAuthState("auth_info_baileys");\n// will use the given state to connect\n// so if valid credentials are available -- it\'ll connect without QR\nconst sock = makeWASocket({ auth: state });\n// this will be called as soon as the credentials are updated\nsock.ev.on("creds.update", saveCreds);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"pairing-code-login",children:"Pairing Code login"}),"\n",(0,o.jsx)(n.p,{children:"When you want to request a pairing code, you should wait at least until the connecting/QR event like above.\nYou shouldn't worry about the QR events, they just exist there."}),"\n",(0,o.jsxs)(n.p,{children:["The phone number MUST be in ",(0,o.jsx)(n.strong,{children:"E.164 format without a plus sign"})," (+1 (234) 567-8901 -> 12345678901)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"sock.ev.on('connection.update', async (update) => {\n  const {connection, lastDisconnect, qr } = update\n  if (connection == \"connecting\" || !!qr) { // your choice\n    const code = await sock.requestPairingCode(phoneNumber)\n    // send the pairing code somewhere\n  }\n})\n"})}),"\n",(0,o.jsx)(n.p,{children:"Great! You should be connected now."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);