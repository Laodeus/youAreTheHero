#!/usr/bin/env node

//before all, we clear the screen ^^
console.clear();

const boxen = require("boxen");
const actionHandler = require("./ActionHandler");
const promptsHandler = require("./promptsHandler");
const playerHandler = require("./playerHandler");
const playerSheetHandler = require("./playerSheetHandler");
const objHandler = require("./objHandler");



// main loop auto launched with (()=>{})()
(async () => {
  console.clear();
  playerHandler.player.name = await promptsHandler.text("Player name?");
  playerHandler.player = await playerSheetHandler.modPlayer(playerHandler.player, "first"); // the player will be replaced by the modified content of itself via the function
  console.clear();
  console.log(playerHandler);
})();
