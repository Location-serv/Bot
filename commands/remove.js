
const Support = require('../class/Managers/TicketsManager') 

module.exports.run = async (bot, message, args) => {
    let Ticket = new Support()
    Ticket.remove(message)
}

module.exports.help = {
    name:"remove",
    category: "ticket"
}