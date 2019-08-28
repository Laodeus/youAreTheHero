const playerHandler = require("./playerHandler");

exports.up = async (arg,charac)=>{
    if(playerHandler.player.basePoint > 0){
        playerHandler.player.basePoint--;
        return ++arg;
    }
    else{
        console.log(`Sorry, You don't have anough point to upgrade your ${charac}`);
    }
   
    return;
}

exports.down = (arg)=>{
    console.log("down");
    return;
}

exports.modify = (arg)=>{
    console.log("modify");
    return;
}

exports.start = (arg)=>{
    console.log("start");
    return;
}