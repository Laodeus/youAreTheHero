const randHandler = require("./randHandler");

exports.hit=(target,caster)=>{

    //console.log(target);
    //console.log(caster);

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.force)
        target.pv -= dice;
        console.log(`rolling dice from 1 to your force : ${caster.force} => you make ${dice} hit point`)
    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }
    else{
        console.log("You miss.");
    }
}
exports.berserkhit=(target,caster)=>{

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom-5);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);
    console.log(`
    Your accuracy-5 for berserk roll: ${accuraccy}
    Your target parade roll: ${parade}   
    `);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.force)+5;
        target.pv -= dice;
        console.log(`rolling dice from 1 to your force +5 for berserk : ${caster.force} => you make ${dice} hit point`)
    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }else{
        console.log("attack failed.");
    }
}
exports.fireball=(target,caster)=>{
    //console.log(target);
    //console.log(caster);

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.inteligence+caster.wisdom)
        target.pv -= dice;
        console.log(`rolling dice from 1 to your force : ${caster.force} => you make ${dice} hit point`)
    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }
    
    else{
        console.log("You miss.");
    }
}
exports.bite=(target,caster)=>{
    //console.log(target);
    //console.log(caster);

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.force/2+caster.agility)
        target.pv -= dice;
        console.log(`rolling dice from 1 to your force : ${caster.force} => you make ${dice} hit point`)
    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }
    
    else{
        console.log("You miss.");
    }
}
exports.clawHit=(target,caster)=>{
    //console.log(target);
    //console.log(caster);

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.force+caster.agility/2)
        target.pv -= dice;
        console.log(`rolling dice from 1 to your force : ${caster.force} => you make ${dice} hit point`)
    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }
    
    else{
        console.log("You miss.");
    }
}
exports.shadow=(target,caster)=>{
    //console.log(target);
    //console.log(caster);

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.inteligence*2)
        target.pv -= dice;
        console.log(`rolling dice from 1 to your intel*2 : ${caster.force} => you make ${dice} hit point`)
    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }
    
    else{
        console.log("You miss.");
    }
}
exports.vampirebite=(target,caster)=>{
    //console.log(target);
    //console.log(caster);

    let accuraccy = randHandler.randomIntInc(1,caster.agility+caster.wisdom);
    let parade = randHandler.randomIntInc(1,target.inteligence+target.wisdom);

    if(accuraccy > parade){
        dice = randHandler.randomIntInc(1,caster.force/2+caster.agility)
        target.pv -= dice;
        caster.pv += Math.round(dice);
        console.log(`rolling dice from 1 to your force : ${caster.force} => you make ${dice} hit point and get ${Math.round(dice)} pv`)

    
        if(target.pv <= 0){
            target.status ="dead";
            console.log(`${target.name} is dead`)
        }   
    }
    
    else{
        console.log("You miss.");
    }
}
