const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
var uniqueValidator = require('mongoose-unique-validator')

const uporabnikiShema = new mongoose.Schema({
    ime: {type: String, required: true},
    priimek: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    datumRojstva: {type: Date, required: true},
    zgoscenaVrednost: {type: String, required: true},
    nakljucnaVrednost: {type: String, required: true},
    slikaProfila: {type: String, required: false},
    slikaDokumenta: {type: String, required: true},
    tipRacuna: {type: String, required: true},
    ocene: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ocena'}],
    povprecnaOcena: {type: Number, required: false},
    opis: {type: String, required: false},
    potrjen:{type: String, default: "pending", required: false},
    psi: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pes'}]
});

const oceneShema = new mongoose.Schema({
    id_uporabnik: {type: String, required: true},
    komentar: {type: String, required: false},
    ocena: {type: Number, min: 0, max: 5, required: true},
    datum: {type: Date, "default": Date.now, required: true}
})

uporabnikiShema.methods.nastaviGeslo = function(geslo) {
    this.nakljucnaVrednost = crypto.randomBytes(16).toString('hex');
    this.zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, 'sha512')
      .toString('hex');
};

uporabnikiShema.methods.preveriGeslo = function(geslo) {
    let zgoscenaVrednost = crypto
      .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, 'sha512')
      .toString('hex');
    return this.zgoscenaVrednost == zgoscenaVrednost;
};

uporabnikiShema.methods.generirajJwt = function() {
    const datumPoteka = new Date();
    datumPoteka.setDate(datumPoteka.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      ime: this.ime,
      priimek: this.priimek,
      admin: this.admin,
      tipRacuna: this.tipRacuna,
      exp: parseInt(datumPoteka.getTime() / 1000, 10)
    }, process.env.JWT_GESLO);
};

uporabnikiShema.plugin(uniqueValidator)
mongoose.model('Uporabnik', uporabnikiShema, 'Uporabniki');
mongoose.model('Ocena', oceneShema, 'Ocene');
