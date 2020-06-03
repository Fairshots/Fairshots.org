import initPhotoOrders from "../helpers/initPhotoOrders";

export default function profile(state = {}, action) {
    console.log(action);
    switch (action.type) {
        case "PROFILE_ERROR": {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
        case "GET_PROFILE": {
            const { Photos, ...rest } = action.payload;
            initPhotoOrders(Photos);
            return Object.assign({}, state, {
                Photos,
                ...rest,
                error: false
            });
        }
        case "THIRD_PARTY_PROFILE": {
            return Object.assign(
                {},
                {
                    ...action.payload,
                    error: false
                }
            );
        }
        case "PROFILE_PHOTO_UPLOADED": {
            return Object.assign({}, state, {
                Photos: [
                    ...state.Photos,
                    {
                        id: action.payload[0].id,
                        cloudlink: action.payload[0].cloudlink,
                        portfolioOrder: action.payload[0].portfolioOrder
                    }
                ],
                error: false
            });
        }
        case "PROFILE_PHOTO_ORDER_UPDATED": {
            return Object.assign({}, state, {
                Photos: [...action.payload],
                error: false
            });
        }
        case "PROFILE_PHOTO_DELETED": {
            const photosArray = state.Photos.filter((el, i) => el.id !== action.payload.id);
            console.log(photosArray);
            return Object.assign({}, state, { Photos: [...photosArray] });
        }

        case "UPDATE_PROFILE": {
            const { Password, ...newProps } = action.payload; // don't put password in state
            return Object.assign({}, state, {
                ...newProps,
                error: false
            });
        }
        case "INACTIVATE_PROFILE": {
            const { apiMsg } = action.payload;
            return Object.assign({}, state, {
                accountInactive: true,
                error: false,
                apiMsg
            });
        }
        case "REACTIVATE_PROFILE": {
            const { apiMsg } = action.payload;
            return Object.assign({}, state, {
                accountInactive: false,
                error: false,
                apiMsg
            });
        }
        case "AUTH_LOGOUT": {
            return Object.assign({});
        }

        default:
            return state;
    }
}
