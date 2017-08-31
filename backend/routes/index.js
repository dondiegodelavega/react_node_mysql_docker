var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'database',
  user     : 'root',
  password : 'root',
  database : 'React'
});
 
connection.connect();
 
connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
