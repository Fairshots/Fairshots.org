export default function allOrgs(state = { }, action) {
    switch (action.type) {
    case "allOrgs_ERROR": {
        return Object.assign({}, state, {
            error: action.payload
        });
    }
    case "GET_ALLOrgs": {
        return Object.assign({}, state, {
            organizations: action.payload,
            error: false
        });
    }
    default: return state;
    }
}
