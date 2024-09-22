# Javascript - Part 3

##  String Methods
    - Strings are immutable in array
    - Methods are the actions that can be performed on objects.
    - stringName.method()

### Trim Method
    - str.trim() -> trims whitespaces from the ends of th string and return new string
    - e.g. str = "     Harsh     "  --> "Harsh"

### Strings are immutable in JS (like JAVA)
    - No changes can be made to string
    - Whenever we do try to make change, a new string is created and old one remains the same.
    - str.toLowerCase(), str.toUpperCase()

### String Methods with Arguments
    - Argument is value passed to the method
    - str.indexOf('hello')  -> if not exist then return -1
        - It will return first occurance

### Method Chaining
    - Multiple methods in single line
    - str = str.trim().toUpperCase()    -> left to right

### String Slicing
    - return substring / part of the string
    - str.slice(starting index, ending index-1)
    - Negative Index acceptable
        - 0,1,2,3,4 => -5,-4,-3,-2,-1
    
### replace Method
    - str.replace(to, with)
        - only replace first occurance

### repeat Method
    - returns a string with the number of copies of a string
    - str.repeat(3)




## Array (Data Structure)
    - Linear Data Structure
    - Used to store multiple data types into single storage location (into single variable)   --> Not allowed in C++, java
    - let array = ["Harsh", 24, 91.00, true]
    - 0-indexed array
    - Access the element -> array[0], array[-1]
    - list out of index error in python --> undefined in js
    - array.length --> length of the array
    - typeOf array --> object

### Arrays are mutable
    - array = [1,2,3]  -->  array[0] = 0  -->  array = [0,2,3]
    - free space is filled with empty string
        - arr = [1,2,3]  --> arr[5] = 5   -->   arr = [1,2,3,,,5]


## Array Methods
    - push (add to end)
    - pop (delete from the end)
    - unshft (add to start)
    - shift (delete from the start)
    - insert at particular index? (splice)

    - indexOf() -> return index of something
    - includes -> search for a value -> return true/false

    - concat -> merge 2 arrays (Not change the existing array)
    - reverse -> reverse an array

    - array.slice(start, end-1)     -> Negative indexing allowed
        - original array not changes  -> it return copy only

    - splice  -> removes/replace/add element in place
    - original array changes
        - splice(start, deleteCount, item0, item1, ...., itemN)
        - splice as unshift -> arr.splice(0,0,"element") 
    
### Array Sorting
    - array.sort()
    - array --> convert each item to string --> then sort
        - that's why we got wrong answer in case of number array (imp interview que)
    - use this method for the character array
    - Number array sorting --> ???

### Array Reversing
    - array.reverse()
        - Not for num array (Reason given above)

### Array Refernces
    - References -> address in memory
    - arr2 = arr2
        - both refelects the changes for array --> both are pointing same array
    - if you want to copy array so that they are independent 
        - arr2 = []  //define another array with same elements
        - new array -> new reference (Independent array)

### Constant Array
    - normal variable -> const g = 9.8
    - const arr = [1,2,3]
        - Some changes allowed in Array
    - const dcelares that the reference is immutable (means the address which is pointing towards the memory location can't be change for the variable declared with const)

        - in Array --> reference is not changing whenever we are performing array methods (Arrays are mutable)

        - in String --> reference changes (String are immutable in JS --> everytime new objects is created --> new reference is formed)
    - We can't assign new array to const declared array
        - const arr1 = [1,2,3]
        - arr1 = [2,3,4]    //Not allowed
    
### Nested Array
    - Arrays of arrays / Multidimensional Array / Matrices
    - arr[row][col]  --> to acess the element of 2D array

#### Assignment

    
