const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
     // code here will run
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
exports.run = run;