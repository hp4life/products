const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  
});

module.exports = Prodcut = mongoose.model('product', ProductSchema);
