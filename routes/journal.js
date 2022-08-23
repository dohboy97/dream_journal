const express = require('express')
const { append } = require('express/lib/response')
const router = express.Router()
const journalController = require('../controllers/journal')

//begin w/ just create and read for sake of ease

router.get('/', journalController.getDream)

router.post('/createDream', journalController.createDream)

module.exports = router