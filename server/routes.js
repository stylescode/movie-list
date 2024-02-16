const controller = require('./controllers');

// research more on how this works
const router = require('express').Router();

router.get('/movies', controller.movies.get);

router.post('/movies', controller.movies.post);

router.put('/movies', controller.movies.put);