function getHumanChoice() {
    return prompt("Your choice(Rock, paper or scissors)").toLowerCase();
}

function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <= 1/3) {
        return "rock";
    }   else if (randomNum <= 2/3) {
        return "paper";
    }   else if (randomNum <= 1) {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let result;
    
        if (humanChoice == computerChoice) {
            result = "Tie";
        }   else if (humanChoice == "rock") {
                if (computerChoice == "paper") {
                    result = "You lose";
                    computerScore++;
    
                }   else if (computerChoice == "scissors") {
                        result = "You win";
                        humanScore++;
    
                }
        }   else if (humanChoice == "paper") {
                if (computerChoice == "rock") {
                    result = "You win";
                    humanScore++;
    
                }   else if (computerChoice == "scissors") {
                    result = "You lose";
                    computerScore++;
                }
        }   else if (humanChoice == "scissors") {
                if (computerChoice == "rock") {
                    result = "You lose";
                    computerScore++;
    
                }   else if (computerChoice == "paper") {
                    result = "You win";
                    humanScore++;
                }
        }
    
        alert (`${result}, your choice: ${humanChoice}, computer choice: ${computerChoice}. Score: ${humanScore} | ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();