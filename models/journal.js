const mongoose = require('mongoose')
const { Schema } = mongoose;

const journalSchema = new Schema({
    dream: String,
    date:String,
    userId:String,
})

module.exports = mongoose.model('Journal', journalSchema)