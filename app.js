// load the things we need
'use strict';
const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');

global.SERVER_PORT = 8080;
const port = Number(process.env.PORT || SERVER_PORT);

const app = express();
const root = __dirname.replace(`\\`, '/');
app.set('view engine', 'ejs')
  .set('views', __dirname + '/src/views')
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json());

// index page
app.get('/', function(req, res) {
    res.render('index');
});

const server = app.listen(port, function () {
    console.log(`      Server` + ` listening on port `.gray + `${port}`.cyan + ` ...`.gray);
});
