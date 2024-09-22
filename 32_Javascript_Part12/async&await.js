// async and await keywords

// async function

async function greet(){         //state - fulfilled
    return "Hello World";
}
// go to console and call this function there -> you will observe that it will return promise 

async function greet2(){        //state - rejected 
    abc();                      // Error
    throw("some error occured");
    return "Hello Greet2";
}


greet()
// greet2()
    .then((result)=>{
        console.log("Promise Resolved.");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Promise Rejected.")
        console.log(error);
    })




// await function

function getNum(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let num =  Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    })
}

// It will retun all the nums simultaneously
// async function demo(){
//     getNum();
//     getNum();
//     getNum();
// }

// It will work only if the getNum() is returning Promise
async function demo(){
    await getNum();
    await getNum();
    await getNum();
}

demo();