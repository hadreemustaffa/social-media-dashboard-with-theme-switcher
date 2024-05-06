const slider = document.querySelector('.slider');
const inputBtn = document.querySelector('#toggleBtn');
const html = document.documentElement;

const setThemeState = () => {
  if (html.getAttribute('color-mode') == 'light') {
    inputBtn.checked = true;
    html.setAttribute('color-mode', 'dark');
  } else {
    inputBtn.checked = false;
    html.setAttribute('color-mode', 'light');
  }
};

slider.addEventListener('click', () => {
  setThemeState();
});

inputBtn.addEventListener('change', () => {
  setThemeState();
});
