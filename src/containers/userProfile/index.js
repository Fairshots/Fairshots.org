import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { withRouter } from "react-router-dom";
import {
    getProfile,
    getOneFromAll,
    uploadPhoto,
    delPhoto,
    toggleActivateProfile,
    sendMessage
} from "../../actions";
import UpdateProfile from "./updateProfile";
import OrgProfile from "../../components/orgProfile";
import PhotogProfile from "../../components/photogProfile";
import { MailForm } from "../../components/contact";
import DeletePhoto from "./deletephoto";
import InactivateProfile from "./inactivate-profile";
import "./userProfile.scss";

/**
 * This container component holds and handle information about user profile being it self profile
 * or third party, in this last case the profile must be injected into Redux "profile" state by
 * the component that calls the push to the route associated with that profile
 * @extends Component
 */
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalType: "UPDATE_PROFILE",
            photoToDel: "",
            thirdParty: false,
            profileToLoad: {}
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        const {
            userProfile,
            isAuthenticated,
            authId,
            match,
            token,
            getUserProfile,
            doGetOneFromAll
        } = this.props;
        // if url matches the authenticated user Id load self profile if not yet loaded into redux
        // state profile
        if (match.params.userId === authId) {
            getUserProfile(match.params.userType, match.params.userId, token).then(() => {
                if (userProfile.error) {
                    // if token is expired Alert user to login

                    setTimeout(() => {
                        alert("please Login to continue");
                        this.props.history.push("/");
                    }, 500);
                }
            });
            this.setState({ thirdParty: false });
        } else {
            this.setState({ thirdParty: true });
            if (isAuthenticated) {
                getUserProfile(match.params.userType, match.params.userId, token, true);
            } else {
                doGetOneFromAll(match.params.userType, match.params.userId);
            }
        }
        // else just get whatever profile is injected into state
    }

    componentWillUnmount() {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach(el => el.parentNode.removeChild(el));
    }

    componentDidUpdate(prevProps) {
        const { authId, match, token, getUserProfile } = this.props;
        const prof = Object.assign({}, this.props.userProfile);
        const prevProf = Object.assign({}, prevProps.userProfile);
        prof.Photos = 0;
        prevProf.Photos = 0;

        if (JSON.stringify(prof) !== JSON.stringify(prevProf) && prevProps.userProfile.id) {
            this.setState({ modal: false });
        }
        // tell the container to reload if user is not logged in but component is already mounted with profile of a third party user
        if (
            match.params.userId !== prevProps.match.params.userId &&
            match.params.userId === authId
        ) {
            getUserProfile(match.params.userType, match.params.userId, token);
            this.setState({ thirdParty: false });
        }
    }

    /**
     * Controls modal associated with self profile
     * @param {*} modalType
     * @param {*} item
     */
    toggleModal(modalType, item = "") {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalType,
            photoToDel: item
        }));
    }

    /**
     * Controls which type of content to load inside Modal asked to be open
     * @param {*} type
     */
    modalContent(type) {
        const {
            match: {
                params: { userType, userId }
            },
            userProfile: { accountInactive },
            token,
            authId,
            doDelPhoto,
            doInactivateProfile,
            messaging,
            doSendMessage
        } = this.props;
        switch (type) {
            case "UPDATE_PROFILE": {
                return <UpdateProfile />;
            }
            case "DEL_PHOTO": {
                return (
                    <DeletePhoto
                        photoItem={this.state.photoToDel}
                        doDelPhoto={doDelPhoto(userType, userId, token)}
                        toggleModal={this.toggleModal}
                    />
                );
            }
            case "INACTIVATE_PROFILE": {
                console.log(`current status ${accountInactive}`);
                return (
                    <InactivateProfile
                        doInactivateProfile={() =>
                            doInactivateProfile(userType, userId, token, accountInactive)
                        }
                        toggleModal={this.toggleModal}
                    />
                );
            }

            case "MAKE_CONTACT": {
                return (
                    <MailForm
                        sendMessage={(subject, message) =>
                            doSendMessage(authId, userId, token, subject, message)
                        }
                        messaging={messaging}
                    />
                );
            }

            default:
                return undefined;
        }
    }

    render() {
        const {
            match: {
                params: { userType, userId }
            },
            token,
            userProfile,
            doUploadPhoto,
            allOrgs,
            allPhotographers,
            isAuthenticated
        } = this.props;
        const { thirdParty } = this.state;
        return (
            <div>
                <div
                    className="feautured-h3"
                    style={{
                        width: "80%",
                        margin: "auto"
                    }}
                >
                    {userProfile.accountInactive &&
                        "Your account is currently inactive and is not being shown in community. Please reactivate to fully enjoy our platform"}
                </div>
                {userType === "organization" ? (
                    <OrgProfile
                        organization={thirdParty ? allOrgs[userId] : userProfile}
                        toggleModal={this.toggleModal}
                        uploadPhoto={url => doUploadPhoto(userType, userId, token, url)}
                        thirdParty={thirdParty}
                        history={this.props.history}
                        isAuthenticated={isAuthenticated}
                    />
                ) : (
                    <PhotogProfile
                        photographer={thirdParty ? allPhotographers[userId] : userProfile}
                        toggleModal={this.toggleModal}
                        uploadPhoto={url => doUploadPhoto(userType, userId, token, url)}
                        thirdParty={thirdParty}
                        isAuthenticated={isAuthenticated}
                    />
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalBody>{this.modalContent(this.state.modalType)}</ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token,
    isAuthenticated: state.auth.isAuthenticated,
    authId: state.auth.user.userId,
    allPhotographers: state.allPhotographers,
    allOrgs: state.allOrgs,
    messaging: state.messaging
});
const mapDispatchToProps = dispatch => ({
    getUserProfile: (userType, id, token, thirdParty) =>
        dispatch(getProfile(userType, id, token, thirdParty)),

    doGetOneFromAll: (userType, id) => dispatch(getOneFromAll(userType, id)),

    doUploadPhoto: (userType, id, token, url) => dispatch(uploadPhoto(userType, id, token, url)),

    doDelPhoto: (userType, id, token) => photoItem =>
        dispatch(delPhoto(userType, id, token, photoItem)),

    doInactivateProfile: (userType, id, token, currentStatus) =>
        dispatch(toggleActivateProfile(userType, id, token, currentStatus)),

    doSendMessage: (fromId, toId, token, subject, message) =>
        dispatch(sendMessage(fromId, toId, subject, message, token))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserProfile)
);
