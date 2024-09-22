# Javascript - Part 6

## Functions in Javascript
    - used to reduce redundancy in code
    - block of code for repeatitive task
    - inbuilt functions (console.log(), num.toFixed(x))
    - user defined functions (factorial())

    - function define -> function call -> return some value
    - function function_name { //logic }

    - Practice Que -> rollDice.js

### Functions with Arguments
    - function calling -> parameters
    - function define -> arguments

    - function funcName (arg1, arg2, ...){}

    - Arguments -> value passed to function

    - pass the arguments in the given order
        - you can skip the arguments of the right end
        - you cann't skip the left ended arguments
        - e.g. function check(name, age, gender) {}
            - if you pass -> name, age -> allowed
            - if you pass -> age, gender -> not allowed

    - Practice -> function to get average of three nums (Code -> avg.js)
    - Practice -> function to print Table of given num (Code -> printTable.js)

### return Keyword 
    - used to return some value from the function
    - we can use this returned value by storing this value to any variable 
        - result = sum(a,b,c,d)

    - function terminates once you return a value from that function (part6.js)

    - we cann't return mutiple values simultaneously -> array, objects are used for it

    - Practice Que -> function return sum of num from 1 to n.

    - Practice Que -> function return the concatination of all the strings in an array (concatArrayItem.js)

### What is Scope?
    - Determines the sccessibility of variables, objects, and functions from different parts of the code
    - function scope 
    - block scope
    - lexical scope
    - global scope

#### function Scope
    - variable defined inside a function are not accessible (visible) from outside the function
    - priority over global variable
    - can use global scoped variables but not vice versa

#### block Scope
    - variable defined inside a block i.e {} are not accessible (visible) from outside the block
    - priority over global variable
    - can use global scoped variables but not vice versa

#### lexical Scope (lexicalScope.js)
    - variable defined outside a function can be accessible inside the another function defined after the variable declaration
    - vice versa is not possible

#### Hoisting
    - use od variable before its declaration (part6.js)

### Function Expression
    - Another way to write functions
    - store a function inside a variable (part6.js) -> for nameLess functions

    - if you wanna operate function as variable then you can use it

### High Order Function
    - do either or both
        - function that takes one or multiple functions as arguments
        - return a function

    - pass the function with name only 
        - () are used for calling
        - funcName() -> never pass func along with bracket to high order function

    - returns a function

## Methods
    - Methods / Functions are almost same.
    - Method -> those function which are defined under object
    - Actions that can be performed on an object.
    - Code -> calculator.js

    - Methods (Shorthand) -> calculator.js



