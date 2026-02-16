//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0J4alptcDd6d2NBTnRFWHY4eGpRTDZiTWF1NDV5S2ZFQ1E5N2QxamExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1E2M1ZhL3hIekV1cmJoZTFUKzBQUWVHRmNjWFErRXR4aE9nbzl2alZIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT2xOQkhCQVh5M0dldlFOeU1qQkM3SGRxRjBjTzNqWjZJaWxtQjVPRTBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJScjVmaXM4SUNYSzlCZ09oWDdiSVU2anJFWnpnUkxHQmd6bnpOYUZTL1ZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGSis0dUhMTU9aeXArelYyY0RtV05heTVFTFNYTno3aGZEOEdsYVhpRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQrSDRQalQrMUt4SkNLZ3dEendIU3Rva0lFbjFiQTBrU3FQUzc4ZmUxSE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVXV3M0cnVBeHlLZHpaYzNPdHV4R0pRajZ3cnN1azFvSEVRTDBBWlpVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWF4YlVlWWJwZEZsY0QxZVJRY3I5UDd4c041alVKeHh1ZDg2R00rT3dEWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijlja2ZaRkQweTVnS0NVMnVFblRJajZSSWhzejZDWm9oZXh3aGNoakJlM002NU5XNUh2NmVGMU9kMnBJQlBIeHVlQjU4YXp2dldZaFRsbzNISFU3eEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJVVk8wL3hnUTNNUnRJSzVwcnZmM3h1TnpLSWZXNTV3MTAxUGFQZURlZUs4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkpYR1FYMVRMIiwibWUiOnsiaWQiOiIyNTY3MDI0ODQxNjM6MzlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDc0NDMyNjI5Njc5NTE6MzlAbGlkIiwibmFtZSI6IkguQS5TLkguSy5JLk0uVS5HIOKbk++4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmpNM0pnTkVMZU96Y3dHR0NFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU09aaUJvdjNIZWN5VlVWOVJaSWY2WllRRjBTV2NwLzNtdWZCQ3lxM2ZsND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVUo5Q041Wm1UdnRySHFhYTRaSVNKZFZRa0E5Z0RvQ0xxMmVIb2NPbGprWG9SMCtjNHE0YnozSm5STWlTUEFPWkhGWHVCRktGVmFyaTRZM1Y0R2krQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5lVVhxY1hnR0NrYVRJUHdhU2ZzV21UU1ErZlhrd3RwcVczZkRsOHY3SWZ0Y1VZd0plZ0VObHFRRjg4RXFJb1htVTVSTjlSclB4Zzhka3NsQzVRRkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjA3NDQzMjYyOTY3OTUxOjM5QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVam1ZZ2FMOXgzbk1sVkZmVVdTSCttV0VCZEVsbktmOTVybndRc3F0MzVlIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MTI1OTcxOCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPeFEifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '256702484163' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
