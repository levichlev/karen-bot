const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run
     let member = msg.mentions.users.first();
     if(member == undefined) msg.reply('Please tell me who to spy on.');
     else {
         let embed = new Discord.RichEmbed()
         .setTitle(member.username + '\'s Discord profile')
         .setColor(config.color)
         .addField('Discord Name', member.tag)
         .addField('Join date', member.createdAt)
         .addField('Last sent message ID', member.lastMessageID)
         .setImage(member.avatarURL)
         .setFooter(`Author - ${config.creator}`, config.logo)
         msg.channel.send(embed);   
     }
}
exports.run = run;

