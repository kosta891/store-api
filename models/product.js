const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  name: {
    type: String,
    required: [true, 'Please enter name!'],
    trim: true,
    maxlength: [20, 'Length must not be above 20 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter price!'],
    trim: true,
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    //enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Product', productSchema);
