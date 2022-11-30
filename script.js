console.log(`Main JavaScript Project`);
// let x = window.prompt(`pick a number`);
// console.log(x);
let computerSelection;
function computerPlay(){
    let selection = Math.floor(Math.random()*3);
    console.log(selection);
    if (selection == 0){
        computerSelection = "rock";
    } else if (selection == 1){
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}
computerPlay();
console.log(computerSelection);


let promptImput = window.prompt(`pick a number`);
let playerSelection = promptImput.toLowerCase();
let computerWins = 0;
let playerWins = 0;

function game(computerSelection, playerSelection){
    if ((computerSelection == "rock" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "scissors")){
        console.log("No winner. Try again");
        window.prompt("No winner. Try again");
    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") || 
    (computerSelection == "scissors" && playerSelection == "rock")){
        playerWins++;
        console.log("Player is the winner. Try again");
        window.prompt(`Payer is the winner. Try again. 
        The score is: Computer = ${computerWins} and Player = ${playerWins} `);
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") || 
    (computerSelection == "scissors" && playerSelection == "paper")){
        computerWins++;
        window.prompt(`Computer is the winner. Try again. 
        The score is: Computer = ${computerWins} and Player = ${playerWins} `);
    }
}

game(computerSelection, playerSelection);