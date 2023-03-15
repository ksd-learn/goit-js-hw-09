import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let differenceDate = 0;
const btnStart = document.querySelector('[data-start]');
const textDay = document.querySelector('[data-days]');
const textHours = document.querySelector('[data-hours]');
const textDMin = document.querySelector('[data-minutes]');
const textSec = document.querySelector('[data-seconds]');

const options = {
    enableTime: true,
    clickOpens: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > options.defaultDate) {
            if (differenceDate <= 0) {
                differenceDate = Date.parse(selectedDates[0]) - Date.parse(options.defaultDate);
                btnStart.addEventListener("click", timerOn);
            }
        } else {
            btnStart.removeEventListener("click", timerOn);
            alert("Please choose a date in the future")
        }
    },
};

        // функция convertMs - подсчет значений, 
        //где ms - разница между конечной и текущей датой в миллисекундах.
function convertMs(ms) {    
    // Remaining days
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    // Remaining hours
    const hours = Math.floor(ms / (1000 * 60 * 60) % 24);
    // Remaining minutes
    const minutes = Math.floor(ms / (1000 * 60) % 60);
    // Remaining seconds
    const seconds = Math.floor(ms / 1000 % 60);
    
    return { days, hours, minutes, seconds };
}

function timerOn() {
    btnStart.removeEventListener("click", timerOn);
    options.clickOpens = false;
    flatpickr("#datetime-picker", options);
    const timer =setInterval(() => {
        displayTimer(convertMs(differenceDate));
        differenceDate -= 1000;
        if (differenceDate < 0) {
            clearInterval(timer);
            options.clickOpens = true;
            flatpickr("#datetime-picker", options)
        }
    }, 1000)
}

function displayTimer({ days, hours, minutes, seconds }) {
    textDay.textContent = String(days).padStart(2, '0');
    textHours.textContent = String(hours).padStart(2, '0');
    textDMin.textContent = String(minutes).padStart(2, '0');
    textSec.textContent = String(seconds).padStart(2, '0');
}

flatpickr("#datetime-picker", options)

