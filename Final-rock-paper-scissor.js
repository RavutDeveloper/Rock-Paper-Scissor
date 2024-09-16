let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "Lose.";
    } else if (computerMove === "paper") {
      result = "Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "Lose.";
    }
  } else if ((playerMove = "rock")) {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "Lose.";
    } else if (computerMove === "scissors") {
      result = "Win.";
    }
  }
  if (result === "Win.") {
    score.wins = score.wins + 1;
  } else if (result === "Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  document.querySelector(".js-move").innerHTML = `You
  <img src="${playerMove}-emoji.png" class="move-icon">
  <img src="${computerMove}-emoji.png" 
  class="move-icon"
  />
  
  Computer`;
  document.querySelector(".js-result").innerHTML = `You ${result}`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Tie : ${score.ties}`;
}

let computerMove = "";
function pickComputerMove() {
  const computerRandom = Math.random();
  if (computerRandom >= 0 && computerRandom < 1 / 3) {
    computerMove = "rock";
  } else if (computerRandom >= 1 / 3 && computerRandom < 2 / 3) {
    computerMove = "paper";
  } else if (computerRandom >= 2 / 3 && computerRandom < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
