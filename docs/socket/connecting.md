---
sidebar_position: 2
---

# Connecting

After configuring your socket, the next step is establishing and maintaining a stable WhatsApp connection.

Baileys supports two pairing methods:

- [QR code](https://faq.whatsapp.com/1317564962315842)
- [Phone number / pairing code](https://faq.whatsapp.com/1324084875126592)

After `makeWASocket(...)`, the socket connects automatically and starts emitting events.

## `connection.update` basics

The most important event is `connection.update`.
It reports connection state changes and may include a `qr` value.

```ts
import QRCode from 'qrcode'

sock.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect, qr } = update

  // qr can appear before full connection state exists
  if (qr) {
    // In production, send qr to your frontend and render there
    console.log(await QRCode.toString(qr, { type: 'terminal' }))
  }

  if (connection === 'open') {
    console.log('connected')
  }

  if (connection === 'close') {
    console.log('disconnected', lastDisconnect?.error)
  }
})
```

## Expected disconnect after pairing

After scanning QR (or finishing pairing code flow), WhatsApp usually forces a disconnect so the session can restart with the new credentials.
This is expected behavior.

Handle it by creating a new socket instance.

```ts
import { Boom } from '@hapi/boom'
import { DisconnectReason } from 'baileys'

sock.ev.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update

  if (connection === 'close') {
    const statusCode = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode

    if (statusCode === DisconnectReason.restartRequired) {
      // current socket instance should be discarded
      // create a fresh socket instance
      startSocket()
      return
    }
  }
})
```

## Reconnect strategy

In production, always classify disconnect reasons before reconnecting.

```ts
import { Boom } from '@hapi/boom'
import { DisconnectReason } from 'baileys'

function shouldReconnect(lastDisconnect?: { error?: unknown }) {
  const statusCode = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode

  if (statusCode === DisconnectReason.loggedOut) {
    // session is invalid; user must pair again
    return false
  }

  return true
}

sock.ev.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update

  if (connection === 'close' && shouldReconnect(lastDisconnect)) {
    startSocket()
  }
})
```

Recommended behavior:

- use bounded retry with backoff
- stop reconnect loop on `loggedOut`
- log disconnect reason and attempt count

## Auth state and `creds.update`

To reconnect successfully, you must persist credentials and key material.

Baileys emits `creds.update` frequently. Save it every time.

```ts
const { state, saveCreds } = await buildAuthState() // your own implementation

const sock = makeWASocket({ auth: state })

sock.ev.on('creds.update', async () => {
  await saveCreds()
})
```

:::warning
Avoid using `useMultiFileAuthState` in production.
It is useful for local testing, but production systems should use a durable auth layer (database and/or cache-backed strategy).
:::

## Pairing code login

When requesting pairing code, wait until the socket is connecting (or when QR appears).

Phone number must be **E.164 without `+`**.
Example: `+1 (234) 567-8901` -> `12345678901`.

```ts
sock.ev.on('connection.update', async (update) => {
  const { connection, qr } = update

  if (connection === 'connecting' || qr) {
    const phoneNumber = '12345678901'
    const code = await sock.requestPairingCode(phoneNumber)
    console.log('pairing code:', code)
  }
})
```

## Full connection skeleton

```ts
import makeWASocket, { DisconnectReason } from 'baileys'
import { Boom } from '@hapi/boom'

let sock: ReturnType<typeof makeWASocket> | undefined
let reconnectAttempts = 0

async function startSocket() {
  const { state, saveCreds } = await buildAuthState()

  sock = makeWASocket({
    auth: state,
    // other config options
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update

    if (connection === 'open') {
      reconnectAttempts = 0
      return
    }

    if (connection === 'close') {
      const statusCode = (lastDisconnect?.error as Boom | undefined)?.output?.statusCode
      const loggedOut = statusCode === DisconnectReason.loggedOut

      if (loggedOut) {
        console.log('session logged out; re-pair required')
        return
      }

      reconnectAttempts += 1
      const delay = Math.min(1000 * 2 ** reconnectAttempts, 30_000)
      setTimeout(() => void startSocket(), delay)
    }
  })
}

void startSocket()
```

## Final checklist

Before going live, confirm:

- `creds.update` is always persisted
- reconnect logic handles `loggedOut` separately
- restart-required disconnects recreate socket instances
- pairing code flow validates E.164 phone format
- retry strategy uses backoff and attempt limits
