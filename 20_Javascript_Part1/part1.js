// Variable
let a = 9
console.log(a)

// Premitive Data Types
// Number
let b = 89
console.log(typeof(b))

b = "Harsh Chouhan"
console.log(typeof(b))

b = true
console.log(typeof(b))

let d
console.log(typeof d)

console.log(typeof(c))  // Not defined earlier

b = null                // Important Question - Loop hole of the javascript
console.log(typeof(b))



// Operatorions in Javascript
let num1 = 20
let num2 = 4

// Arithmetic Operations
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)
console.log(num1**num2)


// Unary Operator
let num3 = 7
console.log(++num3) //First increment then use
console.log(num3++) //First used and then incremented
console.log(num3)


// NaN Not a valid number
console.log(typeof NaN)
console.log(NaN + 1)

// Operator Precedence
// () -> ** -> *,/,% -> +,-     (Left to right)

c = (5+2)/7+1*2
console.log(c)

// Incase of multiple exponential power then evaluate from Right to left
c = 5**2**2
console.log(c)



// boolean
let condition1 = true
let condition2 = 'true'
// let condition3 = True
console.log(typeof condition1, typeof condition2, typeof condition3)




// String data type
let str1 = "Hello World"
console.log(typeof str1)

str1 = '4'
console.log(typeof str1)
str1 = 4
console.log(typeof str1)

str1 = 'Hello "Harsh" Bhai'
console.log(str1)
str1 = "Hello 'Harsh' Bhai"
console.log(str1.length)

console.log("harsh".length)

// String Concatination
console.log("Harsh"+" "+"Chouhan")
console.log("Harsh"+5)


// null and undefined
let year
console.log(year, typeof year)

year = null
console.log(year, typeof year)