import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { withRouter } from "react-router-dom";
import { getProfile, uploadPhoto, delPhoto } from "../../actions";
import UpdateProfile from "./updateProfile";
import OrgProfile from "../../components/orgProfile";
import PhotogProfile from "../../components/photogProfile";
import DeletePhoto from "./deletephoto";
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
            getUserProfile(match.params.userType, match.params.userId, token).then(() => {
                if (this.props.userProfile.error) {
                    alert("please Login to continue");
                    setTimeout(this.props.history.push("/"), 5000);
                }
            });
        }
    }


    componentDidUpdate(prevProps) {
        if ((JSON.stringify(this.props.userProfile) !== JSON.stringify(prevProps.userProfile)) && prevProps.userProfile.id !== undefined) {
            this.toggleModal("UPLOAD_PROFILE");
        }
    }

    toggleModal(modalType, item = "") {
        this.setState(prevState => ({ modal: !prevState.modal, modalType, photoToDel: item }));
    }

    modalContent(type) {
        switch (type) {
        case "UPLOAD_PROFILE": {
            return <UpdateProfile />;
        }
        case "DEL_PHOTO": {
            return <DeletePhoto photoItem={this.state.photoToDel} doDelPhoto={this.props.doDelPhoto}
                toggleModal={this.toggleModal}/>;
        }
        default: return <UpdateProfile />;
        }
    }


    render() {
        const {
            match: { params: { userType, userId } }, token, userProfile, doUploadPhoto
        } = this.props;
        return (
            <div>
                { userType === "organization" ? <OrgProfile organization={userProfile} toggleModal={this.toggleModal} uploadPhoto={(url) => doUploadPhoto(userType, userId, token, url)} />
                    : <PhotogProfile photographer={userProfile} toggleModal={this.toggleModal} uploadPhoto={(url) => doUploadPhoto(userType, userId, token, url)} /> }

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
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    getUserProfile: (userType, id, token) => dispatch(getProfile(userType, id, token)),
    doUploadPhoto: (userType, id, token, url) => dispatch(uploadPhoto(userType, id, token, url)),
    doDelPhoto: (userType, id, token, photoItem) => dispatch(delPhoto((userType, id, token, photoItem)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
