export function login(formProps) {
    return async dispatch => {

		let config = {
		    method: 'POST',
		    headers: { 'Content-Type':'application/json' },
		    body: {
		    	email: formProps.email,
		    	password: formProps.password
		    }
		}
		try {
			const res = await fetch('https://fairshots.herokuapp.com/login', config);
			localStorage.setItem('user', JSON.stringify(res.data));
			dispatch(
			{
				type: 'AUTH_SUCCESS',
				payload: res.data
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