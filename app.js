let gameSeq =[]
let userSeq =[]
let started = false;
let level = 0;
let h2 = document.querySelector("h2")
let btns = ['red','yellow','green','blue']
let maxLevel = 0;
let currLevel = 0;
document.addEventListener('keypress',function(){
    if(started == false){
        console.log("Started")
        started = true

        levelUp()
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    },250)
}   

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function() {
        btn.classList.remove("userflash")
    },250)
}   

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`level is ${level}`
    let randIdx = Math.floor(Math.random()*4)
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq)
    btnFlash(randBtn);
    
}
function btnPress(){
    let btn = this
    userFlash(btn);
    userColor = btn.getAttribute("id")
    userSeq.push(userColor)
    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over,Press any key to start over <b> your score was ${level}</b>`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white",1500
        })
        reset();

    }
}

function reset(){
    currLevel = level;
    started = false;
    userSeq = []
    gameSeq = []
    level = 0
    max()

}

function max(){
    p = document.querySelector('p');
    if(currLevel>maxLevel){
        maxLevel = currLevel
    }
    p.innerText = maxLevel
}

