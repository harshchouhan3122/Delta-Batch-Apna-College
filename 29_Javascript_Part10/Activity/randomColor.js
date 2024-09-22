// Activity -> Random Color Generate

let btn = document.querySelector('button')

function getRandomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r}, ${g}, ${b})`;

    return color;
}

function changes() {
    let h3 = document.querySelector('h3');
    let box = document.querySelector('.box');

    let randomColor = getRandomColor();

    h3.innerText = 'Color: '+randomColor;
    box.style.backgroundColor = randomColor;

    console.log('Color Genrated : ', randomColor);
}

// btn.onclick = colorBox;
btn.addEventListener('click', changes)

