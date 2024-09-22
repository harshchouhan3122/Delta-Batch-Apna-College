// Javascript Part - 8

// Array Method
// arrayMethods.js

// arr.forEach()
// arr.map()
// arr.filter()
// arr.every()
// arr.some()
// arr.reduce()



// Maximum Num from the array using arr.reduce()
let arr = [1,4,6,8,3,4,2,83]

let maxNum = arr.reduce((res, num) => {
    if (num>res){
        return num;
    }
    return res;
})

console.log(maxNum)



// Default Parameters
function sum(a=0,b=0,c){
    return a+b;
}

console.log(sum(5,6,7))
console.log(sum(5))
console.log(sum(5,6))     //third num-> undefined




// Spread
let arr3 = [1,4,2,6,8,23]

let ans = Math.min(arr3)
console.log(ans)

ans = Math.min(...arr3) // all the num of array goes one by one -> spreaded form
console.log(ans)

console.log(...arr3)

let str = "Harsh"
console.log(...str)




// String Assignment is different from the array
let str1 = "Harsh"
let str2 = str1

console.log(str1, str2)

str2 += 'a'
console.log(str1, str2)

// Observe
// String (immutable), Array(Mutable)
let array1 = [1,2,3]
let array2 = array1

console.log(array1, array2)

array2.push(5)
console.log(array1, array2)


// That'swhy we have to create a copy of values into another array
// using spread
array2 = [...array1]
console.log(array1, array2)

array2.push(8)
console.log(array1, array2)




// Spread -Object Literals

const data = {
    email: 'email123@gmail.com',
    password: 'abcd',
};

// Assigning extra properties
const dataCopy = {...data, id:123}

console.log(data)
console.log(dataCopy)



// Spread Array into object
arr = ['h','a','r','s','h']

let obj = {...arr}

console.log(obj)



// REST -> opposite to Spread
// when you don't know the number of arguments -> bundle it using REST concept

// arguments -> default collection -> return all the arguments 
function sum(){
    let ans = 0
    for(num of arguments)
        ans += num
    return ans
}

// argument collection is immutable in nature
// function sum(){
//     let ans = 0
//     arguments.push(2)    // Not Allowed
//     for(num of args)
//         ans += num
//     return ans
// }

function sum(...args){
    let ans = 0
    args.push(2)        // Manipulate the given arguments
    for(num of args)
        ans += num
    return ans
}

let res = sum(1,2,4,5,7,8)
console.log(res)




// Destructuring of Array
let names = ["Harsh", "Rohan", "Mohan", 'Shivani']

let [first, second, ...others] = names

console.log(first, second, others)



// Destructuring of Objects

const student = {
    name : "harsh",
    class : 9,
    subjects : ['hindi', 'english', 'physics', 'chemistry'],
    username : 'harsh123',
    password : 'abc123'
}

// If we want only username and pass of the student then destructuring is used
let {username, password} = student;     // variable name should be same in this case
console.log(username, password)

// Using Destructuring
// let {username : user, password: pass} = student     // If we wanna store data in another variable
// console.log(user, pass)

// console.log(user, pass, city)       // If property doesn't exists then you can pass default value

let {username : user, password: pass, city="Mumbai"} = student     // If we wanna store data in another variable
console.log(user, pass, city)