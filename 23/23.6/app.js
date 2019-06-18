const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/auth/google', (req, res) => {
  res.render('userPanel');
});

app.listen(3000, () => {
  console.log('Uruchomiono na porcie ', 3000);
});