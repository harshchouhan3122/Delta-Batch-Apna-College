console.log("Hello!")

// define a callback function or pass any predefined function
setTimeout( () => { console.log("Delhi.")} ,2000);

console.log("Welcome to ")

// Try to create a timmer of five seconds which will print tyhe seconds after 1 sec
for(let i=0; i<6; i++){
    setTimeout(()=>{console.log(i),2000})
}



// setInterval Function
let id1 = setInterval( () => { console.log("Mumbai.")} ,2000);
setTimeout(()=>{clearInterval(id1)},8000)
