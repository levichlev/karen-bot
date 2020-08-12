const app = require("../bot.js");
const play = require('./play.js')
let client = app.client;
let Discord = app.Discord;
let config = app.config;
        
function run(msg, args) {
    if (play.connection.status == 0) {
        msg.reply('Goodbye!')
        msg.member.voice.channel.leave();
    } else {
        msg.reply('I\'m not in voice channel yet');
    }
}
exports.run = run;