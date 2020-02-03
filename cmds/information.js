const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run
     let member = msg.mentions.users.first();
     if(member == undefined) msg.reply('Please tell me who to spy on.');
     else {
         if(msg.author.id !== '391878815263096833') return;
         let embed = new Discord.RichEmbed()
         .setTitle(member.username + '\'s Discord profile')
         .setDescription('Discord name: ' + member.tag + '\nJoin date: ' + member.createdAt + '\nLast sent message ID: ' + member.lastMessageID)
         .setColor([255, 0, 0])
         .setImage(member.avatarURL);
         msg.channel.send(embed);   
     }
}
exports.run = run;

