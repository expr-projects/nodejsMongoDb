var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var Schema = mongoose.Schema;

// create the schema
var imageSchema = new Schema({
  title: String,
  image: { data: Buffer, contentType: String }
});

// convert the schema to model and export it
module.exports = mongoose.model('Image', imageSchema);
