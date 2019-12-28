const Discord = require("discord.js");
const config = require('../config/main.json')

module.exports.run = async (bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous avez pas la permission d'utiliser cette commande!");

    var args = message.content.split(" ").slice(1);
    var nb = args[0];
    var replay = []

    if(!nb) return message.channel.send(":x: Vous devez préciser le nombre de messages à supprimer")
    if(isNaN(nb)) return message.channel.send(":warning: " + nb +" n'est pas un nombre.")
    if(nb < 1 || nb > 100) return message.channel.send(":warn: Veuillez préciser un nombre entre 1 et 100")
    message.delete()
    try{
        message.channel.bulkDelete(nb)
        replay['color'] = "#228B22"
        replay['field'] = "Modérateur"
        replay['value'] = message.author
        replay['messages'] = nb
    }catch(e){
        console.log("Erreur (Suppression de message):" + e)
        replay['color'] = "#FF0000";
        replay['field'] = "Erreur"
        replay['value'] = e
        replay['messages'] = 0
    }
    var response = new Discord.RichEmbed()
    .setColor(replay['color'])
    .setDescription(":arrow_forward: Suppression de message")
    .addField(replay['field'], replay['value'])
    .addField("Nombre de messages", replay['messages']);

    var channel = bot.channels.get(config.channels.logs)
    channel.send(response)

}

module.exports.help = {
    name:"clear",
    category: "mod"
}