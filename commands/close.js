const Support = require('../class/Managers/TicketsManager') 
module.exports.run = async (bot, message, args) => {
    let Ticket = new Support()
    Ticket.close(message)
}

module.exports.help = {
    name: "close",
    category: "ticket"
}