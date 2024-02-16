const mysql = require('mysql2');

exports.dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielistapp'
})

exports.dbConnection.connect();