// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;
//     ul.appendChild(item);

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";

// });

// ul.addEventListener("click", function (event) {
//     if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("Deleted");
//     }
// })



//Simon Says Game.

let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        
        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
 level++;
 h2.innerText = `Level ${level}`;

 let randIdx = Math.floor(Math.random() * 3);
 let randColor = btns[randIdx];
 let randBtn = document.querySelector(`.${randColor}`);
 
//  console.log(randIdx);
//  console.log(randColor);
//  console.log(randBtn);
 gameSeq.push(randColor);
 console.log(gameSeq);
 gameFlash(randBtn);

}

function checkAns () {
    // console.log("cur level :", level);
    let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq[idx] === gameSeq[idx]) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br> Press any key to start game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress () {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);


    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


