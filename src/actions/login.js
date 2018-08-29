export function login(formProps) {
    return async dispatch => {

		let config = {
		    method: 'POST',
		    headers: { 'Content-Type':'application/json' },
		    body: JSON.stringify({
		    	email: formProps.email,
		    	password: formProps.password
		    })
		}
		try {
			const res = await fetch('https://node-lvcunha.c9users.io:8080/login', config);
			let usertoSave = await res.json();
			console.log(usertoSave);
			localStorage.setItem('user', JSON.stringify(usertoSave));
			dispatch(
			{
				type: 'AUTH_SUCCESS',
				payload: usertoSave
			});


		} catch (e) {
			dispatch(
			{
				type: 'AUTH_ERROR',
				payload: 'email or password incorrect or doesn`t exist'
			});
		}

	};

}