const config = require('../../config/scoreboard.json')
class ScoreboardManager{
    refresh(client){
        setInterval(function(){
            const guild = client.guilds.get(config.guild);
            let getAllOfflineMembers = guild.members.filter(m => m.presence.status == 'offline').size
            let getAllOnlineMembers = guild.members.filter(m => m.presence.status != 'offline').size
            let getAllMembers = guild.memberCount;
            try{
                client.channels.get(config.members).setName(`👥 Membres : ${getAllMembers} 👥`);
                client.channels.get(config.onlines).setName(`✅ Connectés : ${getAllOnlineMembers} ✅`);
                client.channels.get(config.offlines).setName(`❌ Hors-Ligne : ${getAllOfflineMembers} ❌`);
            }catch(e){
                console.log(e)
            }
        }, 6000)
    }
}
module.exports = ScoreboardManager