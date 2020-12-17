let net = require('net');

let client = net.connect({port: 8124}, function() {
  console.log('client connected');
  client.write('data from client~ \n');
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('client disconnected');
});

