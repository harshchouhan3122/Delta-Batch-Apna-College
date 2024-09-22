# Javascript - Part 1

## Introduction 
    - Programming Language
    - Use to create Dynamic logical websites
    - Case Sensitive
    - Loosely Typed Programming language 
    - use semicolons (preferable) 

### Using Console
    - Environment
    - Console
        - Use to run Javascript
        - (Ctrl+l) to clear console
        - Uses REPL - Read Evaluate Print Loop 

### Variable
    - Used as container to store data of various data types
    - Variable is the Name of the storage location
    - Readable Naming
    - Rules
        - Symbols allowed - $ , _
        - Starts with alphabets
        - Use of keywords not allowed
        - Space not allowed

#### Way of writing names
    - camelcase     (JavaScript)
    - snake_case    (Python)
    - PascalCase    (Java)


### Data Types
    - Javascript automatically detects data type 
    - Primitive datatypes (Fundamental, Predefined)
        - Number
            - Integers, Decimals
            - Limit
        - Boolean
        - String
        - Undefined
        - Null
        - Bigint
        - Symbol

    - Derived datatypes
        - 

### Operators
    - (Code in part2.js)
    - Arithmetic Operators
        - Addition +
        - Substraction -
        - Multiplication *
        - Division /
        - Modulo (Remainder) %
        - Exponentiation **

    - Assignment Operators
        - =
        - +=, -=, /=, *= , %= 
        - age += 2 --> (age = age + 2)

    - Unary Operator (Single Operand)
        - postincrement, postdecrement  
            - a++, a--
            - Value will be used first and then update the value
        - preincrement, predecrement
            - ++a, --a
            - Increment the value first then update the value and then updated value will be use

    - Comparison Operator
        - >, >=, <, <=, !=
        - ==, === -> compare value, strict comparison (compare data type also) --> imp

    - Logical Operators  (Code in part-2)
        - && -> logical and
        - || -> logical or

    - Ternary Operator
        - condition ? True : False
        - age>18 ? c="Valid":c="Not Valid"

### NaN (Not a Number) in JS
    - 0/0
    - Represents invalid number

### Operator Precedence (Priority)
    - BODMAS is used in normal mathematics but not in programming
    - () -> ** -> *,/,% -> +,-     (Left to right)
    - Incase of multiple exponential power then evaluate from Right to left (2**3**2 = 2**9)

### let, const & var keywords
    - let   (Prefferable to use)
        - local variable
        - not used to declare again for the same variable
    - const
        - immutable (can't update the value again)
        - unique id (e.g Adhaar Number, PAN Number)
    - var
        - global variable


### TypeScript
    - Static Typed (fixed) whereas JS is dynamic typed
    - Designed by Microsoft
    - let num = true then num =5 is not allowed in typescript


### String in Js
    - Sequence of characters
    - written in "" or ''
    - Can store any character
    - Quotes within string
        - Use single quote outside and double quote inside or vice versa
    - String Indices (0 based indexing)
    - Lenght -> string1.length
    - String Concatination 
        - using + operator --> "Harsh"+" "+"Chouhan"
        - "Harsh" + 123         (Acceptable, num converted to string)


### null & undefined in JS
    - undefined
        - A variable that has not been assigned a value 
    
    - null
        - represents the intentional absence of any object value

