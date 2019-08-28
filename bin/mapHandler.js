const pjHandler = require("./promptsHandler");


exports.map = {
    1:{
        description:"Vous arrivez dans une grande piece. il y a un escalier en face (2) ",
        linkedTo:[2,3,4,5],
        enemis:[
            {
                heidi:pjHandler.enemi.osefADeterminerplustard, // linkera a un enemi present dans pjhandler
                status:"alive"
            }
        ]

    }
}