const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});
app.post('/gptRequest', (req, res) => {
	res.status(200).send("Проверка!");
});
app.listen(process.env.PORT || 3000)
