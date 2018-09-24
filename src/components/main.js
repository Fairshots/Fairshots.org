import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import RegisterForm from "../containers/registerForm";

export default function Main(props) {
    return (
        <main>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/contact-us' exact component={Contact}/>
                <Route path='/register' exact component={RegisterForm}/>
            </Switch>
        </main>
    );
}
