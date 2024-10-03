const diceNum = document.getElementById("num-dice");
const diceButton = document.getElementById("roll");
const diceF = document.getElementById("diceF");
const message = document.getElementById("message");

diceButton.onclick = () => {
    message.style.opacity = 0;
    diceF.innerHTML = "";
    let rolls = [];
    for (let i = 0; i < Math.min(100, Number(diceNum.value)); i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
        diceF.innerHTML += `<image src="DiceIcons/${rolls[i]}.png" alt="dice${rolls[i]}" class="dice">`;
    }
    if (Number(diceNum.value) > 100)
        message.style.opacity = 1;
}