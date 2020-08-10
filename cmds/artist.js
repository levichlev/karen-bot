const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

let ArtistNo = new Discord.MessageEmbed()
.setTitle('Artists and Songs')
.setColor(config.embedcolor)
.setDescription('To get info about the artist, just type "info" after the artist!')
.addField('AViVA', 'Cemetery\nPsycho')
.addField('Au/Ra', 'XGames\nGhost')
.addField('MARINA', 'FROOT')
.addField('Why am I here?', 'You didn\'t specify/mistyped an artist or a song')
.setFooter(`Author - ${config.creator}`, config.logo)
        
function run(msg, args) {
    if(args[1] === undefined) return msg.channel.send(ArtistNo);
    else if(args[1].toLowerCase() == "aviva") {
        if(args[2] === undefined) return msg.reply(ArtistNo);
        if(args[2].toLowerCase() === 'info') {
            let infoaviva = new Discord.MessageEmbed()
            .setTitle('Musician AViVA')
            .setThumbnail('https://i.imgur.com/wMWTjBh.png')
            .setColor(config.color)
            .setURL('https://www.google.com/search?rlz=1C1CHBF_enLV855LV855&sxsrf=ACYBGNQ9yFLFLSxYhJ1il92GBwtdqyC2Tg%3A1572177651603&ei=84a1Xam3JIqxrgTg8a2QDA&q=aviva+%28musician%29&oq=aviva+%28m&gs_l=psy-ab.3.0.35i39j0i22i30l9.5094.5803..6979...0.2..0.142.378.0j3......0....1..gws-wiz.......0i71j0j0i10j0i203.Q82xyHqSnoc')
            .setDescription('Aviva Anastasia Payne')
            .addField('Date of birth', 'May 6, 1994')
            .addField('Place of birth', 'Sydney, New South Wales, Australia.')
            .addField('Current living place', 'Los Angeles, California')
            .addField('Latest release', 'PSYCHO')
            .addField('Top track in Spotify', 'As of 27/10/2019 the most popular track is GRRRLS')
            .addField('Genre', 'Emo pop')
            .setFooter(`Author - ${config.creator} Source: Wikipedia`, config.logo)
            msg.channel.send(infoaviva);
        }
        else if(args[2].toLowerCase() === "cemetery") {
            let cemeteryaviva = new Discord.MessageEmbed()
            .setTitle('AViVA - Cemetery')
            .setURL('https://ditto.fm/cemetery')
            .setColor(config.color)
            .setDescription('"Cemetery", a song made by AViVA.')
            .addField('Youtube', "https://www.youtube.com/watch?v=JlJ4bhS86Gc")
            .addField('Spotify', "https://open.spotify.com/album/7qSs2TMwUdozqNiuOcG6xm")
            .setImage('https://i.imgur.com/Nb20O4V.png')
            .setFooter(`Author - ${config.creator}`, config.logo)
            msg.channel.send(cemeteryaviva); 
          }
        else if(args[2].toLowerCase() === "psycho") {
            let psychoaviva = new Discord.MessageEmbed()
            .setTitle('AViVA - PSYCHO')
            .setURL('https://ditto.fm/psycho')
            .setColor(config.color)
            .setDescription('"PSYCHO", a song made by AViVA.')
            .addField('Youtube', "https://www.youtube.com/watch?v=7psJyJ-wZ5s")
            .addField('Spotify', "https://open.spotify.com/track/5ndQfV7CYyOp6l6xW3BJQe")
            .setImage('https://i.imgur.com/1mOa90T.jpg')
            .setFooter(`Author - ${config.creator}`, config.logo)
            msg.channel.send(psychoaviva);
        }
        else {
            msg.channel.send(ArtistNo);
        }
    }
    else if(args[1].toLowerCase() === 'au/ra') {
        if(args[2] === undefined) return msg.reply(ArtistNo);
        else if(args[2].toLowerCase() === 'info') {
            let aurainfo = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle('Musician Au/Ra')
            .setThumbnail('https://66.media.tumblr.com/2113f608cb00e08e3d357f2ca5e5a7db/21941742562c2449-28/s1280x1920/c7191b070c63fc9f66346fe682246bd3914aa047.jpg')
            .setURL('https://www.google.com/search?rlz=1C1CHBF_enLV855LV855&sxsrf=ALeKk026O5Rj24bHDn9AyhStmGpgVaCBhg%3A1583612478116&ei=PgJkXvvSBuuArwTDvqKwCw&q=Au%2FRa+musician&oq=Au%2FRa+musician&gs_l=psy-ab.3..0.5623.8840..9036...2.0..0.291.2624.0j13j3......0....1..gws-wiz.......35i39j0i67j0i273j0i20i263j0i22i30.mbXM4WrtNSQ&ved=0ahUKEwj76eCZmInoAhVrwIsKHUOfCLYQ4dUDCAo&uact=5')
            .setDescription('Jamie Lou Stenzel')
            .addField('Date of birth', '15 May, 2002')
            .addField('Place of birth', 'Ibiza, Spain')
            .addField('Latest release', 'Ghost')
            .addField('Top track in Spotify', 'As of 07/03/2020 the most popular track is Panic Room')
            .addField('Genre', 'Alternative pop, Electropop')
            //.setImage('https://i.imgur.com/wMWTjBh.png')
            .setFooter(`Author - ${config.creator} Source: Wikipedia`, config.logo)
            msg.channel.send(aurainfo);
        }
        else if(args[2].toLowerCase() === 'xgames') {
            let auraxgames = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle('Au/Ra - X Games')
            .setDescription('"X Games", a song made by Au/Ra')
            .addField('Spotify', 'https://open.spotify.com/track/7bZL8w4bwW1a7KFte4Fntv')
            .addField('YouTube', 'https://youtu.be/bWGH2s2ZX0Y')
            .setImage('https://i.imgur.com/rBwgDy5.jpg')
            .setFooter(`Author - ${config.creator}`, config.logo)
            msg.channel.send(auraxgames)
        }
        else if(args[2].toLowerCase() === 'ghost') {
            let auraghost = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle('Au/Ra - Ghost')
            .setDescription('"Ghost", a song made by Au/Ra in collaboration with Alan Walker.\nThis song is in the "Death Stranding" Original Soundtrack.')
            .addField('Spotify', 'https://open.spotify.com/track/5TgS4dcUAU8EEb506d8wAT')
            .addField('YouTube', 'https://youtu.be/1DCiUhNn9rc')
            .setImage('https://i.imgur.com/52yz75l.jpg')
            .setFooter(`Author - ${config.creator}`, config.logo)
            msg.channel.send(auraghost)
        }
        else {
            msg.channel.send(ArtistNo);
        }
    }
    else if(args[1].toLowerCase() === 'marina') {
        if(args[2] === undefined) return msg.reply(ArtistNo);
        else if(args[2].toLowerCase() === 'info') {
            let marinainfo = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle('Musician MARINA')
            .setThumbnail('https://peoplepill.com/media/people/thumbs/M/marina-and-the-diamonds.jpg')
            .setURL('https://www.google.com/search?rlz=1C1CHBF_enLV855LV855&sxsrf=ALeKk00KnrDGNH-WDLTJ0_dMQR-WGYL60w%3A1587118553474&ei=2YGZXpixHIGOrwTQrY-QBg&q=MARINA+and+the+diamonds+musician&oq=MARINA+and+the+diamonds+musician&gs_lcp=CgZwc3ktYWIQAzoECCMQJzoGCAAQBxAeOgIIADoECAAQHjoGCAAQCBAeShIIFxIOMTAtMjAxZzEzNGcxMzJKDAgYEggxMC00ZzFnMVD1TViCZGDMZGgBcAB4AIAB1AKIAZAbkgEIMC4xNC4zLjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjYgeKsne_oAhUBx4sKHdDWA2IQ4dUDCAs&uact=5')
            .setDescription('Marina Lambrini Diamandis')
            .addField('Date of birth', '10 October 1985')
            .addField('Place of birth', 'Brynmawr, Wales')
            .addField('Latest release', 'Love + Fear Acoustic EP')
            .addField('Top track in Spotify', 'As of 17/04/2020 the most popular album is About Love (From The Netflix Film “To All The Boys: P.S. I Still Love You”)')
            .addField('Genre', 'Pop, Indie pop, Electropop, New wave')
            .setFooter(`Author - ${config.creator} Source: Wikipedia`, config.logo)
            msg.channel.send(marinainfo)
        }
        else if(args[2].toLowerCase() === 'froot') {
            let marinafroot = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle('MARINA AND THE DIAMONDS - FROOT')
            .setDescription('"FROOT", a song made by MARINA AND THE DIAMONDS.')
            .addField('Spotify', 'https://open.spotify.com/track/6fk13PEdduHc2HG6JX6imT')
            .addField('Youtube', 'https://www.youtube.com/watch?v=WZzcY7ASQno')
            .setImage('https://upload.wikimedia.org/wikipedia/en/2/2d/Marina_and_the_Diamonds_-_Froot_%28album%29.png')
            .setFooter(`Author - ${config.creator}`, config.logo)
            msg.channel.send(marinafroot)
        }
    }
    else {
        msg.channel.send(ArtistNo);
    }
}
exports.run = run;