const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_41_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0eDZWeTlqZ2hweGErUTN1WnVkRGgrQVIrcVUzeHRRVStITE9zSStUR1pRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzNEtsQkJPaFJFdWlvUnZndkoza2RnXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzYTUxYzEzLTRiMTQtNDZjMS1hMGJiLTZlOGRiODY0M2NlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAxMDcsXG4gICAgICAxODAsXG4gICAgICA4NCxcbiAgICAgIDIyNixcbiAgICAgIDIxNixcbiAgICAgIDQ0LFxuICAgICAgNDQsXG4gICAgICAxNzQsXG4gICAgICAxMDMsXG4gICAgICA5MCxcbiAgICAgIDE5NixcbiAgICAgIDMwLFxuICAgICAgMTE5LFxuICAgICAgMTYzLFxuICAgICAgODgsXG4gICAgICAyMDEsXG4gICAgICA3MyxcbiAgICAgIDI1MSxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDk1LFxuICAgICAgMTc2LFxuICAgICAgMTMyLFxuICAgICAgMTY1LFxuICAgICAgMSxcbiAgICAgIDEsXG4gICAgICAyNTIsXG4gICAgICAyNDMsXG4gICAgICA1NCxcbiAgICAgIDIxNixcbiAgICAgIDc0LFxuICAgICAgMTYxLFxuICAgICAgMTcyLFxuICAgICAgMjA0LFxuICAgICAgMjQzLFxuICAgICAgMTQyLFxuICAgICAgNTMsXG4gICAgICAyMTYsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTFLU0RGSzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzc1MzIyNTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkltemVlZCB2ZW50dXJlXCIsXG4gICAgXCJsaWRcIjogXCIyNTM3OTAxMDQwNjAwMjE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS1V2NndHRUlpeDI3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNmdHVmRXVVYStHcFRjUldDOHB6UXprOTV5dG14REorVFRLVUVsUnJkU0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGFjUnVJUUR3VkJ2R0p4MDUrdXI4d3JSdE1lUXhtL1pQejl4cCs5QkdjcHlhL1JsOU9ZNDJENC9abEkrWUs2Y0d2dFV2MDJ2QnZSdk9MOW10Sk80RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTdzcSsxcjJEdGNEZDQ2VDZUUlVoSnQxZDU2eG8rNG9nRDBZVFdVeXZwQ2dwNVNlNUk3VFMvVy9oaG1HL2MvbDRHVkRXc1hGZlNaS0JtNUhPZWt0REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3NzUzMjI1MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTU1MDQ3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpKYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkphLmpzb24iOiAie1wia2V5RGF0YVwiOlwieDNWdDNkNmtXTmw2QmJtZU50QVVSZjg1cElORTQ2R2pTWUU0Z2NON0NHOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzAzOTIyMjI2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk1NTA0ODE5MTJcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
