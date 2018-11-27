const router = require('express').Router()

const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')

// REGISTER YOUR MIDDLEWARES HERE

	// BODY PARSER
	router.use(bodyParser.urlencoded({ extended: true }))
	router.use(bodyParser.json())
	router.use(cors())


module.exports = router