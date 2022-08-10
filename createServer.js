var http = require("http");
const userData = require('./userData')

const serverConfig = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(JSON.stringify(userData));
  res.end(); //end the response
};

http.createServer((req, res) => serverConfig(req, res)).listen(8080);
