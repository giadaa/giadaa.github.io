const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', express.static(__dirname + '/'));
app.listen(port, () => console.log(`Jades app listening on port ${port}!`))

app.post('/weather', (req, res) => {
    console.log(req.body.city);

    let apiKey = '111112b5a11c2c9fd551c6c5a0ce1d0b';
    let city = req.body.city;
    let units = 'metric';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            console.log('body:', body);
        }

        let weather = JSON.parse(body)

        let message = "Temperature in " + weather.name +  " is " + weather.main.temp + "°C";
        console.log(message);
        res.send(message);
    });


    
});