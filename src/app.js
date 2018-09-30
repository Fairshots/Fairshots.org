import React, { Component } from "react";
import { hot } from "react-hot-loader";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default hot(module)(App);
