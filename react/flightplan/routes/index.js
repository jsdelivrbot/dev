var express = require('express');
var router  = express.Router();
const _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET other pages. */

//departures
router.get('/departures', function(req, res, next) {
  res.render('index');
});

//arivals
router.get('/arrivals', function(req, res, next) {
  res.render('index');
});

//The 404 Route (*ALWAYS Keep this as the last route)
router.get('*', function(req, res){

  // respond with html page
  if (req.accepts('html')) {
    res.status(404).render('404', { Url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');


});


module.exports = router;