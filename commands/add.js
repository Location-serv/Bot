
const Support = require('../class/Managers/TicketsManager') 

module.exports.run = async (bot, message, args) => {
    let Ticket = new Support()
    Ticket.add(message)
}

module.exports.help = {
    name:"add",
    category: "ticket"
}