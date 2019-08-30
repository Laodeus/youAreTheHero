#!/usr/bin/env node

//before all, we clear the screen ^^
console.clear();

const boxen = require("boxen");
const actionHandler = require("./ActionHandler");
const promptsHandler = require("./promptsHandler");
const playerHandler = require("./playerHandler");
const playerSheetHandler = require("./playerSheetHandler");
const objHandler = require("./objHandler");
const mapHandler = require("./mapHandler");
const classHandler = require("./classHandler");

exports.mapIndex = 1;
exports.mapIndexFrom = 1;

// main loop auto launched with (()=>{})()
(async () => {

  console.clear();

  arg = process.argv;

  actionHandler.generateRoom(); // va ajouter les enemis dans les room
  if (arg[2] == "auto") {
    playerHandler.player.name = "toto";
    playerHandler.player = {...playerHandler.player, ...classHandler.classes.warrior  }
  }
  else {


    playerHandler.player.name = await promptsHandler.text("Player name?");

    playerHandler.player = await playerSheetHandler.modPlayer(playerHandler.player, "first"); // the player will be replaced by the modified content of itself via the function
  }
  console.clear();
  while (1) {
    
    console.clear();
    await actionHandler.displayMapInfo(this.mapIndex, this.mapIndexFrom);

  }

})();
