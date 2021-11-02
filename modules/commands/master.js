module.exports.config = {
	name: "master",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Info", 
	usages: "master [key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("TranHuuDan",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("Admin: TranHuuDan \n tạo 1 con bot 400 lệnh tại https://www.youtube.com/channel/UCJEemN6rQR7Oa5mkz6ABmnw", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("Admin: TranHuuDan \n tạo 1 con bot 400 lệnh tại https://www.youtube.com/channel/UCJEemN6rQR7Oa5mkz6ABmnw", event.threadID, event.messageID);
	}
}