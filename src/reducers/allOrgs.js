export default function allOrgs(state = {}, action) {
    switch (action.type) {
        case "allOrgs_ERROR": {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
        case "GET_ALLOrgs": {
            return Object.assign({}, state, {
                ...action.payload
                    .map(org => ({
                        [org.id]: { ...org }
                    }))
                    .reduce((acc, current) => ({ ...acc, ...current })),
                error: false
            });
        }
        default:
            return state;
    }
}
