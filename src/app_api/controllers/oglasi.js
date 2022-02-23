const mongoose = require('mongoose');
const Oglas = mongoose.model('Oglas');
const atob = require('atob');

const zacetniOglasi = (req, res) => {
    console.log("API");
    var json = require('../models/podatki-oglasi.json');
    console.log(json);
    var neki = mongoose.connection.db.collection('Oglasi')
    neki.insertMany(json, function(err,result) {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    });
} 

const brisiOglase = (req, res) => {
        mongoose.connection.db.dropCollection('Oglasi', function(err, result) {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            } else {
                console.log(result);
                res.status(200).json(result);
            }
        });
}

const seznamOglasov = (req, res) => {
    Oglas
        .find({}, (napaka, oglasi) => {
            if(napaka){
                res.status(500).json(napaka);
            }
            res.status(200).json(oglasi);
        })
};

const kreirajOglas = (req, res) => {
    var zeton = req.headers.authorization;
    const {_id, email, ime, priimek, admin, tipRacuna } = JSON.parse(atob(zeton.split('.')[1]));
    if(tipRacuna == "admin" || tipRacuna == "sprehajalec") {
        Oglas.create({
            id_uporabnik: _id,
            naziv: req.body.naziv,
            cena: parseFloat(req.body.cena),
            kraj: req.body.kraj,
            opis: req.body.opis
        }, (napaka, oglas) => {
            if(napaka){
                res.status(500).json(napaka);
            } else{
                res.status(201).json(oglas);
            }
        });
    }else {
        res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
    }
};

const posodobiOglas = (req, res) => {
    var zeton = req.headers.authorization;
    const {_id, email, ime, priimek, admin, tipRacuna } = JSON.parse(atob(zeton.split('.')[1]));
    if(tipRacuna == "admin" || tipRacuna == "sprehajalec") {
        if (!req.params.idOglasa) {
            return res.status(404).json({
                "sporočilo": 
                "Ne najdem oglasa."
            });
        }
        Oglas
        .findById(req.params.idOglasa)
        .exec((napaka, oglas) => {
            if(!oglas){
                return res.status(400).json({
                    "sporočilo":
                    "Ne najdem oglasa s podanim id-jem."
                });
            } else if (napaka) {
                return res.status(500).json(napaka);
            }
            if (oglas.id_uporabnik != _id && tipRacuna != "admin") {
                return res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
            }
            Oglas.findByIdAndUpdate(
                req.params.idOglasa,
                {naziv: req.body.naziv,
                    cena: parseFloat(req.body.cena),
                    kraj: req.body.kraj,
                opis: req.body.opis},
                {new: true},
                (napaka, oglas) => {
                    if (napaka) {
                        return res.status(500).send(napaka);
                    }
                    return res.status(200).send(oglas);
                }
            );
        });
    }else {
        res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
    }
};

const preberiOglas = (req, res) => {
    Oglas
        .findById(req.params.idOglasa)
        .exec((napaka, oglas) => {
            if(!oglas){
                return res.status(400).json({
                    "sporočilo":
                        "Ne najdem oglasa s podanim id-jem."
                });
            } else if (napaka) {
                return res.status(500).json(napaka);
            }
            res.status(200).json(oglas);
        });
};

const izbrisiOglas = (req, res) => {
    var zeton = req.headers.authorization;
    const {_id, email, ime, priimek, admin, tipRacuna} = JSON.parse(atob(zeton.split('.')[1]));
    if(tipRacuna == "admin" || tipRacuna == "sprehajalec") { 
        const idOglasa = req.params.idOglasa;
        if(idOglasa){
            Oglas
            .findById(req.params.idOglasa)
            .exec((napaka, oglas) => {
                if(!oglas){
                    return res.status(400).json({
                        "sporočilo":
                        "Ne najdem oglasa s podanim id-jem."
                    });
                } else if (napaka) {
                    return res.status(500).json(napaka);
                }
                if (oglas.id_uporabnik != _id && tipRacuna != "admin") {
                    return res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
                }
                Oglas
                    .findByIdAndRemove(idOglasa)
                    .exec((napaka) => {
                        if(napaka){
                            return res.status(500).json(napaka);
                        }
                        res.status(204).json(null);
                    });
            });
            
        } else {
            res.status(404).json({
            "sporočilo": 
                "Ne najdem oglasa, idOglasa je obvezen parameter."
            });
        }
    }else {
        res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
    }
};


const sortirajPoKraj = (req, res) => {
    console.log(req.params.kraj)
    Oglas
        .find({kraj: req.params.kraj}, (napaka, oglase) => {
            if(napaka){
                res.status(500).json(napaka);
            }
            res.status(200).json(oglase);
        })
};

const sortirajPoOceni = (req, res) => {
    Oglas
        .find({}, (napaka, oglasi) => {
            if(napaka){
                res.status(500).json(napaka);
            }
            oglasi.sort(function(a,b) {
                return parseFloat(b.ocena) - parseFloat(a.ocena);
            });
            res.status(200).json(oglasi);
        })
}


module.exports = {
    seznamOglasov,
    preberiOglas,
    zacetniOglasi,
    brisiOglase,
    kreirajOglas,
    posodobiOglas,
    izbrisiOglas,
    sortirajPoKraj,
    sortirajPoOceni
}