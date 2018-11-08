export default function profile(state = {}, action) {
    console.log(action);
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

    case "PHOTO_DELETED": {
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

    case "AUTH_LOGOUT": {
        return Object.assign({});
    }


    default: return state;
    }
}
