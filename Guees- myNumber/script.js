const randomNumber = Math.trunc(Math.random() * 10) + 1;
// console.log(randomNumber); //* Display the guess number
let score = 10;
let highscore = 0;

// document.querySelector(".number").textContent = randomNumber;// *display the Guess

const displayNumber = function (message) {
  document.querySelector(".message").textContent = message;
};
// displayNumber("hii ajg");z

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  // * If wrong input
  if (!guess) {
    displayNumber(`😛Incorrect input!`);
    prompt("", "Input number between 1 until 10! 😠");
  }
  // * if the guess TRUE
  else if (guess === randomNumber) {
    displayNumber(`Well done 🤯`);
    document.querySelector("body").style.backgroundColor = "#22115c";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("#win").textContent = "Congratulation, you win! 🥳";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // *If wrong guess
  else if (guess !== randomNumber) {
    if (score > 1) {
      displayNumber(guess > randomNumber ? "Too high 🙊" : "Too low 🙊");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "#5c1111";
      displayNumber("You're lose 🥲");
    }
  }
});

// *Refresh page
document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
