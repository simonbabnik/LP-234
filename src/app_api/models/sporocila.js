const mongoose = require('mongoose');

const sporocilaShema = new mongoose.Schema({
  id_posiljatelj: {type: String, required: true},
  id_prejemnik: {type: String, required: true},
  vsebina: {type: String, required: true},
  datumInCas: {type: Date, required: true},
})

mongoose.model('Sporocilo', sporocilaShema, 'Sporocila');
