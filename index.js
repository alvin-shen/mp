var express = require('express');
var Q = require('q');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mongodb = require('mongodb');
var uri = 'mongodb://heroku_fs84g4kt:v3m887lst69f283idvcpjh32am@ds141082.mlab.com:41082/heroku_fs84g4kt';


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/bower_components/bootstrap/dist/js')); // Imagine putting all files under that directory into a imaginary /js folder
app.use('/js', express.static(__dirname + '/bower_components/jquery/dist'));
app.use('/js', express.static(__dirname + '/bower_components/angular'));
app.use('/js', express.static(__dirname + '/bower_components/angular-animate'));
app.use('/js', express.static(__dirname + '/bower_components/angular-resource'));
app.use('/js', express.static(__dirname + '/bower_components/angular-route'));
app.use('/css', express.static(__dirname + '/bower_components/bootstrap/dist/css'));

// app.all('/*', function(req, res, next) {
// 	res.render('pages/index');
// });

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});


app.get('/service/:urlParam1', function(request, response) {
    // Stubbed response
    response.json('Echo GET /service/urlParam1');

});

app.post('/service/:urlParam1', function(request, response) {
    var urlParam1 = request.params.urlParam1;
    var data = request.body;

    // Stubbed response
    response.json('Echo POST /service/urlParam1');

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


