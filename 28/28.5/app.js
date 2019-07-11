const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');
const cookieParser = require('cookie-parser');

const countriesRouter = require('./routes/countries');

const errorHandler = require('./middlewars/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(config.db, { useNewUrlParser: true, useCreateIndex: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Połaczone z mongo DB!');
});

// routes
app.use('/countries', countriesRouter);
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log('Uruchomiano na porcie: ', PORT);
});

module.exports = app;
