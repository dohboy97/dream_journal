const express = require ('express');
const app = express()
const connectDB = require('./config/database')
const homeRoute = require('./routes/home')
const journalRoute = require('./routes/journal')
const editRoute = require ('./routes/edit')
const nocache = require('nocache')
app.use(nocache())

const bodyParser = require('body-parser')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')

app.use(express.static('public'))
//issue here

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use('/', homeRoute)
app.use('/journal', journalRoute)
app.use('/journal/edit', editRoute)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})     