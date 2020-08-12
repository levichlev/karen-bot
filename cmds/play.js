const app = require("../bot.js");
const ytdl = require('ytdl-core-discord');
const YouTubeAPI = require('simple-youtube-api');
let client = app.client;
let Discord = app.Discord;
let config = app.config;
const ytapi = new YouTubeAPI(client.config.ytapi_key);


function run(msg, args) {
     // code here will run
    async function play (msg) {
        ytapi.searchVideos(args[0],1).then(async function action (response){
            action.response = response;
            action.message = msg;
            msg.channel.send(`:compass: Looking up \`${args[0]}\``).then(async (msg) => {
                const embed = new Discord.MessageEmbed()
                embed.setTitle(action.response[0].title)
                embed.setURL('https://youtube.com/watch?v=' + action.response[0].id)
                embed.setThumbnail(action.response[0].thumbnails.default.url)
                embed.setColor(config.color)
                embed.addField('Channel',action.response[0].channel.title)
                return msg.edit('Now playing:').then(() => { msg.edit(embed).then(async () => {
                    const connection = await action.message.member.voice.channel.join();
                    exports.connection = connection;
                    const dispatcher = connection.play(await ytdl('https://youtube.com/watch?v=' + response[0].id, { filter: 'audioonly' }), { type: 'opus' });
                    dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    })
                })})
                
            })
            .catch(function(err) {
                console.error('Error occured: ' + err);
            })
        })
    }
    args[0] = args.join(' ')
    args[0] = args[0].substring(5)
    if(!msg.guild) return;
    if(msg.member.voice.channel) {
        play(msg);
    } else {
        msg.reply('You need to join a voice channel first!');
    }
}
exports.run = run;