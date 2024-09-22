// Javascript Part - 10

let btn = document.querySelector('button');
console.dir(btn)

// onclick
// btn.onclick = function () {
//     console.log('Button was Clicked.')
// }


function sayHello() {
    console.log('Hello');
}

// btn.onclick = sayHello();


let btns = document.querySelectorAll('button')

// for(btn of btns){
//     btn.onclick = sayHello; //Assign function here, not call here
// }





// onmouseenter -> hover

// for(btn of btns){
//     btn.onmouseenter = () => {console.log("You entered a button.")}
// }





// Use of Event Listeners
let greet1 = () => {console.log('Greet-1')}
let greet2 = () => {console.log('Greet-2')}

// if i want two function using single click then its not possible without Event Listeners
// for (btn of btns){
//     btn.onclick = greet1;
//     btn.onclick = greet2;
// }

let alert1 = () => {
    alert("Double Clicked.");
}

// addEvenetListeners
for (btn of btns){
    btn.addEventListener('click', greet1)
    btn.addEventListener('click', greet2)

    btn.addEventListener('dblclick', alert1)
}




// Event Listners for Elements
let p = document.querySelector('p')
let div = document.querySelector('div')

p.addEventListener('click', ()=>{
    console.log('Para was Clicked.');
})

div.addEventListener('mouseover', ()=>{
    console.log("Mouse inside the box.");
})



// this in event handler

// colorChange_this.js

// this in event handler

// function changeColor(){
//     this.style.backgroundColor = 'Black';
//     this.style.color = 'White';
// }

// btns = document.querySelectorAll('button');
// p = document.querySelector('p');
// div = document.querySelector('div')

// for (btn of btns){
//     btn.addEventListener('click', changeColor)
// }

// p.addEventListener('mouseover', changeColor)
// div.addEventListener('mouseover', changeColor)