'use strict';
var express = require('express');
var cors = require('cors');
var pool = require('../helper/ConnectionPool');
var router = express.Router();
var options={
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-methods": "GET",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  router.get('/',cors(options),function(req,res,next){
      
     
      pool.getConnection(function(err,connection){
    if(err) throw err; 
        connection.query("select * from gourmat_food",function(error,results,fields){
            if (error) throw error;
            var data=JSON.stringify(results);
            var s =JSON.parse(data)
            res.json(s);
            connection.release();
        }); 

    });
    
    
  });
  module.exports = router;