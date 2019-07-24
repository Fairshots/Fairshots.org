import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
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

                Auth0.client.userInfo(authResult.accessToken, (err2, profile) => {
                    if (err2) console.log(err2);
                    if (profile) {
                        // Get the user’s nickname and profile image
                        console.log(profile);
                        const userInfo = {
                            Name: profile.name,
                            Email: profile.email,
                            ProfilePic: profile.picture
                        };
                        props.doSocial(userInfo, authResult.accessToken);
                    }
                });
            }),
        []
    );
    if (props.forward_signup) return <Redirect to="/register#photographer" />;

    return <div />;
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    notification: state.auth.notification,
    forward_signup: state.auth.prefilled_signup
});

const mapDispatchToProps = dispatch => ({
    doSocial: (userInfo, token) => {
        dispatch(social(userInfo, token));
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
