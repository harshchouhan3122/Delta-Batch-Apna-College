function multipleGreet(func, n){
    for(let i=0; i<n; i++){
        func();
    }
}

function greet(){
    console.log("Hello.")
}

multipleGreet(greet,4)