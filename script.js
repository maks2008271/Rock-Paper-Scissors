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

let humanScore = 0;
let computerScore = 0;

function playGame(humanSelection) {

    let computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        let result;

        const userscore = document.querySelector("#userscore");
        const computerscore = document.querySelector("#computerscore");
    
        if (humanChoice == computerChoice) {
            result = "Tie";
        }   else if (humanChoice == "rock") {
                if (computerChoice == "paper") {
                    result = "Lose";
                    computerScore++;
                    computerscore.textContent = computerScore;
    
                }   else if (computerChoice == "scissors") {
                        result = "Win";
                        humanScore++;
                        userscore.textContent = humanScore;
    
                }
        }   else if (humanChoice == "paper") {
                if (computerChoice == "rock") {
                    result = "Win";
                    humanScore++;
                    userscore.textContent = humanScore;
    
                }   else if (computerChoice == "scissors") {
                    result = "Lose";
                    computerScore++;
                    computerscore.textContent = computerScore;
                }
        }   else if (humanChoice == "scissors") {
                if (computerChoice == "rock") {
                    result = "Lose";
                    computerScore++;
                    computerscore.textContent = computerScore;
    
                }   else if (computerChoice == "paper") {
                    result = "Win";
                    humanScore++;
                    userscore.textContent = humanScore;
                }
        }
    
        resultSpan.textContent = result + ", your choice: " + humanChoice + ", computer choice: " + computerChoice// alert (`${result}, your choice: ${humanChoice}, computer choice: ${computerChoice}. Score: ${humanScore} | ${computerScore}`);
    }

    playRound(humanSelection, computerSelection);

    if (computerScore === 5) {
        alert("Computer wins!");
        computerScore = 0;
        humanScore = 0;
        computerscore.textContent = computerScore;
        userscore.textContent = humanScore;

    }   else if (humanScore === 5) {
        alert("Human wins!");
        computerScore = 0;
        humanScore = 0;
        computerscore.textContent = computerScore;
        userscore.textContent = humanScore;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultSpan = document.querySelector("#result");

rock.addEventListener("click", () => {
    playGame("rock");
})

paper.addEventListener("click", () => {
    playGame("paper");
})

scissors.addEventListener("click", () => {
    playGame("scissors");
})