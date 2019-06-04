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
        case "GET_PROJECT": {
            return Object.assign({}, state, {
                [action.payload.id]: { ...action.payload },
                error: false
            });
        }

        default:
            return state;
    }
}
