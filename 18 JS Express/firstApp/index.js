const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("We got a new requesst")
//     res.send("Hello, we got your request!!")
// })

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.post('/cats',(req, res) => {
    res.send('Post response to cats')
})

app.get('/cats', (req, res) => {
    res.send('Miau!')
})


// must have to been in the last position, because everything will pass to here *
app.get('*', (req, res) => {
    res.send('Sorry, 404!')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})