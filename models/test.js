var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
  result: { type: Boolean, default: false }
});

module.exports = mongoose.model('Test', testSchema);
