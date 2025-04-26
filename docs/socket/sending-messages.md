---
sidebar_position: 6
---

# Sending Messages

## Text Messages

### Simple Text

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello from Baileys!'
})
```

### Text with Mentions

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: '@1234567890 Hello!',
  mentions: ['1234567890@s.whatsapp.net']
})
```
> To mention someone, add their JID to the `mentions` array.  
> In the text string, **omit** `@s.whatsapp.net` — just use `@1234567890`.

### Quoting a Message

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Hello' })

await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hi',
}, {
  quoted: msg
})
```
> Quoting lets you reply directly to an existing message by passing its message object.

---

## Media Messages

### Send Image from Buffer

```javascript
import fs from 'node:fs'

const buffer = fs.readFileSync('image.jpg')

await sock.sendMessage('1234567890@s.whatsapp.net', {
  image: buffer,
  caption: 'Here is an image'
})
```
> For local files, read them into a buffer and assign it to the `image` field.

### Send Video from URL

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  video: { url: 'https://example.com/video.mp4' },
  caption: 'Check this out!'
})
```
> Baileys automatically downloads and uploads media when given a URL.

---

## Special Message Options

### `contextInfo`

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello World',
  contextInfo: {}
})
```
> `contextInfo` allows attaching metadata to a message.  
> See the [ContextInfo docs](https://baileys.wiki/docs/api/namespaces/proto/namespaces/ContextInfo/) for more details.

### Link Preview

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello, this is the Baileys link\n\nhttps://github.com/WhiskeySockets/Baileys',
  linkPreview: {
    'canonical-url': 'https://github.com/WhiskeySockets/Baileys',
    'matched-text': 'https://github.com/WhiskeySockets/Baileys',
    title: 'Lightweight full-featured typescript/javascript WhatsApp Web API',
    description: 'Lightweight full-featured typescript/javascript WhatsApp Web API - WhiskeySockets/Baileys',
  },
});
```
> Link previews enhance links with a title, description, and optional thumbnail.

---

## Other Message Types

### Forwarding Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'An old message' })

await sock.sendMessage('1234567890@s.whatsapp.net', {
  forward: msg
})
```
> Forwarding resends an existing message without reconstructing it.

### Deleting Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'A Simple Message' })

const { key } = msg

await sock.sendMessage('1234567890@s.whatsapp.net', { delete: key })
```
> Deleting removes a message for either everyone or just yourself, depending on the context.

### Editing Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Hello User' })

const { key } = msg

await sock.sendMessage('1234567890@s.whatsapp.net', { 
  text: 'Welcome to Baileys', 
  edit: key 
})
```
> Editing allows you to change an already sent message.

### Reaction Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Hello User' })

const { key } = msg

await sock.sendMessage('1234567890@s.whatsapp.net', {
  react: {
    text: '👍', // Leave empty to remove the reaction
    key: key
  }
})
```
> Reactions are lightweight emoji responses tied to a specific message.

---

## Disappearing Messages (`ephemeralExpiration`)

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'This will disappear',
}, {
  ephemeralExpiration: 60 // in seconds
})
```
> Disappearing messages auto-delete after the specified time.
```