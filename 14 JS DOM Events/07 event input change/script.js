const input = document.querySelector('#inp');
const h1 = document.querySelector('h1');

input.addEventListener('input', (e) => {
    if (input.value.length === 0) {
        console.log('here')
        h1.innerText = 'Enter Your username';
    } else {
        h1.innerText = `Welcome, ${input.value}`
    }
})