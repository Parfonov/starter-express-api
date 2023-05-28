const express = require('express')
const app = express()
let gpt = require('./reqGPT');

app.post('/mix/gpt', (req, res) => {
    req.body.returnCode = "0";
    req.body.returnMessage = "OK";
    req.body.dateTime = getDateTimeFormat();
    req.body.gptResponce = gpt.getAnswer(req.body.gptAsk);
    res.status(200).send(req.body);
});
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)