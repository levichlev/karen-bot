const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
const fs = require("fs");

async function run(msg, args) {
    // code here will run
    if (msg.member.hasPermission('KICK_MEMBERS')) {
        
        let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
        
        if (!member)
            return msg.reply("Please mention a valid member of this server");
        
            if (!member.kickable)
            return msg.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.kick(reason)
            .catch(error => msg.reply(`Sorry ${msg.author} I couldn't kick because of : ${error}`));
        const kickmessage = {
            title: `Member kicked`,
            description: `${member.user.tag} has been kicked`,
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
        msg.channel.send({ kickmessage });
        const publicmodlog = member.guild.channels.find(ch => ch.name == 'public-mod-logs');
        if (!publicmodlog) return;
        publicmodlog.send({ kickmessage });
        /* fs.readFile(app.dir + "/modreports/" + member.user.id + ".json", function (err, data) {
            if (err) {
                var kickcount = 1
                const profile = {
                    kicked: kickcount
                }
                fs.writeFileSync(app.dir + "/modreports/" + member.user.id + ".json", JSON.stringify(profile))
                console.log('dobeLOL')
            }
            else {
                const profile = JSON.parse(data);
                profile.kicked = profile.kicked+1
                console.log('dobe')
            }
        }) */ //need to fix this and stuff
    }
       else {return msg.reply("Sorry, you don't have permissions to use this!");}

   
}
exports.run = run;