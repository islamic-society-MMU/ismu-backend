const { Router } = require('express')
const { post_message } = require('../controllers/msgController')
const router = Router()

router.post('/', post_message)

module.exports = router