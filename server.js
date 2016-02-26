var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Public')));

app.use('/api', function (req, res, next){
  var movies = [
    {title: 'Hobbit', year: 2012},
    {title: 'Star Wars: Episode IV - Return of the Jedi', year: 1983},
    {title: 'Pretty Woman', year: 1999},
    {title: 'Pirates of the Caribbean', year: 2005},
    {title: 'Scar Face', year: 1983},
    {title: 'Risky Business', year: 1983},
    ];
  res.json(movies);
});


var server = app.listen(3000);