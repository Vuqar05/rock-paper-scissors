let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// add event listeners to buttons
buttons = document.querySelectorAll("div.button-container button")

for (const button of buttons) {
    button.addEventListener("click", removeWinnerIndicator)
    button.addEventListener("click", playRound)
}

function getComputerChoice() {
    let randNum = Math.random()
    if (randNum < .33) return "rock"
    else if (randNum < .66 ) return "paper"
    else return "scissors"
}


function removeWinnerIndicator() {
    let winnerIndicator = document.querySelector("span.winner-indicator")
    winnerIndicator?.remove()
}


function playRound(event) {
    let resultsContainer = document.querySelector("div.results-container")
    let result = document.createElement("div")

    let humanChoice = event.target.getAttribute("id")
    let computerChoice = getComputerChoice()

    // Do nothing if equal
    if (humanChoice === computerChoice) {
        result.innerText = "Draw"
    }

    // Human win scenarios
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock')){
        humanScore++
        result.innerText = `You win because ${humanChoice} beats ${computerChoice}`
    }
    // Computer wins
    else {
        computerScore ++
        result.innerText = `You loose because ${computerChoice} beats ${humanChoice}`
    }

    resultsContainer.appendChild(result)
    roundCount ++

    if (roundCount === 5) {
        let winnerAnnouncement = document.createElement("span")
        winnerAnnouncement.classList.add("winner-indicator")
        winnerAnnouncement.innerText = humanScore > computerScore ?  "Congrats, you won!" : "Sorry, but you lost :("

        document.querySelector("div#content").insertBefore(
            winnerAnnouncement, document.querySelector("div.button-container"))
        roundCount = humanScore = computerScore = 0
        resultsContainer.innerHTML = ''
    }

}
