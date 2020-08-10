const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg) {
    // code here will run
        if (msg.member.hasPermission('MANAGE_MESSAGES')) {
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const sayMessage = args.join(" ");
        msg.delete().catch(O_o => { });
        msg.channel.send(sayMessage);
    }
}
exports.run = run;