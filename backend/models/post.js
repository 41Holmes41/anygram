var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postSchema= new Schema({
  subject: String,
  content: String,
  type: String,
  topic: String,
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }],
});

module.exports = mongoose.model('Post', postSchema);