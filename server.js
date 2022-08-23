const express = require ('express');
const app = express()
const connectDB = require('./config/database')
const homeRoute = require('./routes/home')
const journalRoute = require('./routes/journal')


require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoute)
app.use('/journal', journalRoute)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    