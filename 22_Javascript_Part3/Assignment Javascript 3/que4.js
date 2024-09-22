/*
Write a JavaScript program to test whether the character at the given (character)
index is lower case.
*/

// Js not follows Ascii values

let str = "HelloWorld"
let index


index = 4
index = 0

if (str[index] == str[index].toLowerCase()){
    console.log(`Yes, It's in Lower Case : ${str[index]}`)
} else{
    console.log(`No, It's in Upper Case : ${str[index]}`)
}