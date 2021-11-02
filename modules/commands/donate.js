module.exports.config = {
	name: "donate",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Donate Cho Admin",
	commandCategory: "Donate Cho Admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`https://www.facebook.com/profile.php?id=100011712397942`, event.threadID, event.messageID);