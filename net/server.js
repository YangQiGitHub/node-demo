let net = require('net');

let server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    socket.write('你好\n');
  });

  socket.on('end', function() {
    console.log('连接断开');
  });

  socket.write('this is a message from netServer:\n');
});

server.listen(8124, function() {
  console.log('server bound');
});
