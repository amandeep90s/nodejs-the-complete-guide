const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Users list</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to users app</h1>');
    res.write(
      '<form method="POST" action="/create-user"><input type="text" name="username" /> <button type="submit">Save</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (url === '/users' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Users list</title></head>');
    res.write(
      '<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  } else if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
};

module.exports = requestHandler;
