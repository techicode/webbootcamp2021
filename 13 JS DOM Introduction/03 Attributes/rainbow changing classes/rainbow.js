const colors = ['red', 'blue', 'yellow', 'orange', 'purple', 'green']

let i = 0;
setInterval(() => {
    // changing the class of an element
    document.querySelector("h1").setAttribute('class', colors[i]);
    i++;
    if (i > colors.length) {
        i = 0;
    }
    // toggle will "turn off" and "turn on" a class of the element
    document.querySelector("h2").classList.toggle('red');
}, 200);

// adding a class to an element
document.querySelector("h2").classList.add('blue-border')
// adding another class to the same element above
document.querySelector("h2").classList.add('red');

// a class can be removed using .classList.remove('nameofClass');
