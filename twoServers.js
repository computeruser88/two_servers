// Require/import the HTTP module
var http = require("http");

// Define two ports
var PORT1 = 7000;
var PORT2 = 7500;

// Create two functions
function handleRequest1(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You rock!!!");
}
function handleRequest2(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You suck!!!");
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(PORT1, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
});