// Square and sum the array elements using the arrow function and then find the
// average of the array.

let arr = [1,2,3,4,5] ;

let square = arr.map( (ele) => {
    return ele**2 ;
})

let squareSum = square.reduce((sum, ele) => (sum+ele)) ;

let avg_squareSum = squareSum / square.length ;

console.log(arr);
console.log(square);
console.log(squareSum);
console.log(avg_squareSum);
