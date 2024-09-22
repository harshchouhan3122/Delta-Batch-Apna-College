// Javascript Part - 5

// Object Literals
/*
    - Objects -> Collection of properties
    - Same as dictionary in python
*/

// app.js -> code 

let student = {
    name : "Harsh",
    age : 23,
    marks : 95.5
}

// - More clearity as data stored in array (here key defines extra info about value)
let student2 = ["Harsh", 23, 95.5]

console.log(student)
console.log(student2)


// can store array inside object
let item = {
    price: 100.99,
    discount: 40,
    colors : ["red","pink"]
}

// get values
console.log(item.price)         //using dot operator
console.log(item["price"])      //using square bracket

// use of square brackets
let property = "price"
console.log(item[property])
console.log(item.property)      //undefined


// Conversion of key to string automatically
let obj = {
    1:'a',
    null:'b',
    undefined:'c',
    true:'d',
}
// all these keys will be converted to string under object


// Add/Update Properties
// let student
student = {
    name : "Harsh",
    age : 23,
    marks : 95.5
}
console.log(student)

// Update
student.marks = 99
console.log(student)

// Add new property
student.gender = 'male'
console.log(student)

// Delete property
delete student.marks
console.log(student)



// Nested Objects
const classInfo = {
    aman : {
        age : 5,
        gender : 'male'
    },
    harsh : {
        age : 7,
        gender : 'male'
    },
    shraddha : {
        age : 6,
        gender : 'female'
    }
}

console.log(classInfo)
console.log(classInfo.harsh)
console.log(classInfo.harsh.gender)


// Array of Objects
const classInfo2 = [
    {
        name : 'aman',
        age : 5,
        gender : 'male'
    },
    {
        name : 'harsh',
        age : 7,
        gender : 'male'
    },
    {
        name : 'shraddha',
        age : 6,
        gender : 'female'
    }
]

console.log(classInfo2[0])
console.log(classInfo2[0].name)


// Math Object
console.log(Math)


// Random Integer between 1 to 10
let i = 0
while(i<10){
    let num = Math.random()
    // console.log(num)
    num = num*10
    // console.log(num)
    num = Math.floor(num)
    // console.log(num)
    num += 1    // Because 1 is exculsive so max num will be 9
    console.log(num)
    i++
}


// Random Integer between 1 to 5
// let i
i = 0
while(i<10){
    let num = Math.floor(Math.random()*5)+1
    console.log(num)
    i++
}

// Random Integer between 21 to 25
// let i
i = 0
while(i<10){
    let num = Math.floor(Math.random()*5)+1
    num = num + 20
    console.log(num)
    i++
}