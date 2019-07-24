import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { social } from "../../actions";
import Auth0 from "./auth0-webauth";

const SocialLogin = props => {
    useEffect(
        () =>
            Auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
                if (err) {
                    return console.log(err);
                }
                console.log(authResult);
                props.doSocial(authResult.accessToken);
            }),
        []
    );

    return <div />;
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    notification: state.auth.notification,
    userInfo: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    doSocial: token => {
        dispatch(social(token));
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
    )(SocialLogin)
);
