import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]:value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.signIn(this.state)
		console.log(this.props.auth)
		if(this.props.auth) {
			this.props.history.push('/')
		}
	}

	render() {
		if(this.props.auth)
			return <Redirect to="/"/>
		return (
		<div className="row section">
        	<form className="col s12" onSubmit={ this.handleSubmit } method="POST">
	            <div className="input-field s12">
	              	<input name="email" onChange={ this.handleChange } type="text" />
	              	<label htmlFor="email">Email</label>
            	</div>
            	<div className="input-field s12">
	              	<input name="password" onChange={ this.handleChange } type="password" className="validate" />
	              	<label htmlFor="password">Password</label>
	            </div>
	            <div className="input-field">
	            	<button type="submit" className="waves-effect waves-light btn">Submit</button>
	            </div>
        	</form>
      </div>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth.data.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: credentials => {
			dispatch(signIn(credentials))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)