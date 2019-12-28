const Discord = require('discord.js');
const Giveaway = require('../class/Fun/Giveway')
const permission = require('../class/Helpers/permission')

module.exports.run = async (client, message, args) => {

    if(permission(message.member, message, 'ADMINISTATOR')){
        let giveaway = new Giveaway()
        let verify = giveaway.verify(args, message)
        if(verify){
            giveaway.start(message.channel, args)
        }
    }

}

module.exports.help = {
    name: "event",
    category: "mod"
};