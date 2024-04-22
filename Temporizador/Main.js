const startBtn = document.getElementById('btnStart');
const stopBtn = document.getElementById('btnStop');
const resetBtn = document.getElementById('btnReset');
const title = document.getElementById('title');

let hours = 0;
let minutes = 0;
let seconds = 0;
let paused = true;
let intervalId = 0;


startBtn.addEventListener('click', () => {
    title.textContent = "Temporizador";
    if (document.getElementById("hrInput").value == "" || (Number(document.getElementById("hrInput").value) < 0) || Number(document.getElementById("hrInput").value) > 24) {
        hours = 0;
    }
    else {
        hours = Number(document.getElementById("hrInput").value);
    }

    if (document.getElementById("miInput").value == "" || (Number(document.getElementById("miInput").value) < 0 || Number(document.getElementById("miInput").value) > 59)) {
        minutes = 0;
    }
    else {
        minutes = Number(document.getElementById("miInput").value);
    }

    if (document.getElementById("seInput").value == "" || (Number(document.getElementById("seInput").value) < 0) || Number(document.getElementById("seInput").value) > 59) {
        seconds = 0;
    }
    else {
        seconds = Number(document.getElementById("seInput").value);
    }
    if (paused) {
        paused = false;
        intervalId = setInterval(updateTime, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    if (!paused) {
        paused = true;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener('click', () => {
    title.textContent = "Temporizador";
    if (!paused) {
        paused = true;
        clearInterval(intervalId);
    }
    document.getElementById("hrInput").value = "";
    document.getElementById("miInput").value = "";
    document.getElementById("seInput").value = "";
});

function updateTime() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    } else {
        clearInterval(intervalId);
        title.textContent = "Time's up!";
        paused = true;
        document.getElementById("hrInput").value = "";
        document.getElementById("miInput").value = "";
        document.getElementById("seInput").value = "";
        return;
    }
    document.getElementById("hrInput").value = hours;
    document.getElementById("miInput").value = minutes;
    document.getElementById("seInput").value = seconds;

}