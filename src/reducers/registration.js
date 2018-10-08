export default function registration(state = {}, action) {
    switch (action.type) {
    case "REG_ERROR": {
        return Object.assign({}, state, {
            message: action.payload
        });
    }
    case "REG_SUCCESS": {
        return Object.assign({}, state, {
            message: action.payload
        });
    }
    default: return state;
    }
}
