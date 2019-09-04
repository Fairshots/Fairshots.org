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
        case "GET_ONEFROMALLPHOTOGRAPHERS": {
            return Object.assign({}, state, {
                [action.payload.id]: { ...action.payload }
            });
        }
        default:
            return state;
    }
}
