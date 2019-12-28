const Discord = require("discord.js")
const config = require('../config/events.json')
const scoreboard = require('../config/scoreboard.json')

module.exports = (client, member) => {
    let main = client.channels.find(channel => channel.name.includes("discussion"))
    let welcome = client.channels.find(channel => channel.name.includes("arrivées"))
    welcome.send(`:up: Arrivée de **${member}** Nous sommes maintenant à **${client.guilds.get(scoreboard.guild).memberCount}** membres :tada:`)
    member.addRole(config.join.role)
    let embled = new Discord.RichEmbed()
        .setColor("#32CD32")
        .setTitle("Nouvelle arrivée sur le discord")
        .setDescription("Bienvenue **"+  member.displayName +  "** \n  \n **Aide** > */help* \n **Support** > */new*\n **Site** > *https://holycloud.fr*")
        .setFooter("HolyCloud", member.displayAvatarURL)
        .setTimestamp();
        main.send(embled);


}