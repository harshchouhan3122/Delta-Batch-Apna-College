/*
 Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6
*/

let num = 287152

let count = 0

while(num > 0){
    count += 1
    num = Math.floor(num /10)
}

console.log(count)