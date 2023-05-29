const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});
app.post('/gptRequest', (req, res) => {
    req.body.gptAnswer = "Проверка.";
    res.status(200).send(req.body.gptQuestion);
});
app.listen(process.env.PORT || 3000)
