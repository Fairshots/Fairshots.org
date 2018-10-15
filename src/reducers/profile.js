export default function profile(state = {}, action) {
    switch (action.type) {
    case "PROFILE_ERROR": {
        return Object.assign({}, state, {
            error: action.payload
        });
    }
    case "GET_PROFILE": {
        return Object.assign({}, state, {
            ...action.payload
        });
    }
    default: return state;
    }
}
