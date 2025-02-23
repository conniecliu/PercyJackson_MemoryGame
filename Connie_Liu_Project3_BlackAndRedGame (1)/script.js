let pbtokenOutput, player_black, prtokenOutput, player_red, cbtokenOutput, computer_black, crtokenOutput, computer_red

let turn
let whoseTurn
let userResults
let computerResults
let gameStatus
let dialogueText 
let blackRoll, redRoll
let playerOutput
let computerOutput
let winner

let option1, option2, option3, option4, rollButton, resetButton

const initialize = () => {

  option1 = document.querySelector("#op1")
  option1.addEventListener("click", click1)
  option2 = document.querySelector("#op2")
  option2.addEventListener("click", click2)
  option3 = document.querySelector("#op3")
  option3.addEventListener("click", click3)
  option4 = document.querySelector("#op4")
  option4.addEventListener("click", click4)

  rollButton = document.querySelector("#rollBtn")
  rollButton.addEventListener("click", rollDice)
  resetButton = document.querySelector("#resetBtn")
  resetButton.addEventListener("click", resetGame)

  turn = document.querySelector("#turn-id")
  whoseTurn = "Player";

  userResults = document.getElementById("user logging")
  computerResults = document.getElementById("computer logging")
  blackRoll = document.getElementById("black roll results")
  redRoll = document.getElementById("red roll results")
  gameStatus = document.getElementById("game status")
  dialogueText = document.getElementById("dialogue")
  playerOutput = ""
  computerOutput = ""
  dialogueOutput = "You, the player, will roll the dice first. Click 'Roll!'"
  statusOutput = "Let's Begin!"
  winner = ""

  pbtokenOutput = document.getElementById("pbtoken");
  player_black = 12
  prtokenOutput = document.getElementById("prtoken");
  player_red = 12
  cbtokenOutput = document.getElementById("cbtoken");
  computer_black = 12
  crtokenOutput = document.getElementById("crtoken");
  computer_red = 12

  diceRolled = false
  redDiceNum = 0
  blackDiceNum = 0


  display();
  disableButtons();

  gameRunning();
}



const gameRunning = () => (whoseTurn === "Player" ? playerTurn() : undefined);

const playerTurn = () => diceRolled ? rollDice() : undefined;

const computerTurn = () => {
  whoseTurn = "Player";
  rollDice();

  let option = Math.floor(Math.random() * 4) + 1;

  if (option === 1) {
    computerOutput += `+${redDiceNum} red tokens<br>-${blackDiceNum} black tokens from Player<br>_________________<br><br>`;
  } else if (option === 2) {
    computerOutput += `+${blackDiceNum} black tokens<br>-${redDiceNum} red tokens from Player<br>_________________<br><br>`;
  } else if (option === 3) {
    computerOutput += `-${redDiceNum} red tokens<br>+${blackDiceNum} black tokens to Player<br>_________________<br><br>`;
  } else {
    computerOutput += `-${blackDiceNum} black tokens<br>+${redDiceNum} red tokens to Player<br>_________________<br><br>`;
  }

  chooseChoice(option, redDiceNum, blackDiceNum, "c");
  rollButton.disabled = false;
  diceRolled = false;

  disableButtons();
  dialogueOutput = "It's your turn again. Click 'Roll!'";

  playerTurn();
  display();
};

const rollDice = () => {
  diceRolled = true;

  let redDice = Math.floor(Math.random() * 6) + 1;
  let blackDice = Math.floor(Math.random() * 6) + 1;

  console.log(redDice);
  console.log(blackDice);
  redDiceNum = redDice;
  blackDiceNum = blackDice;

  enableButtons();

  dialogueOutput = "Now choose one of the four options. Hover each option button for more info!";
  diceRolled = false;

  display();
};

const display = () => {
  pbtokenOutput.innerHTML = player_black;
  prtokenOutput.innerHTML = player_red;
  cbtokenOutput.innerHTML = computer_black;
  crtokenOutput.innerHTML = computer_red;

  turn.innerHTML = whoseTurn
  userResults.innerHTML = playerOutput
  computerResults.innerHTML = computerOutput
  gameStatus.innerHTML = statusOutput
  dialogueText.innerHTML = dialogueOutput 
  blackRoll.innerHTML = blackDiceNum
  redRoll.innerHTML = redDiceNum
};

const enableButtons = () => {
  option1.disabled = false
  option2.disabled = false
  option3.disabled = false
  option4.disabled = false
  rollButton.disabled = true

  //remove disabled CSS properties to the buttons
  option1.classList.remove("disabled")
  option2.classList.remove("disabled")
  option3.classList.remove("disabled")
  option4.classList.remove("disabled")
  rollButton.classList.add("disabled")
};

const disableButtons = () => {
  option1.disabled = true
  option2.disabled = true
  option3.disabled = true
  option4.disabled = true
  rollButton.disabled = false

  //apply disabled CSS properties to the buttons
  option1.classList.add("disabled")
  option2.classList.add("disabled")
  option3.classList.add("disabled")
  option4.classList.add("disabled")
  rollButton.classList.remove("disabled")

}

const click1 = () => {
  playerOutput += "+" + redDiceNum + " red tokens" + "<br>" + "-" + blackDiceNum + " black tokens from UwU" + "<br>" + "_________________" + "<br>" + "<br>"

  chooseChoice(1, redDiceNum, blackDiceNum, "p")
  noNegatives()

  whoseTurn = "Computer"
  checkGameStatus()
  display()
  
}

const click2 = () => {
  playerOutput += "+" + blackDiceNum + " black tokens" + "<br>" + "-" + redDiceNum + " red tokens from UwU" + "<br>" + "_________________" + "<br>" + "<br>"

  chooseChoice(2, redDiceNum, blackDiceNum, "p")
  noNegatives()

  whoseTurn = "Computer"
  checkGameStatus()
  display()
  
}

const click3 = () => {
  playerOutput += "-" + redDiceNum + " red tokens" + "<br>" + "+" + blackDiceNum + " black tokens to UwU" + "<br>" + "_________________" + "<br>" + "<br>"

  chooseChoice(3, redDiceNum, blackDiceNum, "p")  
  noNegatives()

  whoseTurn = "Computer"
  checkGameStatus()
  display()
  
}

const click4 = () => {
  playerOutput += "-" + blackDiceNum + " black tokens" + "<br>" + "+" + redDiceNum + " red tokens to UwU" + "<br>" + "_________________" + "<br>" + "<br>"
  
  chooseChoice(4, redDiceNum, blackDiceNum, "p")
  noNegatives()

  whoseTurn = "Computer"
  checkGameStatus()
  display()
  
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const chooseChoice = (option, redRoll, blackRoll, who) => {
  if (option === 1) {
    who === "p"
      ? (player_red += redRoll, computer_black -= blackRoll)
      : (computer_red += redRoll, player_black -= blackRoll);
  } else if (option === 2) {
    who === "p"
      ? (player_black += blackRoll, computer_red -= redRoll)
      : (computer_black += blackRoll, player_red -= redRoll);
  } else if (option === 3) {
    who === "p"
      ? (player_red -= redRoll, computer_black += blackRoll)
      : (computer_red -= redRoll, player_black += blackRoll);
  } else if (option === 4) {
    who === "p"
      ? (player_black -= blackRoll, computer_red += redRoll)
      : (computer_black -= blackRoll, player_red += redRoll);
  }
};

const noNegatives = () => {
  player_red < 0 ? (player_red = 0) : player_black < 0 ? (player_black = 0) : computer_red < 0 ? (computer_red = 0) : computer_black < 0 ? (computer_black = 0) : undefined;
};

const checkGameStatus = () => {
  if (player_black <= 0 || computer_black <= 0) {
    disableButtons();
    rollButton.disabled = true;
    if (player_red > computer_red) {
      winner = "You"
      statusOutput = `${winner} win!!!`;
      dialogueOutput = "Click the 'Reset' button to play again! Thanks for playing :)";
      whoseTurn = "";
    } else {
      dialogueOutput = "Click the 'Reset' button to play again! Thanks for playing :)";
      winner = "UwU Computer"
      statusOutput = `${winner} wins!!!`;
      whoseTurn = "";
    }
  } else {
    dialogueOutput = "It's UwU Computer's turn...";
    sleep(2000).then(() => {
      computerTurn();
    });
  }
};

const resetGame = () => {
  location.reload()
  console.log("reset")

}



