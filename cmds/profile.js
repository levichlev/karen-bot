const app = require("../bot.js");
const Discord = app.Discord;
const config = app.config;
const commands = config.commands;
const fs = require("fs");


function run(msg, args) {
    let embed = new Discord.MessageEmbed();
    embed.setColor(config.color);

    if (args[1] == undefined) {
        fs.readFile(app.dir + "/users/" + msg.author.id + ".json", function (err, data) {
            if (err) {
                embed.setTitle("Profile command: error");
                embed.setDescription(`You do not have a profile!\nDo ${config.prefix}profile create to create an empty profile(cross-server)`);
            }
            else {
                const profile = JSON.parse(data);
                embed.setTitle(`${msg.author.username}'s profile`);
                embed.setThumbnail(msg.author.avatarURL());
                embed.addField("Description", profile.description);
                embed.addField(`Birthday`, profile.birthday)
                embed.addField("Gender", profile.gender)
                embed.addField("Country", profile.country);
                embed.setFooter(`Author - ${config.creator}`, config.logo)
                if (profile.rank != "") embed.addField("Employee Rank", profile.rank);
                embed.addField("Languages", profile.languages);
                embed.setFooter(`Author - ${config.creator}`, config.logo)
            }
            msg.channel.send(embed);
        });
    }
    else if (args[1].toLowerCase() == "create") {
        fs.readFile(app.dir + "/users/" + msg.author.id + ".json", function (err, data) {
            if (err) {
                const profile = {
                    description: "None",
                    gender: "Not specified",
                    birthday: "Not specified",
                    country: "None",
                    rank: "",
                    languages: "None"
                }
                embed.setTitle("Profile creation");
                embed.setDescription(`Profile has been created successfully.\nDo ${config.prefix}profile to show your profile(cross-server)`);
                fs.writeFileSync(app.dir + "/users/" + msg.author.id + ".json", JSON.stringify(profile));
                embed.setFooter(`Author - ${config.creator}`, config.logo)
                msg.channel.send(embed);
            }
            else {
                embed.setTitle("Profile command: error");
                embed.setDescription(`You already have a profile!\nDo ${config.prefix}profile to show your profile(cross-server)`);
                embed.setFooter(`Author - ${config.creator}`, config.logo)
                msg.channel.send(embed);
            }
        });
    }
    else if (args[1].toLowerCase() == "set") {
        let profile = {};
        // never use var, at all, it's broken. it's just there for basckwars compatibilty
        fs.readFile(app.dir + "/users/" + msg.author.id + ".json", function (err, data) {
            if (err) {
                embed.setTitle("Profile error: ");
                embed.setDescription(`You don't have a profile yet. Make one with "${config.prefix}profile create"`);
                embed.setFooter(`Author - ${config.creator}`, config.logo)
                msg.channel.send(embed);
            }
            else {
                profile = JSON.parse(data); // Reassignment of profile, understand.
                if (!args[2]) { // i typed 1 instead of 2
                    embed.setTitle("Profile error: ");
                    embed.setDescription("Specify a field to set.\n- Description\n-Gender\n- Birthday\n- Country\n- Languages.");
                    embed.setFooter(`Author - ${config.creator}`, config.logo)
                    msg.channel.send(embed);
                }
                else if (args[2].toLowerCase() == "country") {
                    if (!args[3]) {
                        embed.setTitle("Profile error: ");
                        embed.setDescription("You need to specify a country.");
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    } else {
                        profile.country = args[3];
                        embed.setTitle("Profile command: Success");
                        embed.setDescription("You have successfully set your country to " + args[3]);
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    }
                }
                else if (args[2].toLowerCase() == 'gender') {
                    if (!args[3]) {
                        embed.setTitle("Profile error: ")
                        embed.setDescription("You need to specify a gender.")
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    }
                    else {
                        profile.gender = args[3];
                        embed.setTitle(`Profile command: Success`)
                        embed.setDescription(`You have succesefully set your gender to ` + args[3])
                        msg.channel.send(embed);
                    }
                }
                else if (args [2].toLowerCase() == 'birthday' || args[2].toLowerCase() == `bday` || args[2].toLowerCase() == `birthdate`) {
                    if (!args[3]) {
                        embed.setTitle(`Profile error: `)
                        embed.setDescription(`You need to specify a birthday`)
                        msg.channel.send(embed)
                    }
                    else {
                        profile.birthday = args[3]
                        embed.setTitle("Profile command: Success");
                        embed.setDescription("You have successfully set your birthday to " + args[3]);
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    }
                }
                else if (args[2].toLowerCase() == "languages" || args[2].toLowerCase() == "language") {
                    if (!args[3]) {
                        embed.setTitle("Profile error: ");
                        embed.setDescription("You need to specify the spoken, seperated by `-`.");
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    } else {
                        const languages = args[3].split('-');
                        let string = "";
                        languages.forEach(function (value) {
                            string = string + "\n" + value;
                        });
                        profile.languages = string;
                        embed.setTitle("Profile command: Success");
                        embed.setDescription("You have successfully set your spoken languages.");
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    }
                }
                else if (args[2].toLowerCase() == "description" || args[2].toLowerCase() == "desc") {
                    if (!args[3]) {
                        embed.setTitle("Profile error: ");
                        embed.setDescription("You need to specify the description.");
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    } else {
                        let string = "";
                        for (let i = 3; i < args.length; i++) {
                            string = string + " " + args[i];
                        }
                        profile.description = string;
                        embed.setTitle("Profile command: Success");
                        embed.setDescription("You have successfully set your description.");
                        embed.setFooter(`Author - ${config.creator}`, config.logo)
                        msg.channel.send(embed);
                    }
                }
                else {
                    embed.setTitle("Profile error: ");
                    embed.setDescription("That field doesn't exist or you don't have permissions to set it.");
                    embed.setFooter(`Author - ${config.creator}`, config.logo)
                    msg.channel.send(embed);
                }
                fs.writeFileSync(app.dir + "/users/" + msg.author.id + ".json", JSON.stringify(profile));
            }

        });
    }
    else if (args[1].toLowerCase() == "help") {
        embed.setTitle("Profile command: help")
        embed.addField(`${config.prefix}profile`, `Shows your profile.`)
		embed.addField(`${config.prefix}profile [create]`, `Creates your profile.`)
        embed.addField(`${config.prefix}profile [set]`, `Sets a field in your profile.`)
        embed.setFooter(`Author - ${config.creator}`, config.logo)
        msg.channel.send(embed);
    }
    else if (msg.mentions.users.first()) {
        let member = msg.mentions.users.first();
        let mention = new Discord.MessageEmbed()
        fs.readFile(app.dir + "/users/" + member.id + ".json", function (err, data) {
            if (err) {
                embed.setTitle("Profile command: error");
                embed.setDescription(`This person does not have a profile!`);
            }
            else {
                const profile = JSON.parse(data);
                embed.setTitle(`${member.username}'s profile`);
                embed.setThumbnail(member.avatarURL());
                embed.addField("Description", profile.description);
                embed.addField(`Birthday`, profile.birthday)
                embed.addField("Gender", profile.gender)
                embed.addField("Country", profile.country);
                embed.setFooter(`Author - ${config.creator}`, config.logo)
                if (profile.rank != "") embed.addField("Employee Rank", profile.rank);
                embed.addField("Languages", profile.languages);
                embed.setFooter(`Author - ${config.creator}`, config.logo)
            }
            msg.channel.send(embed);
        });
    }
}

exports.run = run;