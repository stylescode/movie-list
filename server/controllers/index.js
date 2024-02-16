const models = require('./models');

module.exports.movies = {
  get: (req, res) => {
    models.movies.retrieve((err, result) => {
      if(err) {
        // argument might need to be wrapped in object
        res.send(err);
      } else {
        res.status(200);
        res.send(result);
      }
    })
  },

  post: (req, res) => {
    // break apart movie info req object
    // make sure these values are right
    let movieTitle = req.body.title;
    let movieYear = req.body.released;
    let movieStatus = req.body.status;

    models.movies.create(movieTitle, movieYear, movieStatus, (err, result) => {
      if(err) {
        res.send(err);
      } else {
        res.status(201);
        // research what needs to be sent back in case of successful post request
        res.send(result);
      }
    })
  },

  put: (err, res) => {
    let movieTitle = req.body.title;
    let movieYear = req.body.released;
    let movieStatus = req.body.status;

    models.movies.modify(movieTitle, movieYear, movieStatus, (err, result) => {
      if(err) {
        res.send(err);
      } else {
        res.status(200);
        res.send(result);
      }
    })
  }


}