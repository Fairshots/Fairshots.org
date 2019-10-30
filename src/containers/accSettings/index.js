import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Col } from "reactstrap";
import ReusableModal from "../../components/UI/reusableModal";
import InactivateProfile from "./inactivate-profile";
import { toggleActivateProfile } from "../../actions";

const AccSettings = ({
    userProfile,
    token,
    doInactivateProfile,
    match: {
        params: { userType, userId }
    },
    history
}) => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        history.push(`${userType}/${userProfile.id}`);
    }, userProfile.accountInactive);

    return (
        <Container style={{ minHeight: "500px" }}>
            <Row className="justify-content-center">
                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                    <Button
                        color="secondary w-75 mb-2"
                        onClick={() => setModalShow(!modalShow)}
                        style={{ marginTop: "150px" }}
                    >
                        {userProfile.accountInactive ? "Reactivate" : "Inactivate"} Profile
                    </Button>
                </Col>
            </Row>
            <ReusableModal
                Component={() => (
                    <InactivateProfile
                        doInactivateProfile={() =>
                            doInactivateProfile(
                                userType,
                                userId,
                                token,
                                userProfile.accountInactive
                            )
                        }
                        toggleModal={() => setModalShow(!modalShow)}
                    />
                )}
                size="lg"
                show={modalShow}
                setShow={() => setModalShow(!modalShow)}
            />
        </Container>
    );
};

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token
});

const mapDispatchToProps = dispatch => ({
    doInactivateProfile: (userType, id, token, currentStatus) =>
        dispatch(toggleActivateProfile(userType, id, token, currentStatus))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccSettings);
