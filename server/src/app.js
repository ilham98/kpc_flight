import express from 'express'
import mysql from 'mysql'

const app = express()

app.listen(3000, () => {
	console.log('mantap')
})

app.get('/', (req, res) => {
	res.send('mantap ganss')
})