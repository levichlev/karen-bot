const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const configData = fs.readFileSync(__dirname + '/config.json', 'utf8');
const config = JSON.parse(configData);
const Welcome = require("discord-welcome");

const username = [
    'Karen',
    'Karen Schez',
    'Kay-Kay',
    'Chez Karen',
    '⛅𝔎𝔞𝔯𝔢𝔫',
    'Krazy K',
    '[🌼KAREN🌼]',
]

const activitozo = [
    'Porn',
    'The Manager',
    'Facebook',
    'YouTube'
]



client.once('ready', () => {
    console.log('H-Huh what happened? I was asleep.');
    client.user.setActivity(activitozo[Math.floor(Math.random() * activitozo.length)], { type: "WATCHING" });
    client.user.setUsername(username[Math.floor(Math.random() * username.length)]);
    client.user.setAvatar('./images/karen-haircut.jpg');
    //client.user.setGame('Fallout 4');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
    });
client.once('disconnect', () => {
    console.log('Disconnect!');
    });

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

client.on('message', msg => {

    var message = msg.content.toLowerCase();
    if (message === 'man!ping') {
        message.reply('Where is your manager? This behaviour is unacceptable!');
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
        .setDescription('I am a Discord bot made by Occult Waifu#1659. Commands: ```man!help - Help command.\nman!ping - Try it yourself\nman!invite - Lets me in your server. \nman!creator - Who is my creator. \nman!shutdown - Only for the owner.``` `man!` is the prefix. \nMy server: https://discord.gg/9PxEPpT \nMy creator\'s server which hosts all his creations: https://discord.gg/JSh7Bhs');
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
       message.toLowerCase().includes('faggot') ||
       message.toLowerCase().includes('pu$$y') ||
       message.toLowerCase().includes('stfu')) {
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
    if(isCommand(message, "kick")) {
        if(msg.author.id !== '391878815263096833') return;
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            msg.channel.send("**Ugh finally that slut " + member.displayName + " has been kicked!**");
        }).catch(() => {
            msg.channel.send("Hmph they are my friends so they can stay!");
        });
    }
    if(isCommand(message, 'funtimes')) {
        if(msg.author.id !== '391878815263096833') return;
        client.user.setUsername('Kara');
        client.user.setAvatar('./images/immouseduh.jpg');
        client.user.setGame('PC Building Simulator');
    }
    if(isCommand(message, 'normal')) {
        if(msg.author.id !== '391878815263096833') return;
        client.user.setActivity(activitozo[Math.floor(Math.random() * activitozo.length)], { type: "WATCHING" });
    }
});

client.login(config.token);