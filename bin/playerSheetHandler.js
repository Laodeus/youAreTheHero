const boxen = require("boxen");
const actionHandler = require("./ActionHandler");
const objHandler = require("./objHandler");
const promptsHandler = require("./promptsHandler");
const playerHandler = require("./playerHandler");


// this func modify the player stat
exports.modPlayer = async (playerStat, context) => {
    let temporaryPlayerStat = {...playerStat}; // this object will be used for confirmation at the end
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
        action.reset = actionHandler.reset;
        action.start = actionHandler.start;
        //object available for the player.
        obj.force = objHandler.force;
        obj.agility = objHandler.agility;
        obj.wisdom = objHandler.wisdom;
        obj.inteligence = objHandler.inteligence;
        obj.charisma = objHandler.charisma;
        obj.name = objHandler.name;
        obj.class = objHandler.class;
        obj.race = objHandler.race;
        
    }

    // commande dispo quand on affiche sa fiche de carac
    if (context == "normal") {
            //action avalaible for the player in this case
            action.up = actionHandler.up;
            action.down = actionHandler.down;
            action.start = actionHandler.start;
            //object available for the player.
            obj.force = objHandler.force;
            obj.agility = objHandler.agility;
            obj.wisdom = objHandler.wisdom;
            obj.inteligence = objHandler.inteligence;
            obj.charisma = objHandler.charisma;
            
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
        // si l'argument passé arg[0] existe en propriétée dans l'objet action, 
        //on lance la propriétée et on la process. elle pointe vers une fonction dans actionHandler.
        // et on lui passe en parametre le deuxieme argument que l'actionhandler se chargerza de recuperer dans l'objHandler.

        // si les arguments sont up ou down
        if ((arg[0] == "up" || arg[0] == "down") && (arg[1] == "force" ||arg[1] == "agility" ||arg[1] == "wisdom" ||arg[1] == "inteligence" ||arg[1] == "charisma") ) {
            //temporaryPlayerStat[arg[1]] = action[arg[0]](obj[arg[1]],arg[1]);
            console.clear();


            let tempsArr = await action[arg[0]](
                obj[arg[1]],
                arg[1],
                temporaryPlayerStat[arg[1]],
                temporaryPlayerStat["basePoint"]
                );
            temporaryPlayerStat[arg[1]] = tempsArr[0];
            temporaryPlayerStat["basePoint"] = tempsArr[1];



        }
        else if (arg[0] == "reset") {
            console.clear();
            temporaryPlayerStat = {...await action[arg[0]]()};
        }
        else if (arg[0] == "modify" && (arg[1] == "name" ||arg[1] == "class" ||arg[1] == "race") ) 
        {
            
            arg[1] == "class"? temporaryPlayerStat = {...temporaryPlayerStat, ...await action[arg[0]](arg[1])}:"";
            arg[1] == "name"? temporaryPlayerStat.name = await action[arg[0]](arg[1]):"";
            arg[1] == "race"? temporaryPlayerStat.race = await action[arg[0]](arg[1]):"";
            

        }
        else if (arg[0] == "start") {
            console.clear();
            modPlayerloop = await action[arg[0]](temporaryPlayerStat);
        }
        else {
            console.clear();
            await promptsHandler.confirm("I'm afraid you can't doo that");
        }
        
    }
};

exports.displayPlayerStat = playerStat => {
    // this display the player stat
    console.log(
        boxen(`
      name: ${playerStat.name}   race: ${playerStat.race}   class: ${playerStat.class}      
      
      pv: ${playerStat.pv}
      for: ${playerStat.force}   agi: ${playerStat.agility}   wis: ${playerStat.wisdom}
      int: ${playerStat.inteligence}   cha: ${playerStat.charisma+playerStat.force}
      
      initiative:${playerStat.agility+playerStat.inteligence}    parade:${playerStat.inteligence+playerStat.wisdom}    accuracy:${playerStat.agility+playerStat.wisdom}
      intimidation:${playerStat.charisma+playerStat.force}    courage: ${playerStat.inteligence+playerStat.force}

      exp: ${playerStat.exp}/${playerStat.nextLvl}   lvl: ${playerStat.lvl}   point:${playerStat.basePoint}
      `)
    );
};