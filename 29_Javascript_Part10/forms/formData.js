let forms = document.querySelectorAll('form');

for (let form of forms){
    form.addEventListener('submit', function (event) {
        event.preventDefault();     //Used to prevent the further action of for after the submission
    
    
        // let user = document.querySelector('#user');
        let user = this.elements[0];
        let pass = document.querySelector('#pass');
    
        // alert(`Hello ${user.value}, your password is : ${pass.value}`);
    
        // console.log(user.value);
        // console.log(pass.value);
    })
}


// More Events
// Major Change
user.addEventListener('change', function () {
    console.log('Change Event.');
    console.log(`Final Change: ${this.value}`);
})

// Minor Change -> not triggered by arrow keys / non-char keys
user.addEventListener('input', function () {
    console.log('Input Event.');
    console.log(`Change: ${this.value}`);
})



// Custom Text Editor
let text = document.querySelector('#text');
let para = document.querySelector('#textPara');

text.addEventListener('input', function (){
    para.innerText = text.value;
})