var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Public')));

app.use('/api', function (req, res, next){
  var movies = [
    {title: 'Hobbit'},
    {title: 'Star Wars'},
    {title: 'Pretty Woman'},
    {title: 'Pirates of the Caribbean'},
    ];
  res.json(movies);
});


var server = app.listen(3000);