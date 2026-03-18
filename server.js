const http = require('http');

const PORT = Number(process.env.PORT) || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello World2');
  })
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
