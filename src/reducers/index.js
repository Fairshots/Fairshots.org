import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import registration from "./registration";
import profile from "./profile";
import loading from "./loading";
import mainFeatures from "./main-features";
import allPhotographers from "./allPhotographers";
import allOrgs from "./allOrgs";
import project from "./project";
import messaging from "./messaging";

const rootReducer = combineReducers({
    auth,
    allPhotographers,
    allOrgs,
    loading,
    messaging,
    mainFeatures,
    registration,
    profile,
    project,
    form: formReducer
});

export default rootReducer;
