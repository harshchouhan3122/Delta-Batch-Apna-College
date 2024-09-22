/*
Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not.
*/

// Using AND Bitwise Operator
// let isEven = n => {
    //     if (n & 1 != 1)
    //         return true;
    //     return false;
    // }
    
// Using XOR Bitwise Operator
// let isEven = n => {
//     if ( (n^1) == (n+1))
//         return true;
//     return false;
// }

// Using Modulo Arithmetic Operator
let isEven = n =>{
    if (n%2==0)
        return true;
    return false;
}

let num, num1;
num = 5;
num1 = 8;

console.log(isEven(num));
console.log(isEven(num1));