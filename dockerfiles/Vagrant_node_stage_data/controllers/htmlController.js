//must install and use the body parser module to parse content in a post
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    
    app.get('/', function(req, res) {
        res.render('index');
    });

    //respond to the http method or 'verb'.
    app.get('/person/:id', function(req, res){
        //no need to put a content type as express does a best guess at that
        //id is stored in the url /:id so we can access it
        // res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet /></head><body><h1>Person: ' + 
        // req.params.id + '</h1></body></html>')
        
        //this version will use the view engine because we set it up, it will look for 'index' inside of the 'views' folder
        //assign it parameters and it will render then in the template.
        //store the query string if there is one in Qstr
        res.render('person', { ID: req.params.id , Qstr: req.query.qstr });

    });

    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });
}