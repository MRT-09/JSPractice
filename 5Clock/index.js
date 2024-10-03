const date = document.getElementById("date");
const time = document.getElementById("time");
const toggle = document.getElementById("toggle");

let type = "24";

function getDayOfWeek(day) {
    switch (day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}

function getMonthByNum(month) {
    switch (month) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
    }
}

function get24Hour(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function get12Hour(hours, minutes, seconds) {
    const h = hours % 12;
    const mer = hours < 12 ? "AM" : "PM";
    return `${h.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${mer}`;
}

function update() {
    const fulldate = new Date();
    const dayW = getDayOfWeek(fulldate.getDay());
    const dayD = fulldate.getDate();
    const month = getMonthByNum(fulldate.getMonth());
    const year = fulldate.getFullYear();
    const hours = fulldate.getHours();
    const minutes = fulldate.getMinutes();
    const seconds = fulldate.getSeconds();
    date.textContent = `${dayD} of ${month}, ${year} (${dayW})`;
    time.textContent = type === "24" ? get24Hour(hours, minutes, seconds) : get12Hour(hours, minutes, seconds);
}

setInterval(update, 10);

toggle.onclick = () => {
    if (type === "24") {
        type = "12";
        toggle.textContent = "Switch to 24-hour format";
    }
    else {
        type = "24";
        toggle.textContent = "Switch to 12-hour format";
    }
}