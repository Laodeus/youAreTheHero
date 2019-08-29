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

let mapIndex = 1;

// main loop auto launched with (()=>{})()
(async () => {

  console.clear();

  arg = process.argv;

  actionHandler.generateRoom(); // va ajouter les enemis dans les room
  if (arg[2] == "auto") {
    playerHandler.player.name = "toto";
  }
  else {


    playerHandler.player.name = await promptsHandler.text("Player name?");

    playerHandler.player = await playerSheetHandler.modPlayer(playerHandler.player, "first"); // the player will be replaced by the modified content of itself via the function
  }
  console.clear();
  while (1) {
    actionHandler.displayMapInfo(5, 1)
    await promptsHandler.confirm("finished");

  }

})();
