import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { withRouter } from "react-router-dom";
import { getProfile, uploadPhoto, delPhoto, toggleActivateProfile } from "../../actions";
import UpdateProfile from "./updateProfile";
import OrgProfile from "../../components/orgProfile";
import PhotogProfile from "../../components/photogProfile";
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
            modalType: "UPLOAD_PROFILE",
            photoToDel: "",
            thirdParty: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        const { userProfile, authId, match, token, getUserProfile } = this.props;
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
        } else this.setState({ thirdParty: true });
        // else just get whatever profile is injected into state
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
            doDelPhoto,
            doInactivateProfile
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
            doUploadPhoto
        } = this.props;
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
                        organization={userProfile}
                        toggleModal={this.toggleModal}
                        uploadPhoto={url => doUploadPhoto(userType, userId, token, url)}
                        thirdParty={this.state.thirdParty}
                        history={this.props.history}
                    />
                ) : (
                    <PhotogProfile
                        photographer={userProfile}
                        toggleModal={this.toggleModal}
                        uploadPhoto={url => doUploadPhoto(userType, userId, token, url)}
                        thirdParty={this.state.thirdParty}
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
    authId: state.auth.user.userId
});
const mapDispatchToProps = dispatch => ({
    getUserProfile: (userType, id, token) => dispatch(getProfile(userType, id, token)),

    doUploadPhoto: (userType, id, token, url) => dispatch(uploadPhoto(userType, id, token, url)),

    doDelPhoto: (userType, id, token) => photoItem =>
        dispatch(delPhoto(userType, id, token, photoItem)),

    doInactivateProfile: (userType, id, token, currentStatus) =>
        dispatch(toggleActivateProfile(userType, id, token, currentStatus))
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(UserProfile)
);
