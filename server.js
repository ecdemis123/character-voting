'use strict'
require('babel-register');
const swig = require('swig');
const React = require('react');
const ReactDom = require('react-dom/server');
const router = require('react-router');
var routes = require('./app/routes');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

let app = express();

app.set('port', process.env.port || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  Router.match({routes: routes})
})

app.listen(app.get('port'), () => {
  console.log('listening on port', app.get('port'));
})
