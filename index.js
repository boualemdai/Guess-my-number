"use strict";

const num = document.querySelector(".num");
const check = document.querySelector(".check");
const magicBox = document.querySelector(".magic-box");
const startGussing = document.querySelector(".start-gussing");
const scoreSpan = document.querySelector(".score-span");
const highscoreSpan = document.querySelector(".highscore-span");
const again = document.querySelector(".again");

let gameNum;
// console.log(scoreSpan.textContent);
window.addEventListener("load", () => {
  gameNum = Math.ceil(Math.random() * 20);
  console.log(gameNum);
});

check.addEventListener("click", () => {
  const playerNum = Number(num.value);
  if (playerNum < gameNum) {
    startGussing.textContent = "Too Low!";
    scoreSpan.textContent--;
  } else if (playerNum > gameNum) {
    startGussing.textContent = "Too High!";
    scoreSpan.textContent--;
  } else {
    startGussing.textContent = "Correct Number🥳🥳!!";
    if(highscoreSpan.textContent<scoreSpan.textContent){
        highscoreSpan.textContent=scoreSpan.textContent
      }
    document.body.style.background = "#60b347";
    magicBox.textContent = playerNum;
  }
});
again.addEventListener("click", () => {
  document.body.style.background = "#222222";
  magicBox.textContent = "?";
  startGussing.textContent = "Start guessing...";
  num.value = null;
  scoreSpan.textContent = 20;
  
});
