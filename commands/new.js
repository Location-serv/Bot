
const Support = require('../class/Managers/TicketsManager') 

module.exports.run = async (bot, message, args) => {
    let reason = args.join(" ");
    if(!reason) reason = "Raison non spécifiée par le client";
    let Ticket = new Support()
    if(Ticket.verify(message)){
        Ticket.create(message, reason)
    }
}

module.exports.help = {
    name:"new",
    category: "ticket"
}