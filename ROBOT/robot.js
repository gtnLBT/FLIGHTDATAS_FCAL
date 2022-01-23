require('dotenv').config();
var PORT = process.env.PORT || 3000;
const express = require('express')
const https = require('https')
const app = express()
const request = require('request')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.json())

var allFlights

var dateBegin = Math.round(((Date.now()) - (169 * 3600 * 1000)) / 1000);
console.log(" date unix (s) 169 heures avant (begin) : " + dateBegin)
var nb2 = parseInt(dateBegin)

var dateEnd = Math.round(((Date.now()) - (168 * 3600 * 1000)) / 1000);
console.log(" date unix (s) 168 heures avant (end) : " + dateEnd)
var nb = parseInt(dateEnd)

//getAllFlights(nb2,nb);
getAllFlights();

//const createClock = setInterval(getAllFlights, 3600000);

function getAllFlights(){
    request(process.env.API_URL+'/flights/all?begin='+nb2+'&end='+nb, function(error, response, body) {
        if(error) {
            console.error('Could not send request to API:'+ error.message);
            return;
        }
        if(response.statusCode !=200) {
            console.error('Expected status code 200 but received ' +response.statusCode );
            return;
        }
        console.log('Processing our list of flightDatas');
        newFlights = JSON.parse(body);
        Flight.collection.insertMany(newFlights, function (err, docs) {
            if (err) {
                return console.error(err);
            } else {
                console.log("Multiple documents Inserted to collection")
                mongoose.connection.close()
            }  
        })
    })
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const Flight = require('./flight.js')


app.listen(PORT, () => {
    console.log('Server connected')
})



module.exports = app;
