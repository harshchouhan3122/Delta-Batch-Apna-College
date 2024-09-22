// Event Bubbling

let div1 = document.querySelector('.div1');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div1.addEventListener('click', function () {
    console.log('div was clicked.');
})

ul.addEventListener('click', function (event) {
    // event.stopPropagation();
    console.log('ul was clicked.');
})

for( let li of lis){
    li.addEventListener('click', function(event) {
        event.stopPropagation();
        console.log('li was clicked.');
    })
}

// Now comment out the stopPropogation and then check the output


// Activity -> To Do List





// Flashing of color

let div2 = document.querySelector('.flash');

// Using setTimeout
// div2.classList.add('flash-color');
// setTimeout(()=>{
//     div2.classList.remove('flash-color');
// }, 200);


// using  setInterval
let id1 = setInterval(()=>{
    div2.classList.add('flash-color');
    console.log('id1');
}, 300);

let id2 = setInterval(()=>{
    div2.classList.remove('flash-color');
    console.log('id2');
}, 600);

setTimeout(()=>{
    clearInterval(id1);
},2500);

setTimeout(()=>{
    clearInterval(id2);
},2500);