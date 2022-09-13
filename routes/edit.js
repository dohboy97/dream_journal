const express = require('express')
const { append } = require('express/lib/response')
const authController = require('../controllers/auth')
const router = express.Router()
const editController = require('../controllers/edit')
const ensureAuth  = require('../middleware/auth')

router.get('/:id', ensureAuth.ensureAuth, editController.getDreamById)

router.delete('/deleteDream', editController.deleteDream)


 
router.put('/:id/update', editController.updateDreamById)

module.exports = router