var fs = require('fs');
fs.readdir('./', function (err, files) {
    if (err) throw err;
    var list = files.join(" ")
    fs.writeFile('./fileList.txt', list, function (err) {
        if (err) throw err
    })
})
// drugi sposob
// var fs = require('fs');
// fs.readdir('./', function (err, files) {
//     if (err) throw err;
//     fs.writeFile('./fileList.txt', "", function (err) {
//         if (err) throw err
//     })
//     files.forEach((file) => {
//         fs.appendFile('./fileList.txt', file + " ", function (err) {
//             if (err) throw err;
//         });
//     })
// })