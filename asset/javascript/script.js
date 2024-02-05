function toggleTheme(theme) {
  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => toggleTheme(btn.id));
});

function counter(btnCounter) {
  const resultElement = document.getElementById('result');
  let resultNumber = Number(resultElement.innerText);

  if (btnCounter === 'plus') {
    resultElement.innerText = String(resultNumber + 1);
  } else if (btnCounter === 'minus') {
    if (resultNumber === 0) {
      alert("Gia stai a 0!");
      return;
    }
    resultElement.innerText = String(resultNumber - 1);
  }
}

document.querySelectorAll('.btnCounter').forEach(btn => {
  btn.addEventListener('click', () => counter(btn.id));
});
