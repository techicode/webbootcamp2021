const delayedColorChange = (color, delay) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    }))
}

async function rainbow() {
    // with the away keyword, the function will wait for the promise function to be complete after his execution
    await delayedColorChange('red', 1500); // sinces theres no promise above, will activate inmediatly
    console.log('await') // this only be execute after the above function has been resolved
    await delayedColorChange('blue', 1000); // this will wait for the above function to activate
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('gray', 1000);
    return 'done';
}

rainbow().then((data) => {
    console.log(data + ' All colors has been changed');
})