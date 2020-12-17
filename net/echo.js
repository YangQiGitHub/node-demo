let net = require('net');

let server = net.createServer(function(socket) {
  socket.write('Echo server\n');
  socket.pipe(socket);
});

server.listen(8124, function() {
  console.log('server bound');
});
