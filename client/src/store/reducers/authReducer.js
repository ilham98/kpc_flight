const initState = { data: { auth: false, token: null } }

const authReducer = (state = initState, action) => {
	const data = action.data
	switch (action.type) {
		case 'LOGIN_SUCCESS': 
			return {
				...state, data
			}
		default: 
			return state 
	}
}

export default authReducer