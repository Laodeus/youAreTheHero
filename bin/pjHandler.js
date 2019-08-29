const castHandler = require("./castHanler");

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