var http = require("http")
var PORT1 = 8000;
var PORT2 = 7000;

function handleGoodRequest(request, response){
    var userPort = request.headers.host
    console.log(userPort)
    response.end("You're so smart")

}

function handleBadRequest (request, response){
    var userport2 = request.headers.host
    console.log(userport2)
    response.end("You're an idiot")
}



var goodServer =  http.createServer(handleGoodRequest);
var badServer =  http.createServer(handleBadRequest)


goodServer.listen(PORT1,function(){
    console.log("Server listening on: http://localhost:", PORT1)
})

badServer.listen(PORT2,function(){
    console.log("Server listening on: http://localhost:", PORT2)
})