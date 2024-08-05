// console.log("The Game is On!");

function getComputerChoice()
{
   random = Math.random();
   if(random > 0 && random <= 0.33)
   {
    return "Rock!";
   }
   else if (random >= 0.34 && random < 0.66) {
    return "Paper!";
   } else {

    return "Scissor!";
    
   }
}

function getHumanChoice() {
    const userChoice = parseInt(prompt("Enter 1 for Rock, 2 for Paper and 3 for Scissor!"))
    if(userChoice === 1){
        return "Rock!";

    }
    else if(userChoice === 2){
        return "Paper!";
    }
    else if(userChoice === 3){
        return "Scissor!";
    }
    else {
        alert("Invalid Choice!");
    }


    
}



let humanScore = 0;
let computerScore = 0;

