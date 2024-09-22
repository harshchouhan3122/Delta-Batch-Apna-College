/*
    -> Add the following elements to the container using ony JS and the DOM methods:

        -> a <p> with red text that sys "Hey I'm Red!"

        -> a <h3> with blue text that sys "Hey I'm Blue!"

        -> a <div> with black border and pink background color with the following elements inside of it :

            -> another <h1> that says "I'm in a div

            -> a <p> that says "ME TOO!"
*/

console.log("Start")

let para1 = document.createElement('p');
para1.innerText = "Hey I'm Red!";
para1.style.color = "red";
// para1.classList.add('red');
document.querySelector('body').append(para1);


let head3 = document.createElement('h3');
head3.innerText = "Hey I'm Blue!";
head3.style.color = "blue";
// para1.classList.add('blue');
document.querySelector('body').append(head3);


let divSection = document.createElement('div');
divSection.style.border = 'solid red 1px'
divSection.style.backgroundColor = 'pink'

let head1 = document.createElement('h1');
let para2 = document.createElement('p');

head1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

divSection.append(head1);
divSection.append(para2);

document.querySelector('body').append(divSection)



