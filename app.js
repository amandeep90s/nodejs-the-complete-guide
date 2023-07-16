const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Custom-Header', 'test value');

  res.write('<html>');
  res.write('<head><title>My first nodejs page</title></head>');
  res.write('<body><h1>Hello from Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
