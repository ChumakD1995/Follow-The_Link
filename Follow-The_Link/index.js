const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', redirectToOtherSite);
button2.addEventListener('click', redirectToOtherSite);

function redirectToOtherSite () {
  const input = document.createElement('input');
  input.type = 'text';
  document.body.appendChild(input);
  
  const confirmButton = document.createElement('button');
  confirmButton.innerText = 'OK';
  document.body.appendChild(confirmButton);

  confirmButton.addEventListener('click', function() {
    let link = input.value;
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = 'http://' + link;
    }

    window.location.href = link;
    document.body.removeChild(input);
    document.body.removeChild(confirmButton);
  })
}

