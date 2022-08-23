const mongoose = require('mongoose')
const { Schema } = mongoose;

const journalSchema = new Schema({
    dream: String,
    completed: Boolean,
})

module.exports = mongoose.model('Journal', journalSchema)