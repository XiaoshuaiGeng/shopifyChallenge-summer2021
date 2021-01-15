const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:g18668168837@cluster0.iwb1r.mongodb.net/gallery?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})
console.log(mongoose.connection.readyState)