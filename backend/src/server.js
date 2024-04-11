const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 5000;

let server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is runnning on port ${PORT} ...`);
});
