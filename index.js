console.log("The Game is On!");

function getComputerChoice() {
    let random = Math.random();
    if(random > 0 && random <= 0.33) {
        return "Rock!";
    } else if (random >= 0.34 && random < 0.66) {
        return "Paper!";
    } else {
        return "Scissor!";
    }
}

function getHumanChoice() {
    const userChoice = parseInt(prompt("Enter 1 for Rock, 2 for Paper and 3 for Scissor!"));
    if(userChoice === 1) {
        return "Rock!";
    } else if(userChoice === 2) {
        return "Paper!";
    } else if(userChoice === 3) {
        return "Scissor!";
    } else {
        alert("Invalid Choice!");
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("Computer's choice: " + computerChoice);
    console.log("Your choice: " + humanChoice);

    if(humanChoice === "Rock!" && computerChoice === "Scissor!") {
        console.log("You win! Rock beats Scissor!");
        return "human";
    } else if(humanChoice === "Paper!" && computerChoice === "Rock!") {
        console.log("You win! Paper beats Rock!");
        return "human";
    } else if(humanChoice === "Scissor!" && computerChoice === "Paper!") {
        console.log("You win! Scissor beats Paper!");
        return "human";
    } else if(humanChoice === computerChoice) {
        console.log("The Match is tied!");
        return "tie";
    } else {
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
        return "computer";
    }
}

let humanScore = 0;
let computerScore = 0;

function game() {
    for(let i = 0; i < 5; i++) {  // Best of 5 rounds
        let humanChoice = getHumanChoice();
        if (humanChoice === null) {
            i--; // Invalid choice, retry the round
            continue;
        }
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if(result === "human") {
            humanScore++;
        } else if(result === "computer") {
            computerScore++;
        }
    }

    console.log("Final Score: Human " + humanScore + " - Computer " + computerScore);
    if(humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if(humanScore < computerScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("The game is tied!");
    }
}

game();
