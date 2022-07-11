const scoreContainer = document.querySelector('.score-container');
const score = scoreContainer.querySelector('#score');
const message = document.createElement('p');
scoreContainer.appendChild(message);

let userScore = 0;
let compScore = 0;

function computerPlay() {
   const rand = Math.floor(Math.random() * 3);
   if (rand === 0) {
    return 'Rock';
   } else if (rand === 1) {
    return 'Paper';
   } else {
    return 'Scissors';
   }
}

function userPlay(userInput, comp = computerPlay()) {
    const userLower = userInput.toLowerCase();
    const userUpper = userInput.toUpperCase();
    const user = userUpper.charAt(0) + userLower.slice(1, userLower.length);
    let result;

    if (user === comp) {
        result = 'draw';
    } else if ((user === 'Rock' && comp === 'Scissors') 
            || (user === 'Paper' && comp === 'Rock')
            || (user === 'Scissors' && comp === 'Paper')) {
        result = 'win';
    } else if ((user === 'Rock' && comp === 'Paper') 
            || (user === 'Paper' && comp === 'Scissors')
            || (user === 'Scissors' && comp === 'Rock')) {
        result = 'lose';
    } else result = 'invalid';

    switch (result) {
        case 'draw':
            message.textContent= `Draw! You both chose ${user}.`;
            break;
        case 'win':
            ++userScore;
            score.textContent = `${userScore} - ${compScore}`;
            if (userScore == 5) {
                message.textContent = `${user} beats ${comp}, you win! Play again?`;
            } else {
                message.textContent = `You won this round! ${user} beats ${comp}.`;
            }
            break;
        case 'lose':
            ++compScore;
            score.textContent = `${userScore} - ${compScore}`;
            if (compScore == 5) {
                message.textContent = `${comp} beats ${user}, you lost! Play again?`;
            } else {
                message.textContent = `You lost this round! ${comp} beats ${user}.`;
            }
            break;
        case 'invalid':
            message.textContent = 'Please choose Rock, Paper, or Scissors';
            break;
    }
}

function play(e) {
    if (userScore == 5 || compScore == 5) {
        userScore = 0;
        compScore = 0;
    }
    userPlay(e.currentTarget.id);
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach (button => button.addEventListener('click', play));

/*
    function playGame() {
        let userWinCount = 0;
        let compWinCount = 0;
        let drawCount = 0;
        alert('Rock, Paper, Scissors. Best of 5.')
        for (let i = 1; i < 6; i++){
            let match = userPlay(user = prompt('Rock, Paper, or Scissors?'), comp = computerPlay());

            switch (match) {
                case 'draw':
                    drawCount++;
                    alert(`Round ${i} Score: ${userWinCount} - ${compWinCount} - ${drawCount}` );
                    break;
                case 'win':
                    userWinCount++;
                    alert(`Round ${i} Score: ${userWinCount} - ${compWinCount} - ${drawCount}`);
                    break;
                case 'lose':
                    compWinCount++;
                    alert(`Round ${i} Score: ${userWinCount} - ${compWinCount} - ${drawCount}`);
                    break;
            }
        }
        
        if (userWinCount > compWinCount){
            alert(`Game over. Congratulations, you won!\n\nFinal Score: ${userWinCount} - ${compWinCount} - ${drawCount}`);
        } else if (userWinCount < compWinCount) {
            alert(`Game over. Better luck next time, the computer won!\n\nFinal Score: ${userWinCount} - ${compWinCount} - ${drawCount}`);
        } else alert(`Game over. It was a draw!\n\nFinal Score: ${userWinCount} - ${compWinCount} - ${drawCount}`);

    }
*/

