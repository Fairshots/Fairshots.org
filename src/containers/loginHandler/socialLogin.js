import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { social, saveAuth0Token } from "../../actions";
import Auth0 from "./auth0-webauth";
import ForwardSignup from "./forward-signup";
import ReusableModal from "../../components/UI/reusableModal";

const SocialLogin = props => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(
        () =>
            Auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
                if (err) {
                    return console.log(err);
                }
                console.log(authResult);
                props.doSaveAuth0Token(authResult.accessToken);

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
    useEffect(
        () => {
            if (props.forward_signup) setModalShow(true);
        },
        [props.forward_signup]
    );

    return (
        <div style={{ height: "600px" }}>
            <ReusableModal
                Component={() => (
                    <ForwardSignup
                        redirect={userType => props.history.push(`/register#${userType}`)}
                    />
                )}
                size="lg"
                show={modalShow}
                setShow={() => setModalShow(!modalShow)}
            />
        </div>
    );
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
    doSaveAuth0Token: token => {
        dispatch(saveAuth0Token(token));
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
