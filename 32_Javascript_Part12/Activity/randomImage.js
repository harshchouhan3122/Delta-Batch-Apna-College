// https://dog.ceo/api/breeds/image/random

let img = document.querySelector('img');
let btn = document.querySelector('button');

btn.addEventListener('click', async ()=>{
    let link = await getImage();

    img.setAttribute('src', link);
    console.log(link);
})

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage(){
    try{
        let res = await axios.get(url);
        let link = await res.data.message;
        return link;
    }
    catch(err) {
        console.log('Error-> ' + err);
        img.setAttribute('alt', "Image not Found! Try Again.");
    }
}