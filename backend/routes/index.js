var express = require('express');
var router = express.Router();

var sql = require('mssql');

var dbConfig = {
  server: "london",
  database: "PixraySeekerDB_HM",
  user: "PixraySeeker",
  password: "PixraySeeker",
  port: "1433"
};


function getData(){
  var conn = new sql.ConnectionPool(dbConfig);
  var req = new sql.Request(conn);

  conn.connect(function(err){
    if(err){
      console.log(err);
      return;
    }

    req.query("SELECT * FROM UserRole", function(err, recordset){
      if(err){
        console.log(err);
      }else{
        console.log(recordset);
      }
      conn.close();
    });
  });
}

getData();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
