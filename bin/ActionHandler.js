const playerHandler = require("./playerHandler");
const playerSheetHandler = require("./playerSheetHandler");
const promptsHandler = require("./promptsHandler");
const classHandler = require("./classHandler");
const raceHandler = require("./raceHandler");
const mapHandler = require("./mapHandler");
const pjHandler = require("./pjHandler");
const index = require("./index");
const randHandler = require("./randHandler");
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

exports.generateRoom = async () => { // c'est ici qu'on genere les enemis dans les rooms

    mapHandler.map[5].enemis = {
        zombie1: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie2: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        }
    }
    mapHandler.map[3].enemis = {
        zombiedog: {
            ...pjHandler.enemi.zombieDog,
            status: "alive"

        }
    }
    mapHandler.map[4].enemis = {
        goule: {
            ...pjHandler.enemi.goule,
            status: "alive"

        }
    }
    mapHandler.map[6].enemis = {
        goule: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        zombie1: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie2: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        }
    }
    mapHandler.map[7].enemis = {
        goule1: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        goule2: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        zombie1: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie2: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie3: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie4: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        }
    }
    mapHandler.map[9].enemis = {
        littleDemon: {
            ...pjHandler.enemi.littleDemon,
            status: "alive"

        }
    }
    mapHandler.map[10].enemis = {
        vampire: {
            ...pjHandler.enemi.vampire,
            status: "alive"

        }
    }
    mapHandler.map[11].enemis = {
        shadowpriest: {
            ...pjHandler.enemi.shadowpriest,
            status: "alive"

        }
    }
    mapHandler.map[13].enemis = {
        goule1: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        goule2: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        vampire: {
            ...pjHandler.enemi.vampire,
            status: "alive"

        }
    }
    mapHandler.map[14].enemis = {
        goule1: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        goule2: {
            ...pjHandler.enemi.goule,
            status: "alive"

        },
        zombie1: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie2: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie3: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        },
        zombie4: {
            ...pjHandler.enemi.zombie,
            status: "alive"

        }
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
        ennemisCount = Object.entries(mapHandler.map[mapIndex].enemis).length;
        Object.entries(mapHandler.map[mapIndex].enemis).forEach((elem) => {
            console.log("ennemi : " + elem[0] + " / status:" + elem[1].status);
            elem[1].status == "alive" ? aliveEnemisCount++ : aliveEnemisCount;
        });
    }

    //on défini les action que l'utilisateur peux faire.
    action.playerstat = playerSheetHandler.modPlayer;
    if (aliveEnemisCount > 0) {

        action.attack = this.attack;
        action.enemistat = this.displayEnemiStat;
        action.goto = this.goto;

        obj[from] = [from];

        console.log(`${aliveEnemisCount} enemis alive. you can attack or go back.`);

        console.log(`use  ${Object.keys(action)}`);
        console.log(`on ${Object.keys(obj)}`);


    }
    else {
        console.log(`${aliveEnemisCount} enemis alive. go where you want.`);
        action.goto = this.goto;

        obj = { ...mapHandler.map[mapIndex].linkedTo };


        console.log(`use ${Object.keys(action)}`);
        console.log(`You can ${Object.values(obj)}`);

    }


    // on demande ce que l'utilisateur veux faire
    let UserInput = await promptsHandler.text("what do you want to do?");
    let arg = UserInput.split(" ");


    // on traite la demande. 
    if (arg[0] == "goto" && Object.values(obj).findIndex(el => el == arg[1]) > -1) {
        this.goto(arg[1])
    }

    if (arg[0] == "enemistat" && Object.values(mapHandler.map[mapIndex].enemis).findIndex(el => el == arg[1])) {

        pjHandler.enemistat(mapHandler.map[mapIndex].enemis[arg[1]]);
        let res = await promptsHandler.confirm("next");
    }

    if (arg[0] == "playerstat") {
        tmp = await action.playerstat(playerHandler.player, "normal");
        let w8t = await promptsHandler.confirm("");
    }

    if (arg[0] == "attack" && Object.values(mapHandler.map[mapIndex].enemis).findIndex(el => el == arg[1])) {
        await this.attack(mapHandler.map[mapIndex].enemis[arg[1]]);
    }


}

exports.goto = async (room) => {
    index.mapIndexFrom = index.mapIndex;
    index.mapIndex = room;

    console.log("changement de piece pour " + index.mapIndex);
}

exports.attack = async (target) => {
    let attackLoop = 1;
    if (target.pv <= 0) { attackLoop = 0 }
    while (attackLoop) {
        console.clear();

        if (target.pv <= 0) { break }

        console.log(`player: ${playerHandler.player.name} `)
        tmp = await playerSheetHandler.displayPlayerStat(playerHandler.player);
        pjHandler.enemistat(target);
        console.log("you can => " + Object.keys(playerHandler.player.cast));

        // on demande ce que l'utilisateur veux faire
        let UserInput = await promptsHandler.text("what do you want to do?");
        let arg = UserInput.split(" ");

        // on traite
        console.clear();
        if (playerHandler.player.cast[arg[0]] != undefined) {
            //on cast l'attaque
            playerHandler.player.cast[arg[0]](target, playerHandler.player);

            // on traite une contre attaque si la target n'est pas morte
            // si le mob n'est pas appeuré, il cast un sort
            //courage: ${playerStat.inteligence+playerStat.force}
            if (target.pv > 0) {
                let intimidation = randHandler.randomIntInc(1, playerHandler.player.charisma + playerHandler.player.force);
                let courage = randHandler.randomIntInc(1, target.inteligence + target.force);
                console.log(`
    Your intimidation roll: ${intimidation}
    Your target courage roll: ${courage}   
    `);

                if (intimidation < courage) {
                    console.log("your target is not afraid and attack you.");
                    //console.log(Object.keys(target.cast).length);
                    casttocast = randHandler.randomIntInc(0,Object.keys(target.cast).length-1);
                    target.cast[Object.keys(target.cast)[casttocast]](playerHandler.player,target);
                    //console.log(Object.keys(target.cast)[casttocast]](playerHandler.player,target))
                }
                else {
                    console.log(`${target.name} is afraid and will not attack.`);
                }
            }
        }

        tmp = await promptsHandler.confirm();

        if (arg[0] == "abort") {
            attackLoop = 0;
        }
    }
}


