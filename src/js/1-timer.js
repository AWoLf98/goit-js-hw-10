import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const UPDATE_TIMER = 1000;

let userSelectedDate = '';

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

const datetime_flatpickr = flatpickr('#datetime-picker', options);
const datetime_pickr = document.querySelector('#datetime-picker');

const start = document.querySelector('button[data-start]');

start.addEventListener('click', startTimer);
datetime_pickr.addEventListener('input', readInput);

function startTimer() {
    if((Date.parse(userSelectedDate) - Date.now()) < 0){
        iziToast.show({
          icon: 'fa-regular fa-circle-xmark',
          iconColor: '#fff',
          position: 'topRight',
          backgroundColor: '#EF4040',
          progressBarColor: '#B51B1B',
          messageColor: '#fff',
          message: 'Please choose a date in the future',
        });
        return;
    }


}

function readInput() {
    // // alert(userSelectedDate);
    // console.log(userSelectedDate);
    // console.log(Date.parse(userSelectedDate));
}

class Timer {

}
