var http = require("http");
var port = process.env.PORT || 8080;

var server = http.createServer(function(request, response) {
    
    var ip = request.headers["x-forwarded-for"];
    var language = request.headers["accept-language"].split(",")[0];
    var OS = request.headers["user-agent"].match(/\((.+?)\)/)[1];
    
    var json = {"ip address": ip, "language": language ,"Operating System": OS};
    
    response.end(JSON.stringify(json));
});

server.listen(port);