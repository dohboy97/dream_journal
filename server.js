const express = require ('express');
const app = express()
const connectDB = require('./config/database')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')

const homeRoute = require('./routes/home')
const journalRoute = require('./routes/journal')
const editRoute = require ('./routes/edit')
const nocache = require('nocache')
app.use(nocache())

//passport config
require('./config/passport')(passport)

const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')

app.use(express.static('public'))
//issue here

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
//sessions setup
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized:false,
        store: MongoStore.create({
            mongoURL: process.env.DB_STRING
        }),
    })
)

//passport middleware

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//routes
app.use('/', homeRoute)
app.use('/journal', journalRoute)
app.use('/journal/edit', editRoute)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})     