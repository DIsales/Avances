const router = require('express').Router()

const { filter } = require('../controllers/case_controller')


router.get('/case/filter', filter)


module.exports = router;