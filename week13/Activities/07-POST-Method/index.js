var http = require("http");
var fs = require("fs");

var PORT = 9071;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  var path = req.url;
  var urlPath = path +".html"

  var requestData = "";

    req.on("data", function(data) {
      requestData += data;
    });
  
    req.on("end", function() {
    var email = 
      console.log("You did a", req.method, "with the data:\n", requestData);
      res.end();

    });


  switch (path) {

    case "/":
    fs.readFile(__dirname + "/index.html", function(err, data) {
      
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
    return;
   
    default:
      return display404(path, req, res);
  }

}

server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});




function display404(url, req, res) {
      var myHTML =  "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";
    
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(myHTML);
    }

function gatherData (){
    $("#data").on("click",function(){})
}
    