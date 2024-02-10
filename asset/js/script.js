function toggleTheme(theme) {
  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => toggleTheme(btn.id));
});

function counter(btnCounter) {
  const resultElement = document.getElementById('result');
  let resultNumber = Number(resultElement.value);

  if (btnCounter === 'plus') {
    resultElement.value = String(resultNumber + 1);
  } else if (btnCounter === 'minus') {
    resultElement.value = String(resultNumber - 1);
  }
}

document.querySelectorAll('.btnCounter').forEach(btn => {
  btn.addEventListener('click', () => counter(btn.id));
});
