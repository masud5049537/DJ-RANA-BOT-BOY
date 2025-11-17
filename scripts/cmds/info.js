const moment = require('moment-timezone');
const axios = require('axios');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "3.7",
    author: "RANA",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Shows bot and owner info with photo."
    },
    longDescription: {
      en: "Displays detailed information about the bot and owner, including uptime, ping, social links, and local time, with a profile photo."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "RANA";
    const ownerName = "DJ-RANA-BOY";
    const moderatedBy = "一ꨄ ⵂ.ডি'জে一Fɱz.ⵂ রা'না一ꕥ ᰔᩚ ᰔᩚ ᰔᩚ࿐";
    const religion = "ISLAM";
    const botStatus = "SINGLE";
    const address = "RANGPUR-KURIGRAN";
    const userClass = "8";
    const facebook = "https://www.facebook.com/profile.php?id=61583259069460";
    const tiktok = "DIBONA";

    const now = moment().tz('Asia/Dhaka');
    const localTime = now.format('hh:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, 100));
    const ping = Date.now() - start;

    const photoUrl = "https://i.ibb.co/SwXznvzv/img-1760502291235.jpg";

    const body = `
╭─ <𝐎𝐖𝐍𝐄𝐑  𝐈𝐍𝐅𝐎> ─╮
├──────────────⍟
│ 👑 𝐎𝐖𝐍𝐄𝐑 : ${ownerName}
│ ⚙️ 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 : ${moderatedBy}
│ 🏫 𝐂𝐋𝐀𝐒𝐒 : ${userClass}
│ 🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒 : ${address}
│ 🌍 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : ${religion}
│ 🧬 𝐒𝐓𝐀𝐓𝐔𝐒 : ${botStatus}
│ 📘 𝐅𝐀𝐂𝐄𝐥 𝐁𝐎𝐎𝐊 : ${facebook}
│ 📸 𝐓𝐈𝐊 𝐓𝐎𝐊 : ${tiktok}
├───────────⍟
│
│𖣘 <𝐁𝐎𝐓  𝐈𝐍𝐅𝐎> 𖣘
├───────────⍟
│ 🤖 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ${botname}
│ 🕐 𝐓𝐢𝐦𝐞: ${localTime}
│ 🌀 𝐔𝐩𝐭𝐢𝐦𝐞: ${uptimeString}
│ ⚡ 𝐏𝐢𝐧𝐠: ${ping}𝐦𝐬
╰───────────╯
`;

    try {
      const response = await axios.get(photoUrl, { responseType: 'stream' });
      message.reply({ body, attachment: response.data });
    } catch {
      message.reply("⚠️ Failed to load photo.");
    }
  }
};
