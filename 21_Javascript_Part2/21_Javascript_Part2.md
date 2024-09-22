# Javascript - Part 2

### console.log()
    - Used to print the statement

### Linking JS File
    - <script src="app.js"> </script>
    - write just before the ending of the body tag -> so that html elements (like buttons and lists) loads first and then the js file        (OPTIONAL but good practice)

### Template Literals
    - They are used to add embedded expressions in a String.
    - Back ticks `` and $sign are used to add variables within the String e.g. `total: ${a+b}`

### Operators
    - Previously Discussed in Javascript part - 1
    - Arithmetic Operators
    - Unary Operators (Single Operand)
    - Assignment Operators
    - Comparison Operators (==, ===)
    - Logical Operators

#### Comparison of Non Numbers
    - unicode comparision
    - 'a' -> 61, 'A'-> 41   (Change in the JS, no need to remember)

### Conditional Statements
    - if-else if-else
    - nested if-else
    - switch

### Logical Operators
    - Discussed in part 1 of javascript notes

### truthy & falsy
    - Everything in JS is true or false (in boolean context)
    - true
        - any num (+ve or -ve) other than 0
        - any string except empty string
    - false
        - false
        - 0, -0
        - null
        - undefined
        - ""
        - NaN

### Switch Statement
    - case based scenerio
    - case
    - break (imp) -> otherwise all further cases will run one by one from the the case which is true
    - default (behaves like else statement)

### Alert and Prompt
    - Alert -> OK button for the pop up on the page
    - Prompt -> Dialog box that asks for some input  -> null value input by default
