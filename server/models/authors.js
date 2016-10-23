const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorsSchema = new Schema({
  _id: String,
  name: String,
  description: String,
  photoPath: String,
  titlesBy: [{ type: Schema.Types.String, ref: 'Books' }]
});

var Authors = mongoose.model('Authors', authorsSchema);
module.exports = Authors;
