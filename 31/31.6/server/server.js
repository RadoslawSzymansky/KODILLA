const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const sanitize = require('mongo-sanitize');
const helmet = require('helmet');
const loadTestData = require('./testData');

const app = express();

const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  req.body = sanitize(req.body);
  next();
});
app.use('/api', postRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

app.listen(config.PORT, function () {
  console.log('Server is running on Port:', config.PORT);
});



