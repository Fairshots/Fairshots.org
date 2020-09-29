import initPhotoOrders from "../helpers/initPhotoOrders";

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
            const { Photos, ...rest } = action.payload;
            initPhotoOrders(Photos);
            return Object.assign({}, state, {
                Photos,
                ...rest.map(photographer => ({
                    [photographer.id]: { ...photographer }
                }))
            });
        }
        default:
            return state;
    }
}
