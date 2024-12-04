function playGame(userChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let winner = "";
  if (userChoice === computerChoice) {
    winner = "It's a Tie";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    winner = "You Won";
  } else {
    winner = "Computer Won";
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
}
