import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import TermsandConditions from "./terms-and-conditions";
import RegisterForm from "../containers/registerForm";
import UserProfile from "../containers/userProfile";

export default function Main() {
    return (
        <main>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/contact-us' exact component={Contact}/>
                <Route path='/register' exact component={RegisterForm}/>
                <Route path='/terms-and-conditions' exact component={TermsandConditions}/>
                <Route path='/:userType/:userId' component={UserProfile}/>
            </Switch>
        </main>
    );
}
