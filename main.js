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

function userPlay(userInput = prompt('Rock, Paper, or Scissors?'), comp = computerPlay()) {
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
            alert(`Draw! You both chose ${user}`);
            break;
        case 'win':
            alert(`You win! ${user} beats ${comp}.`);
            break;
        case 'lose':
            alert(`You lose! ${comp} beats ${user}`);
            break;
        case 'invalid':
            alert(`Please enter rock, paper, or scissors.`);
            break;
    }
}

