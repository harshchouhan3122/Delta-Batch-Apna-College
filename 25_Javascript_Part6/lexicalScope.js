// - variable defined outside a function can be accessible inside the another function defined after the variable declaration

// Lexical Scope
function outerFunc() {
    let x = 5;
    let y = 9;

    function innerFunc() {
        let a = 8;
        console.log(x);
        console.log(y);
    }

    innerFunc();
    // console.log(a);     
}

outerFunc();
// outerFunc().innerFunc();


// Hoisting concept -> variable used before declaration
function outerFunc1() {
    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    let x = 15;
    let y = 19;

    innerFunc();
}

outerFunc1();