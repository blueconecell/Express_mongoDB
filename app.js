const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = require('./routes')(app)

var server = app.listen(port, function(){
    console.log("express 서버 시작됨. 포트 :"+port)
})