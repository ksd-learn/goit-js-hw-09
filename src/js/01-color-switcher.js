const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyBackgr = document.body;
let timer;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function genaratorColorOn() {
  btnStart.removeEventListener("click", genaratorColorOn);
  timer = setInterval(() => { bodyBackgr.style.backgroundColor = getRandomHexColor() }, 1000)
}

function genaratorColorOff() {
  clearInterval(timer);
  btnStart.addEventListener("click", genaratorColorOn)
}

btnStart.addEventListener("click", genaratorColorOn);
btnStop.addEventListener("click", genaratorColorOff);


