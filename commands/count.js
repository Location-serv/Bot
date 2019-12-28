const Discord = require("discord.js");
const config = require('../config/main.json')

module.exports.run = async (bot, message, args) => {
    let guild = message.guild
    let getAllOfflineMembers = guild.members.filter(m => m.presence.status == 'offline').size
	let getAllOnlineMembers = guild.members.filter(m => m.presence.status != 'offline').size
	let getAllMembers = guild.memberCount;
    var response = new Discord.RichEmbed()
    .setColor("#228B22")
    .setDescription(":arrow_forward: Nombre de membres ")
    .addField(`👥 Membres : ${getAllMembers}`, "\u200B")
    .addField(`✅ Connectés : ${getAllOnlineMembers}`, "\u200B")
    .addField(`❌ Hors-Ligne : ${getAllOfflineMembers}`, "\u200B")
    message.channel.send(response)
}

module.exports.help = {
    name:"count",
    category: "utils",
}