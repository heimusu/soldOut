var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'testUser',
    //password: 'pass',
    database: 'test'
});

connection.connect(function(err){
    if(err){
        console.log('Error connecting to DB');
        return ;
    }
});

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('index', {title: 'Express Sample'});
});

app.listen('3000');


