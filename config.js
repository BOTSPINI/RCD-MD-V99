//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ltQnhVZ1dYK1VYUWdYdWFmSkN1L3dqUmV1d0VGNDV6cXAzN0hka25GRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE44bnJLQzVvd1ZOSUtzSmovMzJxUmFHeEdrMGphSVR3K3g4RVhzaHpuQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyREdXZkRYWmxzdEZpMFhlVHptRzRlTlMzcFlFc2E1YUtOODNNVU9SR1Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbEl4N1dWUTJ0RkxnYmF0MXp6cmI3RlVxU2ljaUluS2YreHdsaUllNm1vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFVXh5bnJqQ29ZU2VURGtvdkNseEd3V1pGTWFKMWZ4SzZ3SHNSVFBQRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMyeFYzK0cvR1gxSkhGZGxMdEdtTWduZUg4QnFNUHYvVU0rWFMxNFhUUnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0p2TVJFeW9aWDBpdWhEbkJua1JwTG5YMnd1Q1dZRVNoRFdLNWtxLzlsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGZDbFdTODVsVXRLakRoWDV6OHFRMCt5TUdxZkdoeHIwTWIwclRjeE1nUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh5K2pXOVdNb1Mxa3c5TE1QR05vRVZuTmlWaWRxMjZaU0ErbmhhMjNJV1RLMmc3ZmpNMzBmakdRaDJiRTdIUXlsekwyNkVYMGdjVHV4eUFHeUlZT2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJHRUU0bDAwbnpmM2xrb1V3OE1iZ1N2bmFIRU81OVhSYjZPSlh4eXBOQllRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0M0x1d1FySlFubTBlNjE1TmxVLU5BIiwicGhvbmVJZCI6IjIwMGU5YzI1LTUyMjItNGMyYS1iYTBmLTk5MTk1MmM2Nzk1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZ1dIbHNndG01N09mTWpabHVOS0NZb0tRQ0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2RMMEUveW1Zb0RnUkFaRjZ4eVZUejhGUXpVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlgxVDhMSEZYIiwibWUiOnsiaWQiOiI5NDc1ODQ1ODk1ODoyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGl2aXJ1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeVl6NjBFRUxPbnVyUUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNcjY3Vyt6YTgyUEtrSzJDL0d2L3VHSmZMaW5RemMwUVgwYmZiNE1lb1ZFPSIsImFjY291bnRTaWduYXR1cmUiOiJUUTFiV2dUcVdKQ05UWW1mb09yMkh0WEJBMjZHMXcxRGwrN2R1RVlzRGZQelN2SDc2TnQzQTgyMi9yRWpIK3M3aGpQUE0rUkxubE1aRDNwejFhcjZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT3BQOWFyYVFTaEY5MUJ4NkRON3VJL3VJc2g4Uk0zcHgxTXhEaGtRVy92VkFReXc5T0UvL051b1FKQWVtUlpUWDM0ZDU1SjVQY1d2aTdNd0tRNmpyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1ODQ1ODk1ODoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSyt1MXZzMnZOanlwQ3RndnhyLzdoaVh5NHAwTTNORUY5RzMyK0RIcUZSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjE5OTY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwwTiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
