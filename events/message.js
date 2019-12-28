
const Manager = require('../class/Managers/MessagesManager')
module.exports = (bot, message) => {
    const MM = new Manager(bot, message)
    MM.manager()
};