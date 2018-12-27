import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import registration from "./registration";
import profile from "./profile";
import loading from "./loading";
import mainFeatures from "./main-features";
import allPhotographers from "./allPhotographers";
import allOrgs from "./allOrgs";

const rootReducer = combineReducers({
    auth,
    loading,
    mainFeatures,
    allPhotographers,
    allOrgs,
    registration,
    profile,
    form: formReducer
});

export default rootReducer;
