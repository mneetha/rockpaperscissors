const computerChoice=document.getElementById('computer-choice')
const userChoice=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice_
let computerChoice_

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    userChoice_  = e.target.id
    userChoice.innerHTML = userChoice_
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice_ = "rock"
    }
    if (randomNumber === 2){
        computerChoice_ = "paper"
    }
    if (randomNumber === 3){
        computerChoice_ = "scissors"
    }
    computerChoice.innerHTML = computerChoice_
}

function getResult() {
    console.log("getResult")
    console.log(userChoice_)
    console.log(computerChoice_)
    if (userChoice_ === computerChoice_){
        resultDisplay.innerHTML = "Its a draw!"
    }

    // User wins
    if (userChoice_ === "rock" && computerChoice_ == "scissors"){
        resultDisplay.innerHTML = "You win!"
    }
    if (userChoice_ === "paper" && computerChoice_ == "rock"){
        resultDisplay.innerHTML = "You win!"
    }
    if (userChoice_ === "scissors" && computerChoice_ == "paper"){
        resultDisplay.innerHTML = "You win!"
    }

    // User loses
    if (userChoice_ === "rock" && computerChoice_ == "paper"){
        resultDisplay.innerHTML = "You lose!"
    }
    if (userChoice_ === "paper" && computerChoice_ == "scissors"){
        resultDisplay.innerHTML = "You lose!"
    }
    if (userChoice_ === "scissors" && computerChoice_ == "rock"){
        resultDisplay.innerHTML = "You lose!"
    }
}