const mongoose = require('mongoose')
const { mongoURI } = require('../config/keys')

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
)

mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error))
