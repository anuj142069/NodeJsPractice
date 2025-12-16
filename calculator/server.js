const http = require('http');

const { calRequestHandler } = require('./handler');

const server = http.createServer(calRequestHandler);

const PORT = 3002;

server.listen(PORT , () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})