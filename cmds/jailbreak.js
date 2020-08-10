const app = require("../bot.js");
let client = app.client;
let Discord = app.Discord;
let config = app.config;

let jblist = new Discord.MessageEmbed();
jblist.setTitle('Jailbreak error')
jblist.setColor(config.color)
jblist.setDescription('You have not specified or have mistyped the name of a Jailbreak')
jblist.addField('Info about JB', 'To get info, just type info after the command')
jblist.addField('List of Jailbreaks', 'checkra1n\nunc0ver\nChimera')
jblist.addField('List of Package Managers', 'Cydia\nInstaller\nZebra\nSileo')
jblist.setFooter(`Author - ${config.creator}`, config.logo)

function run(msg, args) {
    // code here will run
    if (args[1] == undefined) return msg.channel.send(jblist)
    else if (args[1].toLowerCase() == 'info') {
        let jbinfo = new Discord.MessageEmbed()
        jbinfo.setTitle('Info about JB')
        jbinfo.setColor(config.color)
        jbinfo.setDescription('Information about Jailbreak')
        jbinfo.addField('What is JB?', 'Jailbreaking is the privilege escalation of an Apple device for the purpose of removing software restrictions imposed by Apple on iOS, iPadOS, tvOS and watchOS operating systems. This is typically done by using a series of kernel patches.', true)
        jbinfo.setFooter(`Author - ${config.creator} Source: Wikipedia`, config.logo)
        msg.channel.send(jbinfo)
    }
    else if (args[1].toLowerCase() == 'cydia') {
        let jbcydia = new Discord.MessageEmbed()
        jbcydia.setTitle('Package Manager Cydia')
        jbcydia.setColor(config.color)
        jbcydia.addField('Developer', 'Jay Freeman (saurik)')
        jbcydia.addField('What is Cydia?', 'Cydia is a package manager mobile app for iOS that enables a user to find and install software not authorized by Apple on jailbroken iPhones, iPads and iPod touch devices. It also refers to digital distribution platform for software on iOS accessed through Cydia software.')
        jbcydia.setThumbnail('https://www.mobipicker.com/wp-content/uploads/2016/07/Cydia.png')
        jbcydia.setFooter(`Author - ${config.creator} Source: Wikipedia`, config.logo)
        msg.channel.send(jbcydia)
    }
    else if (args[1].toLowerCase() == 'installer') {
        let jbinstaller = new Discord.MessageEmbed()
        jbinstaller.setTitle('Package Manager Installer')
        jbinstaller.setColor(config.color)
        jbinstaller.setURL('https://apptapp.me/repo/')
        jbinstaller.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/5/52/InstallerLogoLarge.png')
        jbinstaller.addField('Creator', 'Created by Nullriver and later maintained by RipDev.')
        jbinstaller.addField('What is Installer', 'Installer allowed users to install third-party applications into the iPhone\'s Applications directory where native applications are kept.Users could install applications from a variety of sources(over Wi - Fi or UMTS) provided by software developers or directly onto the iPhone without requiring a computer.')
        jbinstaller.setFooter(`Author - ${config.creator} Source: Wikipedia`, config.logo)
        msg.channel.send(jbinstaller)
    }
    else if (args[1].toLowerCase() == 'zebra') {
        let jbzebra = new Discord.MessageEmbed()
        jbzebra.setTitle('Package Manager Zebra')
        jbzebra.setColor(config.color)
        jbzebra.setURL('https://getzbra.com/')
        jbzebra.setThumbnail('https://media.idownloadblog.com/wp-content/uploads/2020/01/Zebra-package-manager-icon.jpg')
        jbzebra.addField('Creator', 'Wilson Styres')
        jbzebra.addField('What is Zebra', 'Zebra is a basic package manager that offers all features you need to download and install your favorite jailbreak apps and tweaks from repositories. It is pretty fast and it was designed to work on iOS 8 up to iOS 13. Zebra can be installed for free from the official Cydia Repository.')
        jbzebra.setFooter(`Author - ${config.creator} Source: KubaDownload`, config.logo)
        msg.channel.send(jbzebra)
    }
    else if (args[1].toLowerCase() == 'sileo') {
        let jbsileo = new Discord.MessageEmbed()
        jbsileo.setTitle('Package Manager Sileo')
        jbsileo.setColor(config.color)
        jbsileo.setURL('https://getsileo.app/')
        jbsileo.setThumbnail('https://getsileo.app/img/icon.png')
        jbsileo.addField('Creator', 'CoolStar')
        jbsileo.addField('What is Sileo', 'Sileo is a fast, beautiful, powerful and efficient APT Package Manager designed for jailbroken devices running iOS 11 and up with focus on being up to date and most importantly reliable.')
        jbsileo.setFooter(`Author - ${config.creator} Source: Sileo Website`, config.logo)
        msg.channel.send(jbsileo)
    }
    else if (args[1].toLowerCase() == 'unc0ver') {
        let jbu0 = new Discord.MessageEmbed()
        jbu0.setTitle('unc0ver')
        jbu0.setColor(config.color)
        jbu0.setThumbnail('https://raw.githubusercontent.com/pwn20wndstuff/Undecimus/master/Undecimus/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60%403x.png')
        jbu0.setURL('https://unc0ver.dev/')
        jbu0.setDescription('Semi-Untethered Jailbreak')
        jbu0.addField('Creator', 'pwn20wnd')
        jbu0.addField('Devices and Versions', 'unc0ver supports iOS 11.0 through to iOS 13.3 (Excluding 12.3-12.3.2 and 12.4.2-12.4.5) ')
        jbu0.setFooter(`Author - ${config.creator}`, config.logo)
        msg.channel.send(jbu0);
    }
    else if (args[1].toLowerCase() == 'checkra1n' || args[1].toLowerCase() == 'checkrain') {
        let jbc1 = new Discord.MessageEmbed()
        jbc1.setTitle('checkra1n')
        jbc1.setDescription('Semi-Tethered Jailbreak')
        jbc1.setColor(config.color)
        jbc1.setThumbnail('https://i.imgur.com/aXHDE6x.png')
        jbc1.setURL('https://checkra.in/')
        jbc1.addField('Creator', 'Kim Jong Cracks')
        jbc1.addField('Devices and Versions', 'Jailbreak for iPhone 5s though iPhone X, iOS 12.3 and up')
        jbc1.setFooter(`Author - ${config.creator}`, config.logo)
        msg.channel.send(jbc1)
    }
    else if (args[1].toLowerCase() == 'chimera') {
        let jbchimera = new Discord.MessageEmbed()
        jbchimera.setTitle('Chimera')
        jbchimera.setColor(config.color)
        jbchimera.setDescription('Semi-Untethered Jailbreak')
        jbchimera.setThumbnail('https://chimera.sh/img/icon.png')
        jbchimera.setURL('https://chimera.sh/')
        jbchimera.addField('Creator', 'CoolStar')
        jbchimera.addField('Devices and Versions', 'All devices, iOS 12 — 12.2 and 12.4')
        jbchimera.setFooter(`Author - ${config.creator}`, config.logo)
        msg.channel.send(jbchimera)
    }
    else {
        msg.channel.send(jblist)
    }
}
exports.run = run;