const passport = require('passport');
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('Uporabnik');

const regName = new RegExp ('^[a-zA-Z]+$');
const regEmail = new RegExp ('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$');
const regPsw = new RegExp ('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');

const registracija = (req, res) => {
    req.body = req.fields; // Quick "fix" for multipart/form-data
    if (!req.body.ime || !req.body.email || !req.body.geslo || !req.body.priimek) {
      return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }
    if (!regName.test(req.body.ime)) {
      return res.status(400).json({"sporočilo": "Ime ni ustrezen"});
    }
    if (!regName.test(req.body.priimek)) {
      return res.status(400).json({"sporočilo": "Priimek ni ustrezen"});
    }
    if (!regEmail.test(req.body.email)) {
      return res.status(400).json({"sporočilo": "Email ni ustrezen"});
    }
    if (!regPsw.test(req.body.geslo)) {
      return res.status(400).json({"sporočilo": "Password ni ustrezen"});
    }
    const uporabnik = new Uporabnik();
    uporabnik.ime = req.body.ime;
    uporabnik.priimek = req.body.priimek;
    uporabnik.email = req.body.email;
    uporabnik.nastaviGeslo(req.body.geslo);
    uporabnik.slikaProfila = req.body.slika_profila;
    uporabnik.slikaDokumenta = req.body.slika_dokumenta;
    uporabnik.tipRacuna = req.body.tip_racuna;
    uporabnik.datumRojstva = req.body.datumRojstva;
    uporabnik.save(napaka => {
      if (napaka) {
        if (napaka.name == "MongoError" && napaka.code == 11000) {
          res.status(409).json({"sporočilo": "Nekaj je šlo narobe! :("});
        }
        /* if (napaka.name == "ValidationError") {
            res.status(409).json({"sporočilo": "Uporabnik s tem elektronskim naslovom je že registriran"});
        }  */
        else {
          res.status(500).json(napaka);
        }
      } else {
        res.status(200).json({"žeton": uporabnik.generirajJwt()});
      }
    });
  };

  const prijava = (req, res) => {
    if (!req.body.email || !req.body.geslo) {
      return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }
    passport.authenticate('local', (napaka, uporabnik, informacije) => {
      if (napaka)
        return res.status(500).json(napaka);
      if (uporabnik) {
        res.status(200).json({"žeton": uporabnik.generirajJwt()});
      } else {
        res.status(401).json(informacije);
      }
    })(req, res);
  };
  
  module.exports = {
    registracija,
    prijava
  };
