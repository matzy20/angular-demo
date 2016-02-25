var express = require('express');
var path = require('path');
var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static(path.resolve(__dirname, 'Public')));


var server = app.listen(3000);