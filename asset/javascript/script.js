function toggleTheme(theme) {
    const bodyClassList = document.body.classList;

    if (theme === 'light' && !bodyClassList.contains('light')) {
      bodyClassList.remove('dark');
      bodyClassList.add('light');
    } else if (theme === 'dark' && !bodyClassList.contains('dark')) {
      bodyClassList.remove('light');
      bodyClassList.add('dark');
    }
  }

  document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      toggleTheme(btn.id);
    });
  });

  

  // function counter(btnCounter){
  //   let resultString = document.getElementById('result').innerText;
  //   let resultNumer =  Number(resultString);

  //    if(btnCounter == 'plus')
  //    {
  //     document.getElementById('result').innerText = String(++resultNumer)
  //    }
  //    else{
  //       if (Number(resultNumer) == 0)
  //       return alert("Gia stai a 0!")
  //       else{
  //         document.getElementById('result').innerText = String(--resultNumer)
  //       }
  //    }
  // }

  // document.querySelectorAll('.btnCounter').forEach(function(btn) {
  //   btn.addEventListener('click', function() {
  //     counter(btn.id);
  //   });
  // });

  function counter(btnCounter) {
    let resultElement = document.getElementById('result');
    let resultNumber = Number(resultElement.innerText);
  
    if (btnCounter === 'plus') {
      resultElement.innerText = String(resultNumber + 1);
    } else if (btnCounter === 'minus') {
      if(resultNumber == 0){
        alert("Gia stai a 0!");
        return
      }
      else
      resultElement.innerText = String(resultNumber - 1);
  }}
  
  document.querySelectorAll('.btnCounter').forEach(function(btn) {
    btn.addEventListener('click', function() {
      counter(btn.id);
    })
  });