const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 5000;
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('server running at', server.address());
});
