const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

let ArtistNo = new Discord.RichEmbed()
.setTitle('Artists and Songs')
.setDescription('To get info about the artist, just type "info" after the artist!')
.addField('AViVA', 'Cemetery; Psycho')
.addField('Au/Ra', 'No songs yet, sorry!')
.addField('Why am I here?', 'You didn\'t specify/mistyped an artist or a song')
.setFooter('Author - Occult Waifu#1659', 'https://i.imgur.com/yxq3XXl.jpg')
        
function run(msg, args) {
    if(args[1] === undefined) return msg.channel.send(ArtistNo);
    if(args[1].toLowerCase() == "aviva") {
        if(args[2] === undefined) return msg.channel.send(ArtistNo);
        if(args[2].toLowerCase() === 'info') {
            let embed = new Discord.RichEmbed()
            .setTitle('Musician AViVA')
            .setThumbnail('https://i.imgur.com/wMWTjBh.png')
            .setColor([255, 0, 0])
            .setURL('https://www.google.com/search?rlz=1C1CHBF_enLV855LV855&sxsrf=ACYBGNQ9yFLFLSxYhJ1il92GBwtdqyC2Tg%3A1572177651603&ei=84a1Xam3JIqxrgTg8a2QDA&q=aviva+%28musician%29&oq=aviva+%28m&gs_l=psy-ab.3.0.35i39j0i22i30l9.5094.5803..6979...0.2..0.142.378.0j3......0....1..gws-wiz.......0i71j0j0i10j0i203.Q82xyHqSnoc')
            .setDescription('Aviva Anastasia Payne')
            .addField('Date of birth', 'May 6, 1994')
            .addField('Place of birth', 'Sydney, New South Wales, Australia.')
            .addField('Current living place', 'Los Angeles, California')
            .addField('Latest release', 'PSYCHO')
            .addField('Top track in Spotify', 'As of 27/10/2019 the most popular track is GRRRLS')
            .addField('Genre', 'Emo pop')
            //.setImage('https://i.imgur.com/wMWTjBh.png')
            .setFooter('Author - Occult Waifu#1659. Source: Wikipedia', 'https://i.imgur.com/yxq3XXl.jpg')
            msg.channel.send(embed);
        }
        if(args[2].toLowerCase() === "cemetery") {
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
        if(args[2].toLowerCase() === "psycho") {
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
        else {
            msg.channel.send(ArtistNo);
        }
    }
    if(args[1].toLowerCase() === 'au/ra') {
        if(args[2] === undefined) return msg.reply("Song isn't specified/supported.");
        if(args[2].toLowerCase() === 'info') {
            let embed = new Discord.RichEmbed()
            .setTitle('Musician Au/Ra')
            .setThumbnail('https://i.imgur.com/Q6xLNTw.jpg')
            .setURL('https://www.google.com/search?rlz=1C1CHBF_enLV855LV855&sxsrf=ALeKk026O5Rj24bHDn9AyhStmGpgVaCBhg%3A1583612478116&ei=PgJkXvvSBuuArwTDvqKwCw&q=Au%2FRa+musician&oq=Au%2FRa+musician&gs_l=psy-ab.3..0.5623.8840..9036...2.0..0.291.2624.0j13j3......0....1..gws-wiz.......35i39j0i67j0i273j0i20i263j0i22i30.mbXM4WrtNSQ&ved=0ahUKEwj76eCZmInoAhVrwIsKHUOfCLYQ4dUDCAo&uact=5')
            .setDescription('Jamie Lou Stenzel')
            .addField('Date of birth', '15 May, 2002')
            .addField('Place of birth', 'Ibiza, Spain')
            .addField('Latest release', 'Ghost')
            .addField('Top track in Spotify', 'As of 07/03/2020 the most popular track is Panic Room')
            .addField('Genre', 'Alternative pop, Electropop')
            //.setImage('https://i.imgur.com/wMWTjBh.png')
            .setFooter('Author - Occult Waifu#1659. Source: Wikipedia', 'https://i.imgur.com/yxq3XXl.jpg')
            msg.channel.send(embed);
        }
        else {
            msg.channel.send(ArtistNo);
        }
    }
    else {
        msg.channel.send(ArtistNo);
    }
}
exports.run = run;