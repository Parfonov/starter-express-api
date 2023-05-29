const express = require('express')
const app = express()
let chatGPT = require('./reqGPT');

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});
app.listen(process.env.PORT || 3000)
