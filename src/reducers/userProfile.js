export default function userProfile(state = {}, action) {
    switch (action.type) {
    case "REG_ERROR": {
        return Object.assign({}, state, {
            errorMessage: action.payload
        });
    }
    case "REG_SUCCESS": {
        return Object.assign({}, action.payload);
    }
    default: return state;
    }
}
