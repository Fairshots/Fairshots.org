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
import { FaCog, FaUser, FaUserPlus, FaSignInAlt, FaUserCircle } from "react-icons/fa";
import Auth0 from "./auth0-webauth";
import { login, logout, forgotPw, getProfile } from "../../actions";
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

    componentDidMount() {
        const { profile, getUserProfile, userInfo } = this.props;

        if (!profile.id && userInfo.token) {
            getUserProfile(userInfo.userType, userInfo.userId, userInfo.token, false);
        }
    }

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
            if (!this.props.userInfo.auth0Token) this.toggleOpenCloses("loginModal"); // if not social login
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

        if (this.props.profile.error === "Unauthorized" && !prevProps.profile.error) {
            // if token is expired Alert user to login
            setTimeout(() => {
                this.props.handleLogout(this.props.history);
                this.props.notify("Please login to continue");
            }, 3000);
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
                                onClick={() => {
                                    this.toggleOpenCloses("loginModal");
                                    this.props.navcloser();
                                }}
                            >
                                <FaUser /> LOGIN
                            </Link>
                        </NavItem>
                        <NavItem className="navbarlink">
                            <Link
                                className="nav-link"
                                to="/register#photographer"
                                onClick={this.props.navcloser}
                            >
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
                                onClick={() => {
                                    history.push(`/${userInfo.userType}/${userInfo.userId}`);
                                    this.props.navcloser();
                                }}
                            >
                                <FaUserCircle /> PROFILE
                            </DropdownItem>
                            <DropdownItem
                                className="f-dropdown-link"
                                onClick={() => {
                                    history.push(
                                        `/${userInfo.userType}/${userInfo.userId}/settings`
                                    );
                                    this.props.navcloser();
                                }}
                            >
                                <FaCog /> SETTINGS
                            </DropdownItem>
                            <DropdownItem
                                className="f-dropdown-link"
                                onClick={() => {
                                    handleLogout(history);
                                    this.props.navcloser();
                                }}
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
                    auth0={Auth0}
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
    getUserProfile: (userType, id, token, thirdParty) =>
        dispatch(getProfile(userType, id, token, thirdParty)),

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
    clearMessages: () => dispatch({ type: "AUTH_RESETMESSAGES" }),
    notify: message => dispatch({ type: "AUTH_ERROR", payload: message })
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginHandler)
);
