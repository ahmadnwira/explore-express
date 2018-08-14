const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const routes = require('./routes');

module.exports = config => {
  const app = express();


  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(methodOverride('_method'))

  app.use('/', routes(config));
  app.get('/favicon.ico', (req, res) => {
    res.status(204);
  });
  app.get('/robots.txt', (req, res) => {
    res.status(204);
  });

  return app;
};