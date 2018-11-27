export const signIn = credentials => {
	const { email, password } = credentials
	return (dispatch) => {
		fetch('http://127.0.0.1:9999/api/login', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
		    	email: email, 
		    	password: password
		   	})
		 })
   		.then(res => res.json())
   		.then(data => {
   			console.log(data)
   			dispatch({ data: data, type: 'LOGIN_SUCCESS' })
   			return data
   		})		
	}
}