/*
Write an arrow function named arrayAverage that accepts an array of numbers
and returns the average of those numbers.
*/

let arrayAverage = (array) => {
    let sum = 0;
    for(let num of array){
        sum += num;
    }
    return sum/array.length
}


let array
array = [1, 2, 3, 4, 5, 6]

console.log(arrayAverage(array))