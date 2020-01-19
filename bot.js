const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const configData = fs.readFileSync(__dirname + '/config.json', 'utf8');
const config = JSON.parse(configData);
const Welcome = require("discord-welcome");
const file = new Discord.Attachment('images/cemetery.png');
let commands = {};

const username = [
    'Karen',
    'Karen Schez',
    'Kay-Kay',
    'Chez Karen',
    '⛅𝔎𝔞𝔯𝔢𝔫',
    'Krazy K',
    '[🌼KAREN🌼]',
    'Kara'
]

const activitozo = [
    'Porn',
    'The Manager',
    'Facebook',
    'YouTube'
]


client.once('ready', () => {
    //console.log('H-Huh what happened? I was asleep.');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    //client.user.setActivity(activitozo[Math.floor(Math.random() * activitozo.length)], { type: "WATCHING" });
    client.user.setActivity(`${client.guilds.size} servers | man!help`, { type: "WATCHING" });
    client.user.setUsername(username[Math.floor(Math.random() * username.length)]);
    fs.readdir("./heilgoodfpsinr6s", function(err, files) {
        files.forEach(function(name) {
            commands[name.split(".")[0]] = require("./heilgoodfpsinr6s/" + name);
        });
    });
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
    });
client.once('disconnect', () => {
    console.log('Disconnect!');
    });

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`${client.guilds.size} servers | man!help`, { type: "WATCHING" });
});

client.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`${client.guilds.size} servers | man!help`, { type: "WATCHING" });
  });
  client.on('error', console.error);
const isCommand = function (message, cmd) {
    if(message.toString().substr(0, config.prefix.length) == config.prefix) {
        if(message.toString().toLowerCase().includes(cmd)) return true;
        else return false;
    }
} 


const activity = [
    'Porn',
    'The Manager',
    'Facebook',
    'YouTube'
]

const giffo = [
    {files: ['./images/bangbangdead.gif']},
    {files: ['./images/girldead.gif']},
    {files: ['./images/no-1-1.gif']},
    {files: ['./images/nottodaydead.gif']},
    {files: ['./images/phonedead.gif']},
    {files: ['./images/screendead.gif']},
    {files: ['./images/wahmandead.gif']}
]

const sarcasm = [
    'Can communism give me a free meal at McDonalds? I think not!',
    'Sorry, I do not like to starve.',
    'Communism always fails.',
    'Oh I thought you guys broke up, how sad.',
    'Russia is big but not as developed as the United States of America!'
];

const shutdown = [
    'I\'m going to bed.',
    'Oh already so late? And here I wanted to yell at another fast food worker.',
];

const status = [
    'I am feeling good!',
    'Could be better but I am still alive and kickin!',
    'Just got a free meal at McDonalds! Thing is I cannot go to the barber anymore because they kicked me out for being so beautiful and having so much beautiful fat that I broke their chair.',
    'I got 150 more kilos but *breathes* I *breathes* still can *breathes* function *breathes*.'
];

const badlanguage = [
    'HOW DARE YOU SPEAK TO ME LIKE THAT? WHERE IS THE MANAGER?',
    'Oh so now you are a big tough guy just saying that to my kid!',
    'What\'s that I hear? I hear somebody who wants to be fired!',
    'No wonder you are single.',
    'Your mother should have thrown you away and kept the stork',
    'I never forget a face, but in your case, I\'ll make an exception.',
    'I can\'t bear fools but, apparently your mother could.',
    'If you won\'t be a good example, then you\'ll have to be a horrible warning.',
    'If they can make penicillin out of moldy bread, then they can sure make something out of you.',
    'If you were my husband, I’d poison your tea.'
]

const ranch = [
    'AGREED, TO THE RANCH!',
    'As long as my kids are not sent there :eyes:',
    'Good job Dr.Phil!',
    'Good riddance!'
]
client.on('message', async msg => {
/*     let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60; */
const args = msg.content.substr(config.prefix.length).split(" ");
if(msg.content.startsWith(config.prefix)) {

    if(commands[args[0]] == undefined) return;
    commands[args[0]].run(msg, args);
}
    var message = msg.content.toLowerCase();
    if(message.toLowerCase().includes('fuck') ||
       message.toLowerCase().includes('bitch') ||
       message.toLowerCase().includes('nigga') ||
       message.toLowerCase().includes('nigger') ||
       message.toLowerCase().includes('shit') ||
       message.toLowerCase().includes('pussy') ||
       message.toLowerCase().includes('dick') ||
       message.toLowerCase().includes('cunt') ||
       message.toLowerCase().includes('ass') ||
       message.toLowerCase().includes('cyka') ||
       message.toLowerCase().includes('сука') ||
       message.toLowerCase().includes('f u c k') ||
       message.toLowerCase().includes('f uck') ||
       message.toLowerCase().includes('fuk') ||
       message.toLowerCase().includes('fuc k') ||
       message.toLowerCase().includes('fu ck') ||
       message.toLowerCase().includes('f u ck') ||
       message.toLowerCase().includes('fu c k') ||
       message.toLowerCase().includes('pu$$y')) {
        if(msg.author.id == '391878815263096833') return;
        if(msg.author.id == '472959771964866562') return;
        msg.delete();
        //msg.reply(badlanguage[Math.floor(Math.random() * badlanguage.length)]);
        msg.reply(giffo[Math.floor(Math.random() * giffo.length)])
    }
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
    client.on('guildMemberAdd', member => {
        // Send the message to a designated channel on a server:
        const channel = member.guild.channels.find(ch => ch.name === 'new-friends');
        // Do nothing if the channel wasn't found on this server
        if (!channel) return;
        // Send the message, mentioning the member
        channel.send(`Welcome to this server, ${member}. Please read #rules.`);
  });
    /*
    if(isCommand(message, 'kick')) {
        // This command must be limited to mods and admins. In this example we just hardcode the role names.
        // Please read on Array.some() to understand this bit: 
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
        //if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
        if(msg.author.id !== '391878815263096833')
          return message.reply("Sorry, you don't have permissions to use this!");
        
        // Let's first check if we have a member and if we can kick them!
        // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        // We can also support getting the member by ID, which would be args[0]
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply("Please mention a valid member of this server");
        if(!member.kickable) 
          return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        
        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        // Now, time for a swift kick in the nuts!
        await member.kick(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    
      }*/
    /* if(isCommand(message, "guildsize")) {
        let embed = new Discord.RichEmbed()
        let guild = `${client.guild.size}`
        let channels = `${client.channels.size}`
        let users = `${client.users.size}`
        .setTitle('Bot information')
        .setDescription('The info about this bot! Work in progress.')
        .setColor([255, 0, 0])
        .addField(`Servers`, guild)
        .addField(`Channels`, channels)
        .addField(`Users`, users)
        //.addField(`Uptime`, `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
        msg.channel.send(embed);
    } */
    // Create an event listener for new guild members
    
/*
    if(isCommand(message, 'say')) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();  
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
      }
      */
/*       if(isCommand(message, 'purge')) {
        // This command removes all messages from all users in the channel, up to 100.
        
        // get the delete count, as an actual number.
        const deleteCount = parseInt(args[0], 10);
        
        // Ooooh nice, combined conditions. <3
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        
        // So we get our messages, and delete them. Simple enough, right?
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
      } */
});


client.login(config.token);
exports.client = client;
exports.config = config;
exports.commands = commands;
exports.Discord = Discord;
exports.dir = __dirname;