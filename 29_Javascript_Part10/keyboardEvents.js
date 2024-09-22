// Default argument

// let btn2 = document.querySelector('#btn2');

// btn2.addEventListener('click', (event) => {
//     console.log(event);
// })


// Keyboard Events
let inp = document.querySelector('input')

inp.addEventListener('keydown', (event)=>{
    console.log('Key Pressed.');
    console.log(event);
    console.log('Code:', event.code);
    console.log('Key', event.key);
})

// inp.addEventListener('keydown', ()=>{
//     console.log('Key was Released.');
// })

