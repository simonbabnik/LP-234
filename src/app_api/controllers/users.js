const passport = require('passport');
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('Uporabnik');

const getUporabniki = (req, res) => {
    query = {}
    Uporabnik.find(query)
        .sort({update_at: -1})
        .exec(function (err, uporabniki) {
            if (err) {
                console.error(err);
                res.status(404).json({"sporočilo": "Napaka pri poizvedbi: " + err});
            } else {
                return res.status(200).json({
                    uporabniki: uporabniki
                });
            }
        })
}

const getUporabnik = (req, res) => {
    var id = req.params.id;
    Uporabnik.findById(id)
        .exec(function (err, list) {
            if (err) {
                console.error(err);
                res.status(404).json({"sporočilo": "Napaka pri poizvedbi: " + err});
            } else {
                res.status(200).json(list);
            }
        })
}

const updateUporabnik = (req, res) => {
    var id = req.params.id;

    Uporabnik.findById(id).exec((err, uporabnik) => {
        if (err || !uporabnik) {
            res.status(404).json(err);
        } else {
            uporabnik.ime = req.body.ime;
            uporabnik.priimek = req.body.priimek;
            uporabnik.email = req.body.email;
            // uporabnik.geslo = Uporabnik.nastaviGeslo(req.body.geslo);
            uporabnik.slikaProfila = req.body.slikaProfila;
            uporabnik.slikaDokumenta = req.body.slikaDokumenta;
            uporabnik.tipRacuna = req.body.tipRacuna;
            uporabnik.potrjen = req.body.potrjen;
            uporabnik.datumRojstva = req.body.datumRojstva;
            uporabnik.tipRacuna = req.body.tipRacuna;
            uporabnik.opis = req.body.opis;
            uporabnik.psi = req.body.psi;
        }
        uporabnik.save((err, uporabnik) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(uporabnik);
            }
        });
    })
};

const updateUporabnikV2 = (req, res) => {
    var zeton = req.headers.authorization;
    const {_id, email, ime, priimek, admin, tipRacuna} = JSON.parse(atob(zeton.split('.')[1]));
    if (tipRacuna === "admin"){
        Uporabnik
            .findById(req.params.idUporabnik)
            .exec((napaka, uporabnik) => {
                if (!uporabnik) {
                    return res.status(400).json({
                        "sporočilo":
                            "Ne najdem uporabnik s podanim id-jem."
                    });
                } else if (napaka) {
                    return res.status(500).json(napaka);
                }
                if (tipRacuna === "admin") {
                    // return res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
                    Uporabnik.findByIdAndUpdate(
                        req.params.idUporabnik,
                        {
                            ime: req.body.ime,
                            priimek: req.body.priimek,
                            email: req.body.email,
                            // geslo: Uporabnik.nastaviGeslo(req.body.geslo);
                            slikaProfila: req.body.slikaProfila,
                            slikaDokumenta: req.body.slikaDokumenta,
                            tipRacuna: req.body.tipRacuna,
                            datumRojstva: req.body.datumRojstva,
                            opis: req.body.opis,
                            psi: req.body.psi,
                        },
                        {new: true},
                        (napaka, uporabnik) => {
                            if (napaka) {
                                return res.status(500).send(napaka);
                            }
                            return res.status(200).send(uporabnik);
                        }
                    );
                } else if (tipRacuna === "sprehajalec") {
                    Uporabnik.findByIdAndUpdate(
                        req.params.idUporabnik,
                        {
                            ime: req.body.ime,
                            priimek: req.body.priimek,
                            email: req.body.email,
                            slikaProfila: req.body.slikaProfila,
                            slikaDokumenta: req.body.slikaDokumenta,
                            datumRojstva: req.body.datumRojstva,
                            opis: req.body.opis,
                        },
                        {new: true},
                        (napaka, uporabnik) => {
                            if (napaka) {
                                return res.status(500).send(napaka);
                            }
                            return res.status(200).send(uporabnik);
                        }
                    );
                } else if (tipRacuna === "lastnik") {
                    Uporabnik.findByIdAndUpdate(
                        req.params.idUporabnik,
                        {
                            ime: req.body.ime,
                            priimek: req.body.priimek,
                            email: req.body.email,
                            // geslo: Uporabnik.nastaviGeslo(req.body.geslo);
                            slikaProfila: req.body.slikaProfila,
                            slikaDokumenta: req.body.slikaDokumenta,
                            datumRojstva: req.body.datumRojstva,
                            opis: req.body.opis,
                            psi: req.body.psi,
                        },
                        {new: true},
                        (napaka, uporabnik) => {
                            if (napaka) {
                                return res.status(500).send(napaka);
                            }
                            return res.status(200).send(uporabnik);
                        }
                    );
                }
            });
    } else {
        res.status(401).json({"sporočilo": "Uporabnik nima dostopa do tega klica!"})
    }
};


const deleteUporabnik = (req, res) => {
    Uporabnik.findOneAndRemove({_id: req.params.idUporabnik}, function (object, uporabnik) {
        if (uporabnik === false) {
            res.status(400).json({
                deletionName: "uporabnik with id not found"
            });
        } else if (object) {
            res.status(500).json(object);
        } else {
            res.status(200).json(uporabnik);
        }
    });
}

module.exports = {
    getUporabniki,
    getUporabnik,
    updateUporabnik,
    deleteUporabnik,
    updateUporabnikV2
};