var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Country = new Schema({
  name: { type: String },
  currency: { type: String },
  populace: { type: String },
  capital: { type: String },
  continent: { type: String },
  imageUrl: { type: String },
  id: { type: Number },
});

module.exports = mongoose.model('countries', Country);
