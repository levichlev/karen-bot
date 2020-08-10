const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require("./config.json");
const axios = require("axios");
const ytdl = require('ytdl-core');
const Anilist = require('anilist-node')
const anilist = new Anilist()
let commands = {};


client.once('ready', () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity(`${client.guilds.cache.size} servers | ` + config.prefix +`help`, { type: "WATCHING" });
    fs.readdir("./cmds", function(err, files) {
        files.forEach(function(name) {
            commands[name.split(".")[0]] = require("./cmds/" + name);
        });
    });
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
    client.user.setActivity(`${client.guilds.cache.size} servers | ` + config.prefix + `help`, { type: "WATCHING" });
});
client.once('disconnect', () => {
    console.log('Disconnect!');
    client.user.setActivity(`${client.guilds.cache.size} servers | ` + config.prefix + `help`, { type: "WATCHING" });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`${client.guilds.cache.size} servers | ` + config.prefix +`help`, { type: "WATCHING" });
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`${client.guilds.cache.size} servers | ` + config.prefix +`help`, { type: "WATCHING" });
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name == 'new-friends');
  const rules = member.guild.channels.cache.find(ch => ch.name == 'rules')
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  if (!rules) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to this server, ${member}. Please read ${rules}`);
  if (member.guild.id == '615956991658950658') member.addRole('615958021759041545')
});

client.on('error', console.error);

client.on('message', async msg => {
      const args = msg.content.substr(config.prefix.length).split(" ");
      if(msg.content.startsWith(config.prefix)) {

          if(commands[args[0]] == undefined) return;
          commands[args[0]].run(msg, args);
      }
      var message = msg.content.toLowerCase();
      config.badwords.forEach(function(value) {
          if(msg.content.toLowerCase() == value) {
            //if (msg.author.id == config.DevIDs) return;
            msg.delete();
            msg.reply(config.swearreply[Math.floor(Math.random() * config.swearreply.length)]);
          }
      });
      if(message === '> >run ping') {
          msg.channel.send(`**Running Ping.exe...**`).then((msg)=> {
              setTimeout(function(){
                msg.edit('**Running Ping.exe...**\n**Found subroutine named "Ping Pong"**').then((msg)=> {
                  setTimeout(function(){
                    msg.edit('**Running Ping.exe...**\n**Found subroutine named "Ping Pong"**\n> >run Ping Pong').then((msg)=> {
                      setTimeout(function(){
                        msg.edit('**Running Ping.exe...**\n**Found subroutine named "Ping Pong"**\n> >run Ping Pong \n**Running Ping Pong subroutine**').then((msg)=> {
                          setTimeout(function(){
                              msg.edit('**Running Ping.exe...**\n**Found subroutine named "Ping Pong"**\n> >run Ping Pong \n**Running Ping Pong subroutine**\n**Error:** Subroutine corrupted, cancelling.'); 
                          }, 2000)
                        });
                      }, 2000)
                    }); 
                  }, 2000)
                }); 
              }, 2000)
            }); 
      }
});


client.login(config.token);
exports.client = client;
exports.config = config;
exports.commands = commands;
exports.Discord = Discord;
exports.dir = __dirname;