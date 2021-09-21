const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');


// this way we need to declare implicit the element, so if we want to do the same thing
// we need to make another for with another funcion that use the h1 elements instead of button element
for (let buttonsKey of buttons) {
    buttonsKey.addEventListener('click', () => {
        buttonsKey.style.backgroundColor = rgbCode();
    })
}


// but using this, we accept any element, and this function will be pased to the foor loop to be applied
// arrow function doesnt work with this

function colorize() {
    this.style.backgroundColor = rgbCode();
    this.style.color = rgbCode();
}

// here we passed the function that used this and will work
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}




// func for rgb random
function rgbCode () {
    const rgbArray = getRgb();
    return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`
}

function getRgb () {
    const arrayRgb = [];

    for (let i = 0; i < 3; i++) {
        const ranm = Math.floor(Math.random() * 255);
        arrayRgb.push(ranm);
    }
    return arrayRgb;
}
