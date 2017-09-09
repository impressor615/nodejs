var mongoose = require('mongoose');

var ajaxTestSchema = new mongoose.Schema({
  result: { type: Boolean, default: false }
});

module.exports = mongoose.model('AjaxTest', ajaxTestSchema);
