import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import userProfile from "./userProfile";

const rootReducer = combineReducers({
    auth,
    userProfile,
    form: formReducer
});

export default rootReducer;
