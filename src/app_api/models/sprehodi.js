const mongoose = require('mongoose');

const sprehodiShema = new mongoose.Schema({
  id_uporabnik: {type: String, required: true},
  id_pes: {type: String, required: true},
  datumInCasZacetka: {type: Date, required: true},
  datumInCasKonca: {type: Date, required: true},
})

mongoose.model('Sprehod', sprehodiShema, 'Sprehodi');
