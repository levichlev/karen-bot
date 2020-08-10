const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
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
exports.run = run;