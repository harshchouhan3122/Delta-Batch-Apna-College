// forEach
let cube = n => {
    console.log(n**3);
}

let array = [1,2,3,4]
// array.forEach(cube)

array.forEach((i)=>{
    console.log(i**3)
})

// forEach for the object 
// Max Marks = 40
let arr = [{
    name:"Rohan",
    marks:25
},
{
    name:"Mohit",
    marks:35
},
{
    name:"Rajesh",
    marks:30
}
]

// forEach() -> to print name of every student
arr.forEach((student)=>{
    console.log(student.name + "->"+ student.marks)
})


// map

// let you wanna square all the elements
// let array = [1,2,3,4]
let square = array.map( (num) => {
    return num**2;      //undefined when not return any value
});

console.log(array)
console.log(square)


// Calculate percentage of students using map
let percentage = arr.map( (student) => {
    return student.marks/40*100;
})

console.log("Score: " + percentage)



// filter

// find the even num from the array using filter
let nums = [1,2,3,4,5,6,7,8,9,10]

let even = nums.filter( (num) =>{
    return num%2==0} )

console.log(even)


// every
console.log(even.every( (num) =>{
    return num%2==0
}))

// some
console.log(nums.some( (num) =>{
    return num%2==0
}))


// reduce
let arr1 = [1,2,3,4]
let arraySum = arr1.reduce( (res, ele) => (res+ele) )
// (0,1) -> (1,2) -> (3,3) -> (6,4) -> 10
console.log(arraySum)

// Max element from the array using reduce() -> part8.js

