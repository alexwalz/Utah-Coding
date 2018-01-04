var express = require('express')
var app = express()
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seinfeld_db'
});

connection.connect();


app.get('/', function (req, res) {
    connection.query('CREATE TABLE IF NOT EXISTS actors(id int primary key AUTO_INCREMENT, name varchar(255), coolness_points int, attitude varchar(255))', function (err, result) {
        if (err) throw err
    })
    res.send('Hello World')
})

app.get("/cast", function (req, res) {
    connection.query('SELECT * FROM actors', function (err, result) {
        if (err) throw err
        if (err) throw err
        var html = "<h1>Seinfeld Stuff!</h1>";
        html += "<ul>";
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p></li>";
            html += "<p>Name: " + result[i].coolness_points + " </p></li>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }
        html += "</ul>";
        res.send(html);
    })
});

app.get("/coolness-chart", function (req, res) {
    connection.query('SELECT * FROM actors order by coolness_points DESC', function (err, results) {
        if (err) throw err

    })
});

app.get("/attitude-chart/:att", function (req, res) {
    connection.query('SELECT * FROM actors', function (err, results) {
        if (err) throw err
        return res.json(results);
    })
});



app.listen(3000)

