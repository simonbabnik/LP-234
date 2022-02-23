const passport = require('passport');
const mongoose = require('mongoose');
const Dog = mongoose.model('Pes');
const Uporabnik = mongoose.model('Uporabnik');

const getDogs = (req, res) => {
    query = {}
    Dog.find(query)
        .sort({update_at: -1})
        .exec(function (err, dogs) {
            if (err) {
                console.error(err);
                res.status(404).json({"sporočilo": "Napaka pri poizvedbi: " + err});
            } else {
                return res.status(200).json({
                    dogs: dogs
                });
            }
        })
}

const getDog = (req, res) => {
    var id = req.params.id;
    Dog.findById(id)
        .exec(function (err, dog) {
            if (err) {
                console.error(err);
                res.status(404).json({"sporočilo": "Napaka pri poizvedbi: " + err});
            } else {
                res.status(200).json(dog);
            }
        })
}

const addDog = (req, res) => {
    console.log("ADDING DOG...");
    var id = req.params.idUporabnik;
    Dog.create({
        ime: req.body.ime,
        slika: req.body.slika,
        pasma: req.body.pasma,
        opis: req.body.opis,
    }, (napaka, dog) => {
        if (napaka) {
            res.status(500).json(napaka);
        } else {

            Uporabnik
                .findById(id)
                .exec((napaka, uporabnik) => {
                    if (!uporabnik) {
                        return res.status(400).json({
                            "sporočilo":
                                "Ne najdem uporabnika s podanim id-jem."
                        });
                    } else if (napaka) {
                        return res.status(500).json(napaka);
                    }
                    const dogs = uporabnik.psi;
                    dogs.push(dog)
                    Uporabnik.findByIdAndUpdate(id,
                        {psi: dogs},
                        {new: true},
                        (napaka, uporabnik) => {
                            if (napaka) {
                                return res.status(500).send(napaka);
                            }
                            // return res.status(200).send(uporabnik);
                        })
                });
            res.status(201).json(dog);

        }
    });
}

const deleteDog = (req, res) => {
    Dog.findOneAndRemove({_id: req.params.id}, function (object, dog) {
        if (dog === false) {
            res.status(400).json({
                deletionName: "Dog with id not found"
            });
        } else if (object) {
            res.status(500).json(object);
        } else {
            res.status(200).json(dog);
        }
    });
}
const updateDog = (req, res) => {
    var id = req.params.id;

    Dog.findById(id).exec((err, dog) => {
        if (err || !dog) {
            res.status(404).json(err);
        } else {
            dog.ime = req.body.ime;
            dog.slika = req.body.slika;
            dog.pasma = req.body.pasma;
            dog.opis = req.body.opis;
        }
        dog.save((err, dog) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(dog);
            }
        });
    })
};
module.exports = {
    getDog,
    getDogs,
    addDog,
    deleteDog,
    updateDog
};