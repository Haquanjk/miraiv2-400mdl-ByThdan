const fs = require("fs");
module.exports.config = {
	name: "Luật bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "THĐ", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật bot")==0 || (event.body.indexOf("luật bot")==0)) {
		var msg = {
				body: "Admin: TranHuuDan \n tạo 1 con bot 400 lệnh tại \n Fb:100011712397942\nhttps://www.youtube.com/channel/UCJEemN6rQR7Oa5mkz6ABmnw",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}