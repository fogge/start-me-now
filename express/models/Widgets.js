const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const widgetsSchema = new Schema({
  user: {
    type: String
  },
  spotify: {
    type: String
  },
  news: {
    type: String
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  calender: {
    type: [String]
  },
  quicknotes: {
    type: String
  }
});

module.exports = mongoose.model('Widgets', widgetsSchema);