import initPhotoOrders from "../helpers/initPhotoOrders";

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
        case "GET_ONEFROMALLORGS": {
            const { Photos, ...rest } = action.payload;
            initPhotoOrders(Photos);
            return Object.assign({}, state, {
                Photos,
                ...rest.map(org => ({
                    [org.id]: { ...org }
                }))
            });
        }
        default:
            return state;
    }
}
