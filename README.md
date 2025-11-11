# baileys.wiki - Guide & Docs
A website that serves documentation and guides for the [Baileys](https://github.com/whiskeysockets/baileys) project.
### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const { Boom } = require("@hapi/boom")

async function connectBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth")
  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state
  })

  sock.ev.on("creds.update", saveCreds)
}

connectBot()whatsApp web 
