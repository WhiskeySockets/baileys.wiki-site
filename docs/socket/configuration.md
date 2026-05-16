---
sidebar_position: 1
---

# Configuration

The first step to using Baileys in production is a safe socket configuration.

All options are passed to `makeWASocket(...)`, and the full config shape is available in [`UserFacingSocketConfig`](../api/type-aliases/UserFacingSocketConfig).

This page focuses on what matters most in real deployments, with practical patterns and examples.

## Minimum required options

In practice, you should always provide:

- `auth`
- `logger`
- `getMessage`

```ts
import makeWASocket from 'baileys'
import P from 'pino'

const sock = makeWASocket({
  auth: state,
  logger: P({ level: 'info' }),
  getMessage: async (key) => {
    // load from your DB/cache by message key
    return undefined
  },
})
```

## `logger`

Baileys defaults to `pino`-style logging. You can use `pino` directly or adapt your own logger to the same shape.

Good production practice:

- set log level by environment (`info`, `warn`, `error`)
- enrich logs with `connectionId` and request metadata
- ship logs to files or a centralized sink

## `auth`

You should implement your own auth state and persistence strategy.

Typical strategies:

- local filesystem only (simpler, lower resilience)
- Redis + disk fallback
- MySQL + Redis cache + disk fallback

### Why this matters

When `creds.update` is emitted frequently, you need durable persistence with fallback paths.
If one storage layer fails, your bot should continue running and recover automatically.

## `getMessage`

`getMessage` is required for retrying messages and decrypting some events (like poll updates).

You should resolve messages by key from cache/DB instead of memory only.

```ts
import type { WAMessageKey } from 'baileys'

const getMessage = async (key: WAMessageKey) => {
  const remoteJid = key.remoteJid
  const id = key.id
  if (!remoteJid || !id) return undefined

  const row = await db.messages.findUnique({
    where: { remoteJid_id: { remoteJid, id } },
  })

  return row?.message ?? undefined
}
```

## `browser`

This is especially important for [pairing code login](./connecting#pairing-code-login).

Use a valid browser profile when pairing:

```ts
import { Browsers } from 'baileys'

browser: Browsers.macOS('Google Chrome')
```

After successful pairing, you can switch to your normal profile.

Example for production identity:

```ts
browser: Browsers.ubuntu('Production Bot')
```

## `version`

By default, prefer Baileys defaults.

Avoid forcing `fetchLatestWaWebVersion` on every connection, since this can introduce compatibility issues when protobuf/schema behavior changes.

If you manage version manually:

- cache fetched versions (avoid querying each boot)
- keep fallback to `DEFAULT_CONNECTION_CONFIG.version`
- roll forward gradually

## `syncFullHistory` and history policy

Baileys identifies itself as web by default.
If you need desktop-like history behavior, use desktop browser headers and tune history sync carefully.

```ts
import { Browsers } from 'baileys'

syncFullHistory: false,
browser: Browsers.macOS('Desktop')
```

In production, prefer a policy-based approach for history sync to avoid large event bursts at every reconnect.

## `markOnlineOnConnect`

By default, Baileys marks your account online after connecting, which may reduce phone push notifications.

Set this to `false` if you need to preserve mobile notifications:

```ts
markOnlineOnConnect: false
```

## `cachedGroupMetadata`

When sending to groups, Baileys needs participant metadata for encryption.
Without caching, repeated fetches can increase rate-limit risk.

```ts
import NodeCache from 'node-cache'

const groupCache = new NodeCache({ stdTTL: 300, useClones: false })

const sock = makeWASocket({
  cachedGroupMetadata: async (jid) => groupCache.get(jid),
})
```

For larger bots, consider Redis-backed caches.

## Production-ready socket example

```ts
import makeWASocket, { Browsers, DEFAULT_CONNECTION_CONFIG, fetchLatestBaileysVersion } from 'baileys'
import pino from 'pino'

const log = pino({ level: process.env.LOG_LEVEL || 'info' })

let cachedVersion: { version: typeof DEFAULT_CONNECTION_CONFIG.version; ts: number } | null = null
const VERSION_TTL_MS = 24 * 60 * 60 * 1000

async function resolveVersion() {
  if (cachedVersion && Date.now() - cachedVersion.ts < VERSION_TTL_MS) {
    return cachedVersion.version
  }

  try {
    const latest = await fetchLatestBaileysVersion()
    if ('version' in latest && latest.version) {
      cachedVersion = { version: latest.version, ts: Date.now() }
      return latest.version
    }
  } catch (err) {
    log.warn({ err }, 'failed to fetch Baileys version, using fallback')
  }

  return cachedVersion?.version ?? DEFAULT_CONNECTION_CONFIG.version
}

export async function createSocket({ auth, getMessage, cachedGroupMetadata }: {
  auth: any
  getMessage: (key: any) => Promise<any>
  cachedGroupMetadata?: (jid: string) => Promise<any>
}) {
  const version = await resolveVersion()

  return makeWASocket({
    auth,
    version,
    logger: log,
    browser: Browsers.ubuntu('Production Bot'),
    markOnlineOnConnect: false,
    syncFullHistory: false,
    getMessage,
    cachedGroupMetadata,
  })
}
```

## Final checklist

Before going live, confirm:

- auth persistence is durable (`creds.update` is handled)
- `getMessage` reads from persistent storage
- group metadata caching is enabled
- browser config is valid for pairing mode
- version handling has safe fallback behavior
- online presence behavior (`markOnlineOnConnect`) matches your product expectations
