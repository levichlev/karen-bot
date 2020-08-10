const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    client.generateInvite(["ADMINISTRATOR"]).then(l => {
        msg.channel.send(`Invite Link For Karen Bot:\n${l}`)
    })
}
exports.run = run;