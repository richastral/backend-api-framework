const mongoose = require('mongoose')


const testSchema = new mongoose.Schema({
    test: {
        type: String,
    }
})


module.exports = mongoose.model('Test', testSchema)