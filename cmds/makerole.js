const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    if (msg.member.hasPermission('ADMINISTRATOR')) {
        if (args[1] == undefined) return msg.channel.send('Please tell me the name')
        else {
            msg.guild.createRole( { name: args[1], permissions: args[2] } );
        }
    }
    else {
        msg.channel.send('Only Administrators can do that!')
    }
}
exports.run = run;