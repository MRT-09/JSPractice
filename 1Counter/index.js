const label = document.getElementById("counter");  
const inc = document.getElementById("add");
const dec = document.getElementById("sub");
const res = document.getElementById("reset");

let counter = 0;

function update() {
    label.textContent = counter;
}

res.onclick = () => {
    counter = 0;
    update();
}

inc.onclick = () => {
    counter++;
    update();
}

dec.onclick = () => {
    counter--;
    update();
}