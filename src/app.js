import React, { Component } from "react";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";


export default class App extends Component {
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
