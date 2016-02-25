var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Public')));


var server = app.listen(3000);