const slider = document.querySelector('.slider');
const inputBtn = document.querySelector('#toggleBtn');
const html = document.documentElement;

slider.addEventListener('click', () => {
  inputBtn.toggleAttribute('checked');

  if (html.getAttribute('color-mode') == 'light') {
    html.setAttribute('color-mode', 'dark');
  } else {
    html.setAttribute('color-mode', 'light');
  }
});
