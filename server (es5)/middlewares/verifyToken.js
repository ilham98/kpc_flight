const jwt = require('jsonwebtoken')

verifyToken = (req, res, next)  => {
	const token = req.headers['x-access-token']
	if (!token) 
		return res.status(403).send({ auth: false, token: null, error: 'Token not provided' })
	jwt.verify(token, 'awesome', (err, decoded) => {
		if (err)
			return res.status(500).send({ auth: false, token: null, error: err })
		
		req.body.authenticated_user = decoded
		next()
	})
}

module.exports = verifyToken