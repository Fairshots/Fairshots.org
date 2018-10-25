import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../actions/profile";
import uploadPhoto from "../../actions/uploadPhoto";
import UpdateProfile from "./updateProfile";
import OrgProfile from "../../components/orgProfile";
import PhotogProfile from "../../components/photogProfile";
import "./userProfile.scss";

/**
 *
 */
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        const { match, token, getUserProfile } = this.props;
        getUserProfile(match.params.userType, match.params.userId, token).then(() => {
            if (this.props.userProfile.error) {
                alert("please Login to continue");
                setTimeout(this.props.history.push("/"), 5000);
            }
        });
    }

    toggleModal() {
        this.setState(prevState => ({ modal: !prevState.modal }));
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
                        <UpdateProfile />
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
    doUploadPhoto: (userType, id, token, url) => dispatch(uploadPhoto(userType, id, token, url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
