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


// API Request using tools
// Hoppscoth

// API Request using Javascript
let url = "https://catfact.ninja/fact";
// fetch(url);

// Check it -> Inspect -> Network -> fact -> Response


// fetch(url)          //return promise
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("Fact1: " + data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("Fact2: " + data2.fact);
//     })
//     .catch((err)=>{
//         console.log("Error-", err);
//     })


// Using async and await with fetch()
url = "https://catfact.ninja/fact";
async function getFact(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

    } catch(err){
        console.log("Error -> " + err);
    }
}

getFact();



// Code using Axios to get data, fetch() -> axios.get method

url = "https://catfact.ninja/fact";

async function getFact2(){
    try{
        let res = await axios.get(url);
        // let data = await res.json();

        console.log(res.data.fact);

    } catch(err){
        console.log("Error -> " + err);
    }
}

getFact2();