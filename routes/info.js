const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const infoController = require('../controllers/info')

const {ensureAuth, ensureGuest} = require('../middleware/auth')

router.get('/', infoController.getInfo)


module.exports = router 