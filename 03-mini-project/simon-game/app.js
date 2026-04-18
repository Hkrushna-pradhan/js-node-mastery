let gameSeq = [];
let userSeq = [];
let highscore = localStorage.getItem("highscore") || 0;

let started = false ;
let level = 0;
let btns = ["yellow", "red" , "purple" , "green"];

let h3 = document.querySelector("h3");





document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 300)
}

function levelUp(){
    userSeq =[];
    level++;
    h3.innerText = `level ${level}`;
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomButton = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnflash(randomButton);
}

function checkAns(index){
    //console.log(`current level ${level}`);
    console.log(`userindex= ${userSeq[index]} and gameseq = ${gameSeq[index]}`);
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        console.log("same value");
        
    }
    else{
        reset();
    }

}

function btnPress(){
  let btn = this;
  btnflash(btn);

  let userColor =btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length-1);
}

let allButtons = document.querySelectorAll(".btn");
for(btn of allButtons){
    btn.addEventListener("click" , btnPress);
} 

function reset(){
    gameSeq =[];
    started = false ;
    userSeq = [];
    if(level > highscore){
        highscore = level ;
        localStorage.setItem("highscore" , highscore);
    }
    h3.innerText = `Game Over! Your Score: ${level} | High Score: ${highscore}| Press any key to Start the Game`;
    level = 0;

    



}