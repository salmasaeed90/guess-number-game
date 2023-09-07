//select all element from document
const between = document.querySelector(".between");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const parentNumber = document.querySelector(".secret-number");
const guessinput = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscoreele = document.querySelector(".highscore");
const body = document.querySelector("body");

//to get random number from 1 to 20
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let finalScore = 20;
let highscore = 0;
//function to display message
// function displayMessage(){
//     message.textContent = message;
// }
// guess numer function
check.addEventListener("click", function () {
  const guess = Number(guessinput.value);

  if (!guess) {
    message.textContent = "No Number!";
    // displayMessage("No Number!")
    //player win
  } else if (guess === secretnumber) {
    message.textContent = "Correct Number!";
    number.textContent = secretnumber;
    parentNumber.style.border = "4px solid green";
    //highscore
    if (finalScore > highscore) {
      highscore = finalScore;
      highscoreele.textContent = highscore;
    }
    //number is wrong
  } else if (guess !== secretnumber) {
    if (finalScore > 1) {
      message.textContent = guess > secretnumber ? "Too High!" : "Too Low!";
      finalScore--;
      score.textContent = finalScore;
    } else {
      message.textContent = "You Lost The Game";
      score.textContent = 0;
    }
  }
});

//reset game
again.addEventListener("click", function () {
  finalScore = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = finalScore;
  guessinput.value = "";
  number.textContent = "?";
  message.textContent = "start guessing...";
  body.style.backgroundColor = "#fff";
});
