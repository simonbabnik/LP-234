const mongoose = require('mongoose');

const psiShema = new mongoose.Schema({
    ime: {type: String, required: true},
    slika: {type: String, required: false},
    opis: {type: String, required: false},
    pasma: {type: String, required: true},
    ocene: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ocena'}],
    povprecnaOcena: {type: Number, required: false},
})

mongoose.model('Pes', psiShema, 'Psi');