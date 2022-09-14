const express = require ('express');
const PORT = process.env.PORT || 7777
const app = express()

const connectDB = require('./config/database')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')


const landingRoute = require('./routes/landing')
const homeRoute = require('./routes/home')
const journalRoute = require('./routes/journal')
const editRoute = require ('./routes/edit')
const entriesRoute = require('./routes/entries')
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
            mongoUrl: process.env.DB_STRING
        }),
    })
)

//passport middleware

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//routes
app.use('/', landingRoute)
app.use('/home', homeRoute)
app.use('/journal', journalRoute)
app.use('/journal/edit', editRoute)
app.use('/journal/entries',entriesRoute)


app.listen(PORT || 7777, ()=>{
    console.log(`Server is running on port ${PORT}`)
})     