export default function project(state = {}, action) {
    console.log(action);
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

        default:
            return state;
    }
}
