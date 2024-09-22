// Promises -> object
    // -> resolve and reject

/* Callback Hell Condition
function savetoDB(data, sucess, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;

    if (internetSpeed > 4){
        // console.log("Data Saved.");
        sucess();
    }

    else{
        // console.log('Weak Connection.');
        failure();
    }
}

// Further data will be save if its previous data is saved sucessfully
savetoDB("Harsh Chouhan", 
()=>{
    console.log("Sucess 1: Name Saved.");
    savetoDB(245, 
        ()=>{
            console.log("Sucess 2: Roll no Saved.");
            savetoDB("A", 
        ()=>{
            console.log("Sucess 3: Section Saved.");
        }, 
        ()=>{
            console.log("Failure 3: Weak Connection");
        });
    }, 
    ()=>{
        console.log("Failure 2: Weak Connection");
    });
}, 
()=>{
    console.log("Failure 1: Weak Connection");
});

// Callback Hell -> Code become confusing and hence we will use promises next
*/


// Promise -> Run it on concole to check and understand
function savetoDB(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed > 4){
            resolve("Sucess: Data Saved");      //result
        }
        else{
            reject("Failure: Weak Connection"); //error
        }
    });
}

// let request = savetoDB("Harsh Chouhan");
// // console.log(request);

// request.then(()=>{
//     console.log("Sucess: Data Saved.");
// })
// .catch(()=>{
//     console.log("Failure: Weak Connection.");
// })


// Promise Chaining -> Improved Version

savetoDB("Harsh Chouhan")
    .then( (result) => {
        console.log(result);
        console.log("Success 1: Data Saved.");
        return savetoDB(245)
    })
    .then( (result)=> {
        console.log(result);
        console.log("Success 2: Data Saved.");
        return savetoDB("A")
    })
    .then( (result)=> {
        console.log(result);
        console.log("Success 3: Data Saved.");
    })
    .catch( (error)=> {
        console.log(error);
        console.log("Failure : Weak Connection.");
    })