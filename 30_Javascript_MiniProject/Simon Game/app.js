// Simon Says Game

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = 0;

let btns = ['red', 'green', 'blue', 'yellow'];

let h2 = document.querySelector('h2');


// document.addEventListener('click', function () {
document.addEventListener('keypress', function () {
    if (started == false){
        console.log('Game is started.');
        started = true;

        // Delete the Restart Message from the end
        if (msg = document.getElementById('msg')){
            msg.remove();
        }
    }

    levelup();
})


function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    }, 300);
}


function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(()=>{
        btn.classList.remove('userflash');
    }, 300);
}


function levelup(){
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;
    
    // random btn choose
    let randIdx = Math.floor(Math.random()*btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 
    // console.log(randColor);
    gameSeq.push(randColor);
    // Button Flash -> Randomly
    gameFlash(randBtn);
    console.log("Game: "+ gameSeq);
}


// Matching Sequence
function checkInput(idx) {
    // console.log("Curr Level : ", level);
    // let idx = level-1;
    if (gameSeq[idx] === userSeq[idx]){

        if (userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }

    else {
        highScore = Math.max(highScore, level);

        // let h1 = document.querySelector('h1');
        h2.innerHTML = `<h3> Game Over ! </h3> <br> <h4> Highest Score: ${highScore} <br>  Your Score: ${level} </h4>`;
        console.log("Game Over!");
        
        let restartMsg = document.createElement('h3');
        restartMsg.innerText = "Press any key to restart the game";
        restartMsg.setAttribute('id','msg');
        
        let body = document.querySelector('body');
        body.appendChild(restartMsg);

        // Reset Game
        reset();

        let container = document.querySelector('.btn-container');
        let id1 = setInterval(()=>{
            container.classList.add('game-over');
        }, 300);

        let id2 = setInterval(()=>{
            container.classList.remove('game-over');
        }, 600);
        
        setTimeout(()=>{
            clearInterval(id1);
        },2500);
        setTimeout(()=>{
            clearInterval(id2);
        },2500);
    }
}


// Button Flash -> By User
function btnPress(event) {
    // console.log(this.innerText);
    let btn = this;
    event.stopPropagation();

    userFlash(btn);
    
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log("User: "+ userSeq);

    checkInput(userSeq.length-1);
}


let allBtns = document.querySelectorAll('.btn');
for(let btn of allBtns){
    btn.addEventListener('click', btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}