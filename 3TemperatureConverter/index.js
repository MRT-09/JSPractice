const input = document.getElementById("inputD");
const CF = document.getElementById("CtoF");
const FC = document.getElementById("FtoC");
const CK = document.getElementById("CtoK");
const KC = document.getElementById("KtoC");
const FK = document.getElementById("FtoK");
const KF = document.getElementById("KtoF");
const submit = document.getElementById("submit");
const output = document.getElementById("message");

submit.onclick = () => {
    const inputDeg = Number(input.value);
    let conversion, T1, T2;
    switch (true) {
        case CF.checked:
            conversion = inputDeg * 9/5 + 32;
            T1 = "Celsius";
            T2 = "Fahrenheit";
            break;
        case FC.checked:
            conversion = (inputDeg - 32) * 5/9;
            T1 = "Fahrenheit";
            T2 = "Celsius";
            break;
        case CK.checked:
            conversion = inputDeg + 273.15;
            T1 = "Celsius";
            T2 = "Kelvin";
            break;
        case KC.checked:
            conversion = inputDeg - 273.15;
            T1 = "Kelvin";
            T2 = "Celsius";
            break;
        case FK.checked:
            conversion = (inputDeg - 32) * 5/9 + 273.15;
            T1 = "Fahrenheit";
            T2 = "Kelvin";
            break;
        case KF.checked:
            conversion = (inputDeg - 273.15) * 9/5 + 32;
            T1 = "Kelvin";
            T2 = "Fahrenheit";
            break;
    }
    message.textContent = `${inputDeg} degrees ${T1} = ${conversion} degrees ${T2}`;
}