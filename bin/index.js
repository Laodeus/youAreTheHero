#!/usr/bin/env node

//before all, we clear the screen ^^
console.clear();

//
const { prompt } = require("enquirer");
const { Confirm } = require("enquirer");
const boxen = require("boxen");
const actionHandler = require("./ActionHandler");

let player = {
  name: "",
  for: 0,
  agi: 0,
  wis: 0,
  int: 0,
  cha: 0,
  exp: 0,
  nextLvl: 1,
  basePoint: 10,
  lvl: 1,
  class: "peasant",
  race: "human",
  cast: {}
};

// this function create prompt async.
const prompts = async (Type, message) => {
  if (Type == "text") {
    const response = await prompt({
      type: "input",
      name: "inpt",
      message: message
    });
    return response.inpt;
  }
  if (Type == "confirm") {
    const prompt = new Confirm({
      name: "question",
      message: message
    });

    answer = await prompt.run();
    console.log(answer);
  }
};

const displayPlayerStat = playerStat => {
  // this display the player stat
  console.log(
    boxen(`
    name: ${playerStat.name}   name: ${playerStat.race}   name: ${playerStat.class}      
    
    
    for: ${playerStat.for}   agi: ${playerStat.agi}   wis: ${playerStat.wis}
    
    int: ${playerStat.int}   cha: ${playerStat.cha}
    
    
    exp: ${playerStat.exp}/${playerStat.nextLvl}   lvl: ${playerStat.lvl}   point:${playerStat.basePoint}
    `)
  );
};

// this func modify the player stat
const modPlayer = async (playerStat, context) => {
  let temporaryPlayerStat = playerStat; // this object will be used for confirmation at the end
  let modPlayerloop = 1; // while this is 1, the loop continue

  let action = {}; // will containt availaible action and object
  let obj = {};

  // commande dispo a la premiere initialisation
  if (context == "first") {
    action.up = actionHandler.up();
    action.down = actionHandler.down();
    action.modify = actionHandler.modify();
    action.start = actionHandler.start();
    //console.log(action)
    console.log("action => force agility wisdom inteligence charisma name ");
  }

  // commande dispo quand on affiche sa fiche de carac
  if (context == "normal") {
    console.log("action => up down modify exit");
    console.log("object => force agility wisdom inteligence charisma ");
  }
  while (modPlayerloop) {
    console.clear();
    console.log(boxen("Player Sheet."));

    displayPlayerStat(temporaryPlayerStat);

    console.log("use the prompt to do something : action object ");

    let UserInput = await prompts("text", "what do you want to do?");

    // this line cut the prompt in array
    let arg = UserInput.split(" ");
  }
};

(async () => {
  // main loop
  console.clear();
  player.name = await prompts("text", "Quel est le nom de votre personnage?");
  player = modPlayer(player, "first"); // the player will be replaced by the modified content of itself via the function
  console.log(player);
})();
