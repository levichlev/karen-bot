const app = require("../bot.js");
const Anilist = require('anilist-node')
const anilist = new Anilist()
let client = app.client;
let Discord = app.Discord;
let config = app.config;

function run(msg, args) {
    // code here will run
    args[0] = args.join(' ')
    args[0] = args[0].substring(6)
    msg.channel.send(`:compass: Searching for anime with name: \`${args[0]}\`.`).then(async msg => {
        const search = await anilist.search('anime', args[0])
        if (typeof search.media[0] == 'undefined') return msg.edit(`Couldn't find the anime: \`${args[0]}\``)
        const anime = await anilist.media.anime(search.media[0].id)
        const tags = []
        anime.tags.map((tag) => {
            if (!tag.isMediaSpoiler) tags.push(tag.name)
        })
        let animeDescription = anime.description.replace(/<[^>]*>?/gm, '')
        if (animeDescription.length > 1024) {
            animeDescription = `${anime.description.replace(/<[^>]*>?/gm, '').substring(0, 1020)}...`
        }
        const animeEmbed = new Discord.MessageEmbed()
            .setColor(config.color)
            .setTitle('ANIME - ' + anime.title.native || anime.title.romaji || anime.title.english)
            .setURL(anime.siteUrl)
            .setThumbnail(anime.coverImage.large)
            .addField('Score', `${(anime.meanScore / 10).toFixed(1)} / 10`, true)
            .addField('Release Date', `${anime.startDate.month}-${anime.startDate.day}-${anime.startDate.year}\n(Month-Day-Year)`, true)
            .addField('Studio', anime.studios[0].name, true)
            .addField('Genres', anime.genres.join(', '))
            .addField('Description', animeDescription)
            .addField('Tags', tags.join(', '))
            .addField(`Titles`, `**Native:** ${anime.title.native}\n**Romaji:** ${anime.title.romaji}\n**English:** ${anime.title.english}`)
            .setFooter(
                `Provided by: anilist.co`,
                msg.author.avatarURL({ format: 'png' })
            )
            .setTimestamp()
        return msg.edit('Here you go!').then(() => {msg.edit(animeEmbed)})
    })
}
exports.run = run;