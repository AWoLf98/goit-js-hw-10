import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const datetime_pickr = document.querySelector('input#datetime-picker');
const start = document.querySelector('button[data-start]');

let userSelectedDate = '';

//по більшій мірі реалізував на статиці. Ідея була дуже погана)
class Timer {
  constructor(UPDATE_TIMER_INTERVAL = 1000) {
    this.idInteval = idInteval;
    this.UPDATE_TIMER_INTERVAL = UPDATE_TIMER_INTERVAL;
    this.timeLeft = 0;
  }

  static startTimer() {
    Timer.timeLeft = Date.parse(userSelectedDate) - Date.now();
    
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

    Timer.idInteval = setInterval(Timer.updateTimer, Timer.UPDATE_TIMER_INTERVAL);
    console.log(Timer.idInteval)
  }

  static *convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  static *addLeadingZero(value) {
    return value.padStart(2, '0');
  }

  static updateTimer() {
    console.log('Start interval');
    console.log(Timer.idInteval);
    console.log(clearInterval(Timer.idInteval));
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

