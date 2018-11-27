const router = require('express').Router()

const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

// REGISTER YOUR MIDDLEWARES HERE

	// BODY PARSER
	router.use(bodyParser.urlencoded({ extended: true }))
	router.use(bodyParser.json())


module.exports = router