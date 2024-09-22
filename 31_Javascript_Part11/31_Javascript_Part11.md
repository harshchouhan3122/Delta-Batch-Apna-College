# Javascript - Part 11

## Call Stack
    -> Exists in every programming languages
    -> using Stack (LIFO) -> data structure
    -> function call -> func in call stack -> 
    
    -> Vizualising Call Stack

    -> Code - part11.js

## Breakpoints
    -> used for debugging of our code

    -> Debug your code using browser
        -> Sources -> pages -> your js file
        -> Check breakpoints and Call Stack here
        -> Scope, Return value vizualize

## JS is Single Threaded Language
    -> Execute single thing at a time

    -> Special features in JS to handle time delay
        -> Callbacks - they are tjose functions which are used as argument to another function
        -> setTimeout(callback, timeOut)

        -> Single Threaded lang still setTimeout and setInterval works simultaneously, How???
            -> these waiting timmer are controlled by the browser and browser are using C++ -> C++ is multi threaded lang

        -> JS Code -> call stack (setTimeout) 
        
        -> browser works on setTimeout and then throws it to call stack after the timeOut and then JS execute the retun value of callback of setTimeout

### Asynchronous & Synchronous JS
        -> Syncronous - line by line
        -> Asynchronous - when we use setTimeout, setInterval etc



## Callback Hell (Asynchronous Nature of JS)
    -> nesting in callbacks -> is known as callback hell -> code is not readable properly
    -> Code - callbackHell.js

    -> promises, async & await -> used to avoid callback hell


## Promises
    -> The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

    -> Code - promises.js

    -> Promise - Object 
        -> Resolve & Reject (Success/ Failure)

    -> Promise State - fulfilled(complete), pending, rejected(failure)

### then() and catch() methods
    -> do further work on the basis of promise state

### Promise Chaining
    -> multiple .then()
    -> Improved Version
    -> to avoid callback hell (nesting of callbacks)

### Results and Errors in Promises
    -> 