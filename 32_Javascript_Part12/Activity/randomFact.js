// Random facts Cats using API and Axion
// https://catfact.ninja/fact

let btn = document.querySelector('button');
let result = document.querySelector('#result');

btn.addEventListener('click', async ()=> {
    let fact = await getFact();
    result.innerHTML = fact;
    console.log(fact);
})


let url = "https://catfact.ninja/fact";

async function getFact(){
    try{
        let res = await axios.get(url);
        let fact = await res.data.fact;
        // console.log(fact);
        return fact;
    }
    catch(err){
        console.log("Error -> " + err);
        return "No Fact Found ! <br> Try after sometime";
    }
}


// async function getFact(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         let fact = data.fact;
    
//         // console.log(res);
//         // console.log(fact);
    
    
//         return fact;
//     }
//     catch(err){
//         console.log("Error -> " + err);
//     }
// }