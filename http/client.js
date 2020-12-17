const http = require('http');

let options = {
    host: 'itbilu.com',
    method: 'GET',
    path: '/'
}

let req = http.request(options);
req.on('response', function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log('收到数据：%s', chunk);
    });
});

req.end();
