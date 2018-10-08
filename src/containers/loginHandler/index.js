import React, { Component } from "react";
import {
    Button, Form, FormGroup, Input, FormFeedback
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../../actions/login";
import LoginModal from "../../components/loginModal";

import "./login-handler.scss";

class LoginHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginModal: false,
            registerForm: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showLoginModal = this.showLoginModal.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.doLogin(form);
    }

    showLoginModal() {
        this.setState(prevState => ({ loginModal: !prevState.loginModal }));
    }

    render() {
        const {
            doLogin, isAuthenticated, handleLogout, errorMessage
        } = this.props;
        return (
            <div className="login-handler">
                { !isAuthenticated
                && <div className="login-register">
                    <Button className="mr-2 loglog" onClick={this.showLoginModal}>LOGIN</Button>
                    <Button className="loglog"><Link to="/register#photographer">SIGN UP</Link></Button>
                </div>
                }
                {
                    isAuthenticated
                && <Button className="loglog" onClick={handleLogout}>LOGOUT</Button>
                }
                <LoginModal showModal={this.state.loginModal}
                    showLoginModal={this.showLoginModal}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                    errorMessage={errorMessage}
                />


            </div>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
});
const mapDispatchToProps = dispatch => ({
    doLogin: formProps => {
        dispatch(login(formProps));
    },
    handleLogout: () => {
        dispatch(logout());
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginHandler);
