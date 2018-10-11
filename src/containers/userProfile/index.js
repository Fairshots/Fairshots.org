import React, { Component } from "react";
import { connect } from "react-redux";
import { } from "reactstrap";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../actions/profile";

import "./userProfile.scss";

/**
 *
 */
class UserProfile extends Component {
    componentDidMount() {
        const { match, token, getUserProfile } = this.props;
        getUserProfile(match.params.userType, match.params.userId, token);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                     One of two columns
                    </div>
                    <div className="col-sm-8">
                     One of two columns
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-4">
                     One of two columns
                    </div>
                    <div className="col-sm-8">
                     One of two columns
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userProfile: state.userProfile,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    getUserProfile: (userType, id, token) => dispatch(getProfile(userType, id, token))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
