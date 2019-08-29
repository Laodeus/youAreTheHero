const pjHandler = require("./promptsHandler");


exports.map = {
    1:{
        description:`
Hall d'entrée.
--------------

taille : 5m*3m

composition:
1 porte a l'ouest (5)
1 porte a l'est (3)
un escalier devant vous (2)
`,
        linkedTo:[2,3,5]

    },
    2:{
        description:`
escalier principale
--------------

taille : 1.5m

composition:
une porte au nord (8)
1 porte au sud (1)`,
        linkedTo:[1,8]

    },
    3:{
        description:`
vestibule
--------------

taille : 3m*3m

composition:
1 porte au nord (4)
1 porte a gauche (1)
`,
        linkedTo:[4,1]
    },
    4:{
        description:`
salon d'invité
--------------

taille :un L de 3m*4m avec une petite piece de 1*1 a l'interieur

composition:
1 porte sur la gauche de la petite piece (15)
1 porte a a l'ouest (6)
1 porte au sud (3)
`,
        linkedTo:[6,3,15]},
    5:{
        description:`
reserve
-------

taille : 3m*3m

composition:
1 porte a l'ouest (1)
1 porte au nord (6)
`,
        linkedTo:[6,1]},
    6:{
        description:`
cuisine
--------------

taille : 5.5m*4m

composition:
1 porte au nord (7)
1 porte a l'ouest (4)
1 porte au sud (5)
`,
        linkedTo:[4,5,7]},
    7:{
        description:`
salle de reception
--------------

taille : 11m*6m

composition:
1 porte au nord (6)
`,
        linkedTo:[6]},
    8:{
        description:`
hall d'etage
--------------

taille : 3m*3m

composition:
1 escalier (2)
1 porte au nord (10)
1 porte a l'ouest (9)
1 porte a l'ouest (10)
`,
        linkedTo:[2,10,9]},
    9:{
        description:`
chambre d'enfant
--------------

taille : 3m*3m

composition:
1 porte a l'est (8)
1 porte a l'ouest (13)
`,
        linkedTo:[8,13]},
    10:{
        description:`
bibliotheque
--------------

taille : une piece en l de  6m*4.5m

composition:
1 porte au sud (11)
1 porte au nord (12)
1 porte a l'ouest (8)
1 porte a l'ouest dans le renfoncement (8)

`,
        linkedTo:[4,1]},
    11:{
        description:`
chapel
--------------

taille : 4.5m*2m

composition:
1 porte au sud (10)
`,
        linkedTo:[10]},
    12:{
        description:`
couloir nord
--------------

taille : 11m*2m

composition:
1 porte au sud (10)
un tournant a l'ouest (13)
`,
        linkedTo:[10,13]},
    13:{
        description:`
vestibule
--------------

taille : 3m*3m

composition:
1 porte a l'est (9)
1 porte au fond coté est (14)
`,
        linkedTo:[9,14]},
    14:{
        description:`
Chambre du maitre
-----------------

taille : 3m*3m

composition: 
1 porte a l'ouest (13)
`,
        linkedTo:[13]},
    15:{ 
        description:`
Porte manteau des invités
-------------------------

taille : 3m*3m

composition:
1 porte au sud (4)
1 porte a gauche (1)
`, 
        linkedTo:[4,1]},
}