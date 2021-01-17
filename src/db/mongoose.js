const mongoose = require('mongoose')
const credentials = require('./credentials')

mongoose.connect(credentials, {
    useNewUrlParser: true,
    useCreateIndex: true
})
console.log(mongoose.connection.readyState)