document.addEventListener("DOMContentLoaded", () => {
    console.log("The Game is On!");

    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanChoice(choice) {
        playRound(choice, getComputerChoice());    
    }

    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        const computerChoiceElement = document.querySelector("#computer_choice");
        const humanChoiceElement = document.querySelector("#human_choice");
        const resultElement = document.querySelector("#result");
        const computerScoreElement = document.querySelector("#computer-score");
        const humanScoreElement = document.querySelector("#human-score");

        if (computerChoiceElement && humanChoiceElement && resultElement && computerScoreElement && humanScoreElement) {
            computerChoiceElement.textContent = `Computer's choice: ${computerChoice}`;
            humanChoiceElement.textContent = `Your choice: ${humanChoice}`;

            if (humanChoice === "Rock" && computerChoice === "Scissors") {
                resultElement.textContent = "You win! Rock beats Scissors!";
                humanScore++;
            } else if (humanChoice === "Paper" && computerChoice === "Rock") {
                resultElement.textContent = "You win! Paper beats Rock!";
                humanScore++;
            } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                resultElement.textContent = "You win! Scissors beats Paper!";
                humanScore++;
            } else if (humanChoice === computerChoice) {
                resultElement.textContent = "The match is tied!";
            } else {
                resultElement.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`;
                computerScore++;
            }

            // Update scores on the page
            computerScoreElement.textContent = computerScore;
            humanScoreElement.textContent = humanScore;

            // Check if someone has reached 5 points
            if (humanScore === 5) {
                resultElement.textContent = "You won the game!";
                resetScores();
            } else if (computerScore === 5) {
                resultElement.textContent = "You lost the game!";
                resetScores();
            }
        } else {
            console.error("One or more elements not found");
        }
    }

    function resetScores() {
        computerScore = 0;
        humanScore = 0;
        document.querySelector("#computer-score").textContent = computerScore;
        document.querySelector("#human-score").textContent = humanScore;
    }

    // Attach event listeners to buttons
    const buttons = document.querySelectorAll(".choice-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const choice = button.dataset.choice;
            getHumanChoice(choice);
        });
    });
});
