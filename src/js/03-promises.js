function createPromise(position, pause) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, pause})
      } else {
        reject({position, pause})
      }
    }, pause)
  })
}

function timerOn(event) {
  event.preventDefault();
  const { elements: { delay, step, amount }} = event.currentTarget;
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i++) {
  createPromise(i, delayValue)
  .then(({ position, pause }) => {
    console.log(`✅ Fulfilled promise ${position} in ${pause}ms`);
  })
  .catch(({ position, pause }) => {
    console.log(`❌ Rejected promise ${position} in ${pause}ms`);
  });
    
    delayValue += stepValue;

  }
}

const form = document.querySelector('.form');
form.addEventListener("submit", timerOn);

