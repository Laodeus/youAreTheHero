const castHandler = require("./castHanler");
const boxen = require("boxen")

exports.enemi = {
    zombie: {
        id:1,
        name: "zombie",
        pv:10,
        force: 0,
        agility: 0,
        wisdom: 0,
        inteligence: 0,
        charisma: 0,
        mana: 0,
        exp: 0,
        nextLvl: 1,
        basePoint: 10,
        lvl: 1,
        class: "peasant",
        race: "human",
        cast: {
            hit:castHandler.hit,bite:castHandler.bite
        },

        exp: 10
    },
    zombieDog: {},
    goule: {},
    vampire: {},
    littleDemon:{},


}

exports.enemistat = Stat => {
    // this display the player stat
    console.log(
        boxen(`
      name: ${Stat.name}   
      
      pv: ${Stat.pv}   mana:${Stat.mana}
      for: ${Stat.force}   agi: ${Stat.agility}   wis: ${Stat.wisdom}
      int: ${Stat.inteligence}   cha: ${Stat.charisma+Stat.force}
      
      initiative:${Stat.agility+Stat.inteligence}    parade:${Stat.inteligence+Stat.wisdom}    accuracy:${Stat.agility+Stat.wisdom}
      intimidation:${Stat.charisma+Stat.force}    courage: ${Stat.inteligence+Stat.force}

      exp: ${Stat.exp}/${Stat.nextLvl}
      `)
    );
};