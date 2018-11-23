import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { withRouter } from "react-router-dom";
import {
    getProfile, uploadPhoto, delPhoto, toggleActivateProfile
} from "../../actions";
import UpdateProfile from "./updateProfile";
import OrgProfile from "../../components/orgProfile";
import PhotogProfile from "../../components/photogProfile";
import DeletePhoto from "./deletephoto";
import InactivateProfile from "./inactivate-profile";
import "./userProfile.scss";

/**
 *
 */
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalType: "UPLOAD_PROFILE",
            photoToDel: ""
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        const {
            userProfile, match, token, getUserProfile
        } = this.props;
        if (!userProfile.Name) {
            getUserProfile(match.params.userType, match.params.userId, token)
                .then(() => {
                    if (this.props.userProfile.error) {
                        alert("please Login to continue");
                        setTimeout(this.props.history.push("/"), 5000);
                    }
                });
        }
    }


    componentDidUpdate(prevProps) {
        const prof = Object.assign({}, this.props.userProfile);
        const prevProf = Object.assign({}, prevProps.userProfile);
        prof.Photos = 0;
        prevProf.Photos = 0;

        if ((JSON.stringify(prof) !== JSON.stringify(prevProf))
        && prevProps.userProfile.id) {
            this.toggleModal("UPLOAD_PROFILE");
        }
    }

    toggleModal(modalType, item = "") {
        this.setState(prevState => ({ modal: !prevState.modal, modalType, photoToDel: item }));
    }

    modalContent(type) {
        const {
            match: { params: { userType, userId } }, userProfile: { accountInactive }, token, doDelPhoto, doInactivateProfile, clAPIKey, clAPISecret
        } = this.props;
        switch (type) {
        case "UPLOAD_PROFILE": {
            return <UpdateProfile />;
        }
        case "DEL_PHOTO": {
            return <DeletePhoto photoItem={this.state.photoToDel} doDelPhoto={doDelPhoto(userType, userId, token, clAPIKey, clAPISecret)}
                toggleModal={this.toggleModal}/>;
        }
        case "INACTIVATE_PROFILE": {
            console.log(`current status ${accountInactive}`);
            return <InactivateProfile doInactivateProfile={() => doInactivateProfile(userType, userId, token, accountInactive)} toggleModal={this.toggleModal}/>;
        }
        default: return undefined;
        }
    }


    render() {
        const {
            match: { params: { userType, userId } }, token, userProfile, doUploadPhoto
        } = this.props;
        return (
            <div>
                { userType === "organization" ? <OrgProfile organization={userProfile} toggleModal={this.toggleModal}
                    uploadPhoto={(url) => doUploadPhoto(userType, userId, token, url)} />
                    : <PhotogProfile photographer={userProfile} toggleModal={this.toggleModal}
                        uploadPhoto={(url) => doUploadPhoto(userType, userId, token, url)} /> }

                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalBody>
                        {this.modalContent(this.state.modalType)}
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userProfile: state.profile,
    token: state.auth.user.token,
    clAPIKey: state.auth.user.CL_apikey,
    clAPISecret: state.auth.user.CL_apisecret
});
const mapDispatchToProps = dispatch => ({
    getUserProfile: (userType, id, token) => dispatch(getProfile(userType, id, token)),
    doUploadPhoto: (userType, id, token, url) => dispatch(uploadPhoto(userType, id, token, url)),
    doDelPhoto: (userType, id, token, clAPIKey, clAPISecret) => photoItem => dispatch(delPhoto(userType, id, token, clAPIKey, clAPISecret, photoItem)),
    doInactivateProfile: (userType, id, token, currentStatus) => dispatch(toggleActivateProfile(userType, id, token, currentStatus))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
