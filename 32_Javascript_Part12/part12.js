// Javascript Part - 12

// async&await.js

//callbackHell.js -> part11


// API

// JSON Response
let rawResponse = '{"fact":"A steady diet of dog food may cause blindness in your cat - it lacks taurine.","length":77}';

let validResponse = JSON.parse(rawResponse);

console.log(rawResponse);
console.log(rawResponse.fact);  //undefined

console.log(validResponse);
console.log(validResponse.fact);

