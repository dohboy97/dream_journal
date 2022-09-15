const express = require('express')
const { append } = require('express/lib/response')

const router = express.Router()
const authController = require('../controllers/auth')
const entriesController = require('../controllers/entries')

const ensureAuth  = require('../middleware/auth')

router.get('/page/:page', ensureAuth.ensureAuth, entriesController.getDream)

router.get('/:date', entriesController.getDreamByDate)

router.delete('/deleteDream', entriesController.deleteDream)



module.exports = router 