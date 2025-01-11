// Описаний в документації https://flatpickr.js.org/getting-started/
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Convert MS function
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

const timer = {
    userSelectedDate: null,
    intervalId: null,
    elements: {
        days: document.querySelector('span[data-days]'),
        hours: document.querySelector('span[data-hours]'),
        minutes: document.querySelector('span[data-minutes]'),
        seconds: document.querySelector('span[data-seconds]'),
    },

    start() {
        this.intervalId = setInterval(() => {
            const timeLeft = this.userSelectedDate.getTime() - Date.now();
            
            if (timeLeft <= 0) {
                this.stop();
                return
            }

            const { days, hours, minutes, seconds } = convertMs(timeLeft);
            this.elements.days.textContent = this.addLeadingZero(days);
            this.elements.hours.textContent = this.addLeadingZero(hours);
            this.elements.minutes.textContent = this.addLeadingZero(minutes);
            this.elements.seconds.textContent = this.addLeadingZero(seconds);

            btnStart.setAttribute('disabled', '');
            btnStart.previousElementSibling.setAttribute('disabled', '');
            
        }, 1000);

    },

    stop() {
        clearInterval(this.intervalId);
        btnStart.previousElementSibling.removeAttribute('disabled');
    },

    addLeadingZero(value) {
    return String(value).padStart(2, '0');
    },
}

// Input: Date selection
const options = {
    enableTime: true,
    time_24hr: true,
    enableSeconds: false,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() - options.defaultDate.getTime() <= 0) {
            iziToast.show({
                message: 'Please choose a date in the future',
                backgroundColor: 'red',
                messageColor: 'white',
                position: 'topRight',
                progressBar: false,
                close: false,
            });
            btnStart.setAttribute('disabled',``)
            return
        }
        btnStart.removeAttribute('disabled');
        iziToast.destroy();
        timer.userSelectedDate = selectedDates[0];
    },
}
    
flatpickr("#datetime-picker", options);

const btnStart = document.querySelector('button[data-start]')
btnStart.addEventListener("click", event => timer.start());

console.dir(btnStart)


// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



