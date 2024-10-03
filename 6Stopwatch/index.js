const timef = document.getElementById("time");
const start = document.getElementById("start");
const stopb = document.getElementById("stop");
const reset = document.getElementById("reset");

let timer;
let elapsed = 0;
let running = false;

start.onclick = () => {
    if (running) return;
    start.textContent = "Start";
    running = true;
    timer = setInterval(update, 10);
}

stopb.onclick = () => {
    if (!running) return;
    running = false;
    start.textContent = "Resume";
    clearInterval(timer);
}

reset.onclick = () => {
    if (running)
        running = false;
    start.textContent = "Start";
    clearInterval(timer);
    elapsed = 0;
    timef.textContent = "00h:00m:00s:00ms";
}

function update() {
    elapsed++;
    let hours = Math.floor(elapsed / 3600000).toString().padStart(2, "0");
    let minutes = Math.floor(elapsed / 6000).toString().padStart(2, "0");
    let seconds = Math.floor(elapsed / 100).toString().padStart(2, "0");
    let milliseconds = (elapsed % 100).toString().padStart(2, "0");
    timef.textContent = `${hours}h:${minutes}m:${seconds}s:${milliseconds}ms`;
}