
const express = require('express');
const Country = require('../models/Country');

const router = express.Router();

// @ GET route /countries - get all countries
router.get('/', (req, res, next) => {
  Country.find((err, countries) => {
    if (err) return next(err);

    res.json(countries);
  })
});


// @ GET route /countries/:id - get all countries
router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  Country.findOne({ id }, (err, country) => {
    if (err) return next(err);

    res.json(country);
  })
});

// @ POST route /countries  - add new country
router.post('/', (req, res, next) => {
  const body = req.body;

  const product = new Country(body);

  product.save(err => {
    if (err) {
      next(err);
    } else {
      res.send(product);
    };
  });
});

// @ DELETE route /countries/:id - get all countries
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  Country.findOneAndDelete({ id }, (err, country) => {
    if (err) return next(err);
    console.log("usunieto")
    res.send().status(200);
  });
});

module.exports = router;
