setTimeout(()=>{
    console.log("Timmer Stopped.")
},1500);

// while(1){
//     console.log("H");
// }

let id1 = setInterval(()=>{
    console.log("Hello");
}, 200);
setTimeout(()=>{
    clearInterval(id1);
},3000);