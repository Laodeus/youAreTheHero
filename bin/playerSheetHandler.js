const boxen = require("boxen");
const actionHandler = require("./ActionHandler");
const objHandler = require("./objHandler");
const promptsHandler = require("./promptsHandler");


// this func modify the player stat
exports.modPlayer = async (playerStat, context) => {
    let temporaryPlayerStat = playerStat; // this object will be used for confirmation at the end
    let modPlayerloop = 1; // while this is 1, the loop continue

    let action = {}; // will containt availaible action and object
    let obj = {};
    console.log(context);

    // commande dispo a la premiere initialisation
    if (context == "first") {
        //action avalaible for the player in this case
        action.up = actionHandler.up;
        action.down = actionHandler.down;
        action.modify = actionHandler.modify;
        action.start = actionHandler.start;
        //object available for the player.
        obj.force = objHandler.force;
        obj.agility = objHandler.agility;
        obj.wisdom = objHandler.wisdom;
        obj.inteligence = objHandler.inteligence;
        obj.charisma = objHandler.charisma;
        obj.name = objHandler.name;
    }

    // commande dispo quand on affiche sa fiche de carac
    if (context == "normal") {
        console.log("action => up down modify exit");
        console.log("object => force agility wisdom inteligence charisma ");
    }
    while (modPlayerloop) {
        console.clear();
        console.log(boxen("Player Sheet."));
        this.displayPlayerStat(temporaryPlayerStat);

        console.log("use the prompt to do something : action object ");
        console.log(`action => ${Object.keys(action)}`);
        console.log(`object => ${Object.keys(obj)}`);

        let UserInput = await promptsHandler.text("what do you want to do?");

        // this line cut the prompt in array
        let arg = UserInput.split(" ");

        //je dois expliquer cette portion avant de mourir des yeux
        if (arg[0] in action && arg[1] in obj) {
            //temporaryPlayerStat[arg[1]] = action[arg[0]](obj[arg[1]],arg[1]);
            console.clear();
            temporaryPlayerStat[arg[1]] = await action[arg[0]](obj[arg[1]],arg[1]);
        }
        else {
            "I'm afraid you can't doo that";
        }
        await promptsHandler.confirm("lolilol");
    }
};

exports.displayPlayerStat = playerStat => {
    // this display the player stat
    console.log(
        boxen(`
      name: ${playerStat.name}   name: ${playerStat.race}   name: ${playerStat.class}      
      
      
      for: ${playerStat.force}   agi: ${playerStat.agility}   wis: ${playerStat.wisdom}
      
      int: ${playerStat.inteligence}   cha: ${playerStat.charisma}
      
      
      exp: ${playerStat.exp}/${playerStat.nextLvl}   lvl: ${playerStat.lvl}   point:${playerStat.basePoint}
      `)
    );
};