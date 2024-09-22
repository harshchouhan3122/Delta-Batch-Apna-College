// Javascript Part -3 

//  String Methods

// Trim
let password = "     Harsh Chouhan     "     //Spaces are not allowed in password
password = password.trim()

console.log(password)

// Strings are immutable in JS
let str1 = "Apna      "
str1.trim()     // Strings are immuatble in JS

str1 = str1 + "College"
console.log(str1)

// Upper Case and Lower Case
let str
str = "Hello"
console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str.indexOf('l'))   //Return first occurance

// Method chaining
str = "      hello     "
console.log(str.trim().toUpperCase())


// String Slicing
str = "Hello World"
console.log(str.slice(2))
console.log(str.slice(2,5))
console.log(str.slice(-4))
console.log(str.slice(-5, -1))

// Replace Method
str = str.replace("ello",'ii')
console.log(str)

str = "hellohellohello"
str = str.replace("hello", "hii")
console.log(str)
str = str.replace("hello", "hii")
console.log(str)


// repeat Method
str = "Hello"
str = str.repeat(3)
console.log(str)



//  Array (data Structure)

let students = ["Rohan", "Mohan", "Rohit", 45.6, true]

console.log(students)

for(let i=0; i<students.length; i++){
    console.log(students[i])
}

// Arrays are Mutable
let fruits = ["banana", 'apple', 'mango']
fruits[0] = "Orange"
console.log(fruits)

fruits[7] = "Lichi"     //Empty data inbetween free spaces
console.log(fruits)


// ARRAY METHODS
let array
array = [1,2,3,4,5,6]
console.log(array)
array.push(8)
console.log(array)
array.pop()
console.log(array)
array.unshift(55)
console.log(array)
array.shift()
console.log(array)

// Other Array Methods
array = [1,2,3,4,5,6]
console.log(array.indexOf(5))   //Index
console.log(array.indexOf(8))

console.log(array.includes(5))  //Search
console.log(array.includes(8))


let arr1 = [1,2,3,3,5,6]
let arr2 = [5,6,7]

console.log(arr1.concat(arr2))
console.log(arr1.reverse())

// Array Slicing
console.log(arr1.slice(2,3))
console.log(arr1.slice(-2))



// Array Splice **
let colors = ["red", "yellow", "green"]

// - splice(start, deleteCount, item0, item1, ...., itemN)
colors.splice(1,2,"orange","purple")

console.log(colors)

// Splice as Unshift
colors.splice(0,0,"White")
console.log(colors)


// Array Sorting
// - array --> convert each item to string --> then sort
// - that's why we got wrong answer in case of number array (imp interview que)

let nums, characters

characters = ['v','e','a','z','b']
nums = [4,7,9,2,5,3,2,6,87,0,89]

console.log(characters.sort())
console.log(nums.sort())            // Not for num array

// Reverse an array
console.log(characters.reverse())
console.log(nums.reverse())         // Not for num array


// Array References
console.log("name" == "name")
console.log("1" == 1)
console.log("1" === 1)

console.log([1] == [1])
console.log([]==[])
console.log([1,2,3]==[1,2,3])
// return false in case of array --> array references

// JS allocat new memory everytime for the new array
// whereas in Java and in Python they use new Reference for new array and if the value of new array is same then the new reference is pointing towards the previous array
// let arr1, arr2
arr1 = ['a','b']
arr2 = arr1
console.log(arr1, arr2)

arr2.push('d')
console.log(arr1, arr2)

arr1.unshift('2')
console.log(arr1, arr2)

// Independent arrays
arr1 = ['a','b']
arr2 = ['a','b']
// arr2 = arr1
console.log(arr1, arr2)

arr2.push('d')
console.log(arr1, arr2)

arr1.unshift('2')
console.log(arr1, arr2)



// Constant Array
const arr3 = [1,2,3]
arr3.push(4)
console.log(arr3)

const str4 = "absdgdvb"
console.log(str4)
str4.slice(1,3)
console.log(str4)

// - in Array --> reference is not changing whenever we are performing array methods (Arrays are mutable)
        
// - in String --> reference changes (String are immutable in JS --> everytime new objects is created --> new reference is formed)
// const arr3 = [1,2,3]
arr3 = [1,5,7]  //We can't assign new array to const declared array
console.log(arr3)


// let nums
nums = [[1,2],[3,4],[5,6]]
console.log(nums)