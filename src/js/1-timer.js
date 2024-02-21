import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const UPDATE_TIMER_INTERVAL = 1000;

const datetime_pickr = document.querySelector('input#datetime-picker');
const start = document.querySelector('button[data-start]');

let userSelectedDate = '';

class Timer {
  static Timer(idInteval) {
    this.idInteval = idInteval;
  }

  static startTimer() {
    const timeLeft = Date.parse(userSelectedDate) - Date.now();
    
    if (timeLeft < 0) {
      iziToast.show({
        icon: 'fa-regular fa-circle-xmark',
        close: false,
        iconColor: '#fff',
        position: 'topRight',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
        messageColor: '#fff',
        message: 'Please choose a date in the future',
      });
      return;
    }

    this.idInteval = setInterval(Timer.updateTimer, UPDATE_TIMER_INTERVAL);
    console.log(this.idInteval)
  }


  static *convertMs(ms) {
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

  static *addLeadingZero(value) {
    return value.padStart(2, '0');
  }

  static updateTimer() {
    console.log('Start interval');
    console.log(Timer.idInteval);
    // console.log(clearInterval(idInteval));
    // if(timeLeft - UPDATE_TIMER_INTERVAL < 0) {
    //   clearInterval(idInteval);
    // }
    // const { days, hours, minutes, seconds } = this.convertMs(timeLeft);
    
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    // console.log(selectedDates[0]);
  },
};

const datetime_flatpickr = flatpickr('input#datetime-picker', options);

start.addEventListener('click', Timer.startTimer);

