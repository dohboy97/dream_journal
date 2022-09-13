const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const homeController = require('../controllers/home')

const ensureAuth= require('../middleware/auth')

router.get('/', ensureAuth.ensureAuth, homeController.getHome)

// //these are from when this was the landing page - unsure if need to keep for user login/logout functionality on every page?
// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)

module.exports = router 