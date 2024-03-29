const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nutritionSchema = new Schema({
    name: { type: String, required: true },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Nutrition', nutritionSchema);