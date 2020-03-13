const app = require("../bot.js");
const client = app.client;
const Discord = app.Discord;
const config = app.config;
        
function run(msg, args) {
     // code here will run
     let embed = new Discord.RichEmbed()
     .const('Occult Waifu#1659')
     .setColor([255, 0, 0])
     .setDescription('The creator of Karen Bot and other bots.')
     .addField('Auto-Biography', 'A musician that has no life.')
     .addField('Creations', 'Occult Waifu has made Karen Bot, Kuzey Bot, Nice Bot and Kara Bot')
     //.addField('')
     .setFooter('Author - Occult Waifu#1659', 'https://i.imgur.com/yxq3XXl.jpg')
     msg.channel.send(embed);
}
exports.run = run;
