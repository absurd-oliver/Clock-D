const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const overlay1 = document.getElementById('big-circle-overlay1');
const overlay2 = document.getElementById('big-circle-overlay2');
const overlay3 = document.getElementById('big-circle-overlay3');
const overlay4 = document.getElementById('big-circle-overlay4');
const overlay5 = document.getElementById('big-circle-overlay5');
const overlay6 = document.getElementById('big-circle-overlay6');
const choresTime1 = document.getElementById('choresTime1');
const choresTime2 = document.getElementById('choresTime2');
const choresTime3 = document.getElementById('choresTime3');
const choresTime4 = document.getElementById('choresTime4');
const choresTime5 = document.getElementById('choresTime5');
const choresTime6 = document.getElementById('choresTime6');
const inputsSettings = document.getElementById('inputsSettings');

// Clock state
let seconds = 0;
let minutes = 0;
let hours = 0;

// Rotations
let secondsRotation = 0;
let minutesRotation = 0;
let hoursRotation = 0;

// Gradient state
let gradientPercentage1 = 0;
let gradientPercentage2 = 0;
let gradientPercentage3 = 0;

// Gradient goals (in minutes)
var hour1 = 6;                                             //change later
const gradientPercentageGoal1 = 0;
const gradientPercentageGoal2 = 15;
const gradientPercentageGoal3 = 30;
const gradientPercentageGoal4 = 40;
var hour2 = 7;                                             //change later
const gradientPercentageGoal5 = 3;
const gradientPercentageGoal6 = 11;

// Gradient colors
let grad1Color = '#ff7474ff';
let grad2Color = '#91ff65ff';
let grad3Color = '#5ba2ffff';
let grad4Color = '#ff3773ff';
let grad5Color = '#e3ff65ff';
let grad6Color = '#5ba2ffff';

// Active chore being edited
let activeChore = null;

function setClock() {
    const currentDate = new Date();
    seconds = currentDate.getSeconds();
    minutes = currentDate.getMinutes();
    hours = currentDate.getHours();

    secondsRotation = (seconds / 60) * 360;
    minutesRotation = (minutes / 60) * 360;
    hoursRotation = (hours / 12) * 360;

    setRotation(secondHand, secondsRotation);
    setRotation(minuteHand, minutesRotation);
    setRotation(hourHand, hoursRotation);

    // Gradients progress with seconds (smooth)
    gradientPercentage1 = (minutes / 60) * 100;
    gradientPercentage2 = (minutes / 60) * 100;
    gradientPercentage3 = (minutes / 60) * 100;
    gradientPercentage4 = (minutes / 60) * 100;
    gradientPercentage5 = (minutes / 60) * 100;
    gradientPercentage6 = (minutes / 60) * 100;

    // Cap them at goals (based on minutes)
    if(hours === hour1){
      if (minutes >= gradientPercentageGoal1) {
        gradientPercentage1 = (gradientPercentageGoal1 / 60) * 100;
        if(hours === hour1 && minutes < 60 && minutes > 0){gradientPercentage1 = 1;}
      }
      if (minutes >= gradientPercentageGoal2) {
          gradientPercentage2 = (gradientPercentageGoal2 / 60) * 100;
      }
      if (minutes >= gradientPercentageGoal3) {
          gradientPercentage3 = (gradientPercentageGoal3 / 60) * 100;
      }
      if (minutes >= gradientPercentageGoal4) {
         gradientPercentage4 = (gradientPercentageGoal4 / 60) * 100;
      }
      gradientPercentage5 = 0;
      gradientPercentage6 = 0;
    } else if(hours === hour2){
      if (minutes >= gradientPercentageGoal5) {
          gradientPercentage5 = (gradientPercentageGoal5 / 60) * 100;
      }
      if (minutes >= gradientPercentageGoal6) {
          gradientPercentage6 = (gradientPercentageGoal6 / 60) * 100;
      }
      gradientPercentage1 = 0;
      gradientPercentage2 = 0;
      gradientPercentage3 = 0;
      gradientPercentage4 = 0;
    } else {
      gradientPercentage1 = 0;
      gradientPercentage2 = 0;
      gradientPercentage3 = 0;
      gradientPercentage4 = 0;
      gradientPercentage5 = 0;
      gradientPercentage6 = 0;
    }

    setGradient();
}

function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation', rotation);
}

function setGradient() {
    overlay1.style.background = `conic-gradient(${grad1Color} ${gradientPercentage1}%, transparent ${gradientPercentage1}%)`;
    overlay2.style.background = `conic-gradient(${grad2Color} ${gradientPercentage2}%, transparent ${gradientPercentage2}%)`;
    overlay3.style.background = `conic-gradient(${grad3Color} ${gradientPercentage3}%, transparent ${gradientPercentage3}%)`;
    overlay4.style.background = `conic-gradient(${grad4Color} ${gradientPercentage4}%, transparent ${gradientPercentage4}%)`;
    overlay5.style.background = `conic-gradient(${grad5Color} ${gradientPercentage5}%, transparent ${gradientPercentage5}%)`;
    overlay6.style.background = `conic-gradient(${grad6Color} ${gradientPercentage6}%, transparent ${gradientPercentage6}%)`;
}

// Page navigation
function settings() {
    window.location.href = 'settings.html'; 
}

function returnToPage() {
    window.location.href = 'index.html'; 
}

// Chores settings
function choresSettings(n) {
    activeChore = n;
    inputsSettings.classList.toggle('hidden');
}

// Keep clock updating
setInterval(setClock, 1000);
