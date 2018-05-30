var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10000,
  host            : '127.0.0.1',
  port            : 3306,	
  user            : 'root',
  password        : 'mungyn1950',
  database        : 'shareasale',
  queueLimit      : 5000
});
module.exports =  pool;
