/*
Write a JavaScript program to check if an element exists in an array or not.
*/

let array, element

array = [1,2,3,4,5]

element = 8
element = 2

if (array.includes(element) === true){
    console.log(`${element} --> Yes Present in the array at index : ${array.indexOf(element)}.`)
} else{
    console.log(`${element} --> Not Present in the array.`)
}