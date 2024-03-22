let array1 = [1,2,3]
let array2 = array1

console.log(array1, array2)

array2.push(5)
console.log(array1, array2)


// That'swhy we have to create a copy of values into another array
// using spread
array2 = [...array1]
console.log(array1, array2)

array2.push(5)
console.log(array1, array2)