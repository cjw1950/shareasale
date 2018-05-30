var pool = require('./helper/ConnectionPool');

   pool.getConnection(function(err,connection){
           connection.query('select * from battery',function(error,results,fields){
                if(error) throw error; 
                var c =JSON.stringify(results);
                console.log(c);
                connection.release();  
                
           });
   });
   
   
   
   
	  
         
   



