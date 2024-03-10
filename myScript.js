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

    if (user === 'rock' && computerSelection === '3') {
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

/*function playGame() {
    
    let userCount = 0;
    let computerCount = 0;
    
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Introduce your option');
        let resultOneRound = playOneRound(playerSelection,computerSelection);
        console.log(resultOneRound);

        if (resultOneRound.slice(0,8) === 'You Win!') {
            userCount += 1;
        } else if (resultOneRound.slice(0,14) === 'Computer wins!') {
            computerCount += 1;
        }
    }

    if (userCount > computerCount) {
        return `You have ${userCount} victories, you Win!`
    } else {
        return `The computer has ${computerCount} victories, it Wins!`
    }
}

console.log(playGame());*/

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

const results = document.createElement("ul");

const resultPlayer = document.createElement("li");
resultPlayer.textContent = "Player count = 0";

const resultComputer = document.createElement("li");
resultComputer.textContent = "Computer count = 0";

const totalScore = document.createElement("li");
totalScore.textContent = "Result = "

results.appendChild(resultComputer);
results.appendChild(resultPlayer);
results.appendChild(totalScore);
body.appendChild(results);

let computerCount = 0;
let playerCount = 0;

buttons.forEach(function (i) {
    i.addEventListener("click", function() {

        let playerSelection = this.innerHTML;
        let computerSelection = getComputerChoice();
        oneRound = playOneRound(playerSelection, computerSelection);
        alert(oneRound)

        
        if (oneRound.slice(0, 8) === "You win!") {
            playerCount += 1;
            resultPlayer.textContent = `Player count = ${playerCount}`;
        } else if (oneRound.slice(0,14) === 'Computer wins!') {
            computerCount += 1;
            resultComputer.textContent = `computer count = ${computerCount}`;
        }
        
        
        if (computerCount == 5) {
            totalScore.textContent = "Result = Computer wins, it beats you 5 times";
        } else if (playerCount == 5) {
            totalScore.textContent = "Result = You win, you beat the computer 5 times"
        }
    });
});

