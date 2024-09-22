# Javascript - Part 7

### 'this' keyword
    - refers to an object that is executing the current piece of code.


## try-catch block -> error handeling
    - remaining code terminates whenever error occured
    - to avoid this situation we use try-catch

    - try -> allows you to define a block of code to be tested for the errors while it is being executed
        -> it throws an error occured which is later being catched by catch block

    - catch -> allows you to define a block of code to be executed, if an error occurs in the try block

    - try can never be singally declared -> there is always catch statement with try


## Arrow Functions
    - Used to define a function in compact manner
    - usually used as value, as argument for high order function
    - usually used as callback
    - nameless functions

    - paranthesis is optional when there is a single argument (part7.js) -> compulsory to use when no argument
        - e.g. const cube = n => {return n**3}

### Implicit return in Arror Functions
    - no need to write return keyword -> when function is returning any single work (part7.js)
        - e.g const square = n => (n**2)
        - e.g const square = n => n**2
        - use of paranthesis is important for implicit returning value or don't use any bracket

## Set Timeout
    - If we wanna set timmer for particular task
    - inbuilt function of window object
    - setTimeout(function, timeout)
        - function passed in setTimeout is known as callback function
        - setTimeout -> run the callback after some time set by you
        - timeout -> in millisec -> for 1s = pass 1000
    - whenver APIs taking sometime to get the data -> that time we use it
    - define a callback function or pass any predefined function

    - Code -> setTimeout.js
    - Try to create a timmer of five seconds which will print the seconds after 1 sec
        - use setInterval() for this task
        - Code -> timmer.js

## Set Interval
    - setTimeout waits for timeout and then execute a given function 
    - setInterval waits for the given timeout and execute callback function againand again
    - id -> is used to break the execution of setInterval()
    - clearInterval(id)

## this keyword with Arrow Function
    - scope -> this -> based on calling object
    - scope -> this -> lexical scope -> parent's scope (inherit)
    - Code -> thisKeyword.js

    - arrow function this -> is usefull whenver we want to access the property of window object directly
        - setTimeout(), setInterval()

    - Window Object Call -> if you wanna use inbuilt function use 'this' with arrow function

#### Practice Que 
    -> Write a function to print "Hello World" 5 times at interval of 2sec each
    -> Code-> printInterval.js




    