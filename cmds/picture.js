const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    let member = msg.mentions.users.first();
    if (member == undefined) msg.reply('Please tell me which profile picture to get.');
    else {
        let embed = new Discord.MessageEmbed()
        .setTitle(member.username + '\'s profile picture.')
        .setColor(config.color)
        .setImage(member.avatarURL())
        .setFooter(`Author - ${config.creator}`, config.logo)
        msg.channel.send(embed);
    }
}
exports.run = run;