const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
const Spotify = require('node-spotify-api');

function run(msg, args) {
    // code here will run
    args[0] = args.join(' ')
    args[0] = args[0].substring(8)
    var spotify = new Spotify({
        id: app.client.config.spotify_id,
        secret: app.client.config.spotify_secret
    });
                
    try {
        spotify
        .search({ type: 'track', query: args[0], limit: '1' })
            .then(function action (response) {
                action.response = response;
                msg.channel.send(`:compass: Looking up \`${args[0]}\``).then(async (msg) => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(response.tracks.items[0].name)
                    embed.setURL(response.tracks.items[0].external_urls.spotify)
                    embed.setThumbnail(response.tracks.items[0].album.images[0].url)
                    embed.setAuthor('Spotify', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/240px-Spotify_logo_without_text.svg.png')
                    embed.setColor(config.color)
                    embed.addField('Popularity', response.tracks.items[0].popularity)
                    var aname = 'Artist\'s name'
                    if (response.tracks.items[0].album.artists.length != 1) {
                        var a = [];
                        for (i in response.tracks.items[0].album.artists) {
                            a[i] = response.tracks.items[0].album.artists[i].name;
                        }
                        aname = 'Artist\'s names'
                        console.log(a.join('\n'));
                        embed.addField(aname, a.join('\n'))
                    }
                    else {
                        embed.addField(aname, response.tracks.items[0].album.artists[0].name)
                    }
                    embed.addField('Release Date', response.tracks.items[0].album.release_date + '\n(Year-Month-Day)', true)
                    embed.setTimestamp()
                    return msg.edit('Here you go!').then(() => { msg.edit(embed) })
                
        
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });

})
            })
    } catch (err) {
        msg.channel.send(err)
    }
}
exports.run = run;
