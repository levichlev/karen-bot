const app = require("../bot.js");
const client = app.client;
const Discord = app.Discord;
const config = app.config;
        
function run(msg, args) {
     // code here will run
     let embed = new Discord.MessageEmbed()
     .setTitle(config.creator)
     .setImage(config.logo)
     .setColor(config.color)
     .setURL('https://exerra.xyz')
     .setDescription(`The creator of ${config.botname} and other bots.`)
     .addField('Auto-Biography', 'Musician, Coder.')
     .addField('Creations', 'Occult Waifu has made several bots, including this one. Sadly most of them are now defunct. She has also created jailbreak themes, websites and music.')
     .setFooter(`Author - ${config.creator}`, config.logo)
     msg.channel.send(embed);
}
exports.run = run;
