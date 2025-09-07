---
sidebar_position: 9
---

# Privacy
Baileys has some missing privacy settings as of the writing of this page. The currently exposed methods are:


## Blocklist
### fetchBlocklist
You can fetch the list of people you are currently blocking:
```js
const response = await sock.fetchBlocklist()
```
### updateBlockStatus
This function can be used to block or unblock a WhatsApp user.
It takes these two options: `'block'` and `'unblock'`
```js
await sock.updateBlockStatus(jid, 'block') // Block user
```

## Privacy Settings
### fetchPrivacySettings
This method can be used to get all the privacy settings of the user.
```js
// boolean option represents a force get (without hitting the cache)
const privacySettings = await sock.fetchPrivacySettings(true);
```

The return type isn't currently exposed, but that's a work in progress.

### Updating Privacy Settings
Instead of one method to also update the privacy settings, Baileys exposes the following set of functions.
Since they are mostly self-explanatory, I'll group them together instead.

Here's a usage example:
```js
// sock.update<insert here>Privacy(<insert option here>)
await sock.updateOnlinePrivacy('match_last_seen')
```

---
#### updateLastSeenPrivacy:
#### updateProfilePicturePrivacy:
#### updateStatusPrivacy:
#### updateGroupsAddPrivacy:

These kinds all absorb the following set of options:
- `'all'` which exposes the setting to everyone
- `'contacts'` which exposes the setting to only your contacts
- `'contacts_blacklist'` which exposes the setting to your contacts except those you specify. People list support isn't there yet in Baileys.
- `'none'` which exposes the setting to nobody (only you)
---
#### updateOnlinePrivacy:
This function has two options, `'all'` and `'match_last_seen'`. The latter option follows the setting set in [updateLastSeenPrivacy](#updatelastseenprivacy).

---
#### updateReadReceiptsPrivacy:
This function has two options, `'all'` or `'none'`.

---
