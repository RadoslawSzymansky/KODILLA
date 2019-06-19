const express = require('express');
const app = express();
const path = require('path');
const passportConfig = require('./passportConfig');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

passportConfig(app);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/auth/google', (req, res) => {
  res.render('userPanel');
});

app.get('/logged', function (req, res) {
  res.render('userPanel', { user: googleProfile.displayName });
});

app.listen(3000, () => {
  console.log('Uruchomiono na porcie ', 3000);
});