const weatherapiK = "c96ed47d8b6f9561ef2ed1a41995f137";
const form = document.getElementById("form");
const input = document.getElementById("search");
const unit = document.getElementById("unit");
const button = document.getElementById("submit");
const city = document.getElementById("city");
const result = document.getElementById("result");
const temperature = document.getElementById("temperature");
const hum = document.getElementById("humidity");
const desc = document.getElementById("description");
const Wicon = document.getElementById("icon");
const error = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = input.value;
    const units = unit.value;
    if (!location) {
        error.textContent = "Please enter a location";
        error.classList.add("errorDisplayed");
    } else {
        try {
            const weather = await getData(location);
            console.log(weather);
            displayWeather(weather, units);
        } catch (error) {
            window.alert(`Error fetching data: ${error}`);
        }
    }
});

async function getData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherapiK}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching data");
    }
    return await response.json();
}

function displayWeather(weather, units) {
    const {name: cityName, main: {temp, humidity}, weather: [{description, id}]} = weather;
    city.textContent = cityName;
    hum.textContent = `Humidity: ${humidity}%`;
    desc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    setIcon(id);
    let tempConv;
    let tempSign;
    if (units === "Fahrenheit") {
        tempConv = (temp - 273.15) * 9/5 + 32;
        tempSign = "°F";
    } else if (units === "Celsius") {
        tempConv = temp - 273.15;
        tempSign = "°C";
    } else {
        tempConv = temp;
        tempSign = " K";
    }
    temperature.textContent = `${tempConv.toFixed(2)}${tempSign}`;
    result.style.display = "flex";
}

function setIcon(id) {
    switch (true) {
        case id >= 200 && id < 300:
            icon = "⛈️";
            break;
        case id >= 300 && id < 600:
            icon = "🌧️";
            break;
        case id >= 600 && id < 700:
            icon = "❄️";
            break;
        case id >= 700 && id < 800:
            icon = "🌫️";
            break;
        case id === 800:
            icon = "☀️";
            break;
        case id > 800:
            icon = "☁️";
            break;
        default:
            icon = "❓";
            break;
        
    }
    Wicon.textContent = icon;
    Wicon.classList.add("icon");
}