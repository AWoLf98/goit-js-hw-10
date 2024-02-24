import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = form.elements['delay'].value;
  const radioValue = form.elements['state'].value;

  const notificationPromise  = new Promise((resolve, rejected) => {
    setTimeout(() => {
        if (radioValue === 'fulfilled') {
          return resolve(delay);
        } else if (radioValue === 'rejected') {
          return rejected(delay);
        }
    }, delay)
  
  });

  notificationPromise
  .then(delay => {
    iziShow('#59A10D', `✅ Fulfilled promise in ${delay}ms`)
  })
  .catch(delay => {
    iziShow('#EF4040', `❌ Rejected promise in ${delay}ms`)
  })
});


function iziShow(color, message) {
  iziToast.show({
    color: color,
    close: false,
    position: 'topRight',
    backgroundColor: color,
    messageColor: '#fff',
    message: message,
  });
}