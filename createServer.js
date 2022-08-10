var http = require("http");
var url = require("url");

const serverConfig = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Welcome to Node Js");
  res.end(); //end the response
};

http.createServer((req, res) => serverConfig(req, res)).listen(8080);
