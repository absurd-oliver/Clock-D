const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const clockTimeDisplay = document.getElementById("clockTimeDisplay");
const overlay = document.getElementById('big-circle-overlay');

var seconds = 0;
var minutes = 0;
var hours = 0;

var secondsRotation = 0;
var minutesRotation = 0;
var hoursRotation = 0;
var gradientPercentage = 0;

showTime();
function setClock() {
    let currentDate = new Date();
    seconds = currentDate.getSeconds();
    minutes = currentDate.getMinutes();
    hours = currentDate.getHours();
    secondsRotation = (seconds / 60) * 360;
    minutesRotation = ((minutes) / 60) * 360;
    hoursRotation = ((hours / 60) / 12) * 360;
    gradientPercentage = (minutes / 60) * 100;
    setRotation(secondHand, secondsRotation);
    setRotation(minuteHand, minutesRotation);
    setRotation(hourHand, hoursRotation);
    setGradient();
    showTime();
}

function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation', rotation);
}

function showTime(){
  clockTimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function setGradient(){
  overlay.style.background = `conic-gradient(rgb(0, 0, 0) ${gradientPercentage}%, transparent ${gradientPercentage}%)`;
}

setInterval(() => {
    setClock();
}, 100);
