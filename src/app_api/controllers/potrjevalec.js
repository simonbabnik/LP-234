const mongoose = require('mongoose');
const Uporabnik = mongoose.model('Uporabnik');
const getNoneVerified = (req, res) => {

    Uporabnik
        .find({potrjen: {$ne: "verified"}}, (napaka, oglase) => {
            if(napaka){
                res.status(500).json(napaka);
            }
            res.status(200).json(oglase);
        })
}
const potrdiUporabnik = (req, res) => {
    var id = req.params.id;

    Uporabnik.findById(id).exec((err, uporabnik) => {
        if (err || !uporabnik) {
            res.status(404).json(err);
        } else {
            // uporabnik.ime = req.body.ime;
            // uporabnik.priimek = req.body.priimek;
            // uporabnik.email = req.body.email;
            // uporabnik.geslo = Uporabnik.nastaviGeslo(req.body.geslo);
            // uporabnik.slikaProfila = req.body.slikaProfila;
            // uporabnik.slikaDokumenta = req.body.slikaDokumenta;
            // uporabnik.tipRacuna = req.body.tipRacuna;
            uporabnik.potrjen = "verified";
            // uporabnik.datumRojstva = req.body.datumRojstva;
            // uporabnik.tipRacuna = req.body.tipRacuna;
            // uporabnik.opis = req.body.opis;
            // uporabnik.psi = req.body.psi;
        }
        uporabnik.save((err, uporabnik) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(uporabnik);
            }
        });
    })
}
const zavrniUporabnik = (req, res) => {
    var id = req.params.id;

    Uporabnik.findById(id).exec((err, uporabnik) => {
        if (err || !uporabnik) {
            res.status(404).json(err);
        } else {
            // uporabnik.ime = req.body.ime;
            // uporabnik.priimek = req.body.priimek;
            // uporabnik.email = req.body.email;
            // uporabnik.geslo = Uporabnik.nastaviGeslo(req.body.geslo);
            // uporabnik.slikaProfila = req.body.slikaProfila;
            // uporabnik.slikaDokumenta = req.body.slikaDokumenta;
            // uporabnik.tipRacuna = req.body.tipRacuna;
            uporabnik.potrjen = "denied";
            // uporabnik.datumRojstva = req.body.datumRojstva;
            // uporabnik.tipRacuna = req.body.tipRacuna;
            // uporabnik.opis = req.body.opis;
            // uporabnik.psi = req.body.psi;
        }
        uporabnik.save((err, uporabnik) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(uporabnik);
            }
        });
    })
}
module.exports = {
    getNoneVerified,
    potrdiUporabnik,
    zavrniUporabnik
};
