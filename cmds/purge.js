const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

async function run(msg, args) {
    // code here will run
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
        const deleteCount = parseInt(args[1], 10);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return msg.reply("Please provide a number between 2 and 100 for the number of messages to delete");

        const fetched = await msg.channel.fetchMessages({ limit: deleteCount });
        msg.channel.bulkDelete(fetched)
            .catch(error => msg.reply(`Couldn't delete messages because of: ${error}`));
    }
    else {msg.channel.send('It looks like you don\'t have MANAGE_MESSAGE permission!')}
}
exports.run = run;