const express = require('express')
const { append } = require('express/lib/response')

const router = express.Router()
const journalController = require('../controllers/journal')

//begin w/ just create and read for sake of ease

router.get('/', journalController.getDream)

router.post('/createDream', journalController.createDream)

router.delete('/deleteDream', journalController.deleteDream)

router.get('/edit/:id', journalController.getDreamById)
 
router.put('/edit/:id', journalController.updateDreamById)

module.exports = router