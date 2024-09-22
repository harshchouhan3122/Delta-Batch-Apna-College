// Write a JavaScript function to generate a random number within a range (start,end).

function rand(s,e){
    let diff = e-s
    return Math.floor(Math.random()*(diff+1))+s
}


let start, end

start = 1
end = 5

let randomNum = rand(start,end)

console.log(randomNum)

for(let i =0; i<20; i++){
    console.log(rand(5,10))
}