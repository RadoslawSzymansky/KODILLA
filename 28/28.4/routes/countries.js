
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

module.exports = router;
