// -> Check if all the num in array are multiple of 10 or not. (checkMultiple.js)

let arr1 = [10, 20, 30, 40, 50]
let arr2 = [10, 20, 35, 40, 50]

let result1 = arr1.every( (num)=>{
    return num%10==0
})

let result2 = arr2.every( (num)=>{
    return num%10==0
})

console.log(result1)
console.log(result2)