const express = require('express');
const app = express();
const ejs = require('ejs');
const morgan = require('morgan');
const router = require('../routes/router');

//use middleware to set payload and url encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware for logging
app.use(morgan('dev'));

//ejs middleware to set the template and the engine
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);

//declare static file locations
app.use(express.static('view'));
app.use(express.static('public'));

//use middleware to set router
app.use('/', router);

module.exports = app;
