let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:JEONBOT;;\nFN:JEONBOT\nORG:JEONBOT\nTITLE:\nitem1.TEL;waid=56920027086:56920027086\nitem1.X-ABLabel:JEONBOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:JEONBOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'JEONBOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
