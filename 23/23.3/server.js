const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
  fs.readFile('./test.json', 'utf8', function (err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});

app.post('/updateNote/:note', (req, res) => {
  const textToAdd = req.params.note;
  stringifyFile += textToAdd;

  fs.writeFile('./test.json', stringifyFile, function (err) {
    if(err) throw err;
    console.log('file updated');
  });

  res.send(stringifyFile);
});

app.use(function (req, res, next) {
  res.status(404).send('Page not found!')
});

const server = app.listen(3000, function () {
  console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});