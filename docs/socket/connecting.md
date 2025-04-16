---
sidebar_position: 2
---

# Connecting

After configuring the socket, comes connecting to WhatsApp servers.

There are 2 methods to pair your device, the [QR code](https://faq.whatsapp.com/1317564962315842) pairing method and the [phone number/pairing code](https://faq.whatsapp.com/1324084875126592) method.

After creating the socket, it will automatically connect and then start sending events.

The main event we should be concerned of at the moment is the `connection.update` event.
When listening onto this event, you receive various connection states and a QR string.

For example, utilising the [qrcode](https://www.npmjs.com/package/qrcode) package:
```ts
// you can use this package to export a base64 image or a canvas element.
import QRCode from 'qrcode'

sock.ev.on('connection.update', async (update) => {
  const {connection, lastDisconnect, qr } = update
  // on a qr event, the connection and lastDisconnect fields will be empty

  // In prod, send this string to your frontend then generate the QR there
  if (qr) {
    // as an example, this prints the qr code to the terminal
    console.log(await QRCode.toString(qr, {type:'terminal'}))
  }
})
```

After scanning the code, WhatsApp will **forcibly disconnect you**, forcing a reconnect such that we can present the authentication credentials.
<u>Don't worry, this is not an error.</u>
You must handle this as well in the `connnection.update` event:
```ts
import {DisconnectReason} from 'baileys'
sock.ev.on('connection.update', (update) => {
  const {connection, lastDisconnect} = update
  if (connection === 'close' && (lastDisconnect?.error as Boom)?.output?.statusCode === DisconnectReason.restartRequired) {
    // create a new socket, this socket is now useless
  }
})
```

#### Auth state
In order to reconnect successfully, we must pass a way for Baileys to persist credentials and encryption keys.

:::warning
DONT EVER USE THE `useMultiFileAuthState` IN PROD. YOU HAVE BEEN WARNED.
This function consumes a lot of IO. Only use its [implementation](https://github.com/WhiskeySockets/Baileys/tree/master/src/Utils/use-multi-file-auth-state.ts) as a guide.
As I said earlier [here](./configuration#auth)
:::

After obtaining the relevant creds from WhatsApp, Baileys will drop the `creds.update` event to make sure you save them. This event triggers every time creds are updated.
```ts
// DO NOT USE IN PROD!!!!
const { state, saveCreds } = await useMultiFileAuthState("auth_info_baileys");
// will use the given state to connect
// so if valid credentials are available -- it'll connect without QR
const sock = makeWASocket({ auth: state });
// this will be called as soon as the credentials are updated
sock.ev.on("creds.update", saveCreds);
```


## Pairing Code login
When you want to request a pairing code, you should wait at least until the connecting/QR event like above.
You shouldn't worry about the QR events, they just exist there.

The phone number MUST be in **E.164 format without a plus sign** (+1 (234) 567-8901 -> 12345678901).
```ts
sock.ev.on('connection.update', async (update) => {
  const {connection, lastDisconnect, qr } = update
  if (connection == "connecting" || !!qr) { // your choice
    const code = await sock.requestPairingCode(phoneNumber)
    // send the pairing code somewhere
  }
})
```

Great! You should be connected now.
