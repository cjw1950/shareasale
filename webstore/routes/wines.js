var express = require('express');
var cors = require('cors');
var router = express.Router();
var options={
    "origin": "*",
    "methods": "GET",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  router.get('/',cors(options),function(req,res,next){
      res.send("Wines route for now");
  });
  module.exports = router;