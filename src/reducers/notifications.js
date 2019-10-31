const INITIAL_STATE = { message: "", type: "alert", isThere: false };

export default function notifications(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "RESET_NOTIFS": {
            return Object.assign({}, INITIAL_STATE);
        }
        case "AUTH_ERROR": {
            return Object.assign({}, state, {
                message: action.payload,
                type: "Error",
                isThere: true
            });
        }
        case "allOrgs_ERROR": {
            return Object.assign({}, state, {
                message: "There was an error loading this page. Please try again later.",
                type: "Error",
                isThere: true
            });
        }
        case "allPhotographers_ERROR": {
            return Object.assign({}, state, {
                message: "There was an error loading this page. Please try again later.",
                type: "Error",
                isThere: true
            });
        }
        case "AUTH_LOGOUT": {
            return Object.assign({}, state, {
                message: "You logged out successfully.",
                type: "Success",
                isThere: true
            });
        }

        case "AUTH_SUCCESS": {
            return Object.assign({}, state, {
                message: "You're now logged in",
                type: "Success",
                isThere: true
            });
        }

        case "MAIL_ERROR": {
            return Object.assign({}, state, {
                message: "Your message was not sent. Try again later",
                type: "Error",
                isThere: true
            });
        }
        case "MAIL_SENT": {
            return Object.assign({}, state, {
                message: "Your message was sent successfully.",
                type: "Success",
                isThere: true
            });
        }
        case "UPDATE_PROFILE": {
            return Object.assign({}, state, {
                message: "Your profile was updated.",
                type: "Success",
                isThere: true
            });
        }
        case "PROFILE_ERROR": {
            return Object.assign({}, state, {
                message: "There was an error with your request. Please try again later",
                type: "Error",
                isThere: true
            });
        }

        case "INACTIVATE_PROFILE": {
            return Object.assign({}, state, {
                message: action.payload.msg,
                type: "Success",
                isThere: true
            });
        }
        case "REACTIVATE_PROFILE": {
            return Object.assign({}, state, {
                message: action.payload.msg,
                type: "Success",
                isThere: true
            });
        }

        case "PROJECT_CREATED": {
            return Object.assign({}, state, {
                message: "Your project was created",
                type: "Success",
                isThere: true
            });
        }
        case "PROJECT_UPDATED": {
            return Object.assign({}, state, {
                message: "Your project was updated",
                type: "Success",
                isThere: true
            });
        }
        case "PROJECT_APPLICATION_DONE": {
            return Object.assign({}, state, {
                message: "Your application was received successfully.",
                type: "Success",
                isThere: true
            });
        }
        case "PROJECT_ERROR": {
            return Object.assign({}, state, {
                message: "There was an error with your request. Please try again later",
                type: "Error",
                isThere: true
            });
        }

        case "REG_SUCCESS": {
            return Object.assign({}, state, {
                message: action.payload,
                type: "Success",
                isThere: true
            });
        }
        case "REG_ERROR": {
            return Object.assign({}, state, {
                message: action.payload,
                type: "Error",
                isThere: true
            });
        }

        default:
            return state;
    }
}
