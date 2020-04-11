const cartButtons = document.querySelector('#cart-buttons');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButtons.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

new WOW().init();