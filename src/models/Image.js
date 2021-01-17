const mongoose = require('mongoose')

const Image = mongoose.model('Image', {
    originalname: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
})

module.exports = Image