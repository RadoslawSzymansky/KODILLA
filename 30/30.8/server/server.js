const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', postRoutes);

mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('Connected to the database'));
db.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function () {
  console.log('Server is running on Port:', config.PORT);
});



