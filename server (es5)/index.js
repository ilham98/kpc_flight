const express = require('express')
const app = express()
const path = require('path')
const jwt = require('jsonwebtoken')

const root_middlewares = require('./middlewares/root_middlewares')
const root_routes = require('./routes/root_routes')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.listen(9999, () => {
	console.log('listening in port 9999')
})

app.use('/', root_middlewares)
app.use('/', root_routes)