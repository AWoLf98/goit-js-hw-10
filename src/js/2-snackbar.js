import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form'); 

form.addEventListener('submit', (event)=> {
    event.preventDefault();
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
})