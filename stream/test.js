const http = require('http');

const HELLO = 'Hello!\n';

const server1 = http.createServer(function (req, res) {
  res.write(HELLO);
  res.end();
});

const server2 = http.createServer(function (req, res) {
  res.end(HELLO);
});

server1.listen(9001);
server2.listen(9002);