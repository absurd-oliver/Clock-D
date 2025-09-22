const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const clockTimeDisplay = document.getElementById("clockTimeDisplay");
const choresGradientTimeDisplay = document.getElementById("choresGradientTimeDisplay");
const overlay1 = document.getElementById('big-circle-overlay1');
const overlay2 = document.getElementById('big-circle-overlay2');
const overlay3 = document.getElementById('big-circle-overlay3');
const colorChosen = document.getElementById('colorChosen');
const selectBox = document.getElementById('selectBox');
const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const colorDiv = document.getElementById('colorDiv');
const showColorChoose = document.getElementById('showColorChoose');


var seconds = 0;
var minutes = 0;
var hours = 0;

var secondsRotation = 0;
var minutesRotation = 0;
var hoursRotation = 0;
var gradientPercentage1 = 0;
var gradientPercentage2 = 0;
var gradientPercentage3 = 0;

var gradientPercentageGoal1 = 13;
var gradientPercentageGoal2 = 27;
var gradientPercentageGoal3 = 41;

var grad1Color = 'rgb(50,50,50)';
var grad2Color = 'rgb(100,50,10")';
var grad3Color = 'rgb(25,100,100)';

var r1 = 0;
var r2 = 0;
var r3 = 0;
var g1 = 0;
var g2 = 0;
var g3 = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;


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
  choresGradientTimeDisplay.innerHTML = `${gradientPercentageGoal1}m, ${gradientPercentageGoal2}m, ${gradientPercentageGoal3}m`;
}

function setGradient(){
grad1Color = `rgb(${r1},${g1},${b1})`;
grad2Color = `rgb(${r2},${g2},${b2})`;
grad3Color = `rgb(${r3},${g3},${b3})`;

  overlay1.style.background = `conic-gradient(${grad1Color} ${gradientPercentage1}%, transparent ${gradientPercentage1}%)`;
  overlay2.style.background = `conic-gradient(${grad2Color} ${gradientPercentage2}%, transparent ${gradientPercentage2}%)`;
  overlay3.style.background = `conic-gradient(${grad3Color} ${gradientPercentage3}%, transparent ${gradientPercentage3}%)`;
}



redInput.addEventListener('input', () => {
r1 = redInput.value;
setGradient();
});

greenInput.addEventListener('input', () => {
g1 = greenInput.value;
setGradient();
});

blueInput.addEventListener('input', () => {
b1 = blueInput.value;
setGradient();
});

var toggle = false;
showColorChoose.addEventListener('click',() => {
if(!toggle){
colorDiv.classList.remove('hidden');
toggle = true;
} else {
colorDiv.classList.add('hidden');
toggle = false;
}
});






setInterval(() => {
    setClock();
}, 1000);
