const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', redirectToOtherSite);
button2.addEventListener('click', redirectToOtherSite);

function redirectToOtherSite () {
  const link = prompt('Enter a link');
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = 'http://' + link; 
  }

  window.location.href = link;
}