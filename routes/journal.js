const express = require('express')

const router = express.Router()
const journalController = require('../controllers/journal')

//begin w/ just create and read for sake of ease

router.get('/', journalController.getDream)

router.post('/createDream', journalController.createDream)

router.delete('/deleteDream', journalController.deleteDream)

module.exports = router