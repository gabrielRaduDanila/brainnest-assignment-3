console.log(`Main JavaScript Project`);

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

let promptImput;
let playerSelection;
function selectOption(){
promptImput = window.prompt(`Pick rock or paper or scissors`);

let lowerPropmtImput = promptImput.toLowerCase();

if((lowerPropmtImput == "rock") ||
    (lowerPropmtImput == "paper") ||
    (lowerPropmtImput == "scissors")) {
        playerSelection = lowerPropmtImput;
    }else {alert("Please make a valid selection");
    }
    return playerSelection;
}

let computerWins = 0;
let playerWins = 0;

function playRound(computerSelection, playerSelection){
    playerSelection = selectOption();
    console.log(`Player has select ${playerSelection}`);
    computerSelection = computerPlay();
    console.log(`Computer has select ${computerSelection}`);
    if ((computerSelection == "rock" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "scissors")){
        console.log("No winner. Try again");
        alert("No winner. Try again");
    } else if ((computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") || 
    (computerSelection == "scissors" && playerSelection == "rock")){
        playerWins++;
        console.log("Player is the winner. Try again");
<<<<<<< Updated upstream
        alert(`Player is the winner. Try again. 
=======
        window.prompt(`Player is the winner. Try again. 
>>>>>>> Stashed changes
        The score is: Computer = ${computerWins} and Player = ${playerWins} `);
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") || 
    (computerSelection == "scissors" && playerSelection == "paper")){
        computerWins++;
        alert(`Computer is the winner. Try again. 
        The score is: Computer = ${computerWins} and Player = ${playerWins} `);
    }
   
}

function game() {
    for(let i=0; i<5; i++){
        playRound(computerSelection, playerSelection);
    }
     alert(`The final score is: 
    Computer = ${computerWins} and Player = ${playerWins}`);
}

game();
