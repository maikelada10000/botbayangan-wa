import makeWASocket from "@whiskeysockets/baileys"

async function start() {
  const sock = makeWASocket()
  sock.ev.on('messages.upsert', ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return
    const text = msg.message.conversation || ''
    if (text.toLowerCase() === 'halo') {
      sock.sendMessage(msg.key.remoteJid, { text: 'Hai juga!' })
    }
  })
}

start()
