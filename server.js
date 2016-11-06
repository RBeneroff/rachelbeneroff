var express        = require('express'),
    app            = express();
var path           = require('path');
var favicon = require('serve-favicon');
// var bootstrap      = require('bootstrap');

app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(__dirname + '/favicon.ico'));

app.use('/scripts', express.static(__dirname + '/bower_components'));


app.get('/', function(req, res) {
  res.render('index');
});

app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(process.env.PORT || 3000, function() {
console.log('I HERE ---> 3000');
});
