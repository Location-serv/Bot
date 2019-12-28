function check(user,message, permission){
    if(user.hasPermission(permission) == false){
        message.channel.send("**:x: Vous ne disposez pas de la permission nécessaire. (" + permission + ")**")
        message.delete()
        return false;
    }
    return true;
}
module.exports = check