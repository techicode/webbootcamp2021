// set timeout accept as first arg a function, the second arg is the time of timeout in ms
setTimeout(() => {
    console.log("Yo!")
}, 1500)

// do something forever, but with a time interval express in ms
setInterval(() => {
    console.log(Math.floor(Math.random() * 6) + 1)
}, 3000)
