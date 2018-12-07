export default function mainFeatures(state = {}, action) {
    switch (action.type) {
    case "FEATURES_ERROR": {
        return Object.assign({}, state, {
            error: action.payload
        });
    }
    case "GET_FEATURES": {
        return Object.assign({}, state, {
            ...action.payload,
            error: false
        });
    }
    default: return state;
    }
}
