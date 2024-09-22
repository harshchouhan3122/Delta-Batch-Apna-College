// Write a JavaScript function that returns array elements larger than a number.
function greaterElements(array, n){
    let res = []
    for(let i=0; i<array.length; i++){
        if (array[i] > n){
            res.push(array[i])
        }
    }
    return res
}


let array = [1,2,98,17,19,2,3,4,5,6,7,8,9,10]
let num = 5
let res = greaterElements(array, num)

console.log(res)

// Try to solve it Using sorting of array

