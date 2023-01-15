//task HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку, таймер повинен запускатися. Додай мінімальне оформлення елементів інтерфейсу.
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - options.defaultDate <= 0) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
};

const dateInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes');
const secondsEl = document.querySelector('[data-seconds');

const fp = flatpickr(dateInput, options);
startBtn.disabled = true;

startBtn.addEventListener('click', makeTimer);

function makeTimer() {
  const intervalID = setInterval(() => {
    const inputDate = new Date(dateInput.value);
    const diff = inputDate - Date.now();

    if (diff <= 0) {
      clearInterval(intervalID);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);
    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    startBtn.disabled = true;
    console.log(days, hours, minutes, seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(str) {
  return String(str).padStart(2, '0');
}

console.log('smth');
