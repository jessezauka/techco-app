const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('✅ Hello from TechCo CI/CD Server! 2025!');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});