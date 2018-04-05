var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10000,
  host            : 'example.org',
  user            : 'bob',
  password        : 'mungyn1950',
  database        : 'shareasale',
  queueLimit      : 5000
});
module.export = pool;