export default function allPhotographers(state = { }, action) {
    switch (action.type) {
    case "allPhotographers_ERROR": {
        return Object.assign({}, state, {
            error: action.payload
        });
    }
    case "GET_ALLPHOTOGRAPHERS": {
        return Object.assign({}, state, {
            photographers: action.payload,
            error: false
        });
    }
    default: return state;
    }
}
