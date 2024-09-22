// Function to print Mltiplication Table of given number


function printTable(num){
    console.log("__________________")
    for(let i =1; i<11; i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
    console.log("__________________")
}

printTable(8)
printTable(13)
printTable(20)