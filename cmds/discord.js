const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    /* let invite = new Discord.MessageEmbed()
    invite.setTitle('Discord invites')
    invite.setColor(config.color)
    invite.setThumbnail('https://karen.exerra.xyz/assets/BotLogo.png')
    invite.setDescription('Invite links for servers!')
    invite.addField(`Occult's House`, 'https://discord.gg/JSh7Bhs')
    invite.addField(config.botname, 'https://discord.gg/9PxEPpT')
    invite.setFooter(`Author - ${config.creator}`, config.logo)
    msg.channel.send(invite) */
    msg.channel.send('This command is under construction')
}
exports.run = run;