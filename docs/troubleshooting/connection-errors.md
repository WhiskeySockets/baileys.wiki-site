---
title: Troubleshooting Connection Errors
sidebar_position: 1
---

# Troubleshooting Connection Errors (405, 503)

If you are experiencing sudden connection failures with a `stream:error` and a status code like `405` (Method Not Allowed) or `503` (Service Unavailable), it is almost certainly due to an expired WhatsApp Web version.

## The Problem: Expiring WhatsApp Versions

WhatsApp regularly updates its Web API and sets an expiration date for older versions (typically around two months after release). When a version expires, WhatsApp's servers will reject connection attempts from clients using that outdated version, leading to a disconnect.

While Baileys is updated periodically with a new version, if you aren't on the latest release, you might encounter this issue.

## The Solution: Fetch the Latest Version Dynamically

The most robust solution is to fetch the latest WhatsApp Web version automatically every time your application starts. Baileys provides a utility function, `fetchLatestWaWebVersion`, for this exact purpose.

Here is how you should structure your `makeWASocket` initialization to be resilient against these errors:

```typescript title="connect.ts"
import makeWASocket, {
  DisconnectReason,
  fetchLatestWaWebVersion,
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";

async function connectToWhatsApp() {
  // Fetch the latest version of WA Web
  const { version, isLatest } = await fetchLatestWaWebVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);

  const sock = makeWASocket({
    version, // Use the fetched version
    // ... your other socket config
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const statusCode = (lastDisconnect?.error as Boom)?.output?.statusCode;

      // Reconnect if the error is not a logout
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.log(
        "connection closed due to ",
        lastDisconnect?.error,
        ", reconnecting ",
        shouldReconnect
      );

      if (shouldReconnect) {
        // Always attempt to reconnect
        connectToWhatsApp();
      }
    } else if (connection === "open") {
      console.log("opened connection");
    }
  });

  // ... other event listeners
}

// Run the connection function
connectToWhatsApp();
```

By implementing this pattern, your application will automatically use the latest compatible version, drastically reducing connection failures and improving stability.
