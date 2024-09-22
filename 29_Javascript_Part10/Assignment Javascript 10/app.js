// JS Assignment 10

// generate random color
function getRandomColor (){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r}, ${g}, ${b})`;

    return color;
}


// Solution 1

// box
let box = document.querySelector('.box');
box.addEventListener('mouseover', function () {     //mouseenter
    this.style.backgroundColor = getRandomColor();
    this.style.color = "white";
})
box.addEventListener('mouseleave', function () {    //mouseout
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
})

// input
let inp = document.querySelector('input');
inp.addEventListener('keydown', (event) => {
    // console.log(event)
    // console.log(event.key)
    inp.style.backgroundColor = getRandomColor();
    if (event.key == " "){
        inp.style.backgroundColor = "transparent";
    }
    // else if (inp.value == ""){
    else if (inp.value.length == 0){
        inp.style.backgroundColor = "transparent";
    }
})


// Solution 2
let btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
})
