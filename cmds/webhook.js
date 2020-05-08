const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
const hook = new Discord.WebhookClient(config.webhookid, config.webhooktoken);

function run(msg, args) {
    // code here will run
    if (msg.author.id !== '') return msg.channel.send('No.')
    let string = "";
    for (let i = 1; i < args.length; i++) {
        string = string + " " + args[i];
    }
    hook.send(string);
}
exports.run = run;
