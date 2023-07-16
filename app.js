const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Url', req.url);
  console.log('Method', req.method);
  console.log('Headers', req.headers);
  process.exit();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
