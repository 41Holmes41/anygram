var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var messageSchema= new Schema({
  subject: String,
  content: String,
  type: String,
  topic: String
});

module.exports = mongoose.model('Message', messageSchema);