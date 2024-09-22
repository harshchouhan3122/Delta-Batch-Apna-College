// Importing from another file

let math = require("./math");
// console.log(math);

let area1 = math.circle_area(2);
let area2 = math.square_area(5);

console.log(math.PI);
console.log(area1);
console.log(area2);


// Importing from another Directory -> index.html

let fruits = require("./Fruits");

console.log(fruits);
console.log(fruits.apple);
console.log(fruits.apple.color);
console.log(fruits.mango.name);