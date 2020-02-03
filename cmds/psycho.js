const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run
     let embed = new Discord.RichEmbed()
     .setTitle('AViVA - PSYCHO')
     .setColor([255, 0, 0])
     .setDescription('"PSYCHO", a song made by AViVA.')
     .addField('Youtube', "https://www.youtube.com/watch?v=7psJyJ-wZ5s")
     .addField('Spotify', "https://open.spotify.com/track/5ndQfV7CYyOp6l6xW3BJQe")
     .addField('Soundcloud', "https://soundcloud.com/thisisaviva/aviva-psycho")
     .addField('Deezer', 'https://www.deezer.com/us/track/775102532')
     .addField('Apple Music', "https://music.apple.com/us/album/psycho/1483428161?i=1483428166&app=music&ign-mpt=uo%3D4")
     .setImage('https://i.imgur.com/1mOa90T.jpg')
     .setFooter('Author - Occult Waifu#1659', 'https://i.imgur.com/yxq3XXl.jpg')
     msg.channel.send(embed); 
}
exports.run = run;