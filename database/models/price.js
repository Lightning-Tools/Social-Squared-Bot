const mongoose = require('mongoose')

const Schema = mongoose.Schema
const price = new Schema(
  {
    product: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'Prices'
  }
)

exports.Price = mongoose.model('price', price)
