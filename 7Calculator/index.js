const screen = document.getElementById("screen");

function sign(char) {
    screen.value += char;
}

function calB() {
    try {
        let str = screen.value;
        str = str.replace(/x/g, '*');
        str = str.replace(/÷/g, '/');
        screen.value = eval(str);
    } catch (error) {
        console.error(error);
    }
}

function cleB() {
    screen.value = "";
}

function delB() {
    screen.value = screen.value.slice(0, -1);
}