const mongoose = require('mongoose')

const Schema = mongoose.Schema
const schemaInst = new Schema(
  {
    product: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = name => mongoose.model(name, schemaInst, name)
