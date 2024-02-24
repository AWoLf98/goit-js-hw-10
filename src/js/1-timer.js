import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const start = document.querySelector('button[data-start]');

//disabled потрібно згідно ТЗ тільки кнопку.
class Timer {
  #idInteval;
  #timeLeft;
  #userSelectedDate;
  #UPDATE_TIMER_INTERVAL;
  #start;

  constructor(
    userSelectedDate = new Date(),
    startQuerySelector = document.querySelector('button[data-start]'),
    selector = 'input#datetime-picker',
    UPDATE_TIMER_INTERVAL = 1000
  ) {
    this.#idInteval = null;
    this.#timeLeft = 0;
    this.#userSelectedDate = userSelectedDate;
    this.#start = startQuerySelector;
    this.#UPDATE_TIMER_INTERVAL = UPDATE_TIMER_INTERVAL;
    this.#disabledInput();

    const options = {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose: selectedDates => {
        this.#userSelectedDate = selectedDates[0];
        this.#toggleButtonState();
      },
    };

    const datetime_flatpickr = flatpickr(selector, options);
  }

  startTimer() {
    this.#disabledInput();

    this.#timeLeft = Date.parse(this.#userSelectedDate) - Date.now();

    if (this.#idInteval) {
      clearInterval(this.#idInteval);
    }

    this.#idInteval = setInterval(
      this.#updateTimer.bind(this),
      this.#UPDATE_TIMER_INTERVAL
    );
  }

  #updateTimer() {
    this.#timeLeft -= this.#UPDATE_TIMER_INTERVAL;

    if (this.#timeLeft <= 0) {
      clearInterval(this.#idInteval);
      return;
    }

    const { days, hours, minutes, seconds } = Timer.#convertMs(this.#timeLeft);
    const data_seconds = document.querySelector('span[data-seconds]');
    const data_minutes = document.querySelector('span[data-minutes]');
    const data_hours = document.querySelector('span[data-hours]');
    const data_days = document.querySelector('span[data-days]');

    if (data_seconds || data_minutes || data_hours || data_days) {
      data_seconds.textContent = Timer.#addLeadingZero(seconds);
      data_minutes.textContent = Timer.#addLeadingZero(minutes);
      data_hours.textContent = Timer.#addLeadingZero(hours);
      data_days.textContent = Timer.#addLeadingZero(days);
    } else {
      iziToast.show({
        icon: 'fa-regular fa-circle-xmark',
        close: false,
        iconColor: '#fff',
        position: 'topRight',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
        messageColor: '#fff',
        message: 'Error interface',
      });
    }
  }

  #disabledInput() {
    this.#start.setAttribute('disabled', 'disabled');
  }

  #toggleButtonState() {
    if (Date.parse(this.#userSelectedDate) >= Date.now()) {
      this.#start.removeAttribute('disabled');
    } else {
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
      this.#disabledInput();
    }
  }

  static #convertMs(ms) {
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

  static #addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
}

const bestTimer = new Timer();

start.addEventListener('click', bestTimer.startTimer.bind(bestTimer));
