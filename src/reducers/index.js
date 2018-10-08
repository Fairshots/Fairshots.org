import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import registration from "./registration";

const rootReducer = combineReducers({
    auth,
    registration,
    form: formReducer
});

export default rootReducer;
