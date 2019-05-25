var popup = document.getElementById('popup'),
    call = document.getElementById('call'),
    close = document.getElementById('close');

call.addEventListener('click', () => {
    popup.style.display ='block';
} );
close.addEventListener('click',() => {
    popup.style.display ='none';
});

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

















