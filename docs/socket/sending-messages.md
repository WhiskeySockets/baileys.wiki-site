---
sidebar_position: 6
---

# Sending Messages

One of the core features of any messaging experience is sending messages.

This page contains all the examples you need to start sending messages with Baileys.

## Chat JIDs

The first argument to `sendMessage` is the chat JID you want to send to.

```ts
// Phone-number JID
const pnJid = '123456789@s.whatsapp.net'

// Local identifier JID
const lidJid = '123456789@lid'

// Group JID
const groupJid = '120363000000000000@g.us'
```

For 1:1 chats, Baileys can send to either a PN JID (`@s.whatsapp.net`) or a LID JID (`@lid`). In v7, prefer using the JID WhatsApp gives you in events such as `messages.upsert`, `contacts.upsert`, `contacts.update`, or `group-participants.update`. If an incoming message uses a LID, reply using that LID instead of trying to force it back to a phone-number JID.

## Text Messages

```ts
await sock.sendMessage(jid, { text: 'hello world' })
```

To reply to an incoming message, pass the message as `quoted`.

```ts
sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0]
  const jid = msg.key.remoteJid

  if (!jid) {
    return
  }

  await sock.sendMessage(jid, { text: 'received' }, { quoted: msg })
})
```

You can mention users by passing their JIDs in `contextInfo.mentionedJid`.

```ts
await sock.sendMessage(groupJid, {
  text: 'hello @123456789',
  contextInfo: {
    mentionedJid: ['123456789@s.whatsapp.net']
  }
})
```

## Media Messages

Baileys accepts local buffers, streams, and URLs for media content.

```ts
await sock.sendMessage(jid, {
  image: { url: 'https://example.com/image.jpg' },
  caption: 'image caption'
})
```

```ts
await sock.sendMessage(jid, {
  video: { url: './video.mp4' },
  caption: 'video caption',
  gifPlayback: true
})
```

```ts
await sock.sendMessage(jid, {
  document: { url: './file.pdf' },
  fileName: 'file.pdf',
  mimetype: 'application/pdf'
})
```

## contextInfo, linkPreview, other formats

Baileys can generate high-quality link previews when the socket is configured with `generateHighQualityLinkPreview`.

```ts
const sock = makeWASocket({
  auth,
  generateHighQualityLinkPreview: true
})

await sock.sendMessage(jid, {
  text: 'https://whiskey.so'
})
```

For messages that need explicit context, pass `contextInfo` with the message content.

```ts
await sock.sendMessage(jid, {
  text: 'check this',
  contextInfo: {
    externalAdReply: {
      title: 'WhiskeySockets',
      body: 'Baileys documentation',
      sourceUrl: 'https://whiskey.so',
      mediaType: 1
    }
  }
})
```

## Forwarding Messages

```ts
await sock.sendMessage(jid, {
  forward: originalMessage
})
```

## Deleting messages

Delete a message by sending its message key.

```ts
await sock.sendMessage(jid, {
  delete: message.key
})
```

## Editing Messages

```ts
await sock.sendMessage(jid, {
  text: 'updated text',
  edit: message.key
})
```

## Reaction Messages

```ts
await sock.sendMessage(jid, {
  react: {
    text: '👍',
    key: message.key
  }
})
```

## note about disappearing mode (ephemeralExpiration)

You can set `ephemeralExpiration` in seconds per message when the chat has disappearing messages enabled.

```ts
await sock.sendMessage(jid, {
  text: 'this message follows disappearing mode'
}, {
  ephemeralExpiration: 24 * 60 * 60 // 24 hours, in seconds
})
```
