let score = {
  wins: 0,
  loses: 0,
  ties: 0,
};

function playGame(userChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let winner = "";
  if (userChoice === computerChoice) {
    winner = "It's a Tie";
    score.ties++;
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    winner = "You Won";
    score.wins++;
  } else {
    winner = "Computer Won";
    score.loses++;
  }

  document.getElementById(
    "user-choice"
  ).innerHTML = `Your Choice is : <span>${userChoice} </span>`;
  document.getElementById(
    "computer-choice"
  ).innerHTML = `Computer Choice is : <span>${computerChoice} </span>`;
  document.getElementById(
    "winner"
  ).innerHTML = `Winner is : <span>${winner} </span>`;

  document.getElementById(
    "wins"
  ).innerHTML = `Your Wins : <span>${score.wins} </span>`;
  document.getElementById(
    "loses"
  ).innerHTML = `Computers wins : <span>${score.loses} </span>`;
  document.getElementById(
    "ties"
  ).innerHTML = `Ties: <span>${score.ties} </span>`;
}
