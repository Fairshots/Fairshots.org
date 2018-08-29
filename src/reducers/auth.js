let userSaved = localStorage.getItem('user');

const INITIAL_STATE = {
				user: userSaved !== "undefined" ? JSON.parse(userSaved) : {},
				errorMessage: '', 
				isAuthenticated: userSaved !== "undefined" ? true : false
			};

export default function auth(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'AUTH_ERROR': {
			console.log(action.payload)
			return Object.assign({}, state, {
				errorMessage: action.payload,
				isAuthenticated: false
			});
		}
		case 'AUTH_SUCCESS': {
			console.log(action.payload)
			return Object.assign({}, state, {
				user: action.payload,
				isAuthenticated: true
			});
		}
		case 'AUTH_LOGOUT': {
			localStorage.removeItem('user');
			return Object.assign({}, state, {
				user: {},
				isAuthenticated: false
			});
		}
		default:
			return state;
	}
}