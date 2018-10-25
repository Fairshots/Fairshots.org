export default function profile(state = {}, action) {
    switch (action.type) {
    case "PROFILE_ERROR": {
        return Object.assign({}, state, {
            error: action.payload
        });
    }
    case "GET_PROFILE": {
        return Object.assign({}, state, {
            ...action.payload,
            error: false
        });
    }
    case "PHOTO_UPLOADED": {
        return Object.assign({}, state, {
            Photos: [...state.Photos, { id: action.payload[0].id, cloudlink: action.payload[0].cloudlink }],
            error: false
        });
    }

    case "UPDATE_PROFILE": {
        const { Password, ...newProps } = action.payload; // don't put password in state
        return Object.assign({}, state, {
            newProps,
            error: false
        });
    }


    default: return state;
    }
}
