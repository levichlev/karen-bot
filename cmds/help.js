const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
  // code here will run
  var help = new Discord.RichEmbed()
  .setTitle(client.user.username)
  .setThumbnail(client.user.avatarURL)
  .setColor([255, 0, 0])
  .setDescription('I am a Discord bot made by Occult Waifu#1659. Prefix: man!')
  .addField('Moderation', 'Moderation is enabled on this bot and cannot be changed off at the time being.', true)
  .addField('Help', 'This is the command you see here.')
  .addField('Creator', 'Explains the creator.')
  .addField('Artist', 'Information about artists.')
  .addField('Information', 'Provides information about a user.')
  .setFooter('Author - Occult Waifu#1659.', 'https://i.imgur.com/yxq3XXl.jpg')
  msg.channel.send(help);
}

exports.run = run;

//Commands: ```\nman!shutdown - Only for the owner.``` `man!` is the prefix. \nMy server: https://discord.gg/9PxEPpT \nMy creator\'s server which hosts all his creations: https://discord.gg/JSh7Bhs