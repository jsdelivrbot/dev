//requiring installed modules
//----------------------------------------------------//

//require function already knows to look for this in the modules folder
var moment = require('moment');

//display the date
console.log(moment().format());

//using express
//----------------------------------------------------//

var express = require('express');

//express() returns a function and stores it in app.
//calls the create server method like we did manually but maks things easier
var app = express();

//for using mysql
var mysql = require('mysql');

var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');

//use an environment variable to change the port # depending if it's deployed on a server or locally.
//express usually uses port 3000 so we can use that as a fallback if no env variable exists
var port = process.env.PORT || 3000;

//must indicate this to tell node where to look for the view engine if using one.
//by default it will look of for them in a folder called 'views'
app.set('view engine', 'ejs');

//using middleware (third party code between two layers of software) - express.static - serves up static content.
//maps the url /assets/img.jpg, etc. This will get referenced below...
app.use('/assets', express.static(__dirname + '/public'));

//we can make our own middleware
app.use('/', function(req, res, next) {
    //this will write it in the command line
    console.log('Request Url: ' + req.url);
    
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'ben',
        password: 'HY^&4^$#gdh',
        database: 'test3'
    });
    
    con.query('SELECT first_name, last_name, email FROM student',
        function(err, rows) {
            if(err) throw err;
            //console.log(rows[0].first_name);
            //to see how it returns a javascript array:
            console.log(rows);
            
        }
    );
    
    //this just makes it go to the next app.use
    next();
});


htmlController(app);

apiController(app);


// app.listen(port);
app.listen(3000, '127.0.0.1');
// and on the server:
// app.listen(8080, '10.137.32.58');