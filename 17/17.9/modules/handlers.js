var fs = require('fs');

var formidable = require('formidable');
let lastpng = ""
exports.upload = function (request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function (error, fields, files) {
        fs.renameSync(files.upload.path, files.upload.name);
        lastpng = `${files.upload.name}`
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}
exports.sendStyles = function (request, response) {
    fs.readFile('templates/style.css', function (err, css) {
        if (err) throw err
        response.writeHead(200, {
            "Content-Type": "text/css"
        });
        response.write(css);
        response.end();
    });
}

exports.welcome = function (request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function (err, html) {
        response.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        response.write(html);
        response.end();
    });


}


exports.show = function (request, response) {
    fs.readFile(lastpng, "binary", function (error, file) {
        if (error) throw error
        response.writeHead(200, {
            "Content-Type": "image/png"
        });
        response.write(file, "binary");
        response.end();
    });
}
exports.error = function (request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 :(");
    response.end();
}