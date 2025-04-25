---
sidebar_position: 6
---

# Sending Messages
One of the core features of any messaging experience is sending messages.

This page contains all the examples you need to start sending messages with Baileys.

## Text Messages

To send a plain text message, use:

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello from Baileys!'
})
```

### With Mentions

```javascript
await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: '@user Hello!',
  mentions: ['1234567890@s.whatsapp.net']
})
```

### Quoting Another Message

```javascript
const message = await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hello'
})

await sock.sendMessage('1234567890@s.whatsapp.net', {
  text: 'Hi',
}, {
  quoted: message
})
```

## Media Messages

## contextInfo, linkPreview, other formats


## Forwarding Messages

## Deleting messages

## Editing Messages

## Reaction Messages


## note about disappearing mode (ephemeralExpiration)
