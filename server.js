const http = require('http');

const DEFAULT_PORT = 3000;
const PORT = Number(process.env.PORT) || DEFAULT_PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello World');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Try another port (e.g. PORT=3001 npm start).`);
    process.exit(1);
  }

  throw error;
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
