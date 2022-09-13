const express = require('express')
const { append } = require('express/lib/response')

const router = express.Router()
const authController = require('../controllers/auth')
const journalController = require('../controllers/journal')

const ensureAuth  = require('../middleware/auth')

router.get('/', ensureAuth.ensureAuth,  journalController.getDream)

router.post('/createDream', journalController.createDream)

router.delete('/deleteDream', journalController.deleteDream)



module.exports = router