---
sidebar_position: 3
title: Connecting via a Proxy
---

# Connecting via a Proxy (Node.js)

To route all Baileys traffic through a proxy, you must configure agents for both its WebSocket (`ws`) and HTTP (`fetch`) connections. Here’s the recommended setup:

**1. Install proxy dependencies:**

```bash npm2yarn
npm install https-proxy-agent undici
```

**2. Configure `makeWASocket`:**

```ts
import makeWASocket from "@whiskeysockets/baileys";
import { HttpsProxyAgent } from "https-proxy-agent";
import { ProxyAgent } from "undici";

// Your proxy URL, e.g., 'http://user:pass@host:port'
const proxyUrl = process.env.PROXY_URL || "http://proxy.example.com:8080";

const sock = makeWASocket({
  // agent for the WebSocket connection
  agent: new HttpsProxyAgent(proxyUrl),

  // ✅ Use options.dispatcher for all HTTP requests
  options: {
    dispatcher: new ProxyAgent(proxyUrl),
  },

  // ... other socket options
});
```

:::note
The `agent` property is used for the WebSocket connection. The `options.dispatcher` property is used for all HTTP requests (like media uploads/downloads) and is the recommended approach. The old `fetchAgent` property is now deprecated and should be removed.
:::
