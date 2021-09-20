const body = document.querySelector('body');
const buttonRgb = document.querySelector('#get-rgb');
const title = document.querySelector('#rainbow-name');

buttonRgb.addEventListener('click', () => {
    title.innerHTML = rgbCode();
    body.style.backgroundColor = rgbCode();
})

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
