'use strict';
var express = require('express');
var cors = require('cors');
var pool = require('../helper/ConnectionPool');
var router = express.Router();
var options={
    "origin": "*",
    "methods": "GET",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  router.get('/',cors(options),function(req,res,next){
      pool.getConnection(function(err,connection){
    if(err) throw err; 
        connection.query("select * from battery",function(error,results,fields){
            if (error) throw error;
            var data=JSON.stringify(results);
            res.send(data);
            connection.release();
        }); 

    });
    
    
    
  });
  module.exports = router;