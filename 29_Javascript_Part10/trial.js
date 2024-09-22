// this in event handler

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ()=>{
    // console.log(this);
    console.dir(this);
})