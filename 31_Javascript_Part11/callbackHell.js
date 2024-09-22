
/*
let div1 = document.querySelector('.div1');

function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        div1.style.backgroundColor = color;
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
let div1 = document.querySelector('.div1');

function changeColor(color, delay){
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            div1.style.backgroundColor = color;
            resolve(`Color Changed: ${color}`);
        }, delay);
    });
}

// let request = changeColor('red', 500);
// request = changeColor('green', 1000);
// let request = changeColor('red', 5000);

changeColor("yellow", 500)
    .then((result)=>{
        console.log(result);
        return changeColor("blue", 500);
    })
    .then((result)=>{
        console.log(result);
        return changeColor("orange", 500);
    })
    .then((result)=>{
        console.log(result);
        return changeColor("red", 500);
    })
    .catch((error)=>{
        console.log(error)
    })



// After Study 32_Js-Part 12 -> async and await 
// Doing above task again

let div2 = document.querySelector('.div2');

// return promise is important for this function
function changeColor2(color, delay){
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            div2.style.backgroundColor = color;
            resolve(`Color Changed: ${color}`);
        }, delay);
    });
}

// changeColor2("red", 500)
//     .then((result)=>{
//         console.log(result);
//         return changeColor2("orange", 500);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changeColor2("blue", 500);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changeColor2("yellow", 500);
//     })
//     .catch((error)=>{
//         console.log(error)
//     })


async function change(){
    await changeColor2('red', 500);
    await changeColor2('green', 500);
    await changeColor2('blue', 500);
    await changeColor2('yellow', 500);
}

change();