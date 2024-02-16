const { dbConnection } = require('../db');

module.exports.movies = {

  retrieve: (callback) => {

    const getQuery = 'SELECT title, released, status FROM movies;'

    dbConnection.query(getQuery, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    })
  },

  create: (title, year, status, callback) => {

    const postQuery = `INSERT INTO movies (title, released, status)
                      VALUES ("${title}", "${year}", "${status}");`

    dbConnection.query(postQuery, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    })
  },

  modify: (title, year, status, callback) => {

    const putQuery = `UPDATE movies SET status = ${status}
                      WHERE title = ${title};`

    dbConnection.query(putQuery, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(res);
      }
    })
  }

}