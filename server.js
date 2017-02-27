var express = require('express');

var app = express();

//blocks info about server for security
app.disable('x-powered-by'); 

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//MORE IMPORTS HERE

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


//home route
app.get('/', function(req, res){
	res.render('home');
});

//games route
app.get('/games', function(req, res){
	res.render('games');
});


//characters route
app.get('/characters', function(req, res){
	res.render('characters');
});


//maps route
app.get('/maps', function(req, res){
	res.render('maps');
});



app.use(function(req, res){
	res.type('text/html');
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});



app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});
