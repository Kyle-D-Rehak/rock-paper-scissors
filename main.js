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

function userPlay(userInput, comp) {
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
            alert(`Draw! You both chose ${user}.`);
            break;
        case 'win':
            alert(`You won this round! ${user} beats ${comp}.`);
            break;
        case 'lose':
            alert(`You lost this round! ${comp} beats ${user}.`);
            break;
        case 'invalid':
            result = userPlay(prompt('Please enter Rock, Paper, or Scissors'), comp);
            break;
    }

    return result;
}

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


