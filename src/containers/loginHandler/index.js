import React, { Component } from "react";
import {
    Button
} from "reactstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { login, logout } from "../../actions";
import LoginModal from "../../components/loginModal";

import "./login-handler.scss";

class LoginHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginModal: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
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

    toggleLoginModal() {
        this.setState(prevState => ({ loginModal: !prevState.loginModal }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated && !prevProps.isAuthenticated) {
            this.toggleLoginModal();
            this.setState({ email: "", password: "" });
            this.props.history.push(`/${this.props.userInfo.userType}/${this.props.userInfo.userId}`);
        }
    }

    render() {
        const {
            isAuthenticated, handleLogout, errorMessage, history, userName
        } = this.props;
        return (
            <div className="login-handler">
                { !isAuthenticated
                && <div className="login-register">
                    <Button className="mr-2 loglog" onClick={this.toggleLoginModal}>LOGIN</Button>
                    <Button className="loglog"><Link to="/register#photographer">SIGN UP</Link></Button>
                </div>
                }
                {
                    isAuthenticated
                && <div data-delay="0" data-hover="1" className="navbarlink w-dropdown">
                    <div className="navbarlink w-dropdown-toggle">
                        <div>{userName}</div>
                        <div className="w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="w-dropdown-list">
                        <a className="dropdown-link w-dropdown-link" onClick={() => history.push(`/${this.props.userInfo.userType}/${this.props.userInfo.userId}`)}>PROFILE</a>
                        <a className="dropdown-link w-dropdown-link" onClick={() => handleLogout(history)}>LOGOUT</a>
                    </nav>
                </div>


                }
                <LoginModal showModal={this.state.loginModal}
                    showLoginModal={this.toggleLoginModal}
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
    errorMessage: state.auth.errorMessage,
    userInfo: state.auth.user,
    userName: state.profile.Name

});

const mapDispatchToProps = dispatch => ({
    doLogin: formProps => {
        dispatch(login(formProps));
    },
    handleLogout: (history) => {
        history.push("/");
        dispatch(logout());
    }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginHandler));
