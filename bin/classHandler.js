const castHanler = require("./castHanler");

exports.classes = {
    warrior:{
        pv:50,
        force: 10,
        agility: 5,
        wisdom: 5,
        inteligence: 5,
        charisma: 5,
        mana:0,
        exp: 0,
        nextLvl: 1,
        basePoint: 10,
        
        class: "warrior",
        cast: {
          hit:castHanler.hit,
          berserk:castHanler.berserkhit
        },
        equipment:{},
        status:"alive"

      },
      mage:{
        pv:20,
        force: 5,
        agility: 5,
        wisdom: 5,
        inteligence: 10,
        charisma: 5,
        mana:30,
        exp: 0,
        nextLvl: 1,
        basePoint: 10,
        
        class: "mage",
        cast: {},
        equipment:{},
        status:"alive"
        
      },
      thief:{
        pv:35,
        force: 5,
        agility: 10,
        wisdom: 5,
        inteligence: 5,
        charisma: 5,
        mana:10,
        exp: 0,
        nextLvl: 1,
        basePoint: 10,
        
        class: "thief",
        cast: {},
        equipment:{},
        status:"alive"
      },
      peasant:{
        pv:30,
        force: 5,
        agility: 5,
        wisdom: 5,
        inteligence: 5,
        charisma: 5,
        mana:15,
        exp: 0,
        nextLvl: 1,
        basePoint: 15,
        
        class: "peasant",
        cast: {

        },
        equipment:{},
        status:"alive"
      },
      



}