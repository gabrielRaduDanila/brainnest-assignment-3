console.log(`Main JavaScript Project`);

let computerSelection;
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        computerSelection = "rock";
    } else if (selection == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

let promptInput;
let playerSelection;
function selectOption() {
    promptInput = window.prompt(`Pick rock or paper or scissors`);

    let lowerPropmtInput = promptInput.toLowerCase();

    if ((lowerPropmtInput == "rock") ||
        (lowerPropmtInput == "paper") ||
        (lowerPropmtInput == "scissors")) {
        playerSelection = lowerPropmtInput;
    } else {
        alert("Please make a valid selection");
    }
    return playerSelection;
}

let computerWins = 0;
let playerWins = 0;

function playRound(computerSelection, playerSelection) {
    playerSelection = selectOption();
    console.log(`Player has select ${playerSelection}`);
    computerSelection = computerPlay();
    console.log(`Computer has select ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log("No winner. Try again");
        alert("No winner. Try again");
    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")) {
        playerWins++;
        console.log("Player is the winner. Try again");
        alert(`Player is the winner. Try again. 
        The score is: Computer = ${computerWins} and Player = ${playerWins} `);
    } else {
        computerWins++;
        alert(`Computer is the winner. Try again. 
        The score is: Computer = ${computerWins} and Player = ${playerWins} `);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    alert(`The final score is: 
    Computer = ${computerWins} and Player = ${playerWins}`);
}

game();