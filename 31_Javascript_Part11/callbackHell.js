
/*
let div = document.querySelector('div');

function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        div.style.backgroundColor = color;
        if (nextColor) nextColor();
    }, delay);
}

changeColor('red', 1000, ()=>{
    changeColor('blue', 500, ()=>{
        changeColor('green',1000, ()=>{
            changeColor('white',500);
        });
    });
});

// Promises are used to avoid the callback hell type of situation
/*/



// Try to change the color using Promise after studying promises in javascript
let div = document.querySelector('div');

function changeColor(color, delay){
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            div.style.backgroundColor = color;
            resolve(`Color Changed: ${color}`);
        }, delay);
    });
}

// let request = changeColor('red', 500);
// request = changeColor('green', 1000);
// let request = changeColor('red', 5000);

changeColor("red", 500)
    .then((result)=>{
        console.log(result);
        return changeColor("orange", 500);
    })
    .then((result)=>{
        console.log(result);
        return changeColor("blue", 500);
    })
    .then((result)=>{
        console.log(result);
        return changeColor("yellow", 500);
    })
    .catch((error)=>{
        console.log(error)
    })