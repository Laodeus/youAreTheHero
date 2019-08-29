const playerHandler = require("./playerHandler");
const playerSheetHandler = require("./playerSheetHandler");
const promptsHandler = require("./promptsHandler");
const classHandler = require("./classHandler");
const raceHandler = require("./raceHandler");
const mapHandler = require("./mapHandler");
const pjHandler = require("./pjHandler");
/*===================================================

Function for handle the user sheet

===================================================*/
exports.up = async (CharacInitialValue, charackeyString, characToprocess, temporaryBasePoint) => {
    // arg the value of the charac that the objhandler is charged to find in playerstat
    // the charac string formated
    // the charac that you have to up
    // all the argument passed by the user prompt, 
    if (temporaryBasePoint > 0) {
        return [++characToprocess, --temporaryBasePoint];
    }
    else {
        console.clear();
        console.log(`Sorry, You don't have anough point to upgrade your ${charackeyString}`);
        return [characToprocess, temporaryBasePoint];
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

exports.start = async (temporaryPlayerStat) => {
    console.clear();
    playerSheetHandler.displayPlayerStat(temporaryPlayerStat);
    let confirmation = await promptsHandler.confirm("Confirm the character creation?");
    playerHandler.player = { ...temporaryPlayerStat };


    return 0;
}

exports.modify = async (arg) => {
    if (arg == "name") {
        let resp = await promptsHandler.text("new player name:");
        return resp
    }
    if (arg == "race") {
        console.clear();
        console.log(`race => ${Object.keys(raceHandler.races)}`)
        let resp = await promptsHandler.text("chose player race:");
        if (raceHandler.races[resp.split(' ')[0]] != undefined) {
            return raceHandler.races[resp.split(' ')[0]];
        }
        else {
            console.clear();
            await promptsHandler.confirm("Invalid class");
        }
    }
    if (arg == "class") {
        while (1) {
            console.clear();
            console.log(`classes => ${Object.keys(classHandler.classes)}`)
            let resp = await promptsHandler.text("chosse player class:");
            if (classHandler.classes[resp.split(' ')[0]] != undefined) {
                return classHandler.classes[resp.split(' ')[0]];
            }
            else {
                console.clear();
                await promptsHandler.confirm("Invalid class");
            }
        }
    }
    if (arg == "name") {
        let resp = await promptsHandler.text("new player race:");
        return resp
    }
}

exports.reset = () => {
    return playerHandler.player
}

/*===================================================

Function for handle the game room

===================================================*/

exports.generateRoom = () => { // c'est ici qu'on genere les enemis dans les rooms

    mapHandler.map[5].enemis = {
        zombie1: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie2: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
    }


}
/*===================================================

Function for handle the game room displayed

===================================================*/

exports.displayMapInfo = async (mapIndex, from) => {
    let action = {}; // will containt availaible action and object
    let obj = {};
    //on affiche la description de la map
    console.log(mapHandler.map[mapIndex].description)
    // si il y a des enemmis, on, affiche les enemis si il n'y en as pas, on affiche qu'il n'y a pas d'enemis
    // si il y en as, on ajoute la posibilité d'attaquer et ne laisse que la possibilité d'aller d'ou on vient
    // si il n'y en a pas, on donne la possibilité d'aller dans toutes les rooms connectée
    let ennemisCount = 0;
    let aliveEnemisCount = 0;
    if (mapHandler.map[mapIndex].enemis != undefined) {
        ennemisCount=  Object.entries(mapHandler.map[mapIndex].enemis).length;
        Object.entries(mapHandler.map[mapIndex].enemis).forEach((elem)=>{
            console.log("ennemi : " + elem[0] +" / status:" + elem[1].status );
            elem[1].status == "alive"? aliveEnemisCount++: aliveEnemisCount;
        });
        aliveEnemisCount > 0 ? console.log(`${aliveEnemisCount} enemis alive. you can attack or go back.`):"";
    }

    if(aliveEnemisCount > 0 ){
        
        action.attack = this.attack;
        action.goto = this.goto;
    }
    else{
        action.goto = this.goto;
    }

    
    

    //on défini les action que l'utilisateur peux faire.


    // on demande ce que l'utilisateur veux faire
    let UserInput = await promptsHandler.text("what do you want to do?");
}

exports.goto = () => { }