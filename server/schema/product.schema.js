const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  desc: String,
  imageUrl: String,
  price: Number,
  sizes: [String],
});

module.exports = productSchema;
