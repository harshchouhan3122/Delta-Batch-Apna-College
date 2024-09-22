// Part 2

// console.log() -> used to print the statement

console.log("Harsh", "Chouhan")



// Template Literals
let pencil = 5;
let eraser = 9;
let output = `Total Cost : Rs. ${pencil+eraser}`   //Back Ticks

console.log("Total Cost : Rs.", pencil+eraser) //Template Literals
console.log(output) //Template Literals


// OPERATORS IN JAVASCRIPT (Notes in Part 1 Javascript)

// Arithmetic Operations
let num1 = 20
let num2 = 4
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1%num2)
console.log(num1**num2)

// Unary Operator (Imp)
let num3 = 7
console.log(++num3) //First increment then use
console.log(num3++) //First used and then incremented
console.log(num3)

// Assignment Operators
// Comparision Operators
console.log(num1 > num2)
console.log(num1 >= num2)
console.log(num1 < num2)
console.log(num1 <= num2)
console.log(num1 != num2)

num1 = 2
num2 = '2'
console.log(num1 == num2)       //Compares the Value only
console.log(num1 === num2)      //Compares the (data type)



// Conditional Statements

// if-else
let age ;
age = 'Hello';
age = 12;
age = 20;
if (age >= 18){
    console.log("Valid Age for the Voting!")
}else if(age<18){
    console.log("Ivalid Age for the Voting!")
} 
else{
    console.log("Invalid Input!")
}

// nested if-else
// only males having age > 18 are Allowed
// Report Card Grading System
let sex;
sex = 'male'
if (age>18){
    if (sex=='female'){
        console.log("Not Allowed")
    }
    else{
        console.log("Allowed")
    }
}
else{
    console.log("Not Allowed")
}


