// Javascript Part - 11

/*
// Call Stack
func1 = (n) => {console.log(`Hello, ${n}`)};
func2 = (n) => {func1(n)};
func2("Harsh");
console.log("Bye!");

// Execution -> funct2() called -> funct2 execute -> funct1() call -> func1 execute -> bye print
// Execution done by call stack 

// Call Stack Vizualisation
func1 = () => {return 1};
func2 = () => {return func1()+func1()}
func3 = () => {return func2()+func1()}
console.log(func3());



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



// Callback Hell
// Code -> callbackHell.js
*/

// Promises

// sucess and failure are the callback functions
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