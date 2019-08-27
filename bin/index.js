#!/usr/bin/env node

//before all, we clear the screen ^^
console.clear();

// we use enquire to
const { prompt } = require("enquirer");
const boxen = require("boxen");

const player = {
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

  if (Type == "password") {
    let result = readlineSync.question(message, {
      hideEchoBack: true
    });
    return result;
  }
};

const displayPlayerStat = playerStat => {
  // this display the player stat
  console.log(
    boxen(`
    name: ${playerStat.name}   name: ${playerStat.race}   name: ${playerStat.class}      
    
    
    for: ${playerStat.for}   agi: ${playerStat.agi}   wis: ${playerStat.wis}
    
    int: ${playerStat.int}   cha: ${playerStat.cha}
    
    
    exp: ${player.exp}/${player.nextLvl}   lvl: ${player.lvl}
    `)
  );
};

// this func modify the player stat
const modPlayer = async (playerStat, context) => {
  let temporaryPlayerStat = playerStat; // this object will be used for confirmation at the end
  let modPlayerloop = 1; // while this is 1, the loop continue
  while (modPlayerloop) { 
    console.clear();
    console.log(boxen("Player Sheet."));
    displayPlayerStat(temporaryPlayerStat);
    console.log("use the prompt to do something : action object ");
    // commande dispo a la premiere initialisation
    if (context == "first") {
      console.log("action => up down modify start");
      console.log("action => force agility wisdom inteligence charisma name ");
    }  
    // commande dispo quand on affiche sa fiche de carac
    if (context == "normal"){
      console.log("action => up down modify finished help ");
      console.log("object => force agility wisdom inteligence charisma ");
    }
    let action = await prompts("text","what do you want to do?");
  }
};


(async () => { // main loop
  console.clear();
  player.name = await prompts("text", "Quel est le nom de votre personnage?");
  modPlayer(player, "first");
})();
