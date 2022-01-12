const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    "icao24":String,
    "firstSeen": Date,
    "estDepartureAirport": String,
    "lastSeen": Date,
    "estArrivalAirport": String,
    "callsign": String,
    "estDepartureAirportHorizDistance": Number,
    "estDepartureAirportVertDistance": Number,
    "estArrivalAirportHorizDistance": Number,
    "estArrivalAirportVertDistance": Number,
    "departureAirportCandidatesCount": Number,
    "arrivalAirportCandidatesCount": Number,
  });

const Flight = mongoose.model('Flight', flightSchema,'flightStore')

module.exports = Flight