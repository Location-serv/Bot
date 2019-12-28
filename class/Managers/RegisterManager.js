//  libs and configurations files
const Discord = require("discord.js");
const fs = require("fs");
const config = require('../../config/main.json');
const bot = new Discord.Client({disableEveryone: true});
const path = require('../Helpers/path')
bot.commands = new Discord.Collection();

class RegisterManager{
    constructor(){
        this.commands()
        this.events()
        this.login()
    }
    /**
     * Register all commands of bot
     */
    commands(){
        fs.readdir(path(`commands/`), (err, files) => {
            if(err) console.log(err);
            let jsfile = files.filter(f => f.split(".").pop() === "js");
            if(jsfile.length <= 0){
                console.log("Je ne trouve pas de commandes");
                return;
            }
            console.log(`${files.length} commandes chargés`);
            jsfile.forEach((f) =>{
                let props = require(path(`commands/${f}`));
                bot.commands.set(props.help.name, props);
            });
        });
    }
     /**
     * Register all events of bot
     */
    events(){
        fs.readdir(path(`events/`), (error, f) => {
            if (error) { return console.error(error); }
            console.log(`${f.length} events chargés`);
            f.forEach((f) => {
                let events = require(path(`events/${f}`));
                let event = f.split('.')[0];
                bot.on(event, events.bind(null, bot));
            });
        });
    }   
    /**
     * Login bot to Discord
     */
    login() {
        bot.login(config.token);
    }
}
module.exports = RegisterManager;