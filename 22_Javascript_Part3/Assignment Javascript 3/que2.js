/*
Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]
*/

let arr, n
arr = [7,9,0,-2]
n = 3

// console.log(arr.slice(arr.length-n))
console.log(arr.slice(-n))
