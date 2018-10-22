import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import PhotographerForm from "../registerForm/photographerform";
import OrganizationForm from "../registerForm/organizationform";
import { renderField, validate } from "../registerForm/helper-functions";
import { update } from "../../actions/profile";


/**
 *
 */
class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { userType: window.location.href.match("photographer") ? "photographer" : "organization" };
    }


    render() {
        const {
            doUpdate, handleSubmit, token
        } = this.props;
        return (
            <div>
                {this.state.userType === "photographer"
                    ? <PhotographerForm handleSubmit={handleSubmit(doUpdate(this.state.userType, token))} renderField={renderField} />
                    : <OrganizationForm handleSubmit={handleSubmit(doUpdate(this.state.userType, token))} renderField={renderField} />
                }
            </div>

        );
    }
}
const mapStateToProps = state => ({
    initialValues: state.profile,
    token: state.auth.user.token
});
const mapDispatchToProps = dispatch => ({
    doUpdate: (userType, token) => formFilled => {
        console.log(formFilled);
        dispatch(update(userType, formFilled, token));
    },


});

export default reduxForm({
    form: "registerNewForm",
    validate
})(connect(mapStateToProps, mapDispatchToProps)(UpdateProfile));
