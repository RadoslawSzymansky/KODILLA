var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/hello') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.write('<h1>Hello World!</h1>');
        response.end();
    } else if (request.method === 'GET' && request.url === '/index.html') {
        fs.readFile('./index.html', "utf-8", function (err, res) {
            if (err) throw Error(err)
            response.write(res);
            response.end();
        })
    } else {
        response.statusCode = 404;
        fs.readFile('./404.jpg', function (err, data) {
            if (err) throw Error(err)
            response.setHeader('Content-Type', 'image/jpeg')
            response.write(data);
            response.end();
        })
    }
});

server.listen(8080);