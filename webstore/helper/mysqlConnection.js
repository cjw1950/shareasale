var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3306,
  user     : 'root',
  password : 'mungyn1950',
  database : 'shareasale'
});
module.export= connection;