var express = require('express');
var router = express.Router();
const formidableMiddleware = require('express-formidable');

const jwt = require('express-jwt');
const avtentikacija = jwt({
  secret: process.env.JWT_GESLO,
  userProperty: 'payload',
  algorithms: ['HS256']
});

const ctrlAvtentikacija = require('../controllers/avtentikacija');
const ctrlUporabnik = require('../controllers/users');
const ctrlPsa = require('../controllers/dogs');
const ctrlOglas = require('../controllers/oglasi');
const ctrlPotrjevalec = require('../controllers/potrjevalec');

//login/register
router.post('/registracija', formidableMiddleware(), ctrlAvtentikacija.registracija);
router.post('/prijava', ctrlAvtentikacija.prijava);

//profile
router.get('/uporabniki', ctrlUporabnik.getUporabniki);
router.get('/uporabniki/:id', ctrlUporabnik.getUporabnik);
router.put('/uporabniki/:id',avtentikacija, ctrlUporabnik.updateUporabnik);
router.delete('/uporabniki/:id',avtentikacija, ctrlUporabnik.deleteUporabnik);

//Dog
router.get('/dogs', ctrlPsa.getDogs);
router.get('/dogs/:id',ctrlPsa.getDog)
router.post('/dogs/:idUporabnik', ctrlPsa.addDog)
router.put('/dogs/:id', ctrlPsa.updateDog)
router.delete('/dogs/:id', ctrlPsa.deleteDog)

//Dashboard
router.get('/dashboard', ctrlUporabnik.getUporabniki)
router.put('/dashboard/:idUporabnik', ctrlUporabnik.updateUporabnik)
router.delete('/dashboard/:idUporabnik', ctrlUporabnik.deleteUporabnik)

//oglasi
router.get('/zacetni-oglasi', ctrlOglas.zacetniOglasi);
router.get('/oglasi/:idOglasa', ctrlOglas.preberiOglas);
router.put('/oglasi/:idOglasa', ctrlOglas.posodobiOglas);
router.delete('/oglasi/:idOglasa', ctrlOglas.izbrisiOglas);
router.post('/oglasi', ctrlOglas.kreirajOglas);
router.get('/oglasi', ctrlOglas.seznamOglasov);
router.get('/oglasi/sortiraj/:kraj', ctrlOglas.sortirajPoKraj);
router.get('/sortiraj-oglase-ocena', ctrlOglas.sortirajPoOceni);

//verify
router.put('/potrdi/:id', ctrlPotrjevalec.potrdiUporabnik);
router.put('/zavrni/:id', ctrlPotrjevalec.zavrniUporabnik);
router.get('/zavrnjeni', ctrlPotrjevalec.getNoneVerified);

module.exports = router;
