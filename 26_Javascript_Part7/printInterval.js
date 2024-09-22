// Write a function to print "Hello World" 5 times at interval of 2sec each

let str = "Hello World"

let id1 = setInterval(()=>{
    console.log(str);
}, 2000);

setTimeout(()=>{
    clearInterval(id1);
    console.log("Clear Interval Ran.")
}, 10500);