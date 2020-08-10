import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { confirmEmail } from "../../actions";

const ConfirmEmail = ({
    notification,
    tokenError,
    history,
    match: {
        params: { token }
    },
    doConfirmEmail
}) => {
    useEffect(() => {
        doConfirmEmail(token);
    }, []);

    useEffect(
        () => {
            if (notification) setTimeout(() => history.push("/"), 10000);
        },
        [notification]
    );

    return (
        <Container style={{ minHeight: "600px" }}>
            <Row className="justify-content-center">
                <h2
                    className={notification ? "text-success" : "text-danger"}
                    style={{ minHeight: "30px" }}
                >
                    {notification || tokenError}
                </h2>
            </Row>
        </Container>
    );
};

const mapStateToProps = reduxState => ({
    notification: reduxState.auth.notification,
    tokenError: reduxState.auth.errorMessage
});

const mapDispatchToProps = dispatch => ({
    doConfirmEmail: formProps => {
        dispatch(confirmEmail(formProps));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ConfirmEmail)
);
