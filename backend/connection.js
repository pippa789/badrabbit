
//this connects to mongo and creates a file called events

require('dotenv').config();

const express = require('express')
const mongoose= require('mongoose')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log('Connected to Mongoose'))

app.use('./api/calendar', require('./Controllers/CalendarController'))

app.listen(3000, () => console.log('Server  started'))
