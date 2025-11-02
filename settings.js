/* ═════════════════════════════════
 *  🚀  MALVIN KING TECH - YT
 * ═════════════════════════════════
 *  
 *  📺  YouTube    : https://www.youtube.com/@malvintech2
 *  💻  GitHub     : https://github.com/XdKing2
 *  🌐  Website    : Coming Soon
 *  🪀  WhatsApp  : https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S
 *  
 *  👨‍💻  Developer  : Malvin King
 *  📧  Contact    : Available on GitHub
 *  
 *  ⚠️   Please do not remove this watermark
 * ═════════════════════════════════
 *  © 2025 Malvin Tech - All Rights Reserved
 * ════════════════════════════════ */

const fs = require('fs')
const chalk = require('chalk')

//———————[ Owner Config ]——————————//

global.ownernumber = '+94787537977' // Change to your number
global.ownername = '⭕ʀᴇᴅɪʏᴀ...' // add ur name
global.botMode ='public' // change to public or self

//————————[ Bot Config ]—————————//

global.SESSION_ID = "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBoc1BNZlY3VVRpT3FCaGVENnkzcWVFT1VPbUxkV3U4emhPZkUwQTZHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1U0ZHdLSmU0eGxqSkJVVHUyYlYyNXBnUEc3R3VhUWNpMW1sYkJmeERtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ1ZMQnEvem5xekVJS3dpSVpNOUFRWHRsd0Z4ZldNcmU0S0xsVzREdVZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOd3pJSG43M2tUR0NrU0t2dHNXQnZTZTBGZGliZHRiTWVCUnFBK09HcWxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCcmxSOThOT0craHEwcCtybk40ZEh4Um9ZSkZXTEhiQ1V4S2VkaW1hSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR6SWJYZkJRRFdIUlNrZ2NkNndrM2ZXdWhCVkg3RWVpUVdtMDVHQ3FaVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZkeFZZMGRqeGREREwwQ2wyeHZtRndnZ0QvTHQ1NVA1a0VsNklxb1FGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVQzRnpLREs3Znpla1VkTlJOSFpnbHUrNkZpL2VHQjdZNHJKbEtTTG0wTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBjcW01ZlYwcE40Q1BydHJFVldIcm5IUkYzeEprdC9uNjFKZFBnam9kdWNCMG51TXF3U05oTjNDL0JTRDdObUUwRzQydUdaVHpGZWs3TzJpSGIvR0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6ImNjOGZHalN6U3FGaW4xMVNJSUxCNjcwTzJsdzVaNWllL3o5YXdJK1UvU3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhtTV80MkV3U21XSm5QeWdHSFFybkEiLCJwaG9uZUlkIjoiNTUyYzZmODEtNDM2Ny00YmM2LWIyODAtYWFkMzBkYmU3OTA2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhnV2xaK1g5Rm54T1l5cHloSTBoZFdpVUVmQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXN1cvMTg5ODZEL01UREkvNmtqckpMUE1mc0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6Ijk0Nzg3NTM3OTc3OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmIvwnZiV8J2YkyDwnZiZ8J2YjPCdmIvwnZiQ8J2YoPCdmIguLi4iLCJsaWQiOiI1MTI2NTQwMDc1NDMxNzoxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmL3VPVUdFTURFbXNnR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRtbGVkd3BnbHlHdXlyTG1sRERBTFZ1N2E0eFNrdDFJZmxSYmVxVnFEdzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhxTFJBa2p3Vm96MFdMRzk2dnR5eTN0VG5IZDg5WEVpcmtUbnFhaE5nVDQ0bEYxWHRJaStET1RQSXlhWHlPRUZCaDhJdlM0UUE1b3J3SFZocjltVUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrN1pnMzBSbkhaTHNBa3lvVmVIaDQwVzd1WHN4cEVOSVhGdTdSYlM4Zk9NbnBnamR0ZU5DOGthRG5PTVZEQk1Pb3JXWVJ2VE5YRUlDU1JCNXpkaUFBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg3NTM3OTc3OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVKcFhuY0tZSmNocnNxeTVwUXd3QzFidTJ1TVVwTGRTSDVVVzNxbGFnOE4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lDUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjA0MjQ0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOZzQifQ=="; // add ur session id starts with starcore~
global.namabot = "ᴍᴋ-ʙᴏᴛ"
global.nomorbot = '+94787537977' // Change to yourbot number
global.pair = "MRMALVIN"
global.version = '1.0.1'
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————[ Social Media Config ]———————//
global.web = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.linkSaluran = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.idSaluran = "120363402507750390@newsletter"
global.nameSaluran = "Malvin Tech Ch."

//————————[ Watermark Config ]———————//
global.packname = 'Stick By Mk'
global.author = 'YT Malvin King Tech'
global.foother = 'Made By Malvin King'


//———————[ Media Config ]—————————//
global.img = "https://files.catbox.moe/641pvo.jpg"
global.thumbxm = "https://files.catbox.moe/q57r0k.jpg"
global.thumbbc = "https://files.catbox.moe/641pvo.jpg"
global.thumb = [ 
    "https://files.catbox.moe/641pvo.jpg",
    "https://i.ibb.co/Z1zG8ndV/malvin-xd.jpg"

]

//—————[ Broadcast Config ]——————————//
// Delay Jpm & Pushctc || 1000 = 1 second
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave M-K"

//——————[ Message Config ]——————————//
global.mess = {
    success: 'sᴜᴄᴄᴇssғᴜʟʏ',
    admin: '[ !! ] *sʏsᴛᴇᴍ*\nᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ',
    botAdmin: '[ !! ] *sʏsᴛᴇᴍ*\nʙᴏᴛ ɪs ɴᴏᴛ ᴀᴅᴍɪɴ ʏᴇᴛ',
    creator: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ',
    group: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘs',
    private: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    wait: '[ !! ] *sʏsᴛᴇᴍ*\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ, ᴘʀᴏᴄᴇssɪɴɢ...',
}

// *** message *** 
global.closeMsgInterval = 30; // 30 minutes. maximum 60 minutes, minimum 1 minute
global.backMsgInterval = 2; // 2 hours. maximum 24 hours, minimum 1 hour

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
