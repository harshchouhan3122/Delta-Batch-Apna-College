// Javascript Part - 6

// Functions in JS
// write function to greet someone

// function define
function greet(){
    console.log("Hello Everyone!");
}

// function calling
greet()
greet()



// Functions with Arguments

// Greet with name
function greet(name){          //name -> Arguments
    return "Hello "+ name +", How are You?"     
}

console.log(greet("Harsh"))    //name -> Parameter
console.log(greet("Rohan"))


// Pass the arguments correctly

function isEligible(name, age, testScore, gender){
    if ((age>18) && (testScore>33)){
        console.log(`${name} is Eligible for DL.`)
    } else{
        console.log(`${name} is not Eligible for DL.`)
    }
}

isEligible("Harsh", 20, 39, "male")
isEligible(50, "male")




// Once you use the return keyword then function terminates at that point
function greet(){
    console.log('Hello')
    console.log('Hello')
    return "Done"
    console.log('Hello')
    console.log('Hello')
}

greet()



// Scope 


// Hoisting concept -> variable used before declaration
function outerFunc1() {
    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    let x = 15;
    let y = 19;

    innerFunc();
}

outerFunc1();



// Function Expression
// Another way to define function

let sum = function(a,b){    //Here sum is name of variable and the function is nameless
    return a+b;
}

console.log(sum(1,2))



// Higher Order Function
// taking function input
function multipleGreet(func, n){
    for(let i=0; i<n; i++){
        func();
    }
}

function greet(){
    console.log("Hello.")
}

multipleGreet(greet,4)
multipleGreet(function() {console.log("Namaste")} ,4)


// High Order Function -> returning a function

function oddEvenFactory(req){
    if (req=='odd'){
        let odd = function(n){
            return (n%2!=0);
        }
        return odd;
    }
    else if (req=='even'){
        let even = function(n){
            return (n%2==0);
        }
        return even;
    }
    else{
        console.log("Wrong Request")
    }
}


let req = "odd";


let func = oddEvenFactory("odd")
console.log(func(3))

func = oddEvenFactory("even")
console.log(func(3))