var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     :  3306,
    user     : 'root',
    password : 'mungyn1950',
    
    database : 'shareasale'
  });
connection.query("select * from  camera1  ",function(error,results,fields){
            if (error) throw error;
            var data=JSON.stringify(results);
            var s =JSON.parse(data);
            console.log(s);              
            
        }) ;
connection.end();