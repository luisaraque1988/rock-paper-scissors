function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()*3) + 1;
    let answer;
    if (choiceNumber === 1) {
        answer = 'rock';
    } else if (choiceNumber === 2) {
        answer = 'paper';
    } else {
        answer = 'scissors';
    }
    return answer;
}

function playOneRound(playerSelection, computerSelection) {
    
    let user = playerSelection.toLowerCase();
    let result;

    if (user === computerSelection) {
        result = 'It is a Tie!'
    }

    if (user === 'rock' && computerSelection === 'scissors') {
        result = 'You win! Rock beats scissors';
    } else if (user === 'scissors' && computerSelection === 'rock'){
        result = 'Computer wins! Rock beats scissors'
    } else if (user === 'paper' && computerSelection === 'rock') {
        result = 'You win! paper beats rock'
    } else if (user === 'rock' && computerSelection === 'paper'){
        result = 'Computer wins! paper beats rock'
    } else if (user === 'scissors' && computerSelection === 'paper') {
        result = 'You win! scissors beats paper'
    } else if (user === 'paper' && computerSelection === 'scissors'){
        result = 'Computer wins! scissors beats paper'
    }
    
    return result;
}

const body = document.querySelector("body");
const buttons = document.querySelectorAll('.playButton');
const buttonContainer = document.querySelector("#buttonContainer");
const list = document.querySelector("ul");
const resultPlayer = document.querySelector('#resultPlayer');
const resultComputer = document.querySelector("#resultComputer");
const totalScore = document.createElement("li");
const resultRound = document.querySelector("#resultRound")
const resetButton = document.createElement("Button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Reset";
totalScore.classList.add("totalScore");


let computerCount = 0;
let playerCount = 0;

buttons.forEach(function (i) {
    i.addEventListener("click", function() {

        let playerSelection = this.innerHTML;
        let computerSelection = getComputerChoice();
        oneRound = playOneRound(playerSelection, computerSelection);
        resultRound.textContent = oneRound;
        

        
        if (oneRound.slice(0, 8) === "You win!") {
            playerCount += 1;
            resultPlayer.textContent = `Player count = ${playerCount}`;
        } else if (oneRound.slice(0,14) === 'Computer wins!') {
            computerCount += 1;
            resultComputer.textContent = `computer count = ${computerCount}`;
        }
        
        
        if (computerCount == 5) {
            totalScore.textContent = "Result = Computer wins, it beats you 5 times";
            list.appendChild(totalScore);
            body.appendChild(resetButton);

            resetButton.addEventListener("click", function() {
                playerCount = 0;
                computerCount = 0;
                resultPlayer.textContent = "Player count = 0";
                resultComputer.textContent = "Computer count = 0";
                totalScore.textContent = "Result = ";
                resultRound.textContent = "";
                body.removeChild(resetButton);
                list.removeChild(totalScore);
            })
        } else if (playerCount == 5) {
            totalScore.textContent = "Result = You win, you beat the computer 5 times";
            list.appendChild(totalScore);
            body.appendChild(resetButton);

            resetButton.addEventListener("click", function() {
                playerCount = 0;
                computerCount = 0;
                resultPlayer.textContent = "Player count = 0";
                resultComputer.textContent = "Computer count = 0";
                totalScore.textContent = "Result = ";
                resultRound.textContent = "";
                body.removeChild(resetButton);
                list.removeChild(totalScore);
            });
        };
    });
});


