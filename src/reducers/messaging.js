export default function messaging(state = {}, action) {
    switch (action.type) {
        case "MAIL_ERROR": {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
        case "MAIL_SENT": {
            return Object.assign({}, state, {
                ...action.payload,
                error: false
            });
        }

        default:
            return state;
    }
}
