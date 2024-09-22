// JS Assignment 9

// Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to “Click me”;

let input = document.createElement('input')
input.type = "text";

let button = document.createElement('button')
button.innerText = "Click me"

document.querySelector('body').append(input)
document.querySelector('body').append(button)




// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

button.setAttribute("id", "btn")
// input.placeholder = "Username";
input.setAttribute("placeholder", "username")



// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.

// document.querySelector('#btn').style.backgroundColor = "blue";
// document.querySelector('#btn').style.color = "white";

// Edit CSS file first and then add the class using js
document.querySelector('#btn').classList.add("btnStyle")





// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.

let heading = document.createElement('h1');
heading.innerText = "DOM Practice";
heading.style.textDecoration = "underline";
// heading.innerHTML = "<u> DOM Practice </u>"
heading.style.color = "purple";

// document.querySelector('body').append(heading);
document.querySelector('body').prepend(heading);




// Qs5.  Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold. 

let para = document.createElement('p');
para.innerHTML = "Apna College <b> Delta </b> Practice"
document.querySelector("body").append(para);