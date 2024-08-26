let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randNum = Math.random()
    if (randNum < .33) return "rock"
    else if (randNum < .66 ) return "paper"
    else return "scissors"
}


function getHumanChoice() {
    return prompt("Choose rock, paper or scissors")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    // Do nothing if equal
    if (humanChoice === computerChoice) {
        console.log("Draw")
    }

    // Human win scenarios
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock')){
        humanScore++
        console.log(`You win because ${humanChoice} beats ${computerChoice}`)
    }
    // Computer wins
    else {
        computerScore ++
        console.log(`You loose because ${computerChoice} beats ${humanChoice}`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);