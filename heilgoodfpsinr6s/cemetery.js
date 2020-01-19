const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run
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
     .setFooter('Author - Occult Waifu#1659', 'https://i.imgur.com/yxq3XXl.jpg')
     msg.channel.send(embed); 
}
exports.run = run;