// College Search
// API
let url = "https://universities.hipolabs.com/search?name=";

let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#result');

btn.addEventListener('click', async ()=> {
    let country = input.value.trim().toLowerCase();
    input.value = "";
    console.log("Search for: " + country);

    let colleges = await getData(country);
    console.log(colleges);      //undefined -> because of the API response
    
    // for (coll of colleges){
    //     let li = document.createElement('li');
    //     li.innerText = coll.name;
    //     list.appendChild(li);
    //     console.log(coll.name);
    // }

});


async function getData(name){
    try{
        let res = await axios.get(url+name);
        let data = await res.data;
        // console.log(data);
        return data;
    }
    catch(err){
        console.log("Error-> "+ err);
    }
};

// getData("canada");