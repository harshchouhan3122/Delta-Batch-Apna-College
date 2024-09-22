// Create a function to roll a dice and always show the num between 1 to 6

function rollDice() {
    let num = Math.floor(Math.random()*6)+1
    return num
}

// console.log("Dice: ", rollDice());


let i = 0

while(i<20){
    console.log("Dice: ", rollDice());
    i++
}