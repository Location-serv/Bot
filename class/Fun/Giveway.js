const giveaways = require("discord-giveaways")
const ms = require("ms")
class Giveway{
    init(client){
        giveaways.launch(client, {
            updateCountdownEvery: 5000,
            botsCanWin: false,
            ignoreIfHasPermission: [],
            embedColor: "#bc0000",
            reaction: "🎉"
        });
    }
    verify(args, message){
        if(!args[0]){
             message.channel.send(`:x: Merci de mettre un **temps** !`)
             return false;
        }else if(args[1] == false || isNaN(args[1])){
            message.channel.send(`:x: Merci de mettre le nombre de **gagnant** !`)
            return false;
        }else if(!args[2]){
            message.channel.send(`:x: Merci de mettre un **prix** !`)
            return false;
        }
        return true;
    }
    start(channel, args){
        giveaways.start(channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnersCount: parseInt(args[1]),
            messages: {
                giveaway: "🎉 **GIVEAWAY** 🎉",
                giveawayEnded: "🎉 **GIVEAWAY FINI** 🎉",
                timeRemaining: "Temps restant **{duration}** !",
                inviteToParticipate: "Clique sur 🎉 pour participer !",
                winMessage: ":clap: Bravo, {winners} ! Tu as gagné **{prize}** !",
                embedFooter: "Giveaways",
                noWinner: "Fin du giveaway, aucun gagnant choisis.",
                winners: "Gagant(s)",
                endedAt: "Fini",
                units: {
                    seconds: "secondes",
                    minutes: "minutes",
                    hours: "heures",
                    days: "jours"
                }
            }
        });
    }
    launch(client){
        giveaways.launch(client, {
            updateCountdownEvery: 5000,
            botsCanWin: false,
            ignoreIfHasPermission: [],
            embedColor: "#bc0000",
            reaction: "🎉"
        });
    }
}
module.exports = Giveway;