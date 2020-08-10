const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
  // code here will run
  if (args[1] == undefined || args[1] == '1') {
    var help = new Discord.MessageEmbed()
    if (msg.author.id == '391878815263096833') help.setTitle(config.helpcreatorreply[Math.floor(Math.random() * config.helpcreatorreply.length)])
    else help.setTitle(`Welcome ${msg.author.username}`)
    help.setThumbnail(msg.author.avatarURL())
    help.setColor(config.color)
    help.setDescription(`I am ${config.botname} v${config.botversion} made by ${config.creator}. Prefix: ${config.prefix}\n**"*"** Means that it's not a command.`)
    help.addField('Moderation*', 'Moderation is enabled on this bot and cannot be changed off at the time being.', true)
    help.addField('Help', 'This is the command you see here.')
    help.addField('Creator', 'Info about the creator.')
    help.addField('Artist', 'Information about artists.')
    help.addField('Information', 'Provides information about a user.')
    help.addField('Picture', 'Provides a mentioned users profile picture.')
    help.addField('Jailbreak', 'Info about Jailbreak')
    help.setFooter(`Author - ${config.creator}`, config.logo)
    msg.channel.send(help);
  }
  else if (args[1] == '2') {
    var help2 = new Discord.MessageEmbed()
    help2.setTitle('Help 2')
    help2.setThumbnail(msg.author.avatarURL())
    help2.setColor(config.color)
    help2.setDescription(`${config.botname}'s Help Page 2`)
    help2.addField('Reddit', 'Info about Reddit commands')
    help2.addField('Anime/Manga', 'Returns information about an Anime or Manga.')
    help2.addField('Invite', 'Creates Karen Bot\'s invite!')
    help2.addField('uwu', 'UwU-ifies your text!')
    help2.setFooter(`Author - ${config.creator}`, config.logo)
    msg.channel.send(help2)
  }
  else if (args[1].toLowerCase() == 'moderation') {
    let moderation = new Discord.MessageEmbed()
    moderation.setTitle('Moderation commands')
    moderation.setColor(config.color)
    moderation.setDescription('All moderation commands\nPlease note, at this time being moderation (aka removing swear words) cannot be changed, you can however not use the moderation commands!')
    moderation.addField('Purge', `Purges a set amount of messages (Must not be older than 2 weeks). Person using this command must be able to manage messages.\nUsage: ${config.prefix}purge [number from 2 to 100].`)
    moderation.addField('Kick', `Kicks the mentioned user. Person using the command must be able to kick.\nUsage: ${config.prefix}kick [user] [reason]`)
    moderation.addField('Ban', `Bans the mentioned user. Person using the command must be able to ban.\nUsage: ${config.prefix}ban [user] [reason]`)
    moderation.setFooter(`Author - ${config.creator}`, config.logo)
  }
  else if (args[1].toLowerCase() == 'reddit') {
    let reddit = new Discord.MessageEmbed()
    reddit.setTitle('Reddit commands')
    reddit.setColor(config.color)
    reddit.setDescription('Reddit commands')
    reddit.setThumbnail('https://i.kym-cdn.com/photos/images/newsfeed/000/919/691/9e0.png')
    reddit.addField('New', `Returns the newest posts from a subreddit. Usage:\n${config.prefix}new [subreddit] [number of posts]`)
    reddit.addField('Top', `Returns the top posts from a subreddit. Usage:\n${config.prefix}top [subreddit] [number of posts]`)
    reddit.addField('Random', `Returns a random post from Reddit. Usage:\n${config.prefix}random`)
    reddit.setFooter(`Author - ${config.creator}`, config.logo)
    msg.channel.send(reddit)
  }  
}

exports.run = run;
