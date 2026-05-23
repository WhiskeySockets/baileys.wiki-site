---
sidebar_position: 3
---

# History Sync
After connecting successfully, the socket will try to download and process old chats, contacts and messages.
<!-- Change to `history-sync.upsert` when that is added -->
This data is delivered to you via the `messaging-history.set` event.
Here's an example on how to handle this data:
```ts
sock.ev.on('messaging-history.set', ({
	chats: newChats,
	contacts: newContacts,
	messages: newMessages,
	syncType
}) => {
  // handle the chats, contacts and messages
})
```

You should store this data in your database and use it however you want.
However, you should keep a record of messages so you can provide those messages to the [`getMessage`](./configuration#getmessage) function in the socket config.

## Disabling History Sync
You can choose to disable or receive no history sync messages by setting the [`shouldSyncHistoryMessage`](../api/type-aliases/SocketConfig#shouldsynchistorymessage) option to `() => false`.

## On-Demand History Sync

It is possible to ask the main device for history data beyond the initial sync. This is done using the [`sock.fetchMessageHistory`](../api/functions/makeWASocket#fetchmessagehistory) function.

### Function signature

```ts
fetchMessageHistory(
  count: number,
  oldestMsgKey: WAMessageKey,
  oldestMsgTimestamp: number | Long
): Promise<string>
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `count` | `number` | Number of messages to fetch going backward from the anchor point |
| `oldestMsgKey` | `WAMessageKey` | The message key to use as anchor. Must include `remoteJid`, `id`, and `fromMe`. WhatsApp returns messages **older than** this key |
| `oldestMsgTimestamp` | `number \| Long` | Timestamp of the anchor message **in milliseconds** (the internal field name is `oldestMsgTimestampMs`). Must correspond to the message identified by `oldestMsgKey` |

### How it works

1. Baileys sends a `PeerDataOperationRequestMessage` with type `HISTORY_SYNC_ON_DEMAND` to WhatsApp
2. WhatsApp processes the request and assigns a unique `peerDataRequestSessionId`
3. The response arrives via the **`messaging-history.set`** event (not `messages.upsert`) with `syncType === proto.HistorySync.HistorySyncType.ON_DEMAND`
4. The function returns the protocol message ID (a string), not the messages themselves

### Important notes

- **`oldestMsgKey` must be a real message key.** Passing an empty `id` may cause WhatsApp to silently ignore the request. Store the key of the last received message per chat and use it as anchor for subsequent requests.
- **Timestamp is in milliseconds**, not seconds. If you store Baileys' `messageTimestamp` (which is in seconds), multiply by 1000.
- **ON_DEMAND syncs bypass `processedHistoryMessages` tracking** — unlike initial/recent/full syncs, on-demand requests can be repeated without being filtered by the deduplication mechanism.
- **Messages arrive in a single batch** via `messaging-history.set`, not incrementally.

### Example

```ts
import { proto } from '@whiskeysockets/baileys';

// Store the last message key per chat after each history sync or message received
const lastKnownMessages = new Map<string, { key: WAMessageKey, timestamp: number }>();

// When you receive messages, save the newest as anchor
sock.ev.on('messaging-history.set', ({ messages, syncType }) => {
  for (const msg of messages) {
    const jid = msg.key?.remoteJid;
    if (!jid) continue;
    const ts = Number(msg.messageTimestamp || 0) * 1000; // convert to ms
    const existing = lastKnownMessages.get(jid);
    if (!existing || ts > existing.timestamp) {
      lastKnownMessages.set(jid, { key: msg.key!, timestamp: ts });
    }
  }

  // Handle on-demand responses separately if needed
  if (syncType === proto.HistorySync.HistorySyncType.ON_DEMAND) {
    console.log('Received on-demand history:', messages.length, 'messages');
  }
});

// Request history for a specific chat
async function requestHistory(chatJid: string, count: number = 50) {
  const anchor = lastKnownMessages.get(chatJid);
  if (!anchor) {
    console.log('No anchor for chat, cannot request history');
    return;
  }

  const messageId = await sock.fetchMessageHistory(
    count,
    anchor.key,
    anchor.timestamp // already in ms
  );
  console.log('Requested history, protocol msg ID:', messageId);
  // Messages will arrive via 'messaging-history.set' event
}
```

### Persistence pattern

For applications that connect/disconnect periodically (e.g., cron jobs), persist anchors to disk so subsequent runs can request only new messages:

```ts
import { readFileSync, writeFileSync } from 'fs';

const ANCHORS_FILE = './history-anchors.json';

function loadAnchors(): Map<string, { key: WAMessageKey, timestamp: number }> {
  try {
    const data = JSON.parse(readFileSync(ANCHORS_FILE, 'utf-8'));
    return new Map(Object.entries(data));
  } catch {
    return new Map();
  }
}

function saveAnchors(anchors: Map<string, { key: WAMessageKey, timestamp: number }>) {
  writeFileSync(ANCHORS_FILE, JSON.stringify(Object.fromEntries(anchors), null, 2));
}
```
