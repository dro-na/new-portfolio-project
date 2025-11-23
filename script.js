const navBtn = document.querySelector('.jsBtn');
const navigatioin = document.querySelector('.main-container');
let open = document.querySelector('.nav-open');
let close = document.querySelector('.nav-close');

let isopen = false;

navBtn.onclick = function () {
  isopen = !isopen;

  if (isopen) {
    navigatioin.classList.add('active');
    open.style.display = 'none';
    close.style.display = 'block';
  } else {
    navigatioin.classList.remove('active');
    open.style.display = 'block';
    close.style.display = 'none';
  }
};
