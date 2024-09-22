/*
What is the output of the following code :
let length = 4;
function callback() {
console.log(this.length);
}
const object = {
length: 5,
method(callback) {
callback();
},
};
object.method(callback, 1, 2);
*/

let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);



// Answer
/*
'Hello, World!' is logged to the console.
object.getMessage() is a method invocation, that's why this inside the method equals
object.
There's also a variable declaration const message = 'Hello, Earth!' inside the method.
The variable doesn't influence the value of this.message.
*/