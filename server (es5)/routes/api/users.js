const router = require('express').Router()
const client =  require('../../config/client')
const verifyToken = require('../../middlewares/verifyToken')

router.get('/', verifyToken, (req, res) => {
	
	client.query('SELECT * FROM users', (err, result) => {
		res.status(200).send(result.rows)
	})

})

module.exports = router