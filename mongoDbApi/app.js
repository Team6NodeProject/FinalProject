const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const newsRoutes = require('./routes/newsRoutes')
const userRoutes = require('./routes/userRoutes')

mongoose.connect(
    'mongodb://localhost:27017/finalproject',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (err) => err ? console.log('Something got wrong', err) : console.log('DB Connected')
)

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/News', newsRoutes)
app.use('/Admin', userRoutes)

module.exports = app