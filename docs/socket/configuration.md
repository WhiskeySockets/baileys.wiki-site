---
sidebar_position: 1
---

# Configuration

The first step into getting anywhere with Baileys is configuring the socket.

Baileys is very open by default and allows you to configure various options.

All configuration is passed through the makeWASocket function. The config presents itself as the type [UserFacingSocketConfig](../api/type-aliases/UserFacingSocketConfig).

You can take a look at the type, I won't bore you here. The only required properties here strictly speaking are `auth`, `logger`, and `getMessage`.

### logger
Baileys uses the `pino` library to log by default, but after a recent change ([#1153](https://github.com/WhiskeySockets/Baileys/pull/1153)), as long as you define a similar type, you'll be OK.
As for pino, you can stream the logs into [a file](https://getpino.io/#/docs/api?id=pinodestinationopts-gt-sonicboom) or even consume them as a realtime [data stream](https://getpino.io/#/docs/transports).

### auth
You should always implement your own auth state.
Whether you decide a SQL, no-SQL or Redis auth state fits you best, that depends on your needs.

As of now, there are no actively maintained 3rd-party auth states, but if there are any I'll add them here.

<!--TODO: Look into usage and eventually remove this function or replace it-->
### getMessage
- It is important to note the [`getMessage`](../api/type-aliases/SocketConfig#getmessage) function. This functionality is needed for resending missing messages or decrypting poll votes.
- This should be implemented by making a call to your database or wherever the message is stored, using the message key as an index.

With that in mind, your configuration should look like this:
```ts
import makeWASocket from 'baileys'
import P from 'pino'
const sock = makeWASocket({
  auth: any, // auth state of your choosing,
  logger: P() // you can configure this as much as you want, even including streaming the logs to a ReadableStream for upload or saving to a file
})
```

### browser
The only consideration is when logging in using [pairing code](./connecting#pairing-code-login).
In that case you should only set a valid/logical browser config (e.g. [`Browsers`](../api/variables/Browsers)`.macOS("Google Chrome")`), otherwise the pair will fail.
Once you are fully paired, you can switch the browser config back to normal.


### version
It is recommended to leave the version settings to their default options.
In future releases, the WhatsApp version will be actively locked to the library to insure maximum compatibility, under the ProtoCocktail project.

Also, It is **not recommended** to set the latest version on your socket every time you connect (e.g. using [`fetchLatestWaWebVersion`](../api/functions/fetchLatestWaWebVersion)), as you may face incompabitility.
If you want to set a custom version, make sure your protobufs are up to date and that you are a few versions behind.

### syncFullHistory
Baileys emulates a web browser by default (in the connection headers).
If you want to emulate a desktop to get full chat history events, use the [`syncFullHistory`](../api/type-aliases/SocketConfig#syncfullhistory) option.

Also, your browser string should be a desktop:
```ts
browser: Browsers.macOS("Desktop") // can be Windows/Ubuntu instead of macOS
```

### markOnlineOnConnect
By default, Baileys sets your presence as online on connect. This will stop sending notifications to your phone.
To counter this, you can set the [`markOnlineOnConnect`](../api/type-aliases/SocketConfig#markonlineonconnect) option to `false`.

If you are still facing missing notifications, check the Presence **[reference missing]** page.

### cachedGroupMetadata
When sending messages to a group, the [`sendMessage`](../api/functions/makeWASocket#sendmessage) function will try to get the group participant list (to encrypt the message to each participant).

This is a problem and causes a ratelimit and potential bans from WhatsApp. To counter this, you should provide the socket with a `cachedGroupMetadata` cache.
```ts
const groupCache = new NodeCache({ /* ... */ })

const sock = makeWASocket({
    cachedGroupMetadata: async (jid) => groupCache.get(jid)
})
```

### Proxy Configuration
If you need to connect through a proxy, there are specific steps required to configure both the WebSocket and HTTP agents.

For a detailed guide, please see the [Connecting via a Proxy](./connecting-via-proxy.md) page.