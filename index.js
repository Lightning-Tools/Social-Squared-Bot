const express = require('express')
const bodyParser = require('body-parser')
require('./database/connection')

const app = express()
app.use(bodyParser.json())

require('./routes/fulfillment')(app)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening port: ${port}`))
