// let name = document.all[8].innerText;
// name = "Rohan Sharma";

console.dir(document)
console.log(document.all[8])
console.log(document.all[8].innerText)
document.all[8].innerText = "Rohit Sharma"
console.log(document.all[8].innerText)

let imgObj = document.getElementById("mainImg");
console.log(imgObj)

console.dir(imgObj)

imgObj.src = "assets/creation_3.jpeg"


// document.getElementById (id_name)
// document.getElementByClassName (className)
// document.getElementByTagName (tagName)


// Query Selector


// Manipulate style
let links = document.querySelectorAll('.box a')
console.log(links)
for (let link of links)
    link.style.color = 'red';


// using classList
let heading = document.querySelector('h1')
console.log(heading.classList);

heading.classList.add('abc');
console.log(heading.classList);






// Practice Question