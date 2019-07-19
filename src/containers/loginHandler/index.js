import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";
import { FaCog, FaUser, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import auth0 from "auth0-js";
import { login, logout, forgotPw } from "../../actions";
import LoginModal from "../../components/loginModal";

import "./login-handler.scss";

class LoginHandler extends Component {
    state = {
        email: "",
        password: "",
        loginModal: false,
        profileNav: false,
        forgotPass: false
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const form = {
            email: this.state.email,
            password: this.state.password
        };
        if (this.state.forgotPass) {
            this.props.forgotPassword({ email: this.state.email });
        } else this.props.doLogin(form);
    };

    toggleOpenCloses = name => {
        this.setState(prevState => ({ [name]: !prevState[name] }));
    };

    toggleForget = () =>
        this.setState(prevState => ({
            forgotPass: !prevState.forgotPass
        }));

    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated && !prevProps.isAuthenticated) {
            this.toggleOpenCloses("loginModal");
            this.setState({ email: "", password: "" });
            this.props.history.push(
                `/${this.props.userInfo.userType}/${this.props.userInfo.userId}`
            );
        }
        if (this.props.errorMessage || this.props.notification) {
            setTimeout(() => this.props.clearMessages(), 5000);
            if (this.props.notification.includes("e-mail was sent")) {
                setTimeout(() => this.toggleOpenCloses("loginModal"), 5000);
            }
        }
    }

    render() {
        const {
            isAuthenticated,
            handleLogout,
            errorMessage,
            history,
            notification,
            userInfo,
            profile
        } = this.props;

        return (
            <>
                {!isAuthenticated && (
                    <>
                        <NavItem className="loglog navbarlink">
                            <Link
                                to="#!"
                                className="nav-link"
                                onClick={() => this.toggleOpenCloses("loginModal")}
                            >
                                <FaUser /> LOGIN
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link className="nav-link" to="/register#photographer">
                                <FaUserPlus /> SIGN UP
                            </Link>
                        </NavItem>
                    </>
                )}
                {isAuthenticated && (
                    <UncontrolledDropdown className="profileNav navbarlink">
                        <DropdownToggle nav className="loglog nav-link" caret>
                            <img
                                src={userInfo.thumbnail}
                                className="rounded-circle z-depth-0 mr-2"
                                alt=""
                            />
                            {userInfo.userName}
                        </DropdownToggle>
                        <DropdownMenu className="f-dropdown-menu">
                            <DropdownItem
                                className="f-dropdown-link"
                                onClick={() =>
                                    history.push(`/${userInfo.userType}/${userInfo.userId}`)
                                }
                            >
                                <FaCog /> PROFILE
                            </DropdownItem>
                            <DropdownItem
                                className="f-dropdown-link"
                                onClick={() => handleLogout(history)}
                            >
                                <FaSignInAlt /> LOGOUT
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                )}
                <LoginModal
                    showModal={this.state.loginModal}
                    showLoginModal={this.toggleOpenCloses}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                    errorMessage={errorMessage}
                    notification={notification}
                    forgotPass={this.state.forgotPass}
                    toggleForget={this.toggleForget}
                    auth0={
                        new auth0.WebAuth({
                            domain: "curly-waterfall-1934.auth0.com",
                            clientID: "Sw0UdTyMoz6UnDkyAWQcJL1Kwj6yxA2g",
                            responseType: "token id_token",
                            audience: " http://3.18.104.39:8080",
                            redirectUri: "http://localhost:8080/login/callback",
                            scope: "openid profile"
                        })
                    }
                />
            </>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    notification: state.auth.notification,
    userInfo: state.auth.user,
    profile: state.profile
});

const mapDispatchToProps = dispatch => ({
    doLogin: formProps => {
        dispatch(login(formProps));
    },
    forgotPassword: formProps => {
        dispatch(forgotPw(formProps));
    },
    handleLogout: history => {
        history.push("/");
        dispatch(logout());
    },
    clearMessages: () => dispatch({ type: "AUTH_RESETMESSAGES" })
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginHandler)
);
