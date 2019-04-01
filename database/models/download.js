const mongoose = require('mongoose')

const Schema = mongoose.Schema
const download = new Schema(
  {
    product: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'Downloads'
  }
)

exports.Download = mongoose.model('download', download)
