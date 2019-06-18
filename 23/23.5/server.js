const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use('/store', function (req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/', (res, req) => {
  res.send('Hello world!');
});

app.get('/store', function (req, res, next) {
  res.send('Witaj w sklepie!');
});

app.use(function (req, res, next) {
  res.status(404).send('Page not found.');
});

app.listen(PORT, (req, res) => {
  console.log('Uruchomiono na porcie ', PORT);
});

