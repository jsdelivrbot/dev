var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var routes = require('./routes/index');
var favicon = require('serve-favicon');
const debug = require('debug')('app');
const _ = require('lodash');

// global settings
var env  = process.env.NODE_ENV || "development";
var config  = require(__dirname + '/config.json')[env];

//express() returns a function and stores it in app.
var app = express();

//use an environment variable to change the port # depending if it's deployed on a server or locally.
//express usually uses port 3000 so we can use that as a fallback if no env variable exists
var port = process.env.PORT || 3000;

//by default it will look of for views in a folder called 'views' but explicly set here
app.set('views', __dirname + '/views');

//specify the view engine (for templating pages).
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// this line must be immediately after express.bodyParser()!
//app.use(expressValidator([options]));
app.use(expressValidator());
// app.use(cookieParser());
//using middleware (third party code between two layers of software) - express.static - serves up static content.
//maps the url /assets/img.jpg, etc. This will get referenced below...
app.use('/public', express.static(__dirname + '/public'));

//favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

//routes
//app.use('/admin-react', adminReact);
app.use('/', routes);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.set('port', process.env.PORT || 3000);

//else models.sequelize won't work, just serve up static
var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
  debug('Express server listening on port ' + server.address().port);
});

//print out node env.
console.log("NODE_ENV : ", process.env.NODE_ENV);
console.log("process.env.PORT: ", process.env.PORT);
console.log("server.address().port: ", server.address().port);