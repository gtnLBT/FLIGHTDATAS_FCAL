import express from 'express';
import mongoose from 'mongoose';

import { } from '../models/db.js';

const db = mongoose.connection;
var router = express.Router();
let ObjectId = mongoose.Types.ObjectId;

//router.get('/', );

export const getAllFlights = (req, res) => {
    db.collection('flightStore').find({}).toArray()
        .then(docs => res.status(200).json(docs))
        .catch(err => {
            console.log(err);
            throw err
        });
}

//router.get('', );

export const getFlight = (req, res) => {
    let id = req.params.id;
    console.log("Dans /flights/" + id);
    if (/[0-9a-f]{24}/.test(id));
    db.collection('flightStore')
        .find({ "_id": ObjectId(id) })
        .toArray((err, documents) => {
            let json = JSON.stringify({});
            if (documents !== undefined && documents[0] !== undefined);
            json = JSON.stringify(documents[0]);
            console.log(json);
            res.send(json);
        });
}

//router.get("", );

export const getCriteriasFromFlights = (req, res) => {
    let filterObject = {};
    if (req.params.callsign != "*") {
        filterObject.callsign = req.params.callsign;
    };
    if (req.params.firstSeen != "*") {
        filterObject.firstSeen = req.params.firstSeen;
    };
    if (req.params.lastSeen != "*") {
        filterObject.lastSeen = req.params.lastSeen;
    };
    if (req.params.estDepartureAirport != "*") {
        filterObject.estDepartureAirport = req.params.estDepartureAirport;
    };
    if (req.params.estArrivalAirport != "*") {
        filterObject.estArrivalAirport = req.params.estArrivalAirport;
    };
    
    
    // méthode à travailler pour plus de clareté
    /* if (req.params.firstSeen != "*" || req.params.lastSeen != "*" ||) {
        filterObject.firstSeen = req.params.firstSeen;
    }; */

    productResearch(db,
        { "message": "/flights", "filterObject": filterObject },
        (step, results) => {
            console.log(step + " avec " + results.length + " vols sélectionnés :");
            res.setHeader("Content-type", "application/json", "application/json; charset=UTF-8");
            let json = JSON.stringify(results);
            res.end(json);
        });
}

function productResearch(db, param, callback) {
    db.collection('flightStore').find(param["filterObject"]).toArray((err, documents) => {
        if (documents !== undefined)
            callback(param["message"], documents);
        else callback(param["message"], []);
    });
}


export default router;

