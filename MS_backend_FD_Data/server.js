var express =require("express");
var app = express();
app.listen(1984);
var cors = require("cors");

app.use(cors());

var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
const { ObjectId } = require("mongodb");
var url = "mongodb+srv://GaetanLEB:Lfri1028@cluster0.uqc0e.mongodb.net";



MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("flightdatas");
    assert.equal(null, err);
    console.log("Connexion au serveur MongoDB réussi");
    

    app.get("/flights/callsigns",
        (req,res) => {
            productResearch(db,
                {"message":"/flights/callsigns", "filterObject":{}},
                (etape, results) => {
                    console.log(etape+" : "+results.length+" callsigns sélectionnés :");
                    var callsigns = [];
                    for (let doc of results)
                    if(!callsigns.includes(doc.callsign)) callsigns.push(doc.callsign);
                    callsigns.sort();
                    var json = JSON.stringify(callsigns);
                    console.log(json);
                    res.setHeader("Content-type","application/json; charset=UTF-8");
                    res.send(json);
                        
            })
        }
    )
    
    

    app.get("/flights/:callsign/:firstSeen/:lastSeen/:estDepartureAirport/:estArrivalAirport",
        (req,res) => {
            var filterObject ={};
            if(req.params.callsign != "*") {
                filterObject.callsign = req.params.callsign;
            }
            if(req.params.firstSeen != "*") {
                filterObject.firstSeen = req.params.firstSeen;
            }
            if(req.params.lastSeen != "*") {
                filterObject.lastSeen = req.params.lastSeen;
            }
            if(req.params.estDepartureAirport != "*") {
                filterObject.estDepartureAirport = req.params.estDepartureAirport;
            }
            if(req.params.estArrivalAirport != "*") {
                filterObject.estArrivalAirport = req.params.estArrivalAirport;
            }

            productResearch(db,
                {"message":"/flights", "filterObject":filterObject},
                (etape, results) => {
                    console.log(etape+" : "+results.length+" vols sélectionnés :");
                    res.setHeader("Content-type","application/json; charset=UTF-8");
                    var json = JSON.stringify(results);
                    console.log(json);
                    res.send(json);          
            })
        }
    )

    app.get("/flights/last_ten_flights",(req,res) => {
        db.collection('flightStore_2')
        .find()
        .sort({_id:-1})
        .limit(10)
        .toArray((err, documents) => {
            let json =JSON.stringify({});
            if (documents !== undefined
                && documents[0] !== undefined) {
                    json = JSON.stringify(documents)
                }
                console.log(json);
                res.end(json); 
        })
    });

    app.get("/flight/id=:id", (req,res) => {
        let id = req.params.id;
        console.log("Dans /flight/id="+id);
        if(/[0-9a-f]{24}/.test(id)) {
            db.collection("flightStore_2")
            .find({"_id": ObjectId(id)})
            .toArray((err, documents) => {
                let json =JSON.stringify({});
                if (documents !== undefined
                    && documents[0] !== undefined) {
                        json = JSON.stringify(documents[0])
                    }
                    res.end(json);
            });
        }
        else res.end(JSON.stringify({}));
    });

    app.delete("/flight/id=:id", (req,res) => {
        let id = req.params.id;
        if(/[0-9a-f]{24}/.test(id)) {
            db.collection("flightStore_2")
            .deleteOne({"_id": ObjectId(id)});
        }
        return res.status(201).end();
    })
})

function productResearch(db, param, callback) {
    db.collection("flightStore_2").find(param["filterObject"])
        .toArray((err, documents) => {
            if (err) callback(err, []);
            else if (documents !== undefined)
                callback(param["message"], documents);
            else callback(param["message"], []);
        });
}
