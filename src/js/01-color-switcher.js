const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop');
let timerId = null;

function changeBodyColor(e) {
  e.target.disabled = true;

  if (stopBtn.disabled) {
    stopBtn.disabled = false;
  }

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBodyColor(e) {
  e.target.disabled = true;

  if (startBtn.disabled) {
    startBtn.disabled = false;
  }
  clearInterval(timerId);
}

startBtn.addEventListener('click', changeBodyColor);
stopBtn.addEventListener('click', stopChangeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//
console.log('smth');
