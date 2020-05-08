const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    let invite = new Discord.RichEmbed()
    invite.setTitle('Discord invites')
    invite.setColor(config.color)
    invite.setThumbnail('https://karenbot.netlify.app/api/files/images/krnbot.png')
    invite.setDescription('Invite links for servers!')
    invite.addField(`Occult's House`, 'https://discord.gg/JSh7Bhs')
    invite.addField(config.botname, 'https://discord.gg/9PxEPpT')
    invite.setFooter(`Author - ${config.creator}`, config.logo)
    msg.channel.send(invite)
}
exports.run = run;