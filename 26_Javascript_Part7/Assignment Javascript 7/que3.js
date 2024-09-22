/**
 What is the output of the following code :
const object = {
message: 'Hello, World!',
logMessage() {
console.log(this.message);
}
};
setTimeout(object.logMessage, 1000);
 */

const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);  // this -> is the window object here
        console.log(object.message); 
        // console.log(this); 
        }
    };

setTimeout(object.logMessage, 1000);



// Answer
/*
After a delay of 1 second, undefined is logged to the console
While the setTimeout() function uses the object.logMessage as a callback, still, it
invokes object.logMessage as a regular function, rather than a method.
And during a regular function invocation this equals the global object, which is a
window in the case of the browser environment.
That's why console.log(this.message) inside logMessage method logs
window.message, which is undefined.
*/