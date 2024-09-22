/**
 Qs1. Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6].
 */

let min, max
min = 1
max = 6

// let randomNum = Math.floor(Math.random()*max)+min
// console.log(randomNum)

let i = 0
while(i<50){    
    let randomNum = Math.floor(Math.random()*max)+min
    console.log(randomNum)
    i++
}


