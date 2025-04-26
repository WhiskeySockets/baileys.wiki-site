---
sidebar_position: 6
---

# Sending Messages

## Text Messages

To send a plain text message, use:

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello from Baileys!'
})
```
---

### With Mentions

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: '@1234567890 Hello!',
  mentions: ['1234567890@s.whatsapp.net']
})
```
> To mention someone, include their Jid in the `mentions` array — this highlights them in the chat. Also note that you on the text you remove the `@s.whatsapp.net` from the string.

---

### Quoting Another Message

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello'
})

await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hi',
}, {
  quoted: msg
})
```
> Quoting a message allows you to reply directly to any and kind of message, by passing the message object.

## Media Messages

### Send Image via Buffer

```javascript
import fs from 'node:fs'

const buffer = fs.readFileSync('image.jpg')

await sock.sendMessage('1234567890@s.whatsapp.net', {
  image: buffer,
  caption: 'Here is an image'
})
```
> Sending media from a local file requires reading it into a buffer and passing it as the `image` field.

---

### Send Video via URL

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  video: { url: 'https://example.com/video.mp4' },
  caption: 'Check this out!'
})
```
> Media can also be sent via URLs; Baileys will automatically download and upload the file.

---

## contextInfo, linkPreview

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Hello World', 
  contextInfo: {}})
```
> How to apply a [contextInfo](https://baileys.wiki/docs/api/namespaces/proto/namespaces/ContextInfo/) 

- `linkPreview` TO DO

## Forwarding Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'an old message' })

await sock.sendMessage('1234567890@s.whatsapp.net', {
  forward: msg
})
```
> Forwarding a message resends an existing message without needing to reconstruct its contents manually.

---

## Deleting Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'A Simple Message' })

const { key } = msg

await sock.sendMessage('1234567890@s.whatsapp.net', { delete: key })
```
> Deleting messages removes them for everyone or for the sender depending on the context.

---

## Editing Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Hello User' })

const { key } = msg

await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Welcome to Baileys', edit: key })
```
> Editing allows modifying an already sent message without resending a new one.

---

## Reaction Messages

```javascript
const msg = await sock.sendMessage('1234567890@s.whatsapp.net', { text: 'Hello User' })

const { key } = msg

await sock.sendMessage('1234567890@s.whatsapp.net', {
  react: {
    text: '👍', // leave empty to remove reaction from a message
    key: key
  }
})
```
> Reactions are lightweight responses (like emojis) tied to a specific message.

---

## Note about Disappearing Mode (`ephemeralExpiration`)

When sending a message, you can set `ephemeralExpiration` to control disappearing messages:

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'This will disappear',
}, {
  ephemeralExpiration: 60 // seconds
})
```
> Disappearing messages automatically delete after a set time.