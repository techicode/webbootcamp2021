// we have resolve and reject, bot are function ex: resolve()  / reject()
// if resolve is executed, the status will be fullfiled
// if reject is executed, the status will be rejected
// if neither resolve or reject are executed, the status will be pending
const testingPromise = new Promise((resolve, reject) => {
    resolve();
})

const fakeRequest = ((url) => {
    // despues de 2 segundos se devuelve un resolve()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
})

// fakeRequest('dog.com')
// .then(() => { // cuando recibe el resolve, then executa lo siguiente
//     console.log('Done with request')
// })

const timeRequest = ((greeting) => {
    return new Promise(((resolve, reject) => {
        const random = Math.floor(Math.random() * 10);
        setTimeout(() => {
            if (random >= 5) {
                resolve(greeting + ' The time was good: ' + random);
            }
            reject(greeting + ' Error timeout. time: ' + random);
        }, 2000)
    }))
})

timeRequest('Saludos')
    .then((data) => {
        console.log(data)
    })
    .catch((onerror) => {
        console.log(onerror);
    })

const delayedColorChange = (color, delay) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    }))
}

delayedColorChange('red', 1500)
    .then(() => delayedColorChange('orange', 1500))
    .then(() => delayedColorChange('blue', 1500))
    .then(() => delayedColorChange('yellow', 1500))

