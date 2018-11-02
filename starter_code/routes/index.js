const express = require('express');

const router = express.Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((moviesFromDb) => {
      res.render('movies', { movies: moviesFromDb });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
