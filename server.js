const express = require ('express');
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todaysRoute = require('./routes/today')
const customRoute = require('./routes/custom')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/today', todaysRoute)
app.use('/custom', customRoute)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    