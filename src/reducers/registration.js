export default function registration(state = {}, action) {
    switch (action.type) {
        case "REG_ERROR": {
            return Object.assign({}, state, {
                message: action.payload,
                success: false
            });
        }
        case "REG_SUCCESS": {
            return Object.assign({}, state, {
                message: action.payload,
                success: true
            });
        }
        case "REG_CHECKFORM": {
            return Object.assign({}, state, {
                message: action.payload,
                success: false
            });
        }
        case "REG_RESET": {
            return Object.assign({}, {});
        }
        default:
            return state;
    }
}
