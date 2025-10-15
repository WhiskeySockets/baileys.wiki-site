---
sidebar_position: 5
---

# Handling Messages
Messages, from a history sync or from a messages.upsert event, come in the form of [`WAMessage`](../api/interfaces/WAMessage). This is the protobuf that WhatsApp Web stores its messages in.

The message data specifically is in the format [`proto.IMessage`](../api/namespaces/proto/interfaces/IMessage).
You can send messages in this format using the [`sock.relayMessage`](../api/functions/makeWASocket#relaymessage) function.

## Understanding the WAMessage format
Explain the key, and other fields properly here.


That being said, let's look at some common message types:

# Text Messages
Text based messages come in the form of [`proto.IMessage.conversation`](../api/namespaces/proto/interfaces/IMessage#conversation) and [`proto.IMessage.extendedTextMessage`](../api/namespaces/proto/interfaces/IMessage#extendedtextmessage).
If the message comes in with reply data or attached metadata (link preview, group invite), then it is usually extendedTextMessage.
Status updates are also only extendedTextMessage as it contains the fields for the color/font of the text-based status updates.

Handling this should be as easy as extracting the text from the

# Media Messages
Media messages come in the following protobuf messages: [`proto.IMessage.audioMessage`](../api/namespaces/proto/interfaces/IMessage#audiomessage), [`proto.IMessage.documentMessage`](../api/namespaces/proto/interfaces/IMessage#documentmessage), [`proto.IMessage.imageMessage`](../api/namespaces/proto/interfaces/IMessage#imagemessage), video, sticker .. so on
Handle missing media : -> sock.updateMediaMessage
