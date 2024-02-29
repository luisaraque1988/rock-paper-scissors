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

function singleRound(playerSelection, computerSelection) {
    
    let user = playerSelection.toLowerCase();
    let result;

    if (user === computerSelection) {
        result = 'It is a Tie!'
    }

    if (user === 'rock' && computerSelection === '3') {
        result = 'You Win! Rock beats scissors';
    } else if (user === 'scissors' && computerSelection === 'rock'){
        result = 'Computer wins! Rock beats scissors'
    } else if (user === 'paper' && computerSelection === 'rock') {
        result = 'You Win! paper beats rock'
    } else if (user === 'rock' && computerSelection === 'paper'){
        result = 'Computer wins! paper beats rock'
    } else if (user === 'scissors' && computerSelection === 'paper') {
        result = 'You Win! scissors beats paper'
    } else if (user === 'paper' && computerSelection === 'scissors'){
        result = 'Computer wins! scissors beats paper'
    }
    
    return result;
}

function playGame() {
    
    let userCount = 0;
    let computerCount = 0;
    
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Introduce your option');
        let resultSingleRound = singleRound(playerSelection,computerSelection);
        console.log(resultSingleRound);

        if (resultSingleRound.slice(0,8) === 'You Win!') {
            userCount += 1;
        } else if (resultSingleRound.slice(0,14) === 'Computer wins!') {
            computerCount += 1;
        }
    }

    if (userCount > computerCount) {
        return `You have ${userCount} victories, you Win!`
    } else {
        return `The computer has ${computerCount} victories, it Wins!`
    }
}

