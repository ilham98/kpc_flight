const express = require('express')
const router = express.Router()
const client = require('../../config/client')
const secret = require('../../config/secret')

client.connect()

router.get('/', (req, res) => {
	client.query('SELECT * FROM users', (err, result) => {
		// res.send(result.rows)
		if (err) {
			res.send('error')
		}
		res.render('users/index', {
			users: result.rows
		})
	})
})

router.post('/', (req, res) => {
	const { email, password } = req.body
	const hashedPassword = bcrypt.hashSync(password)
	client.query(`INSERT INTO public.users( email, password ) VALUES( '${ email }', '${ hashedPassword }' )`, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.redirect('/users')
	})
})

router.get('/delete/:id', (req, res) => {
	client.query(`DELETE FROM users WHERE id = ${ req.params.id }`, (err) => {
		res.redirect('/users')
	})
})

module.exports = router