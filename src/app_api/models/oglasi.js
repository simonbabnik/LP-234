const mongoose = require('mongoose');

const oglasiShema = new mongoose.Schema({
  id_uporabnik: {type: String, required: true},
  naziv: {type: String, required: true},
  cena: {type: Number, required: true},
  kraj: {type: String, required: true},
  opis: {type: String, required: true},
  ocena: {type: Number, required: false}
})

mongoose.model('Oglas', oglasiShema, 'Oglasi');
