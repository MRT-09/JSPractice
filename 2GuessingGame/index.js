const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const message = document.getElementById("message");

let guesses = 0, cGuess, cRand;

function newGame() {
    cRand = Math.floor(Math.random() * 100) + 1;
    console.log(cRand);
    guesses = 0;
    submit.disabled = false;
    message.textContent = "";
}

newGame();
reset.onclick = newGame;
submit.onclick = () => {
    guesses++;
    cGuess = Number(guess.value);
    if (isNaN(cGuess) || cGuess < 1 || cGuess > 100) {
        message.textContent = `Invalid input`;
    }
    else if (cGuess === cRand) {
        message.textContent = `YOU GUESSED IT! (in ${guesses} tries)`;
        submit.disabled = true;
    }
    else if (cGuess < cRand) {
        message.textContent = `Answer is bigger`;
    }
    else if (cGuess > cRand) {
        message.textContent = `Answer is lower`;
    }
}