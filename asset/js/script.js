const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const resultElement = document.getElementById('result');

function toggleTheme(theme) {
  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);
}

function changeCounter(value) {
  let valueNumber = Number(resultElement.value);
  resultElement.value = String(valueNumber + value);
}

plusBtn.addEventListener('click', () => changeCounter(1));
minusBtn.addEventListener('click', () => changeCounter(-1));
lightBtn.addEventListener('click', () => toggleTheme('light'));
darkBtn.addEventListener('click', () => toggleTheme('dark'));