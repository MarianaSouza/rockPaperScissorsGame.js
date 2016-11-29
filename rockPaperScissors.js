function getUserChoice () {
  var userInput = prompt("Rock, Paper, or Scissors?");
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;  
  } else {
    console.log("Error!");
  }
}

function getComputerChoice () {
  var randomNumber = Math.floor(Math.random() * 2);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
 }
}

function determineWinner (userChoice, computerChoice){ 
  if (userChoice === computerChoice){
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if(computerChoice === "paper") {
      return "The cumputer won!";
    } else {
      return "You won!";
  	}
	}
  if (userChoice === "paper"){
    if(computerChoice === "scissors"){
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors"){
    if(computerChoice === "rock"){
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb"){
    if(computerChoice === "rock" || "paper" || "scissors") {
      return "You won!";
		}
  }
}

function playGame () {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame(" ");




