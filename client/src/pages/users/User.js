import React from 'react'

const User = props => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Email</th>
						<th>Password</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		auth: state.auth.data.auth
	}
}

export default User