const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

async function run(msg, args) {
    // code here will run
    if (msg.member.hasPermission('BAN_MEMBER')) {
        let member = msg.mentions.members.first() || msg.guild.members.get(args[0])
        if (!member)
            return msg.reply("Please mention a valid member of this server");
        if (!member.bannable)
            return msg.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        // Time for public humiliation
        await member.ban(reason)
            .catch(error => msg.reply(`Sorry ${msg.author} I couldn't ban because of : ${error}`));
        const embed = {
            title: `Member banned`,
            description: `${member.user.tag} has been banned`,
            thumbnail: {
                url: member.user.avatarURL,
            },
            color: `${config.colordecimal}`,
            footer: {
                text: `Author - ${config.creator}`,
                icon_url: `${config.logo}`
            },
            "fields": [
                {
                    "name": `Member`,
                    "value": `${member.user.tag}`,
                    "inline": false
                },
                {
                    "name": `Moderator`,
                    "value": `${msg.author.tag}`,
                    "inline": false
                },
                {
                    "name": `Reason`,
                    "value": `${reason}`,
                    "inline": false
                }
            ]
        };
        msg.channel.send({ embed });
        const publicmodlog = member.guild.channels.find(ch => ch.name == 'public-mod-logs');
        if (!publicmodlog) return;
        publicmodlog.send({ embed });
    }
    else {
        msg.channel.send('Looks like somebody here doesn\'t have ban permissions!')
    }
}
exports.run = run;