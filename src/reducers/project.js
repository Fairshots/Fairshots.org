export default function project(state = {}, action) {
    switch (action.type) {
        case "PROJECT_ERROR": {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
        case "PROJECT_CREATED": {
            return Object.assign({}, state, {
                [action.payload.id]: { ...action.payload },
                error: false
            });
        }
        case "PROJECT_UPDATED": {
            return Object.assign({}, state, {
                [action.payload.id]: { ...state[action.payload.id], ...action.payload },
                error: false
            });
        }
        case "PROJECT_APPLICATION_DONE": {
            return Object.assign({}, state, {
                [action.payload.id]: {
                    ...state[action.payload.id],
                    Photographers: [
                        ...state[action.payload.id].Photographers,
                        { ...action.payload.newApply }
                    ]
                },
                error: false
            });
        }
        case "PHOTO_ORDER_UPDATED": {
            const photos = action.payload;
            // get keys
            const stateKeys = Object.keys(state);
            // get array index where photo ids match what is in payload
            const contIndex = stateKeys.findIndex(key => state[key].Photos.every(elem => {
                    if (photos.findIndex(val => val.id == elem.id) == -1) return false;
                    return true;
                })
            );
            return Object.assign({}, state, {
                [stateKeys[contIndex]]: {
                    ...state[stateKeys[contIndex]],
                    Photos: [...photos]
                },
                error: false
            });
        }
        case "GET_PROJECT": {
            return Object.assign({}, state, {
                [action.payload.id]: { ...action.payload },
                error: false
            });
        }

        case "GET_ALL_PROJECTS": {
            return Object.assign({}, state, {
                ...action.payload
                    .map(proj => ({
                        [proj.id]: { ...proj }
                    }))
                    .reduce((acc, current) => ({ ...acc, ...current })),
                error: false
            });
        }

        default:
            return state;
    }
}
