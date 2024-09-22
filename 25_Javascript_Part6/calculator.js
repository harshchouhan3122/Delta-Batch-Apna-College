// Calculator as object and define methods 
const calculator ={
    add : function(a,b) { return a+b},
    sub : function(a,b) { return a-b},
    prod : function(a,b) { return a*b},
    div : function(a,b) { return a/b} 
}

console.log(calculator.add(2,3))
console.log(calculator.prod(2,3))

// Methods Shorthand
const calculator1 ={
    add(a,b) { return a+b},
    sub(a,b) { return a-b},
    prod(a,b) { return a*b},
    div(a,b) { return a/b} 
}

console.log(calculator1.add(2,3))
console.log(calculator1.prod(2,3))