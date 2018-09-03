import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";

export default function Main(props) {
    return (
        <main>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </main>
    );
}
