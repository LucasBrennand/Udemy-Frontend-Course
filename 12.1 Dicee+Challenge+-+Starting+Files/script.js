var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log("Random number 1: " + randomNumber1);

var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
console.log("Random number 2: " + randomNumber2);

var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var winner = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = "Player 2 Wins! 🚩";
} else {
  winner.innerHTML = "Draw!";
}
