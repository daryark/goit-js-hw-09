import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
// const delayInput = document.querySelector('[name="delay"]');
// const stepInput = document.querySelector('[name="step"]');
// const amountInput = document.querySelector('[name="amount"]');
const createPBtn = document.querySelector('[type="submit');
const {
  elements: { delay, step, amount },
} = formEl;

createPBtn.addEventListener('click', makeAllPromises);

function makeAllPromises(e) {
  e.preventDefault();
  const { delay, step, amount } = findParams();

  for (let pos = 1, del = delay; pos <= amount; pos += 1, del += step) {
    createPromise(pos, del)
      .then(res => {
        Notify.success(res);
      })
      .catch(err => {
        Notify.failure(err);
      });
  }
}

//
function findParams() {
  return {
    delay: Number(delay.value),
    step: Number(step.value),
    amount: Number(amount.value),
  };
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

console.log('smth');
