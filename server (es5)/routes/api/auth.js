const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const secret = require('../../config/secret.js')
const client = require('../../config/client.js')

router.get('/test', (req, res) => {
	res.status(200).send({ status: 'success' })
})

router.post('/register', (req, res) => {
	const { email, password } = req.body
	const hashedPassword = bcrypt.hashSync(password)
	client.query(`INSERT INTO public.users( email, password ) VALUES( '${ email }', '${ hashedPassword }' )`, (err, result) => {
		if (err) {
			return res.status(500).send("Error when registering user")
		}
		client.query(`SELECT * FROM users WHERE email = '${ email }' LIMIT 1`, (err, result_) => {
			const data_result = result_.rows[0]
			const token = jwt.sign({ id: data_result.id, email: data_result.email }, 'awesome', { expiresIn: 180 })
			res.status(200).send({ auth: true, token: token })
		})
	})
})

router.post('/login', (req, res) => {
	const { email, password } = req.body
	const hashedPassword = bcrypt.hashSync(password)
	client.query(`SELECT * FROM users WHERE email = '${ email }' LIMIT 1`, (err, result) => {
		const data_result = result.rows[0]
		if (result.rows.length == 0) 
			return res.status(404).send({ auth: false, token: null, error: 'User not found' })
		const hashedPassword = data_result.password
		const isPasswordTrue = bcrypt.compareSync(password, hashedPassword)
		if (!isPasswordTrue)
			return res.status(401).send({ auth: false, token: null, error: 'Wrong password' })
		const token = jwt.sign({ id: data_result.id, email: data_result.email }, 'awesome', { expiresIn: 180 })
		res.status(200).send({ auth: true, token: token, error: null })
	})
})

module.exports = router