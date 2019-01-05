import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import DonutSpin from "./components/donut-spin";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Main />
                <Footer />
                <DonutSpin spinshow={this.props.loading} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading
});

export default hot(module)(withRouter(connect(mapStateToProps)(App)));
