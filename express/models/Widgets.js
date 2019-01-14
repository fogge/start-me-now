const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const widgetsSchema = new Schema({
  user: {
    type: String
  },
  spotify: {
    content: String,
    position: {
      type: Number
    }
  },
  news: {
    content: String,
    position: {
      type: Number
    }
  },
  facebook: {
    content: String,
    position: {
      type: Number
    }
  },
  twitter: {
    content: String,
    position: {
      type: Number
    }
  },
  calender: {
    content: [String],
    position: {
      type: Number
    }
  },
  quicknotes: {
    content: String,
    position: {
      type: Number
    }
  },
  background: {
    type: String
  }
});

module.exports = mongoose.model('Widgets', widgetsSchema);