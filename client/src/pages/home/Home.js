import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<h2>Welcome to my site!</h2>
			<div>Let we know who are you :) , <Link to="/login">login</Link> or <Link to='/register'>register</Link></div>
		</div>
	)
}

export default Home