function getComputerChoice() {
    let randNum = Math.random()
    if (randNum < .33) return "rock"
    else if (randNum < .66 ) return "paper"
    else return "scissors"
}


function getHumanChoice() {
    return prompt("Choose rock, paper or scissors")
}