const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const configData = fs.readFileSync(__dirname + '/config.json', 'utf8');
const config = JSON.parse(configData);
const Welcome = require("discord-welcome");
const file = new Discord.Attachment('images/cemetery.png');
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

    var message = msg.content.toLowerCase();
    if (message === 'man!ping') {
        msg.reply('Where is your manager? This behaviour is unacceptable!');
    }
    else if (message === 'man!invite') {
        msg.reply('Hmph fine but you must give me a free meal at McDonalds because of this! https://discordapp.com/oauth2/authorize?&client_id=599289687743397889&scope=bot&permissions=8');
    }
    else if(message === 'Manager') {
        msg.channel.send('Wait who? I must speak to them immidiately!');
    }
    else if(isCommand(message, 'man!creator')) {
        msg.reply('My dad is Occult Waifu#1659');
    }
    else if(isCommand(message, 'help')) {
        var embed = new Discord.RichEmbed()
        .setTitle('Karen bot')
        .setImage(client.user.avatarURL)
        .setColor([255, 0, 0])
        .setDescription('I am a Discord bot made by Occult Waifu#1659. Commands: ```man!help - Help command.\nman!ping - Try it yourself\nman!invite - Lets me in your server.\nman!creator - Who is my creator.\nman!aviva - Information about the musician AViVA.\nman!cemetery - Information about AViVA\'s song Cemetery.\nman!shutdown - Only for the owner.``` `man!` is the prefix. \nMy server: https://discord.gg/9PxEPpT \nMy creator\'s server which hosts all his creations: https://discord.gg/JSh7Bhs');
        msg.channel.send(embed);
    }
    // Avatar work in progress
    else if(isCommand(msg, 'information')) {
        let member = msg.mentions.users.first();
        if(member == undefined) msg.reply('Please tell me who to spy on.');
        else {
            if(msg.author.id !== '391878815263096833') return;
            let embed = new Discord.RichEmbed()
            .setTitle(member.username + '\'s Discord profile')
            .setDescription('Discord name: ' + member.tag + '\nJoin date: ' + member.createdAt + '\nLast sent message ID: ' + member.lastMessageID)
            .setColor([255, 0, 0])
            .setImage(member.avatarURL);
            msg.channel.send(embed);   
        }
    }
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
    if(message === 'it works!') {
        msg.reply('Of course it works! Hmph some people.');
    }
    if(message.includes('man!shutdown')) {
        if (msg.author.id !== '391878815263096833') return;
        msg.reply(shutdown[Math.floor(Math.random() * shutdown.length)]).then(() => {
        process.exit(1);
      })
    };
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
    if(message === 'status report') {
        if (msg.author.id !== '391878815263096833') return;
        msg.reply(status[Math.floor(Math.random() * status.length)]);
    }
    if(message.includes('a theory or system')) {
        if(msg.author.id !== '615963160108597268') return;
        msg.reply(sarcasm[Math.floor(Math.random() * sarcasm.length)]);
    }
    if(message.toLowerCase().includes('im the manager')) {
        if(msg.author.id !== '241607157685026817') return;
        msg.reply('Well where is YOUR manager, Varoll?')
    }
    if(message.toLowerCase().includes('to the ranch')) {
        if(msg.author.id !== '391878815263096833') return;
        msg.channel.send(ranch[Math.floor(Math.random() * ranch.length)])
    }
    if(isCommand(message, 'cursed')) {
        msg.channel.send('It totally isn\'t cursed!', {files: ['./images/ohgod.png']})
    }
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
    if(isCommand(message, "cemetery")) {
        let embed = new Discord.RichEmbed()
        .setTitle('AViVA - Cemetery')
        .setColor([255, 0, 0])
        .setDescription('"Cemetery", a song made by AViVA.')
        .addField('Youtube', "https://www.youtube.com/watch?v=JlJ4bhS86Gc")
        .addField('Spotify', "https://open.spotify.com/album/7qSs2TMwUdozqNiuOcG6xm")
        .addField('Soundcloud', "https://soundcloud.com/roachiey/aviva-cemetery")
        .addField('Deezer', 'https://www.deezer.com/en/album/113911632')
        .addField('Apple Music', "https://music.apple.com/us/album/cemetery-single/1482584588?app=music&ign-mpt=uo%3D4")
        .setImage('https://i.imgur.com/Nb20O4V.png')
        .setFooter('Author - Occult Waifu#1659', 'https://i.imgur.com/QmGIfg5.jpg')
        msg.channel.send(embed); 
    }
    if(isCommand(message, 'aviva')) {
        let embed = new Discord.RichEmbed()
        .setTitle('Musician AViVA')
        .setThumbnail('https://i.imgur.com/wMWTjBh.png')
        .setColor([255, 0, 0])
        .setURL('https://www.google.com/search?rlz=1C1CHBF_enLV855LV855&sxsrf=ACYBGNQ9yFLFLSxYhJ1il92GBwtdqyC2Tg%3A1572177651603&ei=84a1Xam3JIqxrgTg8a2QDA&q=aviva+%28musician%29&oq=aviva+%28m&gs_l=psy-ab.3.0.35i39j0i22i30l9.5094.5803..6979...0.2..0.142.378.0j3......0....1..gws-wiz.......0i71j0j0i10j0i203.Q82xyHqSnoc')
        .setDescription('Aviva Anastasia Payne')
        .addField('Date of birth', 'May 6, 1994')
        .addField('Place of birth', 'Sydney, New South Wales, Australia.')
        .addField('Current living place', 'Los Angeles, California')
        .addField('Latest release', 'Cemetery')
        .addField('Top track in Spotify', 'As of 27/10/2019 the most popular track is GRRRLS')
        .addField('Genre', 'Emo pop')
        //.setImage('https://i.imgur.com/wMWTjBh.png')
        .setFooter('Author - Occult Waifu#1659. Source: Wikipedia', 'https://i.imgur.com/QmGIfg5.jpg')
        msg.channel.send(embed);
    }
    if(isCommand(message, "guildsize")) {
        if(msg.author.id !== '391878815263096833') return;
        msg.reply(`I am in ${client.guilds.size} servers.`);
    }
    
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