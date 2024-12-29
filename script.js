function getComputerChoice(){
    const randomNum = Math.random();
    if (randomNum >=.66) {
        console.log("The computer chose rock.");
        return "rock"
    }
    else if (randomNum >= .33) {
        console.log("The computer chose paper.");
        return "paper";
    }
    else{
        console.log("The computer chose scissors.")
        return "scissors";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Choose a weapon");
    console.log(`Your choice was ${userChoice}`)
    return userChoice.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        computerChoice == "paper" ? (console.log(`You lose! ${computerChoice} beats ${humanChoice}.`), computerScore++)
        : computerChoice == "scissors" ? (console.log(`You won! ${humanChoice} beats ${computerChoice}.`), humanScore++)
        : console.log('There was a tie.')
    }
    else if (humanChoice == "paper") {
        computerChoice == "scissors" ? (console.log(`You lose! ${computerChoice} beats ${humanChoice}.`), computerScore++)
        : computerChoice == "rock" ? (console.log(`You won! ${humanChoice} beats ${computerChoice}.`), humanScore++)
        : console.log('There was a tie.')
    }
    else {
        computerChoice == "rock" ? (console.log(`You lose! ${computerChoice} beats ${humanChoice}.`), computerScore++)
        : computerChoice == "paper" ? (console.log(`You won! ${humanChoice} beats ${computerChoice}.`), humanScore++)
        : console.log('There was a tie.')
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        i++
    }
    if (humanScore>computerScore ) {
        console.log("Congrats, you won!")
    }
    else if (humanScore == computerScore) {
        console.log("There was a tie. Nobody won the game.")
    }
    else {
        console.log("The computer has won.")
    }
}
playGame()