const api = require('./api');

const server = require('http').createServer(api);
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
});

const sockets = require('./sockets');

const PORT = 3000;

server.listen(PORT);
console.log(`Listening on port ${PORT}....`);

sockets.listen(io);
