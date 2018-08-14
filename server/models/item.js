const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: { type: String, required: true, index: true },
  price: { type: Number, required: true, index: false },
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema, 'Item');
