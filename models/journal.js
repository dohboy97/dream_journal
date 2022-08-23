const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    dreamEntry: {
        type: String,
        
    }
})

module.exports = mongoose.model('Journal', journalSchema)