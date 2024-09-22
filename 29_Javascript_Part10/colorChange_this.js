// this in event handler


function changeColor(){
    this.style.backgroundColor = 'Black';
    this.style.color = 'White';
}

let btns = document.querySelectorAll('button');
let p = document.querySelector('p');
let div = document.querySelector('div')

for (btn of btns){
    btn.addEventListener('click', changeColor)
}

p.addEventListener('mouseover', changeColor)
div.addEventListener('mouseover', changeColor)