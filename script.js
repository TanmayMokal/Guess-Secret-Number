"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};

// Checking button :
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //Guess is not mentioned :
  if (!guess) {
    displayMsg("!...No input...!");
  }

  //Guess is correct :
  else if (guess == secretNumber) {
    displayMsg("!...You Won...!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(119, 57, 21)";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  }

  //If guess is not correct :
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("You lost...");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});
/**/
//Again button :
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  displayMsg("Start guessing...");

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = " ";

  document.querySelector(".score").textContent = 20;
});
