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

    console.log('Success connecting to DB');
});


app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    connection.query('SELECT * FROM accounts', function(err, rows){
        if(err){
            throw err;
        }
        console.log('Data received from Db:¥n');
        console.log(rows);
        var user_name = rows[0].user_name;
        //res.render('index', {title: 'Express Sample', userData: rows});
        res.render('index', {userData: rows});
    });
    res.render('index', {title: 'Express Sample'});
});

app.listen('3000');
