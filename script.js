const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const clockTimeDisplay = document.getElementById("clockTimeDisplay");
const overlay1 = document.getElementById('big-circle-overlay1');
const overlay2 = document.getElementById('big-circle-overlay2');
const overlay3 = document.getElementById('big-circle-overlay3');
const colorChosen = document.getElementById('colorChosen');
const selectBox = document.getElementById('selectBox');


var seconds = 0;
var minutes = 0;
var hours = 0;

var secondsRotation = 0;
var minutesRotation = 0;
var hoursRotation = 0;
var gradientPercentage1 = 0;
var gradientPercentage2 = 0;
var gradientPercentage3 = 0;

var gradientPercentageGoal1 = 10;
var gradientPercentageGoal2 = 20;
var gradientPercentageGoal3 = 30;

var grad1Color = '#fc0303';
var grad2Color = '#0ffc03';
var grad3Color = '#0345fc';


showTime();
setGradient();

function setClock() {
    let currentDate = new Date();
    seconds = currentDate.getSeconds();
    minutes = currentDate.getMinutes();
    hours = currentDate.getHours();
    secondsRotation = (seconds / 60) * 360;
    minutesRotation = ((minutes) / 60) * 360;
    hoursRotation = ((hours) / 12) * 360;
    setRotation(secondHand, secondsRotation);
    setRotation(minuteHand, minutesRotation);
    setRotation(hourHand, hoursRotation);

    gradientPercentage1 = (seconds / 60) * 100;
    gradientPercentage2 = (seconds / 60) * 100;
    gradientPercentage3 = (seconds / 60) * 100;
    if (seconds > gradientPercentageGoal1){gradientPercentage1 = (gradientPercentageGoal1 / 60) * 100;}
    if (seconds > gradientPercentageGoal2){gradientPercentage2 = (gradientPercentageGoal2 / 60) * 100;}
    if (seconds > gradientPercentageGoal3){gradientPercentage3 = (gradientPercentageGoal3 / 60) * 100;}
    setGradient();

    let m = currentDate.getMinutes().toString().padStart(2, '0');
    let s = currentDate.getSeconds().toString().padStart(2, '0');
    showTime(hours, m, s);
}

function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation', rotation);
}

function showTime(h,m,s){
  clockTimeDisplay.innerHTML = `${h}:${m}:${s}`;
}

function setGradient(){
  overlay1.style.background = `conic-gradient(${grad1Color} ${gradientPercentage1}%, transparent ${gradientPercentage1}%)`;
  overlay2.style.background = `conic-gradient(${grad2Color} ${gradientPercentage2}%, transparent ${gradientPercentage2}%)`;
  overlay3.style.background = `conic-gradient(${grad3Color} ${gradientPercentage3}%, transparent ${gradientPercentage3}%)`;
}




setInterval(() => {
    setClock();
}, 1000);
