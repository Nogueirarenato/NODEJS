var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
var name = require('url').parse(req.url, true).query.name;
if (name === undefined) name = 'world';
if (name == 'tucano') {
var file = 'tucano.jpg';
fs.stat(file, function (err, stat) {
if (err) {
console.error(err);
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end("Sorry, O tucano está voando... \n");
} else {
var img = fs.readFileSync(file);
res.contentType = 'image/png';
res.contentLength = stat.size;
res.end(img, 'binary');
}
});
} else {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello ' + name + '\n');
}
}).listen(8080);
console.log('Server running at port 8080/');