// the event itself can be captured and used, just defined in the function with any name, in this case 'event'
document.querySelector('button').addEventListener('click', (event) => {
    console.log(event); // log what the event capture has
    if (event.ctrlKey) {
        alert('Control!')
    } else if (event.altKey) {
        alert('Alt!')
    } else {
        alert('Nothing detected!')
    }

})

const h1 = document.querySelector('h1');

// event keyboard
document.body.addEventListener('keydown',(evt) => {
    console.log(evt);
    h1.innerHTML += evt.key;
  if (evt.code === 'Space') {
      h1.innerHTML = null;
  }
})