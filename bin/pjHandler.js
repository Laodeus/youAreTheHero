const castHandler = require("./castHanler");
const boxen = require("boxen")

exports.enemi = {
    zombie: {
        id:1,
        name: "zombie",
        pv:10,
        force: 8,
        agility: 5,
        wisdom: 2,
        inteligence: 15,
        charisma: 5,
        mana: 0,
        cast: {
            hit:castHandler.hit,
            bite:castHandler.bite
        },
        exp: 10
    },
    zombieDog: {
        id:1,
        name: "Zombie Dog",
        pv:15,
        force: 10,
        agility: 8,
        wisdom: 3,
        inteligence: 6,
        charisma: 6,
        mana: 0,
        cast: {
            bite:castHandler.bite,
            clawHit:castHandler.clawHit
        },
        exp: 10
    },
    goule: {
        id:1,
        name: "zombie",
        pv:20,
        force: 12,
        agility: 15,
        wisdom: 10,
        inteligence: 20,
        charisma: 15,
        mana: 0,
        cast: {
            hit:castHandler.hit,
            bite:castHandler.bite,
            clawHit:castHandler.clawHit,
            
        },
        exp: 10
    },
    shadowpriest: {
        id:1,
        name: "shadowpriest",
        pv:20,
        force: 10,
        agility: 10,
        wisdom: 30,
        inteligence: 25,
        charisma: 30,
        mana: 0,
        cast: {
            hit:castHandler.hit,
            bite:castHandler.bite,
            clawHit:castHandler.clawHit,
            
        },
        exp: 10
    },
    vampire: {
        id:1,
        name: "shadowpriest",
        pv:20,
        force: 10,
        agility: 10,
        wisdom: 30,
        inteligence: 25,
        charisma: 30,
        mana: 0,
        cast: {
            bite:castHandler.vampirebite,
            clawHit:castHandler.clawHit,
            
        },
        exp: 10
    },
    littleDemon:{
        id:1,
        name: "Little demon",
        pv:30,
        force: 20,
        agility: 10,
        wisdom: 15,
        inteligence: 30,
        charisma: 25,
        mana: 0,
        cast: {
            hit:castHandler.hit,
            clawHit:castHandler.clawHit,
            fireball:castHandler.fireball
        },
        exp: 10
    },
    littleDemon:{
        id:1,
        name: "Little demon",
        pv:50,
        force: 30,
        agility: 20,
        wisdom: 10,
        inteligence: 20,
        charisma: 40,
        mana: 0,
        cast: {
            hit:castHandler.hit,
            clawHit:castHandler.clawHit,
            fireball:castHandler.fireball,
            vampirebite:castHandler.vampirebite
        },
        exp: 10
    },


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