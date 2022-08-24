const express = require('express')
const { append } = require('express/lib/response')

const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getDreamById)

router.delete('/deleteDream', editController.deleteDream)


 
router.put('/:id', editController.updateDreamById)

module.exports = router