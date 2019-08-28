const playerHandler = require("./playerHandler");
const promptsHandler = require("./promptsHandler");
const classHandler = require("./classHandler");

exports.up = async (CharacInitialValue, charackeyString, characToprocess, temporaryBasePoint) => {
    // arg the value of the charac that the objhandler is charged to find in playerstat
    // the charac string formated
    // the charac that you have to up
    // all the argument passed by the user prompt, 
    if (playerHandler.player.basePoint > 0) {
        return [++characToprocess, --temporaryBasePoint];
    }
    else {
        console.clear();
        console.log(`Sorry, You don't have anough point to upgrade your ${charackeyString}`);
        return characToprocess, temporaryBasePoint;
    }
}

exports.down = async (CharacInitialValue, charackeyString, characToprocess, temporaryBasePoint) => {

    if (CharacInitialValue < characToprocess) {
        return [--characToprocess, ++temporaryBasePoint];
    }
    else {
        await promptsHandler.confirm(`Sorry, You can't downgrade your ${charackeyString}.`);
        return characToprocess, temporaryBasePoint;
    }
}


exports.modify = (arg) => {
    console.log("modify");
    return;
}

exports.start = async (temporaryPlayerStat) => {
    console.clear();
    console.log(temporaryPlayerStat);
    console.log(playerHandler.player);
    let confirmation = await promptsHandler.confirm("Confirm the character creation?");
    playerHandler.player = { ...temporaryPlayerStat };



    return 0;
}

exports.modify = async (arg) => {
    if (arg == "name") {
        let resp = await promptsHandler.text("new player name:");
        return resp
    }
    if (arg == "class") {
        while (1) {
            console.clear();
            console.log(`classes => ${Object.keys(classHandler.classes)}`)
            let resp = await promptsHandler.text("chosse player class:");
            if (classHandler.classes[resp.split(' ')[0]] != undefined) {
                return resp
            }
            else {
                console.clear();
                await promptsHandler.confirm("Invalid class");

            }
        }
    }
    if (arg == "race") {
        let resp = await promptsHandler.text("new player race:");
        return resp
    }
}

exports.reset = () => {
    return playerHandler.player
}