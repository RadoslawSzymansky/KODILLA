var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('404.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
const file = 'package.json';

