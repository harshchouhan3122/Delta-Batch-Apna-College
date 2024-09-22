# Javascript - Part 8

## Array Methods (Important)
    - Code -> arrayMethod.js
    - Code -> part8.js

### forEach
    - arr.forEach(some function defination or name)
    - alternate -> for(ele for array)

### map & filter
    - map -> similar as .forEach()
    - newArr = arr.map(some function or name)
    - it return some value everytime for every element
    - create new array which stores the value of every element from the map (Code-> arrayMethod.js)

    - filter -> condition -> for every element compare
    - newArr = arr.filter(some function)
    - it return true or false for every elements
    - Code -> arrayMethod.js

    - every -> return true if every element of array gives true for some function, else return false
    - same as logical "and" operator
    - when we wanna check some condition for every element -> check all num in array are even or not
    - Code -> arrayMethod.js

    - some -> act as logical "or" operator

    - reduce -> reduces the array to a single value
    - arr.reduce( reducer func with 2 variable for (accumulator, element) );
    - reducer function -> which has the logic to reduce the array
    - arr1.reduce( (res, ele) => (res+ele) )
        - everytime ele copy its value to accumulator 
            - here accumulator -> res
            - here element -> ele

### Maximum Num from Array -> using arr.reduce()
    - Code -> part8.js

#### Practice Que 
    -> Check if all the num in array are multiple of 10 or not. (checkMultiple.js)

    -> Create a function to find the min num in a array. (minNum.js)

## Default Parameters
    - giving default value to the arguments -> whenever the required parameter is not passed
    - Code -> part8.js
    - try to give default values to arguments from right to left
        - sum(a,b,c=0,d=0)

## Spread
    - Expand an iterable into multiple values
    - use three dots
    - iterables -> array, string 

    - console.log(...arr)

### Spread (Array Literals)
    - copy of array with new reference 
        - newArr = [...arr]
        - arrayUnion = [...arr1, ...arr2]

### Spread (Object Literals)
    - object copy
    - whenever you wanna assign extra properties to an object

    - convert array to  object -> index becomes key and data becomes value

## Rest
    - Opposite to Spread but Syntax same
    - Allows a function to take an indefinate number of arguments and bundle them in array
    - arguments do this task for us but we can't apply array methods to the argument's collection

## Destructuring
    - Storing values of the array into multiple variables
    - [first, second] = nums; -> num is the array
    

    

