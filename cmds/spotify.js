const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;
const Spotify = require('node-spotify-api');
const fs = require("fs");

function run(msg, args) {
    // code here will run
    args[0] = args.join(' ')
    args[0] = args[0].substring(8)
    var spotify = new Spotify({
        id: '94aaf8025e5f40309fef9706c3bc3aaa',
        secret: 'b9cb83f697ed4edeab375859f1858cd5'
    });
                
    try {
        spotify
        .search({ type: 'track', query: args[0], limit: '1' })
            .then(function (response) {
                msg.channel.send(`:compass: Looking up \`${args[0]}\``).then(async msg => {
                    var responseid = response.tracks.items[0].id;
                    fs.writeFileSync(app.dir + "/search/" + responseid + ".json", JSON.stringify(response));
                    fs.readFile(app.dir + "/search/" + responseid + ".json", function (err, data) {
                        spotify
                            .request(response.tracks.items[0].href)
                            .then(function (data) {
                                fs.writeFileSync(app.dir + "/track/" + responseid + ".json", JSON.stringify(data));
                                fs.readFile(app.dir + "/track/" + responseid + ".json", function (err, data) {
                                    spotifything = JSON.parse(data);
                                    const embed = new Discord.MessageEmbed()
                                    embed.setTitle(spotifything.name)
                                    embed.setURL(spotifything.external_urls.spotify)
                                    embed.setThumbnail(spotifything.album.images[0].url)
                                    embed.setAuthor('Spotify', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/240px-Spotify_logo_without_text.svg.png')
                                    embed.setColor(config.color)
                                    embed.addField('Popularity', spotifything.popularity)
                                    var aname = 'Artist\'s name'
                                    if (spotifything.album.artists.length != 1) {
                                        var a = [];
                                        for (i in spotifything.album.artists) {
                                            a[i] = spotifything.album.artists[i].name;
                                        }
                                        aname = 'Artist\'s names'
                                        console.log(a.join('\n'));
                                        embed.addField(aname, a.join('\n'))
                                    }
                                    else {
                                        embed.addField(aname, spotifything.album.artists[0].name)
                                    }
                                    embed.addField('Release Date', spotifything.album.release_date + '\n(Year-Month-Day)', true)
                                    embed.setTimestamp()
                                    return msg.edit('Here you go!').then(() => { msg.edit(embed) })
                                })
                        })
                        .catch(function (err) {
                            console.error('Error occurred: ' + err);
                        });
                    })
                })
            })
    } catch (err) {
        msg.channel.send(err)
    }
}
exports.run = run;