module.exports = {
	config: {
		name: "goiadmin",
		author: "Rana",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

	onChat: function({ api, event }) {
		if (event.senderID !== "61557361528259") {
			var aid = ["61557361528259"];
			for (const id of aid) {
				if (Object.keys(event.mentions) == id) {
					var msg = [
						"⚠️ বস এখন খুব ব্যস্ত, পরে মিনশন দিয়েন!",
						"😼 রানা বস এখন ফ্রি না, আমাকে বলুন কী দরকার?",
						"🙄 এতবার মিনশন দিয়া লাভ নাই, ইনবক্স করুন।",
						"😒 মিনশন না দিয়ে এক গ্লাস পানি খেয়ে আসেন!",
						"🤫 RANA বস এখন গভীর চিন্তায়, দয়া করে বিরক্ত করবেন না!",
						"📵 ভাইরে ভাই, মিনশন দিলে নোটিফিকেশন ভাইঙ্গা পড়ে!",
						"😂 RANA বস তো তোর গার্ডিয়ান না, ক্যান এত চিন্তা করস?",
						"🥱 বস তো ঘুমায়া পড়ছে, এখন ডাক দিয়া লাভ নাই!",
						"😤 এতবার মিনশন দিয়া লাভ নাই, উনি তো বিজি ইন লাভ!",
						"🕵️‍♂️ RANA বস এর খোঁজ রাখার জন্য তোমাকে পুরস্কার দেওয়া উচিত!"
					];
					
					return api.sendMessage(
						{ body: msg[Math.floor(Math.random() * msg.length)] },
						event.threadID,
						event.messageID
					);
				}
			}
		}
	},

	onStart: async function({}) {}
};
