const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run

    var allowedToUse = false;
    config.DevIDs.forEach(id => {
        if (msg.author.id == id)
            allowedToUse = true;
    });

    if (allowedToUse) {
        console.log(`Shut down while in ${client.guilds.size} servers, ${client.channels.size} channels and ${client.users.size} users.`)
        let infoembed = new Discord.MessageEmbed()
        .setTitle(`Goodbye ${msg.author.username}`)
        .setColor(config.color)
        .setDescription('These are the shutdown stats.')
        .addField('Servers', client.guilds.cache.size)
        .addField('Channels', client.channels.cache.size)
        .addField('Users', client.users.cache.size)
        .setFooter(`Author - ${config.creator}`, config.logo)
        msg.channel.send(infoembed).then(() => {
            process.exit(1);
        })
    }
    else {msg.channel.send('Only developers can do that!')}
}
exports.run = run;