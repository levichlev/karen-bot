const app = require("../bot.js");
const client = app.client;
const Discord = app.Discord;
const config = app.config;
        
function run(msg, args) {
     // code here will run
     let embed = new Discord.RichEmbed()
     .setTitle(config.creator)
     .setColor(config.embedcolor)
     .setDescription('The creator of Karen Bot and other bots.')
     .addField('Auto-Biography', 'A musician that has no life.')
     .addField('Creations', 'Occult Waifu has made Karen Bot, Kuzey Bot and Fallout bot.')
     //.addField('')
     .setFooter(`Author - ${config.creator}`, config.logo)
     msg.channel.send(embed);
}
exports.run = run;
