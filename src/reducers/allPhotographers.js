export default function allPhotographers(state = {}, action) {
    switch (action.type) {
        case "allPhotographers_ERROR": {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
        case "GET_ALLPHOTOGRAPHERS": {
            return Object.assign({}, state, {
                ...action.payload
                    .map(photographer => ({
                        [photographer.id]: { ...photographer }
                    }))
                    .reduce((acc, current) => ({ ...acc, ...current })),
                error: false
            });
        }
        default:
            return state;
    }
}
