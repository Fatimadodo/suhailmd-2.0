const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020674834";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_06_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDk1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjJ5ajNKUFl2d0k2Vk16RmJNWjhzZjdyUTQ0WGRFRXFNYk83NU40TWJXdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiajJaT194eGtScWFHS01tLW1FMWpVd1wiLFxuICBcInBob25lSWRcIjogXCIwNDcxNmVjYi0xZTE4LTRlMGYtYmFmMy0xMzRkMWMyMDk2MzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAxODcsXG4gICAgICAxOTEsXG4gICAgICAxNDQsXG4gICAgICAyMDMsXG4gICAgICAyMjMsXG4gICAgICAyNixcbiAgICAgIDIyNCxcbiAgICAgIDE4MixcbiAgICAgIDIwOCxcbiAgICAgIDIyMixcbiAgICAgIDE3NCxcbiAgICAgIDE3MyxcbiAgICAgIDk3LFxuICAgICAgMTUyLFxuICAgICAgNTAsXG4gICAgICAyMDAsXG4gICAgICAyNTAsXG4gICAgICAxNDksXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxNzksXG4gICAgICAxODAsXG4gICAgICA5MCxcbiAgICAgIDEyNixcbiAgICAgIDIzNyxcbiAgICAgIDIyLFxuICAgICAgMTkxLFxuICAgICAgMTU5LFxuICAgICAgMTE4LFxuICAgICAgMTcxLFxuICAgICAgMzUsXG4gICAgICA0NSxcbiAgICAgIDY5LFxuICAgICAgNzEsXG4gICAgICAxMyxcbiAgICAgIDMsXG4gICAgICAyMCxcbiAgICAgIDU2LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBLM0pGTjcyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIwNjc0ODM0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRG9kb2NvbGxlY3Rpb25zXCIsXG4gICAgXCJsaWRcIjogXCIxNTEwMjgyNDY4MzExNjg6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUNrNDZjQ0VOVE1xTGtHR0JBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJYXFBaDVOTkZIeUFldlRBcnBtVTF3WHRWYmtSRXFTQnBqNS81ZGUyeW00PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFUdXZhbVcwNmxCZzdCSkZuU0VNanBRa3pDRi9aMncxUjVMdU1PWWdGZlZOK3JLVnJrY0E2U09PK0JDRWJzVzJvZWQ3VXFsZGg5QmlJRXUwcFAxZkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZybXZKSkdJTFk4RU14eVRmcFhTK1lHd2h5ZUk0d0M0SGZzakhUNjl1QXhXYklMRWtsL3FvL2JZeDFLbDZQbHVsanlsVEE5M3pjL3pJeXNMRHFJdkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjA2NzQ4MzQ6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4MTU1NzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
