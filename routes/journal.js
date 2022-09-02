const express = require('express')
const { append } = require('express/lib/response')

const router = express.Router()
const journalController = require('../controllers/journal')



router.get('/', journalController.getDream)

router.post('/createDream', journalController.createDream)

router.delete('/deleteDream', journalController.deleteDream)



module.exports = router