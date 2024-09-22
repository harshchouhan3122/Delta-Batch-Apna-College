/**
  Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting
their name & age) :
name is age years old.
[Use template Literals to print this sentence]
 */



let name = prompt("Enter your Name : ");
let age = parseInt(prompt("Enter your Age : "));
let output = `${name} is ${age} years old.`
console.log(output)