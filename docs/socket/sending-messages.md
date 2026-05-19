---
sidebar_position: 6
---

# Sending Messages

One of the core features of any messaging experience is sending messages. This page contains all the examples you need to start sending messages with Baileys.

## Overview

Send all types of messages with a single function using `sock.sendMessage()`:

```ts
const jid: string // WhatsApp ID
const content: AnyMessageContent // Message content
const options: MiscMessageGenerationOptions // Optional settings

await sock.sendMessage(jid, content, options)
```

## Text Messages

### Basic Text Message

```ts
await sock.sendMessage(jid, { text: 'hello word' })
```

### Quote Message (works with all types)

```ts
await sock.sendMessage(jid, { text: 'hello word' }, { quoted: message })
```

### Mention User (works with most types)

The `@number` format in text is optional for displaying mentions:

```ts
await sock.sendMessage(
    jid,
    {
        text: '@12345678901',
        mentions: ['12345678901@s.whatsapp.net']
    }
)
```

## Media Messages

### Supported Upload Formats

You can pass media in three ways:
- `{ stream: Stream }` - Readable stream (recommended for memory efficiency)
- `{ url: Url }` - Direct URL path
- `Buffer` - Direct buffer data

When specifying a media URL, Baileys never loads the entire buffer into memory and encrypts media as a readable stream.

### Image Message

```ts
await sock.sendMessage(
    jid,
    {
        image: {
            url: './Media/ma_img.png'
        },
        caption: 'hello word'
    }
)
```

### Video Message

```ts
await sock.sendMessage(
    jid,
    {
        video: {
            url: './Media/ma_gif.mp4'
        },
        caption: 'hello word',
        ptv: false // if set to true, will send as a video note
    }
)
```

### Gif Message

WhatsApp doesn't support `.gif` files. Send gifs as `.mp4` video with `gifPlayback` flag:

```ts
await sock.sendMessage(
    jid,
    {
        video: fs.readFileSync('Media/ma_gif.mp4'),
        caption: 'hello word',
        gifPlayback: true
    }
)
```

### Audio Message

To ensure audio messages work on all devices, convert with ffmpeg using these flags:

```bash
ffmpeg -i input.mp4 -avoid_negative_ts make_zero -ac 1 output.ogg
```

Required flags:
- `codec: libopus` (ogg file)
- `ac: 1` (one channel)
- `avoid_negative_ts make_zero`

```ts
await sock.sendMessage(
    jid,
    {
        audio: {
            url: './Media/audio.mp3'
        },
        mimetype: 'audio/mp4'
    }
)
```

### View Once Message

Send any media type as view-once by adding `viewOnce: true`:

```ts
await sock.sendMessage(
    jid,
    {
        image: {
            url: './Media/ma_img.png'
        },
        viewOnce: true, // works with video, audio too
        caption: 'hello word'
    }
)
```

### Thumbnail in Media Messages

Thumbnails are generated automatically when you add these dependencies:
- For images & stickers: `yarn add jimp` or `yarn add sharp`
- For videos: Install `ffmpeg` on your system

## contextInfo, linkPreview, other formats

### Sending Messages with Link Previews

1. By default, WhatsApp Web doesn't generate link previews
2. Baileys can generate link preview content automatically
3. Add `link-preview-js` as a dependency: `yarn add link-preview-js`
4. Send a link:

```ts
await sock.sendMessage(
    jid,
    {
        text: 'Hi, this was sent using https://github.com/whiskeysockets/baileys'
    }
)
```

### Location Message

```ts
await sock.sendMessage(
    jid,
    {
        location: {
            degreesLatitude: 24.121231,
            degreesLongitude: 55.1121221
        }
    }
)
```

### Contact Message

```ts
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Jeff Singh\n' // full name
            + 'ORG:Ashoka Uni;\n' // organization
            + 'TEL;type=CELL;type=VOICE;waid=911234567890:+91 12345 67890\n'
            + 'END:VCARD'

await sock.sendMessage(
    jid,
    {
        contacts: {
            displayName: 'Jeff',
            contacts: [{ vcard }]
        }
    }
)
```

### Poll Message

```ts
await sock.sendMessage(
    jid,
    {
        poll: {
            name: 'My Poll',
            values: ['Option 1', 'Option 2'],
            selectableCount: 1,
            toAnnouncementGroup: false // or true
        }
    }
)
```

## Forwarding Messages

You need a message object from your store or a WAMessage object:

```ts
const msg = getMessageFromStore() // implement this on your end
await sock.sendMessage(jid, { forward: msg })
```

## Deleting messages

### Delete for Everyone

```ts
const msg = await sock.sendMessage(jid, { text: 'hello word' })
await sock.sendMessage(jid, { delete: msg.key })
```

**Note:** Deleting for yourself is done via `chatModify` - see the Modifying Chats section.

## Editing Messages

You can edit previously sent messages:

```ts
await sock.sendMessage(jid, {
    text: 'updated text goes here',
    edit: response.key,
})
```

## Reaction Messages

Send reactions using the message key:

```ts
await sock.sendMessage(
    jid,
    {
        react: {
            text: '💖', // use an empty string to remove the reaction
            key: message.key
        }
    }
)
```

### Pin Message

Pin messages for specific durations:

**Available durations:**

| Time | Seconds   |
|------|-----------|
| 24h  | 86,400    |
| 7d   | 604,800   |
| 30d  | 2,592,000 |

```ts
await sock.sendMessage(
    jid,
    {
        pin: {
            type: 1, // 0 to remove
            time: 86400,
            key: message.key
        }
    }
)
```

## note about disappearing mode (ephemeralExpiration)

### Disappearing Messages

Set messages to auto-delete after a specified time:

**Available durations:**

| Time   | Seconds   |
|--------|-----------|
| Remove | 0         |
| 24h    | 86,400    |
| 7d     | 604,800   |
| 90d    | 7,776,000 |

```ts
// Enable disappearing messages for chat
await sock.sendMessage(
    jid,
    { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }
)

// Send individual disappearing message
await sock.sendMessage(
    jid, 
    { text: 'hello' }, 
    { ephemeralExpiration: WA_DEFAULT_EPHEMERAL }
)

// Disable disappearing messages
await sock.sendMessage(
    jid,
    { disappearingMessagesInChat: false }
)
```

## Broadcast & Stories

Send messages to broadcasts and stories by adding special options:

```ts
await sock.sendMessage(
    jid,
    {
        image: {
            url: url
        },
        caption: caption
    },
    {
        backgroundColor: backgroundColor,
        font: font,
        statusJidList: statusJidList,
        broadcast: true
    }
)
```

**Parameters:**
- `broadcast: true` - Enables broadcast mode
- `statusJidList` - Array of recipient JIDs who will receive the status
- `backgroundColor`, `font` - Optional styling for status messages

## WhatsApp IDs Explained

Understanding JID (WhatsApp ID) formats:

- **Individual users:** `[country code][phone number]@s.whatsapp.net`
  - Example: `+19999999999@s.whatsapp.net`
- **Groups:** `[timestamp]-[random]@g.us`
  - Example: `123456789-123345@g.us`
- **Broadcast lists:** `[timestamp]@broadcast`
- **Stories:** `status@broadcast`
