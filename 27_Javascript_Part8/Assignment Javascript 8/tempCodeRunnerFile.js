let arr = [1,2,3,4,5] ;

let square = arr.map( (ele) => {
    return ele**2 ;
})

let squareSum = square.reduce((sum, ele) => (sum+ele)) ;


console.log(arr);
console.log(square);
console.log(squareSum);