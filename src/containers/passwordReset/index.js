import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { resetPw } from "../../actions";

const PasswordReset = ({
    resetPassword,
    notification,
    tokenError,
    history,
    match: {
        params: { token }
    }
}) => {
    const [password, setPw] = useState("");
    const [retypePassword, setRetypePw] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(
        () => {
            setTimeout(() => setErrorMessage(""), 5000);
        },
        [errorMessage]
    );

    useEffect(
        () => {
            if (notification) setTimeout(() => history.push("/"), 5000);
        },
        [notification]
    );

    const handleSubmit = event => {
        event.preventDefault();

        if (password !== retypePassword) {
            setErrorMessage("passwords need to match");
            console.log(errorMessage);
        } else if (password.length < 8) {
            setErrorMessage("password must contain at least 8 characters");
        } else {
            resetPassword({ password, token });
        }
    };

    return (
        <MDBContainer>
            <MDBRow center>
                <MDBCol md="6">
                    <form onSubmit={handleSubmit}>
                        <p className="h4 text-center mt-4 mb-4">Set up your new password</p>
                        <br />
                        <input
                            type="password"
                            placeholder="new password"
                            id="newpassword"
                            className={`form-control ${errorMessage ? "is-invalid" : ""}`}
                            value={password}
                            onChange={event => {
                                event.preventDefault();
                                setPw(event.target.value);
                            }}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="retype new password"
                            id="retypepassword"
                            className={`form-control ${errorMessage ? "is-invalid" : ""}`}
                            value={retypePassword}
                            onChange={event => {
                                event.preventDefault();
                                setRetypePw(event.target.value);
                            }}
                        />
                        <div className="invalid-feedback">{errorMessage}</div>
                        <div className="text-center mt-4">
                            <div
                                className={notification ? "text-success" : "text-danger"}
                                style={{ minHeight: "30px" }}
                            >
                                {notification || tokenError}
                            </div>
                            <MDBBtn color="dark-green" type="submit">
                                Save change
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

const mapStateToProps = reduxState => ({
    notification: reduxState.auth.notification,
    tokenError: reduxState.auth.errorMessage
});

const mapDispatchToProps = dispatch => ({
    resetPassword: formProps => {
        dispatch(resetPw(formProps));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(PasswordReset)
);
