var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var computer= require('./routes/computer');
var battery = require('./routes/battery');
var wines  = require('./routes/wines');
var restaurants = require('./routes/restaurants');
var sports = require('./routes/sports');
var glasses = require('./routes/glasses')
// food
var fakeCigarette = require('./routes/fakeCigarette');
var fakeCigarette2 = require('./routes/fakeCigarette2');
var  caviar = require('./routes/caviar');
var  cubanfood = require('./routes/cubanfoodmarket'); 
var  juices = require('./routes/exoticjuices'); 
var  spices = require('./routes/foodspicecomplete');
var  gourmet = require('./routes/gourmat_food'); 
var  glutenfree = require('./routes/katzglutenfreebakedgoods');
var  survivalfood = require('./routes/survivalfood');
var  tea= require('./routes/teaanequipment'); 
var  weightloss = require('./routes/weightlossplan');
var  juicetanks = require('./routes/juicetanks');
//
var  asiantech  = require('./routes/asiancameraaccessories'); 
var  batterAccesories1 = require('./routes/batteryaccessories');                                              
var  batterAccesories2= require('./routes/batteryaccessories2');                                             
var  cable = require('./routes/cablesandaccerories'); 
var  cellphone = require('./routes/cellphones');  
var  chinesetech = require('./routes/chineseshopqs_electronic');  
var  computerAccesories = require('./routes/computeraccessories'); 
var  harddrives1 = require('./routes/harddrivescomputer');
var  harddrives2= require('./routes/hardrives');  
var  smartphone= require('./routes/smartphones');    
var  headphones= require('./routes/wirelessheadphones');
var  speakers = require('./routes/wirelessspeakers');
var  spy= require('./routes/spyingequipment'); 



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/battery',battery);
app.use('/computer',computer);
app.use('/wines',wines);
app.use('/glasses',glasses);
app.use('/sports',sports);
app.use('/restaurants',restaurants);
app.use('/wines',wines);
app.use('/fakeCigarette', fakeCigarette);
app.use('/fakeCigarette2', fakeCigarette2);
//grouping food
app.use('/caviar',caviar );
app.use('/cubanfood',cubanfood);
app.use('/juices',juices );
app.use('/spices', spices);
app.use('/gourmet ',gourmet);
app.use('/glutenfree', glutenfree);
app.use('/survivalfood ',survivalfood);
app.use('/tea',tea );
app.use('/weightloss',weightloss);
app.use('/juicetanks',juicetanks);
// //tech

app.use('/asiantech',asiantech );
app.use('/battery1',batterAccesories1 );
app.use('/battery2',batterAccesories1 );
app.use('/cable',cable );
app.use('/cellphone',cellphone );
app.use('/computerAccesories',computerAccesories  );
app.use('/chinesetech',chinesetech );
app.use('/harddrives1',harddrives1 );
app.use('/harddrives2',harddrives2 );
app.use('/smartphone',smartphone);
app.use('/headphones', headphones );
app.use('/speakers',speakers );
app.use('/spy',spy );



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
