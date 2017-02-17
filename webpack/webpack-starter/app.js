const express = require('express');
const path = require('path');

const app = express();

//** !add server routs here, importantly it must be above the webpack configuration
app.get('/hello', (req, res) => {
  res.send({hi: 'there'});
});

//using our webpack middleware if not in production
//if in production we just want to serve up the static dist folder directly
if(process.env.NODE_ENV !== 'production') {
  //set up our middle ware to enable webpack to work in a dev environment with
  //express.
  //webpackMiddleware serve incomin requests and hand them to webpack
  const webpackMiddleware = require ('webpack-dev-middleware');
  //compile all our application assets
  const webpack = require('webpack');
  //instructs webpack on how to run correctly
  const webpackConfig = require('./webpack.config.js');

  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  //for any page request, send back index.html
  //if using react router, this ensures browser history works correctly
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

}

//when deploying, server will likely define available port
//so we need to use process.env.PORT
app.listen(process.env.PORT || 3050, () => {
  console.log('listening');
})


