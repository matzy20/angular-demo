var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'Public')));

app.use('/api', function (req, res, next){
  var movies = [
    {title: 'Hobbit'},
    {title: 'Star Wars: Episode IV - Return of the Jedi', year: 1983},
    {title: 'Pretty Woman'},
    {title: 'Pirates of the Caribbean'},
    {title: 'Scar Face', year: 1983},
    {title: 'Risky Business', year: 1983},
    ];
  res.json(movies);
});


var server = app.listen(3000);