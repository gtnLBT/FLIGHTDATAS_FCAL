require('dotenv').config();
const express = require('express')
const app = express()
const request = require('request')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.json())

var allFlights

var dateOneDayBeforeAndTwoHours = Math.round(((Date.now()) - (26 * 3600 * 1000)) / 1000);
console.log(" date unix (s) 72 heures avant : " + dateOneDayBeforeAndTwoHours)
var nb2 = parseInt(dateOneDayBeforeAndTwoHours)

var dateOneDayBefore = Math.round(((Date.now()) - (24 * 3600 * 1000)) / 1000);
console.log(" date unix (s) 24 heures avant : " + dateOneDayBefore)
var nb = parseInt(dateOneDayBefore)

getAllFlights()
const createClock = setInterval(getAllFlights, 7200000);



function getAllFlights() {
    request(process.env.API_URL+'/flights/all?begin=' + nb2 + '&end=' + nb, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("getAllFlights fonctionne")
            allFlights = body;
            //console.log(body)
            var newFlight = JSON.parse(body)
            Flight.collection.insertMany(newFlight, function (err, docs) {
                if (err) {
                    return console.error(err);
                } else {
                    console.log("Multiple documents Inserted to collection")
                }
            })
        }
    });
}

app.get('/allFlights', (req, res) => {
    res.setHeader('Content-type', 'application/json; charset=utf-8');
    res.setHeader('Access-control-Allow-Origin', '*');
    res.send(allFlights)
})



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const Flight = require('./flight.js')



app.listen(3000, () => {
    console.log('Server connected')
})



module.exports = app;
