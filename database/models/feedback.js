const mongoose = require('mongoose')

const Schema = mongoose.Schema
const feedback = new Schema(
  {
    feedback: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'Feedbacks'
  }
)

exports.Feedback = mongoose.model('feedback', feedback)
