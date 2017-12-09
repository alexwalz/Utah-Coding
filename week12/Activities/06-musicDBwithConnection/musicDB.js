var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'musicDB',
  multipleStatements: true
});
 
connection.connect( function (err){
  if (err) throw err;
  console.log("Connected as id", connection.threadId )
  //selectAll()
  selectRock()
  //console.log(query.sql);  // TELLS YOU WHAT YOUR QUERY ADDRESS WAS
  connection.end();
});


function selectAll (){
  connection.query('SELECT  * FROM music', function (err, res) {
    if (err) throw err;
    console.log(res)
  });
}

function selectRap(){
  connection.query("SELECT title,artist,genre FROM music WHERE genre=?", ["Rap"], function (err, res) {
    if (err) throw err;
    console.log(res)
  });
}

function selectRock(){
  connection.query("SELECT title,artist,genre FROM music WHERE genre=?", ["Rock"], function (err, res) {
    if (err) throw err;
    console.log(res)
  });
}



 

 
