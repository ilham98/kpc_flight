const router = require('express').Router()
const api = require('./api/api')
const web = require('./web/web')

router.use('/api', api)
router.use('/', web)

module.exports = router