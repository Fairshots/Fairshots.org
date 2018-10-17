export default function profile(state = {}, action) {
    switch (action.type) {
    case "PROFILE_ERROR": {
        return Object.assign({}, state, {
            error: action.payload
        });
    }
    case "GET_PROFILE": {
        return Object.assign({}, state, {
            ...action.payload
        });
    }
    case "PHOTO_UPLOADED": {
        return Object.assign({}, state, {
            Photos: [...state.Photos, { id: action.payload[0].id, cloudlink: action.payload[0].cloudlink }]
        });
    }


    default: return state;
    }
}
