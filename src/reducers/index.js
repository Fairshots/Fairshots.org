import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import registration from "./registration";
import profile from "./profile";

const rootReducer = combineReducers({
    auth,
    registration,
    profile,
    form: formReducer
});

export default rootReducer;
