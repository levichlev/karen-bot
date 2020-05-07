const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
  // code here will run
  var help = new Discord.RichEmbed()
  .setTitle(client.user.username)
  .setThumbnail(client.user.avatarURL)
  .setColor(config.color)
  .setDescription(`I am a Discord bot made by Occult Waifu#1659. Prefix: ${config.prefix}\n"*" Means that it's not a command.\n**PSA:** The creator is thinking of changing my name, to vote yes or no go to #polls in Occult's House.`)
  .addField('Moderation*', 'Moderation is enabled on this bot and cannot be changed off at the time being.', true)
  .addField('Help', 'This is the command you see here.')
  .addField('Creator', 'Explains the creator.')
  .addField('Artist', 'Information about artists.')
  .addField('Information', 'Provides information about a user.')
  .setFooter(`Author - ${config.creator}`, config.logo)
  msg.channel.send(help);
}

exports.run = run;

