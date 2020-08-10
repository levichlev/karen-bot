
const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    if (args[1] == null) args[1] = "You need to have something to say. >w<"
    args = args.join(' ')
    let uwu = args
    uwu = uwu.replace(/(?:l|r)/g, 'w')
    uwu = uwu.replace(/(?:L|R)/g, 'w')
    uwu = uwu.replace("no", "nyo")
    uwu = uwu.replace("mo", "myo")
    uwu = uwu.replace("No", "Nyo")
    uwu = uwu.replace("Mo", "Myo")
    uwu = uwu.replace("the", "de")
    uwu = uwu.replace("The", "De")
    uwu = uwu.replace("s", "sh")
    uwu = uwu.replace("S", "Sh")
    uwu = uwu.replace("ok", "oki")
    uwu = uwu.replace(/!+/g, `  >w< `)
    uwu = uwu.replace('source', 'sawuice')
    let f = Math.random() > 0.25
    if (f) {
        let c = uwu.charAt(0)
        uwu = c + '-' + uwu
    }
    msg.channel.send(uwu.toLowerCase() + " uwu!")
}
exports.run = run;