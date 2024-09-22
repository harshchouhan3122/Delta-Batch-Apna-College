// Take range of num first min and max 
// then generate a random num between this range
// then guess the num

let min = parseInt(prompt('Enter minimum num (+ve): '));
let max = parseInt(prompt('Enter maximum num (+ve): '));

let randNum
random = (Math.random()*(max-min))
random = Math.floor(random)+1
random = random + min

// console.log(random)

let guess, result
guess = -1
result = "Game Ended."
let score = 0

while(guess!=randNum){
    score += 1
    guess = parseInt(prompt("Guess the num : "))
    if (guess == random){
        result = "Correct Guess!"
        break
    }
    else if (guess<random){
        console.log("Guess bigger number.")
    }
    else if (guess>random){
        console.log("Guess smaller number.")
    }
}

console.log(result, "Total Guessing: ",score)
