const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run
     if (msg.author.id !== '391878815263096833') return;
     console.log(`Shut down while in ${client.guilds.size} servers, ${client.channels.size} channels and ${client.users.size} users.`)
     msg.reply(`Currently in ${client.guilds.size} servers, ${client.channels.size} channels and ${client.users.size} users.`).then(() => {
         process.exit(1);
     })
}
exports.run = run;