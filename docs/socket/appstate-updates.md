---
sidebar_position: 10
---

# App State Updates
WA uses an encrypted form of communication to send chat/app updates. This has been implemented mostly and you can send the following updates:

### Archive

```javascript
 await sock.chatModify(
      {
        archive: true, // Make it false to Unarchive the chat
        lastMessages: [{ key, messageTimestamp }],
      },
      jid,
    );
```

### Pin/Unpin chat

```javascript
await sock.chatModify({ 
    pin: true // Make it false to unpin the chat
}, 
jid);
```

### Clear/Delete Messages or Chat

```javascript
await sock.chatModify(
      {
        delete: true,
        lastMessages: [{ key, messageTimestamp, }],
      },
      jid,
    );
```

### Star/Unstar

```javascript
await sock.chatModify(
      { 
        star: { 
            messages: [{ id, fromMe, }], 
            star: true // Make false to unstar the message
    } },
      jid,
    );
```

### Pin/Unpin a message

```javascript
await sock.sendMessage(jid, {
      pin: key,
      type: 1, // Change to 2 to unpin the message
      time: 604800, // 7 days in seconds
    });
```

### Change Profile Name

```javascript
await sock.updateProfileName('PurpShell');
```

### Block/Unblock a person

```javascript
await sock.updateBlockStatus(jid, 'block') // replace "block" with "unblock" to unblock a user
```

### Mute/Unmute

```javascript
 await sock.chatModify(
    { mute: 604800 },  // Muting the chat for 7 days, use "undefined" to unmute it
     jid
    )
```

### Mark chat read/unread

```javascript
await sock.chatModify(
      {{ 
        markRead: true,
        lastMessages: [{ key, messageTimestamp, }]
     }},
      jid,
    );
```
### Disappearing mode

```javascript
await sock.updateDefaultDisappearingMode(604800) // 7 days in seconds
```