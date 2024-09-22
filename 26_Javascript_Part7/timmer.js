let count = 1
console.log(count)

let id1 = setInterval(()=>{
    console.log(++count)
},1000);

setTimeout(()=>clearInterval(id1),10000);