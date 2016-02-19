var body_Parser = require('body-parser'); 
var path = require('path'); 
var express = require('express'); 
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var app = express(); 
app.use(body_Parser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

var operations = require('./DAL/ContactDominProcess.js');

var communicationPort = 8080;

app.get('/ContactList/api/Contact', operations.getDetails);

app.post('/ContactList/api/Contact', operations.addDetails);

app.put('/ContactList/api/Contact', operations.deleteDetails);

app.listen(communicationPort);

