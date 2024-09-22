/*
Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25
 */

let num = 287152

let sum = 0

while(num!=0){
    sum += num%10
    num = Math.floor(num/10)
}

console.log(sum)