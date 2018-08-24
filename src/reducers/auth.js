const user = JSON.parse(localStorage.getItem('user'));

const INITIAL_STATE = {user, errorMessage: ''};

export default function auth(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'AUTH_ERROR': {
			console.log(action.payload)
			return Object.assign({}, state, {
				errorMessage: action.payload
			});

		}
		case 'AUTH_SUCCESS': {
			console.log(action.payload)
			return Object.assign({}, state, {
				user: action.payload
			});
		}
		default:
			return state;
	}
}